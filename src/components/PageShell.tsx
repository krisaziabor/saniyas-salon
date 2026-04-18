"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect, createContext } from "react";
import { sessionStorageEnterKey, siteTitleDisplay } from "@/config/site";
import AorGradientBackground from "@/components/AorGradientBackground";

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD (Home first load) — cinematic / theatrical
 *
 *  ~1800ms   title fades in (opacity 0 → 1)
 *  ~2800ms   title moves down to footer position
 *  ~4400ms   overlay exits; main, nav, footer stagger in
 * ───────────────────────────────────────────────────────── */
const TIMING = {
  titleAppearDelay: 1800,
  titleMoveDelay: 2800,
  titleMoveDuration: 1600,
  contentStagger: 500,
  contentDuration: 700,
  overlayExitDuration: 800,
} as const;

/** ease-out for entrances (responsive, settles in) */
const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;

export const HomeEntranceContext = createContext<{
  contentStagger: number;
  contentDuration: number;
  isEntrance: boolean;
  isHome: boolean;
  reducedMotion: boolean;
}>({
  contentStagger: 100,
  contentDuration: 0.25,
  isEntrance: false,
  isHome: false,
  reducedMotion: false,
});

function AnimatedTitle({ id, className }: { id?: string; className?: string }) {
  return (
    <h1
      id={id}
      className={`font-display text-aor-title w-full max-w-[min(100%,56rem)] text-left font-normal leading-[0.95] tracking-tight ${className ?? ""}`}
      style={{
        fontSize: "clamp(1.48rem, 5.45vw, 3.5rem)",
      }}
    >
      <span className="inline-block">{siteTitleDisplay.beforeOf}</span>
      <span className="inline-block w-[0.15em]" aria-hidden />
      <span className="italic inline-block px-[0.04em]">{siteTitleDisplay.of}</span>
      <span className="inline-block w-[0.18em]" aria-hidden />
      <span className="inline-block">{siteTitleDisplay.afterOf}</span>
    </h1>
  );
}

const navLinks = [
  { href: "/", label: "Home", highlightPath: "/" },
  { href: "/cast", label: "Meet The Cast", highlightPath: "/cast" },
  { href: "/crew", label: "Meet The Crew", highlightPath: "/crew" },
  { href: "/notes", label: "Director's Note", highlightPath: "/notes" },
  { href: "/thanks", label: "Special Thanks", highlightPath: "/thanks" },
] as const;

