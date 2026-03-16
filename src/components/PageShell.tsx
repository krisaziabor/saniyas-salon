"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState, useEffect, createContext } from "react";

const HAS_ENTERED_KEY = "saniyas-salon-has-entered";

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD (Home first load) — cinematic / theatrical
 *
 *    0ms     eye vector fades in (opacity 0 → 0.18)
 *  ~1800ms   title SVG fades in (opacity 0 → 1)
 *  ~2800ms   title SVG moves down to footer position
 *  ~4400ms   overlay exits; main, nav, footer stagger in
 * ───────────────────────────────────────────────────────── */
const TIMING = {
  eyeDuration: 1500,
  eyeDelay: 0,
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

const navLinks = [
  { href: "/", label: "Home", highlightPath: "/" },
  { href: "/cast", label: "Meet The Cast", highlightPath: "/cast" },
  { href: "/crew", label: "Meet The Crew", highlightPath: "/crew" },
  { href: "/notes", label: "Playwright & Director Notes", highlightPath: "/notes" },
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
  const [hasEntered, setHasEntered] = useState<boolean | null>(() => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem(HAS_ENTERED_KEY) === "true";
  });
  const [svgAnimationComplete, setSvgAnimationComplete] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname !== "/") {
      sessionStorage.setItem(HAS_ENTERED_KEY, "true");
      queueMicrotask(() => setHasEntered(true));
    }
  }, [pathname]);

  const handleSvgAnimationComplete = () => {
    setSvgAnimationComplete(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(HAS_ENTERED_KEY, "true");
    }
  };

  const isHomeFirstLoad = pathname === "/" && hasEntered === false;
  const showOverlay =
    pathname === "/" && (hasEntered === null || hasEntered === false) && !svgAnimationComplete;
  const showContent =
    pathname !== "/" ||
    hasEntered === true ||
    (pathname === "/" && hasEntered === false && svgAnimationComplete);

  const isEntrance = pathname === "/" && showContent && isHomeFirstLoad;
  const contentStaggerMs = reducedMotion ? 0 : TIMING.contentStagger;
  const contentDurationSec = reducedMotion ? 0 : TIMING.contentDuration / 1000;
  const eyeDurationSec = reducedMotion ? 0 : TIMING.eyeDuration / 1000;
  const eyeDelaySec = reducedMotion ? 0 : TIMING.eyeDelay / 1000;
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
      <div
        className="min-h-screen relative"
        style={{ backgroundColor: "#5B200B" }}
      >
        {/* Eye: appears first (home only), then title and content */}
        {pathname === "/" && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            aria-hidden
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 0.18 }}
            transition={{
              duration: eyeDurationSec,
              delay: eyeDelaySec,
              ease: EASE_OUT,
            }}
          >
            <Image
              src="/svgs/Frame%2018.svg"
              alt=""
              width={502}
              height={340}
              className="w-[min(100vw,100vh)] h-auto"
            />
          </motion.div>
        )}
        <div className="relative z-10 min-h-screen flex flex-col">
          <AnimatePresence>
            {showOverlay && (
              <motion.div
                className="fixed inset-0 z-20 flex items-center justify-center px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: overlayExitSec, ease: EASE_OUT }}
              >
                <motion.div
                  className="w-full max-w-full origin-center"
                  style={{ width: "100%" }}
                  initial={{ opacity: reducedMotion ? 1 : 0, y: 0 }}
                  animate={{
                    opacity: 1,
                    y: hasEntered === false ? "calc(50vh - 4rem)" : 0,
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
                    hasEntered === false ? handleSvgAnimationComplete : undefined
                  }
                >
                  <Image
                    src="/titlesvg.svg"
                    alt="Saniya's Salon"
                    width={1319}
                    height={120}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showContent && (
              <>
                <motion.div
                  className="flex flex-col flex-1"
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
                  <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                    {children}
                  </main>
                </motion.div>

                <motion.nav
                  className="px-4 sm:px-6 lg:px-8 py-6"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: contentDurationSec,
                    delay: isHomeFirstLoad ? contentStaggerMs * 1 / 1000 : 0,
                    ease: EASE_OUT,
                  }}
                >
                  <ul
                    className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 text-[#EEB363] uppercase"
                    style={{ fontFamily: "var(--font-diatype)" }}
                  >
                    {navLinks.map(({ href, label, highlightPath }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="hover:opacity-70 transition-opacity"
                          style={
                            pathname === highlightPath
                              ? { color: "rgba(238, 179, 99, 0.5)" }
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
                  className="px-4 sm:px-6 lg:px-8 pb-8"
                  initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: contentDurationSec,
                    delay: isHomeFirstLoad ? contentStaggerMs * 2 / 1000 : 0,
                    ease: EASE_OUT,
                  }}
                >
                  <div className="w-full max-w-full">
                    <Image
                      src="/titlesvg.svg"
                      alt="Saniya's Salon"
                      width={1319}
                      height={120}
                      className="w-full h-auto"
                      priority
                    />
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
