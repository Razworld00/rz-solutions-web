"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#product", label: "Product" },
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2 font-mono text-sm tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-accent/15 text-accent font-bold">
            RZ
          </span>
          <span className="text-foreground">
            Raznet<span className="text-muted">.</span>Solutions
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-background transition hover:bg-accent/90"
          >
            Talk to us
          </a>
        </nav>

        <button
          className="md:hidden text-muted"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-4 py-2 text-center text-sm font-medium text-background"
            >
              Talk to us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
