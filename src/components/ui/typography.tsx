import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "large" | "small" | "base";
  as?: keyof JSX.IntrinsicElements;
}

const variantStyles = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 text-3xl font-semibold tracking-tight",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  large: "text-lg font-semibold",
  base: "leading-7",
  small: "text-sm font-medium leading-none",
};

const variantElements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  large: "p",
  base: "p",
  small: "p",
} as const;

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "base", as, ...props }, ref) => {
    const Component = as || variantElements[variant];
    return (
      <Component
        ref={ref}
        className={cn(variantStyles[variant], className)}
        {...props}
      />
    );
  }
);

Typography.displayName = "Typography"; 