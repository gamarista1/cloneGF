import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type TabItem = { key: string; label: string; content: ReactNode };

export function Tabs({
  items,
  variant = "light",
}: {
  items: TabItem[];
  variant?: "light" | "lavender";
}) {
  const [active, setActive] = useState(items[0]?.key);
  const current = items.find((i) => i.key === active) ?? items[0];

  const inactiveCls =
    variant === "lavender"
      ? "bg-white text-[var(--surface-dark-1)] hover:bg-[#272561] hover:text-white"
      : "bg-[var(--surface-lavender)] text-[var(--surface-dark-1)] hover:bg-[#272561] hover:text-white";

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {items.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-full px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 ${
              active === t.key ? "bg-[var(--brand)] text-white shadow-lg shadow-[var(--brand)]/20" : inactiveCls
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.key}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {current.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
