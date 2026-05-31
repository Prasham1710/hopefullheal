"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, ChevronDown } from "lucide-react";
import { getBotResponse } from "@/lib/chatbot-engine";

type Message = { role: "user" | "assistant"; content: string };

export function AIAssistant({ section }: { section?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! 👋 I'm your Hopeful Heals AI assistant. Ask me about cancer types, symptoms, treatments, medications, or how to book a consultation. How can I help you?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const title = section ? `Cancer AI · ${section}` : "Cancer AI Assistant";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate a short thinking delay for natural feel
    const delay = 400 + Math.random() * 600;
    setTimeout(() => {
      const reply = getBotResponse(text);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
      setIsTyping(false);
    }, delay);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickSuggestions = [
    "What is chemotherapy?",
    "Lung cancer symptoms",
    "Book a doctor",
    "Cancer prevention tips",
  ];

  /* ── Collapsed button ── */
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open AI assistant"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#00416a] hover:bg-[#003255] shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
      >
        <Bot className="w-6 h-6 text-white" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
      </button>
    );
  }

  /* ── Open chat window ── */
  return (
    <div className="fixed bottom-5 right-5 z-50 w-80 sm:w-96 flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-[#e4e5e6] max-h-[90vh]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00416a] to-[#003255] px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-white text-sm font-bold leading-tight">{title}</p>
            <p className="text-[#b1c0ca] text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Online · No API required
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white/60 hover:text-white hover:bg-white/10 rounded-lg p-1 transition-colors"
          aria-label="Close"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 h-80 overflow-y-auto bg-[#f0f4f8] px-4 py-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div className="w-7 h-7 rounded-full bg-[#00416a] flex items-center justify-center shrink-0 mr-2 mt-1">
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
            )}
            <div
              className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-[#00416a] text-white rounded-tr-sm"
                  : "bg-white text-[#243a50] rounded-tl-sm shadow-sm border border-[#e4e5e6]"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="w-7 h-7 rounded-full bg-[#00416a] flex items-center justify-center shrink-0 mr-2 mt-1">
              <Bot className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-[#e4e5e6] flex items-center gap-1">
              <span className="w-2 h-2 bg-[#688ca2] rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-2 h-2 bg-[#688ca2] rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-2 h-2 bg-[#688ca2] rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Quick suggestions (only shown at start) */}
      {messages.length === 1 && (
        <div className="bg-[#f0f4f8] px-4 pb-3 flex flex-wrap gap-1.5 shrink-0">
          {quickSuggestions.map((s) => (
            <button
              key={s}
              onClick={() => {
                setInput(s);
                setTimeout(() => inputRef.current?.focus(), 50);
              }}
              className="text-xs bg-white border border-[#e4e5e6] text-[#00416a] font-medium px-2.5 py-1.5 rounded-full hover:border-[#00416a] hover:bg-[#00416a]/5 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input bar */}
      <div className="bg-white border-t border-[#e4e5e6] px-3 py-3 flex items-center gap-2 shrink-0">
        <input
          ref={inputRef}
          type="text"
          placeholder="Ask about cancer, treatments…"
          className="flex-1 text-sm text-[#243a50] placeholder-[#688ca2] bg-[#f0f4f8] rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00416a]/30 transition-all"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isTyping}
        />
        <button
          onClick={handleSend}
          disabled={isTyping || !input.trim()}
          aria-label="Send"
          className="w-9 h-9 rounded-xl bg-[#00416a] hover:bg-[#003255] disabled:bg-[#688ca2] disabled:cursor-not-allowed flex items-center justify-center transition-colors shrink-0"
        >
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
