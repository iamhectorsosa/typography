# Typography

A demo of Typographic components using [ui.shadcn](https://ui.shadcn.com/) theming and [utopia.fyi](https://utopia.fyi/) fluid typography.

This project contains components for:

- Blockquote
- Code
- Heading
- Kbd
- Link
- Text

## How to use

1. Create your [fluid type scales](https://utopia.fyi/) and add them to your `globals.css`

```css
@layer base {
  /* @link https://utopia.fyi/type/calculator?c=320,18,1.125,1280,20,1.2,10,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */

  :root {
    --step--2: clamp(0.8681rem, 0.8958rem + -0.0347vi, 0.8889rem);
    --step--1: clamp(1rem, 0.9861rem + 0.0694vi, 1.0417rem);
    --step-0: clamp(1.125rem, 1.0833rem + 0.2083vi, 1.25rem);
    --step-1: clamp(1.2656rem, 1.1875rem + 0.3906vi, 1.5rem);
    --step-2: clamp(1.4238rem, 1.2984rem + 0.627vi, 1.8rem);
    --step-3: clamp(1.6018rem, 1.4157rem + 0.9303vi, 2.16rem);
    --step-4: clamp(1.802rem, 1.5387rem + 1.3166vi, 2.592rem);
    --step-5: clamp(2.0273rem, 1.6662rem + 1.8052vi, 3.1104rem);
    --step-6: clamp(2.2807rem, 1.7968rem + 2.4196vi, 3.7325rem);
    --step-7: clamp(2.5658rem, 1.9281rem + 3.1887vi, 4.479rem);
    --step-8: clamp(2.8865rem, 2.0571rem + 4.1471vi, 5.3748rem);
    --step-9: clamp(3.2473rem, 2.1799rem + 5.3373vi, 6.4497rem);
    --step-10: clamp(3.6532rem, 2.2911rem + 6.8107vi, 7.7397rem);
  }
}
```

2. Update your `tailwind.config.ts` to use the variables

```ts
import type { Config } from "tailwindcss";

const config = {
  theme: {
    fontSize: {
      xs: ["var(--step--2)", "1.8"],
      sm: ["var(--step--1)", "1.8"],
      base: ["var(--step-0)", "1.8"],
      lg: ["var(--step-1)", "1.4"],
      xl: ["var(--step-2)", "1.4"],
      ["2xl"]: ["var(--step-3)", "1.1"],
      ["3xl"]: ["var(--step-4)", "1.1"],
      ["4xl"]: ["var(--step-5)", "1.1"],
      ["5xl"]: ["var(--step-6)", "1.1"],
      ["6xl"]: ["var(--step-7)", "1.1"],
      ["7xl"]: ["var(--step-8)", "1"],
      ["8xl"]: ["var(--step-9)", "1"],
      ["9xl"]: ["var(--step-10)", "1"],
    },
    //...
```

3. Make sure to have the `typography.tsx` component in `components/ui`

<details>
<summary>Code snippet</summary>

```tsx
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
```

</details>

4. You are ready to import and use them

```tsx
import {
  Blockquote,
  Code,
  Heading,
  Kbd,
  Link,
  Text,
} from "@/components/ui/typography";
```
