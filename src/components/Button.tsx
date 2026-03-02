import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 text-center";
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:-translate-y-0.5",
    secondary:
      "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-0.5",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
