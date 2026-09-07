"use client";

import { useRef, useState, useEffect, useCallback } from "react";

interface IndexItem {
  href: string;
  label: string;
  value: string;
  highlight?: boolean | "emerald";
}

const INDEX_ITEMS: IndexItem[] = [
  {
    href: "#identity",
    label: "01 / IDENTITY",
    value: "Engineering Center of Gravity",
  },
  {
    href: "#capabilities",
    label: "02 / CAPABILITIES",
    value: "7 Engineering Capabilities",
  },
  {
    href: "#foundations",
    label: "03 / FOUNDATIONS",
    value: "Postgres, APIs & Architecture",
  },
  {
    href: "#oakley",
    label: "04 / FLAGSHIP",
    value: "Oakley Cameras Platform",
    highlight: true,
  },
  {
    href: "#objectid",
    label: "05 / FLAGSHIP",
    value: "ObjectID Scanner & RLS",
    highlight: true,
  },
  {
    href: "#awihf",
    label: "06 / CASE STUDY",
    value: "AWIHF Healthcare Platform",
  },
  {
    href: "#additional-systems",
    label: "07 / SYSTEMS",
    value: "3 Production Architectures",
  },
  {
    href: "#decisions",
    label: "08 / DECISIONS",
    value: "5 Architecture Decision Records",
  },
  {
    href: "#reliability",
    label: "09 / RELIABILITY",
    value: "6 Defensive Engineering Pillars",
  },
  {
    href: "#github-activity",
    label: "10 / GITHUB ACTIVITY",
    value: "Verified Contribution Graph",
    highlight: "emerald",
  },
  {
    href: "#repositories",
    label: "11 / REPOSITORIES",
    value: "Inspected Public Codebases",
  },
];

export function EngineeringIndexScroller() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  const checkScrollability = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    checkScrollability();
    el.addEventListener("scroll", checkScrollability, { passive: true });
    window.addEventListener("resize", checkScrollability);

    // Mouse wheel horizontal translation for desktop mouse wheel
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // If user is scrolling vertically over this horizontal strip, scroll it horizontally
        const atStart = el.scrollLeft <= 0;
        const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
        
        // Only prevent vertical scroll if there is room to scroll horizontally in the scroll direction
        if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
          e.preventDefault();
          el.scrollBy({ left: e.deltaY * 1.5, behavior: "auto" });
        }
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
      el.removeEventListener("wheel", handleWheel);
    };
  }, [checkScrollability]);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = direction === "left" ? -320 : 320;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  // Drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeftPos(el.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 4) {
      setHasMoved(true);
    }
    el.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (hasMoved) {
      // Prevent navigation if the user was dragging
      e.preventDefault();
      return;
    }
    // Allow smooth anchor scroll
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <section
      aria-label="Technical Index Navigation"
      className="relative z-20 -mt-6 sm:-mt-8 mb-8 sm:mb-12 select-none"
    >
      <div className="section-container">
        <div className="rounded-[1.2rem] bg-[#1b1b1b] p-2 sm:p-2.5 shadow-[0_22px_60px_rgba(0,0,0,0.45)] border border-white/10">
          {/* Header Controls / Scroll hints */}
          <div className="flex items-center justify-between px-2.5 py-1 mb-1 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
              <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-white/50">
                Index Navigation <span className="text-white/30 hidden sm:inline">· 11 Stages (Scroll or Drag)</span>
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll index left"
                className={`p-1.5 rounded-lg border text-xs transition-all ${
                  canScrollLeft
                    ? "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-yellow-400/50 cursor-pointer"
                    : "border-white/5 bg-white/[0.02] text-white/20 cursor-not-allowed"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                disabled={!canScrollRight}
                aria-label="Scroll index right"
                className={`p-1.5 rounded-lg border text-xs transition-all ${
                  canScrollRight
                    ? "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-yellow-400/50 cursor-pointer"
                    : "border-white/5 bg-white/[0.02] text-white/20 cursor-not-allowed"
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontally Scrollable Cards Strip */}
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex items-stretch gap-2 overflow-x-auto scrollbar-none py-1 px-0.5 touch-pan-x ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              WebkitOverflowScrolling: "touch",
              scrollSnapType: isDragging ? "none" : "x proximity",
            }}
          >
            {INDEX_ITEMS.map((item) => {
              const isHighlight = item.highlight === true;
              const isEmerald = item.highlight === "emerald";

              let cardClasses =
                "bg-[#101010] border-white/5 hover:border-yellow-300/40 hover:bg-[#151515]";
              let kickerClasses = "text-yellow-200";
              let titleClasses = "text-white group-hover:text-yellow-200";

              if (isHighlight) {
                cardClasses =
                  "bg-[#13120d] border-yellow-400/25 hover:border-yellow-400/50 hover:bg-[#191710]";
                kickerClasses = "text-yellow-300";
                titleClasses = "text-yellow-100 group-hover:text-yellow-300";
              } else if (isEmerald) {
                cardClasses =
                  "bg-[#0c1410] border-emerald-400/25 hover:border-emerald-400/50 hover:bg-[#101b15]";
                kickerClasses = "text-emerald-300";
                titleClasses = "text-emerald-100 group-hover:text-emerald-300";
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`group flex flex-col justify-between flex-shrink-0 min-w-[210px] sm:min-w-[240px] rounded-[0.95rem] px-4 py-3.5 border transition-all ${cardClasses}`}
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className={`text-[0.67rem] font-black uppercase tracking-[0.14em] ${kickerClasses}`}>
                      {item.label}
                    </p>
                    <span className="text-xs text-white/30 group-hover:text-yellow-300 group-hover:translate-x-0.5 transition-all">
                      →
                    </span>
                  </div>
                  <p className={`mt-2 text-sm font-black leading-5 transition-colors ${titleClasses}`}>
                    {item.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
