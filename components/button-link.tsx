import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "default" | "sm";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
};

const isExternal = (href: string) =>
  href.startsWith("http") ||
  href.startsWith("mailto:") ||
  href.startsWith("#");

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "default",
}: ButtonLinkProps) {
  const className = [
    "btn",
    variant === "primary" ? "btn-p" : "btn-s",
    size === "sm" ? "btn-sm" : null,
  ]
    .filter(Boolean)
    .join(" ");

  if (isExternal(href)) {
    const isHttp = href.startsWith("http");
    return (
      <a
        className={className}
        href={href}
        rel={isHttp ? "noopener noreferrer" : undefined}
        target={isHttp ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
