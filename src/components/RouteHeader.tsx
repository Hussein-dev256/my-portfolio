import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

export function RouteHeader({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <header className="bg-[#f6f0df] text-[#080807] lg:rounded-b-[4rem]">
      <div className="section-container pt-4">
        <Navbar />
        <div className="pb-16 pt-14 sm:pb-20 lg:pb-24 lg:pt-20">
          <p className="section-kicker light-kicker">{kicker}</p>
          <h1 className="display-type mt-5 max-w-5xl text-balance text-5xl leading-[0.9] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <div className="mt-6 max-w-2xl text-base font-semibold leading-7 text-neutral-700 sm:text-lg">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}
