"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CARDS } from "@/data/cards";

const ANGLES = [-60, -36, -12, 12, 36, 60]; // ~120° spread for 6 cards
const OPEN_DELAY = 150; // ms before opening
const SPRING = { type: "spring", stiffness: 140, damping: 18, mass: 0.6 };

export default function Rolodex() {
    const router = useRouter();
    const prefersReduced = useReducedMotion();
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const wheelLock = useRef(0);

    useEffect(() => {
        const t = setTimeout(() => setOpen(true), OPEN_DELAY);
        return () => clearTimeout(t);
    }, []);

    // Keyboard controls (←/→, ESC)
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (prefersReduced) return;
            if (["ArrowLeft", "ArrowRight", "Escape"].includes(e.key)) e.preventDefault();
            if (e.key === "ArrowRight") setIndex(i => (i + 1) % CARDS.length);
            if (e.key === "ArrowLeft") setIndex(i => (i - 1 + CARDS.length) % CARDS.length);
            if (e.key === "Escape") setIndex(0);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [prefersReduced]);

    // Scroll to cycle (throttled)
    const onWheel = useCallback((e: React.WheelEvent) => {
        const now = Date.now();
        if (now - wheelLock.current < 300) return; // throttle
        wheelLock.current = now;
        if (e.deltaY > 0) setIndex(i => (i + 1) % CARDS.length);
        else if (e.deltaY < 0) setIndex(i => (i - 1 + CARDS.length) % CARDS.length);
    }, []);

    // Drag to cycle
    const dragEnd = useCallback((_: any, info: { offset: { x: number } }) => {
        const dx = info.offset.x;
        if (Math.abs(dx) < 40) return;
        if (dx < 0) setIndex(i => (i + 1) % CARDS.length);
        else setIndex(i => (i - 1 + CARDS.length) % CARDS.length);
    }, []);

    // Reduced-motion: simple list
    if (prefersReduced) {
        return (
            <main className="min-h-dvh flex items-center justify-center px-6">
                <div role="list" aria-label="DW-L Worlds" className="max-w-3xl w-full space-y-4">
                    {CARDS.map((c) => (
                        <button
                            key={c.id}
                            role="listitem"
                            onClick={() => router.push(c.url)}
                            className="w-full border border-black/10 dark:border-white/10 rounded-xl p-5 
                         bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 
                         transition-colors text-left"
                        >
                            <div className="text-xl font-semibold">{c.title}</div>
                            <div className="text-black/70 dark:text-white/70">{c.tagline}</div>
                        </button>
                    ))}
                </div>
            </main>
        );
    }

    // Precompute card targets
    const targets = useMemo(() => {
        // center origin fan: rotate around bottom center; fan spreads and slight x offset
        return CARDS.map((_, i) => {
            const angle = ANGLES[i % ANGLES.length];
            const x = angle * 5;        // lateral spread
            const y = -Math.abs(angle) * 0.2 - 10; // subtle vertical lift
            return { angle, x, y };
        });
    }, []);

    return (
        <main className="min-h-dvh overflow-hidden" onWheel={onWheel}>
            <motion.div
                className="relative h-[100dvh] w-full select-none touch-pan-x"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={dragEnd}
            >
                {/* Center anchor */}
                <div className="absolute inset-0 grid place-items-center">
                    <div
                        role="listbox"
                        aria-label="DW-L Rolodex"
                        aria-activedescendant={CARDS[index].id}
                        tabIndex={0}
                        className="relative w-[min(90vw,800px)] h-[min(64vh,520px)]"
                    >
                        <AnimatePresence initial={false}>
                            {CARDS.map((card, i) => {
                                const t = targets[i];
                                const isActive = i === index;
                                const base = {
                                    rotate: open ? t.angle : 0,
                                    x: open ? t.x : 0,
                                    y: open ? t.y : 0,
                                    scale: isActive ? 1.02 : 0.96,
                                };

                                return (
                                    <motion.button
                                        id={card.id}
                                        key={card.id}
                                        role="option"
                                        aria-selected={isActive}
                                        initial={{ rotate: 0, x: 0, y: 0, scale: 0.96, opacity: 0 }}
                                        animate={{ ...base, opacity: 1 }}
                                        transition={SPRING}
                                        whileHover={{ scale: isActive ? 1.04 : 0.98 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            if (isActive) {
                                                router.push(card.url);
                                            } else {
                                                setIndex(i);
                                            }
                                        }}
                                        className="absolute left-1/2 bottom-6 -translate-x-1/2 origin-bottom 
                               border border-white/20 dark:border-white/10
                               rounded-2xl bg-black/40 dark:bg-black/60 backdrop-blur-md p-6 
                               w-[min(88vw,560px)] shadow-card
                               focus-visible:ring-2 ring-white/80 cursor-pointer transition-colors"
                                        style={{
                                            zIndex: 1000 - Math.abs(i - index),
                                        }}
                                    >
                                        <div className="text-2xl md:text-3xl font-semibold tracking-tight text-white">{card.title}</div>
                                        <div className="mt-1 text-white/70">{card.tagline}</div>
                                        {isActive && (
                                            <div className="mt-3 text-sm text-white/50">Click to explore →</div>
                                        )}
                                    </motion.button>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Subtle footer hint */}
                <div className="absolute bottom-6 w-full text-center text-xs text-black/50 dark:text-white/50">
                    Scroll, drag, or ←/→ • ESC resets
                </div>
            </motion.div>
        </main>
    );
}

