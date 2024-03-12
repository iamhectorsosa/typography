import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";

const blockquoteVariants = cva(
  [
    "-tracking-wide text-base",
    "border-border border-l-[6px] pl-4",
    "before:content-[open-quote] after:content-[close-quote] before:font-serif after:font-serif",
    "[&_em]:italic [&_em]:font-serif [&_strong]:font-bold",
  ],
  {
    variants: {
      variant: {
        primary: "border-primary/90",
        subtle: "border-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BlockquoteProps
  extends React.HTMLAttributes<HTMLQuoteElement>,
    VariantProps<typeof blockquoteVariants> {
  asChild?: boolean;
}

const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "blockquote";
    return (
      <Comp
        className={cn(blockquoteVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Blockquote.displayName = "Blockquote";

export { Blockquote };

const codeVariants = cva(
  [
    "-tracking-wide font-mono rounded-lg px-1.5 py-0.5 text-[0.9em] whitespace-nowrap w-fit",
    "relative bottom-[0.1em]",
    "[&_em]:nont-italic [&_em]:font-sans [&_strong]:font-normal",
  ],
  {
    variants: {
      variant: {
        solid: "bg-primary/90 text-primary-foreground",
        soft: "bg-primary/10 text-primary",
        ghost:
          "text-primary/90 font-medium before:content-['`'] after:content-['`']",
      },
    },
    defaultVariants: {
      variant: "soft",
    },
  }
);

export interface CodeProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof codeVariants> {
  asChild?: boolean;
}

const Code = React.forwardRef<HTMLElement, CodeProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "code";
    return (
      <Comp
        className={cn(codeVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Code.displayName = "Code";

export { Code };

const headingVariants = cva(
  [
    "font-bold scroll-m-20 tracking-tight text-balance",
    "[&_em]:italic [&_em]:font-serif [&_strong]:font-bold",
  ],
  {
    variants: {
      as: {
        h6: "text-xl",
        h5: "text-2xl",
        h4: "text-3xl",
        h3: "text-4xl",
        h2: "text-5xl",
        h1: "text-6xl",
      },
    },
    defaultVariants: {
      as: "h1",
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Omit<VariantProps<typeof headingVariants>, "as"> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as = "h1", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : as;
    return (
      <Comp
        className={cn(headingVariants({ as, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

export { Heading };

const kbdVariants = cva(
  [
    "rounded-lg px-1.5 py-0.5 text-[0.85em] font-medium whitespace-nowrap -tracking-widest w-fit",
    "relative bottom-[0.1em] drop-shadow border-border mx-1 [word-spacing:-0.2em] align-text-top",
    "[&_em]:nont-italic [&_em]:font-sans [&_strong]:font-medium",
  ],
  {
    variants: {
      variant: {
        default: "bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface KbdProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof kbdVariants> {
  asChild?: boolean;
}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "kbd";
    return (
      <Comp
        className={cn(kbdVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Kbd.displayName = "Kbd";

export { Kbd };

const linkVariants = cva(
  [
    "-tracking-wide underline transition-colors duration-300 underline-offset-4 decoration-transparent whitespace-nowrap w-fit",
    "[&_em]:italic [&_em]:font-serif [&_strong]:font-bold",
  ],
  {
    variants: {
      variant: {
        primary: "text-primary hover:decoration-primary",
        subtle:
          "text-foreground decoration-foreground hover:text-muted-foreground hover:decoration-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface LinkProps
  extends React.PropsWithChildren<NextLinkProps>,
    VariantProps<typeof linkVariants> {
  className?: string;
  asChild?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : NextLink;
    return (
      <Comp
        href={href}
        className={cn(linkVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Link.displayName = "Link";

export { Link };

const textVariants = cva(
  [
    "-tracking-wide text-base",
    "[&_em]:italic [&_em]:font-serif [&_strong]:font-bold",
  ],
  {
    variants: {
      variant: {
        small: "text-sm font-medium leading-none",
        lead: "text-lg text-muted-foreground",
        large: "text-lg font-semibold",
        muted: "text-sm text-muted-foreground",
      },
    },
  }
);

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span";
  asChild?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, as = "p", variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : as;
    return (
      <Comp
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export { Text };
