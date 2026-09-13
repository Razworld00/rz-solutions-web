"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  X, 
  Send, 
  Settings, 
  Bot, 
  User, 
  Loader2, 
  Sparkles 
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ModelOption = {
  id: string;
  label: string;
};

const MODELS: ModelOption[] = [
  { id: "minimax-m3:cloud", label: "Minimax M3 (Cloud)" },
  { id: "gemma4:cloud", label: "Gemma 4 (Cloud)" },
  { id: "nemotron-3-super:cloud", label: "Nemotron 3 Super (Cloud)" },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedModel, setSelectedModel] = useState(MODELS[0].id);
  const [showSettings, setShowSettings] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg.content,
          model: selectedModel,
          history: messages.map(m => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) throw new Error("Chat failed");

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No reader");

      let assistantMsg = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = new TextDecoder().decode(value);
        assistantMsg += chunk;
        
        setMessages((prev) => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1].content = assistantMsg;
          return newMsgs;
        });
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev, 
        { role: "assistant", content: "Sorry, I'm having trouble connecting to the cloud models right now." }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-background shadow-xl transition-colors hover:bg-accent/90"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="flex h-[600px] w-[400px] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-accent/10 px-4 py-3 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-background">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Raz AI</h3>
                  <p className="text-[10px] text-muted flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    Raznet Solutions Assistant
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 rounded-full hover:bg-border transition-colors text-muted hover:text-foreground"
                >
                  <Settings size={18} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-border transition-colors text-muted hover:text-foreground"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Settings Dropdown */}
            <AnimatePresence>
              {showSettings && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-4 top-14 z-10 w-64 rounded-xl border border-border bg-surface p-3 shadow-xl"
                >
                  <p className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted">Selected Model</p>
                  <div className="mt-2 space-y-1">
                    {MODELS.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => {
                          setSelectedModel(m.id);
                          setShowSettings(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                          selectedModel === m.id ? "bg-accent/20 text-accent" : "hover:bg-border text-foreground"
                        }`}
                      >
                        {m.label}
                        {selectedModel === m.id && <Sparkles size={14} />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
            >
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
                  <div className="p-3 rounded-full bg-accent/10 text-accent">
                    <Bot size={32} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Hello! I'm Raz.</h4>
                    <p className="text-xs text-muted max-w-[240px]">
                      Ask me about Raznet Solutions, RazCode, or any of your agentic coding needs.
                    </p>
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                      m.role === "user" ? "bg-border text-foreground" : "bg-accent/10 text-accent"
                    }`}>
                      {m.role === "user" ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      m.role === "user" 
                        ? "bg-accent text-background rounded-tr-none" 
                        : "bg-surface border border-border text-foreground rounded-tl-none"
                    }`}>
                      {m.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-accent/10 text-accent">
                      <Bot size={16} />
                    </div>
                    <div className="p-3 rounded-2xl border border-border bg-surface text-foreground text-sm leading-relaxed shadow-sm rounded-tl-none flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin text-accent" />
                      <span className="text-muted italic animate-pulse">Raz is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-surface">
              <div className="relative flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask Raz anything..."
                  className="flex-1 rounded-xl border border-border bg-black/20 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-muted"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-background transition-colors hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
