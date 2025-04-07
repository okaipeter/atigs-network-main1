import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof HTMLElementTagNameMap;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Component = "section", ...props }, ref) => {
    const Comp = Component as any;
    return (
      <Comp
        ref={ref}
        className={cn("py-24 sm:py-32", className)}
        {...props}
      />
    );
  }
);

Section.displayName = "Section"; 