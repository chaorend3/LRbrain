import type { MDXComponents } from "mdx/types";

const shared = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1
      className="mb-6 text-4xl font-semibold tracking-tight text-ink md:text-5xl"
      {...props}
    />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="mb-4 mt-12 text-2xl font-semibold tracking-tight text-ink md:text-3xl"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="mb-3 mt-8 text-xl font-semibold tracking-tight text-ink"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mb-5 leading-8 text-neutral-700" {...props} />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="font-medium underline decoration-neutral-300 underline-offset-4 hover:decoration-ink"
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mb-6 list-disc space-y-2 pl-5 text-neutral-700" {...props} />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code
      className="rounded bg-mist px-1.5 py-0.5 font-mono text-[0.95em] text-ink"
      {...props}
    />
  ),
  pre: (props: React.ComponentProps<"pre">) => (
    <pre
      className="mb-6 overflow-x-auto rounded-2xl border border-line bg-white p-5 font-mono text-sm shadow-soft"
      {...props}
    />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...shared,
    ...components,
  };
}
