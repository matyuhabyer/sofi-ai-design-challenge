"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";

const panelMotion =
  "motion-safe:origin-bottom-right motion-safe:transition-[opacity,transform] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.34,1.25,0.64,1)] motion-reduce:transition-opacity motion-reduce:duration-150";

const msgMotion =
  "motion-safe:[animation:gia-msg-in_0.42s_cubic-bezier(0.16,1,0.3,1)_both] motion-reduce:animate-none";

function ChatFabIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 8C14.06 8 6 14.95 6 23.5c0 3.58 1.48 6.84 3.96 9.28L6 40l10.35-4.96c2.33.64 4.8.98 7.35.98 9.94 0 18-6.95 18-15.5S33.94 8 24 8Z"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="23" r="2.25" fill="currentColor" />
      <circle cx="24" cy="23" r="2.25" fill="currentColor" />
      <circle cx="31" cy="23" r="2.25" fill="currentColor" />
    </svg>
  );
}

type Role = "assistant" | "user";

type ChatMessage = {
  id: string;
  role: Role;
  content: string;
};

const SAMPLE_THREAD: ChatMessage[] = [
  {
    id: "s1",
    role: "assistant",
    content:
      "Hey — I'm GIA, your Generative Influencer Analyst. Ask me anything about how I read your TikTok profile and what goes into a sample report.",
  },
  {
    id: "s2",
    role: "assistant",
    content:
      "Tip: paste a public profile link on this page when you're ready to run a real analysis. Right now I'm just demo UI with sample replies.",
  },
];

const DEMO_REPLY =
  "That's a great question! In the full product I'd pull from your actual posts and engagement. For this demo, imagine I'd highlight your top hooks, audience sentiment, and three concrete ideas for your next batch of videos.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(SAMPLE_THREAD);
  const [draft, setDraft] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, open, scrollToBottom]);

  function send() {
    const text = draft.trim();
    if (!text) return;
    const userId = `u-${Date.now()}`;
    setDraft("");
    setMessages((prev) => [...prev, { id: userId, role: "user", content: text }]);
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `a-${Date.now()}`, role: "assistant", content: DEMO_REPLY },
      ]);
    }, 600);
  }

  return (
    <div className="pointer-events-none fixed bottom-0 right-0 z-50 flex max-w-[100vw] flex-col items-end gap-3 p-3 sm:p-6">
      <div
        id="gia-chat-panel"
        className={`pointer-events-auto flex max-h-[min(28rem,calc(100dvh-8rem))] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-brand-navy/10 bg-white shadow-2xl shadow-brand-navy/15 ${panelMotion} ${
          open
            ? "translate-y-0 scale-100 opacity-100 motion-reduce:translate-y-0"
            : "pointer-events-none translate-y-4 scale-[0.94] opacity-0 motion-reduce:translate-y-0 motion-reduce:scale-100"
        }`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gia-chat-title"
      >
        <header className="flex items-center gap-3 border-b border-brand-navy/10 bg-surface-tint/80 px-4 py-3">
          <Image
            src="/gia-illustration.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full border-2 border-white object-cover shadow-sm"
          />
          <div className="min-w-0 flex-1">
            <p id="gia-chat-title" className="truncate font-semibold text-brand-navy">
              GIA
            </p>
            <p className="truncate text-xs text-brand-navy/60">
              Generative Influencer Analyst
              <span className="text-xs text-brand-navy/60"> (demo)</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-brand-navy/50 transition-colors hover:bg-brand-navy/5 hover:text-brand-navy motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:rotate-90"
            aria-label="Close chat"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>

        <div
          ref={listRef}
          className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-3"
          role="log"
          aria-live="polite"
          aria-relevant="additions"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              style={
                {
                  "--gia-msg-x": m.role === "user" ? "12px" : "-12px",
                } as CSSProperties
              }
              className={`flex gap-2 ${msgMotion} ${m.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {m.role === "assistant" ? (
                <Image
                  src="/gia-illustration.png"
                  alt=""
                  width={32}
                  height={32}
                  className="mt-0.5 h-8 w-8 shrink-0 rounded-full border border-white object-cover shadow-sm"
                />
              ) : (
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy/10 text-xs font-semibold text-brand-navy">
                  You
                </span>
              )}
              <div
                className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:scale-[1.01] ${
                  m.role === "user"
                    ? "rounded-bl-md bg-gradient-to-br from-brand-cyan to-brand-cyan-bright text-white"
                    : "rounded-br-md bg-brand-navy/[0.06] text-brand-navy"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
        </div>

        <footer className="border-t border-brand-navy/10 p-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Message Gia…"
              className="min-w-0 flex-1 rounded-xl border border-brand-navy/15 bg-white px-3 py-2.5 text-sm text-brand-navy placeholder-brand-navy/40 transition-[border-color,box-shadow] duration-200 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/25"
              aria-label="Message input"
            />
            <button
              type="button"
              onClick={send}
              className="motion-safe:active:animate-[gia-send-pop_0.35s_ease-out] shrink-0 rounded-xl bg-brand-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-navy/90"
            >
              Send
            </button>
          </div>
        </footer>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`pointer-events-auto flex h-[4.75rem] w-[4.75rem] items-center justify-center overflow-hidden rounded-full border-[5px] border-white bg-gradient-to-br from-brand-cyan to-brand-cyan-bright text-white shadow-2xl shadow-brand-navy/30 ring-[3px] ring-brand-cyan/55 ring-offset-2 ring-offset-background transition-[transform,box-shadow,filter] duration-200 hover:scale-[1.06] hover:shadow-[0_12px_40px_-8px_rgba(32,23,71,0.35),0_0_0_4px_rgba(45,198,242,0.2)] hover:ring-brand-cyan-bright/70 focus:outline-none focus-visible:ring-[4px] focus-visible:ring-brand-cyan motion-safe:active:scale-[0.98] ${!open ? "motion-safe:animate-[gia-fab-float_3s_ease-in-out_infinite]" : ""}`}
        aria-expanded={open}
        aria-controls="gia-chat-panel"
        aria-label={open ? "Close chat with Gia" : "Open chat with Gia"}
      >
        <ChatFabIcon className="h-11 w-11 shrink-0 drop-shadow-[0_1px_2px_rgba(32,23,71,0.25)]" />
      </button>
    </div>
  );
}
