import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { META_PIXEL_ID } from "@/lib/metaPixel";

const GRAPH_URL = `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events`;
const ALLOWED_EVENTS = new Set([
  "PageView",
  "ViewContent",
  "Lead",
  "Contact",
  "Phone Number Bottom",
  "Quote Request",
]);

function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function hashed(value: unknown, normalize: (v: string) => string) {
  if (typeof value !== "string") return undefined;
  const clean = normalize(value);
  return clean ? [sha256(clean)] : undefined;
}

const lower = (v: string) => v.trim().toLowerCase();
const digits = (v: string) => {
  const d = v.replace(/\D/g, "");
  // Assume US numbers when no country code was typed.
  return d.length === 10 ? `1${d}` : d;
};

function str(value: unknown, max = 500) {
  return typeof value === "string" && value ? value.slice(0, max) : undefined;
}

export async function POST(req: NextRequest) {
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  // Not configured (e.g. local dev): the browser pixel still fires.
  if (!token) return new NextResponse(null, { status: 204 });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }

  const eventName = str(body.eventName, 40);
  const eventId = str(body.eventId, 100);
  if (!eventName || !ALLOWED_EVENTS.has(eventName) || !eventId) {
    return NextResponse.json({ error: "bad event" }, { status: 400 });
  }

  const user = (body.userData ?? {}) as Record<string, unknown>;
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  const customData: Record<string, string | number> = {};
  if (body.customData && typeof body.customData === "object") {
    for (const [k, v] of Object.entries(body.customData as object).slice(0, 10)) {
      if (typeof v === "string") customData[k.slice(0, 40)] = v.slice(0, 200);
      else if (typeof v === "number" && Number.isFinite(v)) customData[k.slice(0, 40)] = v;
    }
  }

  const event = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: "website",
    event_source_url: str(body.eventSourceUrl, 1000),
    user_data: {
      client_ip_address: ip,
      client_user_agent: req.headers.get("user-agent") ?? undefined,
      fbp: str(body.fbp, 200),
      fbc: str(body.fbc, 500),
      em: hashed(user.email, lower),
      ph: hashed(user.phone, digits),
      fn: hashed(user.firstName, lower),
      ln: hashed(user.lastName, lower),
    },
    custom_data: Object.keys(customData).length ? customData : undefined,
  };

  try {
    const res = await fetch(`${GRAPH_URL}?access_token=${encodeURIComponent(token)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: [event] }),
    });
    if (!res.ok) {
      console.error("Meta CAPI error", res.status, await res.text());
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } catch (err) {
    console.error("Meta CAPI request failed", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
