import { NextResponse } from "next/server";

export type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type GitHubContributionsResponse = {
  total: {
    lastYear: number;
    [year: string]: number;
  };
  contributions: ContributionDay[];
};

export async function GET() {
  try {
    const res = await fetch(
      "https://github-contributions-api.jogruber.de/v4/Hussein-dev256?y=last",
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
        headers: {
          "User-Agent": "HusseinPortfolio/1.0",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch from contributions API: ${res.status}`);
    }

    const data: GitHubContributionsResponse = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    // Fallback response with total
    return NextResponse.json({
      total: { lastYear: 140 },
      contributions: [],
    });
  }
}
