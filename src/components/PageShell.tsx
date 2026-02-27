"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HAS_ENTERED_KEY = "saniyas-salon-has-entered";

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
  // Read from sessionStorage on client so we know before first paint (avoids flash when navigating to home, and shows overlay on true first load)
  const [hasEntered, setHasEntered] = useState<boolean | null>(() => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem(HAS_ENTERED_KEY) === "true";
  });
  const [svgAnimationComplete, setSvgAnimationComplete] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // When on a non-home page, mark as entered so home won't show entrance animation later
    if (pathname !== "/") {
      sessionStorage.setItem(HAS_ENTERED_KEY, "true");
      setHasEntered(true);
    }
  }, [pathname]);

  const handleSvgAnimationComplete = () => {
    setSvgAnimationComplete(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(HAS_ENTERED_KEY, "true");
    }
  };

  const isHomeFirstLoad = pathname === "/" && hasEntered === false;
  // Show overlay on first home load: when no key (false) or not yet read (null, only on SSR/hydration).
  // Client-side nav to home gets hasEntered = true from useState initializer, so no flash.
  const showOverlay =
    pathname === "/" && (hasEntered === null || hasEntered === false) && !svgAnimationComplete;
  const showContent =
    pathname !== "/" ||
    hasEntered === true ||
    (pathname === "/" && hasEntered === false && svgAnimationComplete);

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url(/background.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen flex flex-col">
        {/* First-load overlay: SVG starts centered, animates to bottom */}
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="fixed inset-0 z-20 flex items-center justify-center px-4 sm:px-6 lg:px-8"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-full max-w-full origin-center"
                style={{ width: "100%" }}
                initial={{ y: 0 }}
                animate={{
                  y: hasEntered === false ? "calc(50vh - 4rem)" : 0,
                }}
                transition={{
                  delay: 2.5,
                  duration: 1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                onAnimationComplete={hasEntered === false ? handleSvgAnimationComplete : undefined}
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

        {/* Main content + nav (fade in); title SVG always visible */}
        <AnimatePresence>
          {showContent && (
            <>
              <motion.div
                className="flex flex-col flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: isHomeFirstLoad ? 1 : 0 }}
              >
                <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                  {children}
                </main>

                <nav className="px-4 sm:px-6 lg:px-8 py-6">
                  <ul
                    className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 text-[#FFE4C0] uppercase"
                    style={{ fontFamily: "var(--font-diatype)" }}
                  >
                    {navLinks.map(({ href, label, highlightPath }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          className="hover:opacity-70 transition-opacity"
                          style={
                            pathname === highlightPath
                              ? { color: "#EEB363" }
                              : undefined
                          }
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </motion.div>

              <div className="px-4 sm:px-6 lg:px-8 pb-8">
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
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
