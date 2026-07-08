import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function Button({
  variant = "primary",
  external = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      className={cn(variant === "primary" ? "btn-primary" : "btn-secondary", className)}
      {...externalProps}
      {...props}
    >
      {children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
