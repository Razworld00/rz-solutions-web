import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, model, history } = await req.json();

    const systemPrompt = `You are Raz from Raznet Solutions, a helpful assistant for everything involving Raznet Solutions Company and all coding and agentic needs.
    
Knowledge Base:
- Raznet Solutions: A company focused on local-first AI agents and shipping real software.
- RazCode: A terminal-native AI coding agent that runs on open models (Ollama). Features include CLI + dashboard, tool-assisted execution (file I/O, shell, web search, WhatsApp), and multi-provider support.
- RazCode Build: An agentic software engineering environment with real-time browser verification, parallel sub-agent orchestration, and deep codebase memory.
- Philosophy: Local-first design, terminal-native workflows, and unrestricted capabilities when needed (Turbo mode).
- Core Products: RazCode, RazCode Build, and full-stack enterprise products.

Always be professional, technical yet accessible, and helpful. If you don't know something, be honest but offer to help find the answer.`;

    const response = await fetch("http://localhost:11434/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: systemPrompt },
          ...history,
          { role: "user", content: message },
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama error: ${response.statusText}`);
    }

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = new TextDecoder().decode(value);
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const json = JSON.parse(line);
              if (json.message?.content) {
                controller.enqueue(json.message.content);
              }
              if (json.done) {
                controller.close();
              }
            } catch (e) {
              console.error("Error parsing JSON chunk", e);
            }
          }
        }
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
