"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Cpu,
  Shield,
  Zap,
  Code2,
  Layers,
  Globe,
  ArrowRight,
  GitBranch,
  Mail,
} from "lucide-react";
import Nav from "@/components/Nav";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

const products = [
  {
    icon: Terminal,
    title: "RazCode",
    desc: "Terminal-native AI coding agent. Runs with Ollama and open models. Tools, turbo mode, operation feed, local-first by design.",
    tags: ["CLI", "Ollama", "Agents"],
  },
  {
    icon: Cpu,
    title: "Agent infrastructure",
    desc: "Workflow engines, tool runners, approval gates, observability, and multi-provider LLM layers that power production agents.",
    tags: ["Tools", "Workflows"],
  },
  {
    icon: Layers,
    title: "Full-stack products",
    desc: "Casting platforms, booking systems, storefronts, dashboards, scrapers, and custom software shipped for real operators.",
    tags: ["Web", "MVPs"],
  },
];

const work = [
  {
    name: "RazCode",
    year: "2025–26",
    blurb: "Local-first coding agent with rich terminal UI, live activity, turbo profiles, and Ollama / cloud model support.",
  },
  {
    name: "Casting MVP",
    year: "2025",
    blurb: "End-to-end casting workflow — talent, casting directors, submissions, and production tooling.",
  },
  {
    name: "Booking & commerce",
    year: "2024–25",
    blurb: "Appointment systems, computer store, and barbershop experiences built for day-to-day operators.",
  },
  {
    name: "SmartScraper & ops",
    year: "2025",
    blurb: "Data extraction, WhatsApp automation, observability, and internal dashboards for faster delivery.",
  },
  {
    name: "Security & landing systems",
    year: "2024–25",
    blurb: "Cybersecurity-focused sites and high-conversion landing surfaces for product launches.",
  },
  {
    name: "Project management",
    year: "2025",
    blurb: "Lightweight project and collaboration tools tailored to small teams shipping software.",
  },
];

const principles = [
  {
    icon: Shield,
    title: "Local-first",
    text: "Prefer models and tools that run on your machine. Cloud when useful, never mandatory.",
  },
  {
    icon: Zap,
    title: "Unrestricted when you need it",
    text: "Turbo modes, full shell, network, and escalation — with clear controls when you want guardrails.",
  },
  {
    icon: Code2,
    title: "Terminal-native",
    text: "Serious work happens in the terminal. Our UI, agents, and workflows respect that reality.",
  },
  {
    icon: Globe,
    title: "Ship real software",
    text: "Agents are not demos. We also design, build, and maintain the products operators use every day.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <section className="relative min-h-[100svh] overflow-hidden bg-radial bg-grid pt-14">
        <div className="mx-auto flex max-w-6xl flex-col justify-center px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-accent"
          >
            Raznet Solutions · 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            Local-first AI agents
            <br />
            <span className="text-muted">and software that ships.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            We build RazCode — a terminal coding agent that runs on open models —
            and the full-stack products, tools, and infrastructure around it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#product"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent/90"
            >
              Explore RazCode
              <ArrowRight size={16} />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-muted"
            >
              Selected work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 max-w-2xl overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-black/40"
          >
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-[11px] text-muted">raz@raznet ~ razcode</span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed text-muted sm:text-[13px]">
              <span className="text-accent">$</span> razcode{"\n"}
              <span className="text-success">RZ&lt;&gt;CODE</span>  Terminal Coding Agent{"\n"}
              Model   <span className="text-foreground">gpt-oss:120b-cloud</span>
              {"\n"}Provider <span className="text-foreground">ollama</span>
              {"\n"}
              <span className="text-muted">›</span> /turbo on{"\n"}
              <span className="text-accent">Turbo mode enabled · full-auto · unrestricted</span>
            </pre>
          </motion.div>
        </div>
      </section>

      <section id="product" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Product</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              What we build
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              From the agent that lives in your terminal to the applications and systems
              that run real businesses.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/40"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <p.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-border bg-surface-2/40 py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">History</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              A sample of products and systems shipped under the Raznet Solutions banner.
            </p>
          </motion.div>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {work.map((w, i) => (
              <motion.div
                key={w.name}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="grid gap-2 py-6 sm:grid-cols-[140px_1fr_2fr] sm:items-baseline sm:gap-8"
              >
                <span className="font-mono text-xs text-muted">{w.year}</span>
                <h3 className="text-base font-semibold text-foreground">{w.name}</h3>
                <p className="text-sm text-muted">{w.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div {...fadeUp}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Approach</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              How we work
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {principles.map((pr, i) => (
              <motion.div
                key={pr.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex gap-4"
              >
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-accent">
                  <pr.icon size={18} />
                </div>
                <div>
                  <h3 className="font-semibold">{pr.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{pr.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-border bg-radial px-8 py-14 text-center sm:px-16"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Next step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Build with Raznet
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Whether you need a coding agent in your terminal, an internal tool,
              or a full product — we design and ship it.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:bathie28@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent/90"
              >
                <Mail size={16} />
                bathie28@gmail.com
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-muted"
              >
                <GitBranch size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
          <p className="font-mono text-xs text-muted">
            © 2026 Raznet Solutions. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted">
            RazCode· Local-first by design
          </p>
        </div>
      </footer>
    </>
  );
}