export default function PageShell({
  children,
  pathname,
}: {
  children: React.ReactNode;
  pathname: string;
}) {
  const reducedMotion = useReducedMotion() ?? false;
  /** `null` until client mount so SSR + first client paint match (avoids hydration mismatch). */
  const [hasEntered, setHasEntered] = useState<boolean | null>(null);
  const [entranceAnimationComplete, setEntranceAnimationComplete] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      sessionStorage.setItem(sessionStorageEnterKey, "true");
      setHasEntered(true);
      return;
    }
    setHasEntered(sessionStorage.getItem(sessionStorageEnterKey) === "true");
  }, [pathname]);

  const handleEntranceAnimationComplete = () => {
    setEntranceAnimationComplete(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(sessionStorageEnterKey, "true");
    }
  };

  const isHomeFirstLoad = pathname === "/" && hasEntered === false;
  const showOverlay =
    pathname === "/" && hasEntered === false && !entranceAnimationComplete;
  const showContent =
    pathname !== "/" ||
    hasEntered === true ||
    (pathname === "/" && hasEntered === false && entranceAnimationComplete);

  const isEntrance = pathname === "/" && showContent && isHomeFirstLoad;
  const contentStaggerMs = reducedMotion ? 0 : TIMING.contentStagger;
  const contentDurationSec = reducedMotion ? 0 : TIMING.contentDuration / 1000;
  const titleAppearDelaySec = reducedMotion ? 0 : TIMING.titleAppearDelay / 1000;
  const titleMoveDelaySec = reducedMotion ? 0 : TIMING.titleMoveDelay / 1000;
  const titleMoveDurationSec = reducedMotion ? 0 : TIMING.titleMoveDuration / 1000;
  const overlayExitSec = reducedMotion ? 0 : TIMING.overlayExitDuration / 1000;

  const entranceContext = {
    contentStagger: contentStaggerMs,
    contentDuration: contentDurationSec,
    isEntrance,
    isHome: pathname === "/",
    reducedMotion: !!reducedMotion,
  };

  return (
    <HomeEntranceContext.Provider value={entranceContext}>
      {/* min-h uses dvh (not min-h-screen/100vh): iOS Safari’s 100vh is often taller than the
          visible viewport when the bottom toolbar is shown, which pushes nav under the chrome. */}
      <div className="aor-site-bg min-h-[100dvh] relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden
        >
          <AorGradientBackground />
          {/* Strong frosted layer: blurs the gradient beneath (backdrop), not the UI above z-10 */}
          <div className="absolute inset-0 backdrop-blur-[56px] sm:backdrop-blur-[80px] md:backdrop-blur-[100px]" />
        </div>
        <div className="relative z-10 min-h-[100dvh] flex flex-col">
          <AnimatePresence>
            {showOverlay && (
              <motion.div
                className="fixed inset-0 z-20 flex items-center justify-start px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: overlayExitSec, ease: EASE_OUT }}
              >
                <motion.div
                  className="w-full max-w-full origin-center flex justify-start"
                  style={{ width: "100%" }}
                  initial={{ opacity: reducedMotion ? 1 : 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    y: hasEntered === false ? "calc(50dvh - 4rem)" : 0,
                  }}
                  transition={{
                    opacity: {
                      duration: reducedMotion ? 0 : 0.2,
                      delay: titleAppearDelaySec,
                      ease: EASE_OUT,
                    },
                    y: {
                      delay: titleMoveDelaySec,
                      duration: titleMoveDurationSec,
                      ease: EASE_OUT,
                    },
                  }}
                  onAnimationComplete={
                    hasEntered === false ? handleEntranceAnimationComplete : undefined
                  }
                >
                  <AnimatedTitle id="site-title-overlay" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showContent && (
              <>
                <motion.div
                  className="flex flex-col flex-1 min-h-0"
                  initial={
                    pathname === "/"
                      ? false
                      : reducedMotion
                        ? false
                        : { opacity: 0, y: 12 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: pathname === "/" ? 0 : contentDurationSec,
                    delay: pathname === "/" ? 0 : isHomeFirstLoad ? contentStaggerMs * 0 / 1000 : 0,
                    ease: EASE_OUT,
                  }}
                >
                  {/*
                    Mobile: main is only as tall as content so nav + title sit higher and stay
                    reachable without scrolling past empty flex space. md+: grow to keep nav low.
                  */}
                  <main className="flex-none md:flex-1 px-4 sm:px-6 lg:px-8 pt-3 pb-4 sm:pt-6 sm:pb-6 lg:py-10">
                    {children}
                  </main>
                </motion.div>

                <motion.nav
                  className="px-4 sm:px-6 lg:px-8 pt-2 pb-3 sm:py-6"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: contentDurationSec,
                    delay: isHomeFirstLoad ? contentStaggerMs * 1 / 1000 : 0,
                    ease: EASE_OUT,
                  }}
                >
                  <ul className="font-name text-aor-title flex flex-wrap gap-3 sm:gap-5 lg:gap-6 text-[0.8125rem] uppercase">
                    {navLinks.map(({ href, label, highlightPath }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="hover:opacity-70 transition-opacity"
                          style={
                            pathname === highlightPath
                              ? { color: "var(--aor-title-muted)" }
                              : undefined
                          }
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.nav>

                <motion.div
                  className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-8"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: contentDurationSec,
                    delay: isHomeFirstLoad ? contentStaggerMs * 2 / 1000 : 0,
                    ease: EASE_OUT,
                  }}
                >
                  <div className="w-full max-w-full flex justify-start">
                    <AnimatedTitle id="site-title-footer" />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </HomeEntranceContext.Provider>
  );
}
