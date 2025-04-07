import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = "div", ...props }, ref) => {
    const Comp = Component as any;
    return (
      <Comp
        ref={ref}
        className={cn("mx-auto w-full max-w-7xl px-6 lg:px-8", className)}
        {...props}
      />
    );
  }
);

Container.displayName = "Container"; 