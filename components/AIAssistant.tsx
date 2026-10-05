"use client";
import { useState } from "react";
import { brand } from "@/lib/data";

type Msg = { role: "bot" | "user"; text: string };

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: `Kinetic Form chat — ask about shoes, stacks, or code ${brand.offer.code}.` },
  ]);
  const [input, setInput] = useState("");

  function ask(q: string) {
    if (!q.trim()) return;
    const hit =
      brand.ai.find(([a]) => q.toLowerCase().includes(a.toLowerCase().slice(0, 12))) ||
      brand.ai.find(([a]) =>
        a.toLowerCase().split(" ").some((w) => w.length > 4 && q.toLowerCase().includes(w))
      );
    const answer = hit
      ? hit[1]
      : `Browse ${brand.categories.join(", ")} or use ${brand.offer.code} at checkout.`;
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "bot", text: answer }]);
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-20 right-4 z-50 hidden border border-lab-cyan bg-lab-surface px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-lab-cyan shadow-lg md:bottom-5 md:block"
      >
        {open ? "Close" : "Form chat"}
      </button>
      {open && (
        <div className="fixed bottom-16 right-4 z-50 flex h-[400px] w-[min(92vw,360px)] flex-col border border-lab-border bg-lab-surface shadow-2xl md:bottom-14">
          <div className="border-b border-lab-border px-4 py-3">
            <p className="font-mono text-xs uppercase tracking-widest text-lab-lime">24/7 Form chat</p>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto px-3 py-3 text-sm">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-6 border border-lab-lime/30 bg-lab-lime/10 px-3 py-2"
                    : "mr-4 border border-lab-border bg-lab-bg px-3 py-2 text-lab-muted"
                }
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1 border-t border-lab-border p-2">
            {brand.ai.slice(0, 3).map(([q]) => (
              <button
                key={q}
                type="button"
                className="border border-lab-border px-2 py-1 font-mono text-[9px] uppercase text-lab-muted hover:border-lab-cyan"
                onClick={() => ask(q)}
              >
                {q.slice(0, 28)}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2 border-t border-lab-border p-2"
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
          >
            <input className="input-lab !py-2" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask…" />
            <button className="btn-lime !px-3 !py-2" type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
