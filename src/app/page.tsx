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
    icon: Code2,
    title: "RazCode Build",
    desc: "A powerful IDE-like environment for agentic software engineering. Features real-time browser verification, parallel sub-agent orchestration, and deep codebase memory.",
    tags: ["Build", "IDE", "Automation"],
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
    name: "RazCode Build",
    year: "2026",
    category: "AI Tooling",
    blurb: "Agentic Build TUI with real-time browser QA, parallel tasking, and automated software engineering workflows.",
    link: "https://github.com/Razworld00/razcode-build",
    codeSnippet: "function orchestrateSubagents(tasks) {\\n  return parallel(tasks.map(t => spawn_subagent(t)));\\n}",
  },
  {
    name: "RazCode",
    year: "2025–26",
    category: "AI Agents",
    blurb: "Local-first coding agent with rich terminal UI, live activity, turbo profiles, and Ollama / cloud model support.",
    link: "https://github.com/Razworld00/RazCoder-Website",
    codeSnippet: "const agent = new RazCodeAgent({ model: 'ollama/llama3', turbo: true });",
  },
  {
    name: "LTS Construction",
    year: "2025",
    category: "Enterprise Web",
    blurb: "Official corporate presence and project management surfaces for a leading construction firm.",
    link: "https://github.com/Razworld00/-LTS-Construction-Official-Website",
    codeSnippet: "export const ProjectGrid = () => <div className='grid grid-cols-3 gap-4'>...</div>",
  },
  {
    name: "Trauma Rehab Centre",
    year: "2025",
    category: "Healthcare",
    blurb: "Specialized web presence for rehabilitation services, focusing on accessibility and patient care.",
    link: "https://github.com/Razworld00/Trauma-Rehabilitation-Centre",
    codeSnippet: "const AccessibilityConfig = { ariaLive: 'polite', contrast: 'high' };",
  },
  {
    name: "Paigos Barbershop",
    year: "2024–25",
    category: "Local Business",
    blurb: "Modern booking and commerce experience built for day-to-day grooming operators.",
    link: "https://github.com/Razworld00/Paigos-Barbershop",
    codeSnippet: "async function bookAppointment(slot) { await db.appointments.create({ slot }); }",
  },
  {
    name: "Zulu Sons Enterprise",
    year: "2024–25",
    category: "Business Ops",
    blurb: "Corporate identity and digital infrastructure for enterprise-level business operations.",
    link: "https://github.com/Razworld00/Zulu-Sons-Enterprise",
    codeSnippet: "const EnterpriseCore = () => <InfrastructureLayer provider='AWS' />,",
  },
  {
    name: "SmartScraper & ops",
    year: "2025",
    category: "Automation",
    blurb: "Data extraction, WhatsApp automation, observability, and internal dashboards for faster delivery.",
    link: "#",
    codeSnippet: "const scrape = async (url) => { return await firecrawl.scrape(url); }",
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((w, i) => (
              <motion.div
                key={w.name}
                {...fadeUp}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent">{w.category}</span>
                  <span className="font-mono text-[10px] text-muted">{w.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {w.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {w.blurb}
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="rounded-lg bg-black/50 p-3 font-mono text-[10px] leading-relaxed text-muted border border-border/50">
                    <div className="flex items-center gap-2 mb-2 opacity-50">
                      <div className="h-2 w-2 rounded-full bg-red-500/60" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500/60" />
                      <div className="h-2 w-2 rounded-full bg-green-500/60" />
                      <span className="ml-1 text-[9px] uppercase tracking-tighter">code_snippet.ts</span>
                    </div>
                    <code className="block whitespace-pre-wrap break-all text-accent/80">{w.codeSnippet}</code>
                  </div>
                  <a
                    href={w.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
                  >
                    View Repository <ArrowRight size={12} />
                  </a>
                </div>
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
            <div className="mt-8 flex items-center justify-center gap-4">
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
