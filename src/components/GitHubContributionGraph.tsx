"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

export type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type GitHubContributionsData = {
  total: {
    lastYear: number;
    [year: string]: number;
  };
  contributions: ContributionDay[];
};

export function GitHubContributionGraph() {
  const [data, setData] = useState<GitHubContributionsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchContributions() {
      try {
        const res = await fetch("/api/github-contributions");
        if (res.ok) {
          const json = await res.json();
          if (isMounted && json && Array.isArray(json.contributions) && json.contributions.length > 0) {
            setData(json);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to load contributions:", err);
      }

      // Direct fallback to public API if internal route fails
      try {
        const resDirect = await fetch("https://github-contributions-api.jogruber.de/v4/Hussein-dev256?y=last");
        if (resDirect.ok) {
          const jsonDirect = await resDirect.json();
          if (isMounted && jsonDirect) {
            setData(jsonDirect);
            setLoading(false);
            return;
          }
        }
      } catch {
        // Fallback placeholder
      }

      if (isMounted) {
        setLoading(false);
      }
    }

    fetchContributions();
    return () => {
      isMounted = false;
    };
  }, []);

  // Group contributions into 52/53 weeks
  const { weeks, monthLabels, totalCount } = useMemo(() => {
    if (!data?.contributions || data.contributions.length === 0) {
      return { weeks: [], monthLabels: [], totalCount: 140 };
    }

    const days = data.contributions;
    const computedWeeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    // GitHub's first day of week alignment
    days.forEach((day, index) => {
      const dayOfWeek = new Date(day.date + "T00:00:00Z").getUTCDay(); // 0 is Sunday
      if (dayOfWeek === 0 && currentWeek.length > 0) {
        computedWeeks.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push(day);
      if (index === days.length - 1 && currentWeek.length > 0) {
        computedWeeks.push(currentWeek);
      }
    });

    // Compute month label positions
    const months: { label: string; weekIndex: number }[] = [];
    let lastMonth = -1;
    computedWeeks.forEach((week, wIndex) => {
      if (week.length > 0) {
        const firstDayOfWeek = new Date(week[0].date + "T00:00:00Z");
        const month = firstDayOfWeek.getUTCMonth();
        if (month !== lastMonth) {
          months.push({
            label: firstDayOfWeek.toLocaleString("en-US", { month: "short", timeZone: "UTC" }),
            weekIndex: wIndex,
          });
          lastMonth = month;
        }
      }
    });

    return {
      weeks: computedWeeks,
      monthLabels: months,
      totalCount: data.total?.lastYear || 140,
    };
  }, [data]);

  // Color mapping matching site's dark aesthetic
  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#1e3e2b] border-[#2d5a3f]";
      case 2:
        return "bg-[#2d6a4f] border-[#40916c]";
      case 3:
        return "bg-[#40916c] border-[#52b788]";
      case 4:
        return "bg-[#74c69d] border-[#95d5b2]";
      case 0:
      default:
        return "bg-[#141414] border-white/[0.05]";
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr + "T00:00:00Z");
      return d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="relative rounded-[1.35rem] border border-white/12 bg-[#0c0c0c] p-6 sm:p-8 text-white">
      {/* Header bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-emerald-400">
              Verified Public Activity
            </p>
          </div>
          <h3 className="display-type mt-1 text-xl sm:text-2xl font-black text-white">
            GitHub Contribution Activity
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-right">
            <p className="text-[0.65rem] uppercase tracking-wider text-white/50 font-bold">
              Past 12 Months
            </p>
            <p className="text-base sm:text-lg font-black text-white">
              {loading ? "..." : `${totalCount} contributions`}
            </p>
          </div>
        </div>
      </div>

      {/* Calendar Grid Container */}
      <div className="relative mt-6 overflow-x-auto pb-2 pt-2 scrollbar-thin scrollbar-thumb-white/10">
        {loading ? (
          <div className="flex h-36 items-center justify-center text-sm text-white/50">
            <div className="mr-3 h-4 w-4 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
            Fetching public GitHub activity for @Hussein-dev256...
          </div>
        ) : (
          <div className="min-w-[760px] select-none">
            {/* Month Labels */}
            <div className="flex text-[0.68rem] font-semibold text-white/50 mb-2 pl-8">
              {monthLabels.map((m, i) => (
                <div
                  key={`${m.label}-${i}`}
                  style={{
                    position: "relative",
                    left: `${m.weekIndex * 14}px`,
                    width: "0px",
                  }}
                  className="whitespace-nowrap"
                >
                  {m.label}
                </div>
              ))}
            </div>

            {/* Grid with Weekdays and Days */}
            <div className="flex gap-2">
              {/* Day Labels */}
              <div className="flex flex-col justify-between py-1 text-[0.65rem] font-semibold text-white/40 pr-1 select-none">
                <span className="h-3">Mon</span>
                <span className="h-3">Wed</span>
                <span className="h-3">Fri</span>
              </div>

              {/* 52-week Columns */}
              <div className="flex gap-[3px]">
                {weeks.map((week, wIndex) => (
                  <div key={`week-${wIndex}`} className="flex flex-col gap-[3px]">
                    {/* Fill padding if first week starts mid-week */}
                    {wIndex === 0 && week.length < 7
                      ? Array.from({ length: 7 - week.length }).map((_, emptyIdx) => (
                          <div
                            key={`empty-${emptyIdx}`}
                            className="h-3 w-3 rounded-[2px] bg-transparent"
                          />
                        ))
                      : null}

                    {week.map((day) => (
                      <div
                        key={day.date}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredDay({
                            date: day.date,
                            count: day.count,
                            x: rect.left + rect.width / 2,
                            y: rect.top,
                          });
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`h-3 w-3 rounded-[2px] border transition-transform duration-150 hover:scale-125 hover:z-20 cursor-pointer ${getLevelColor(
                          day.level
                        )}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Floating Tooltip */}
        {hoveredDay && (
          <div
            className="fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-full px-3 py-1.5 rounded-lg border border-white/15 bg-[#171717] text-xs text-white shadow-xl whitespace-nowrap"
            style={{
              left: `${hoveredDay.x}px`,
              top: `${hoveredDay.y - 8}px`,
            }}
          >
            <span className="font-bold text-emerald-300">
              {hoveredDay.count} {hoveredDay.count === 1 ? "contribution" : "contributions"}
            </span>{" "}
            on {formatDate(hoveredDay.date)}
          </div>
        )}
      </div>

      {/* Footer bar with legend and link */}
      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs">
        <Link
          href="https://github.com/Hussein-dev256"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 font-semibold text-white/80 transition-colors hover:text-yellow-300"
        >
          <span>View GitHub profile (@Hussein-dev256)</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>

        {/* Legend */}
        <div className="flex items-center gap-2 text-[0.68rem] text-white/60 font-semibold">
          <span>Less</span>
          <div className="flex gap-1">
            <span className="h-2.5 w-2.5 rounded-[2px] bg-[#141414] border border-white/[0.05]" />
            <span className="h-2.5 w-2.5 rounded-[2px] bg-[#1e3e2b] border border-[#2d5a3f]" />
            <span className="h-2.5 w-2.5 rounded-[2px] bg-[#2d6a4f] border border-[#40916c]" />
            <span className="h-2.5 w-2.5 rounded-[2px] bg-[#40916c] border border-[#52b788]" />
            <span className="h-2.5 w-2.5 rounded-[2px] bg-[#74c69d] border border-[#95d5b2]" />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
