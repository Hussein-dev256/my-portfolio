import React from "react";

export function AWIHFArchitectureDiagram() {
  return (
    <div className="mt-8 rounded-[1.35rem] border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/8 pb-4 mb-6 gap-2">
        <div>
          <span className="text-[0.65rem] font-bold uppercase tracking-wider text-yellow-800">
            System Topology &amp; Service Boundaries
          </span>
          <h3 className="display-type text-lg sm:text-xl font-bold text-neutral-950 mt-0.5">
            Decoupled Architecture · Editorial Lake · Relational Records
          </h3>
        </div>
        <span className="self-start sm:self-auto rounded-full bg-[#fbf7ed] px-3 py-1 text-[0.68rem] font-mono font-bold text-neutral-800 border border-black/10">
          Decoupled Topology v2.1
        </span>
      </div>

      {/* Main Diagram Area */}
      <div className="space-y-6">
        {/* Desktop / Large Screen Flow (lg+) */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1.1fr_auto_1.2fr] items-center gap-2 relative">
          
          {/* COLUMN 1: CLIENT ROLES & TRAFFIC */}
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="text-[0.68rem] font-bold uppercase tracking-wider text-neutral-500 border-b border-black/10 pb-1 flex items-center justify-between">
              <span>Client Ingress Roles</span>
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
            </div>

            <div className="rounded-xl border border-black/12 bg-[#fdfbf6] p-4 shadow-sm space-y-2">
              <span className="text-[0.62rem] font-bold text-yellow-800 uppercase">PUBLIC TRAFFIC</span>
              <h4 className="text-sm font-bold text-neutral-950">Donors &amp; Applicants</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Reads health stories, browses NGO initiatives, submits mentorship applications with CVs.
              </p>
            </div>

            <div className="rounded-xl border border-black/12 bg-[#fdfbf6] p-4 shadow-sm space-y-2">
              <span className="text-[0.62rem] font-bold text-yellow-800 uppercase">INTERNAL STAFF</span>
              <h4 className="text-sm font-bold text-neutral-950">NGO Editors</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Accesses embedded Sanity Studio to publish maternal health articles and update leadership registries.
              </p>
            </div>
          </div>

          {/* CONNECTOR 1: CLIENTS -> NEXT.JS */}
          <div className="flex flex-col items-center justify-center h-full px-1 w-16">
            <span className="text-[0.58rem] font-bold text-neutral-500 uppercase tracking-tight text-center leading-tight mb-1">
              HTTPS / RSC
            </span>
            <svg className="w-14 h-6 text-neutral-700" viewBox="0 0 56 24" fill="none">
              <path d="M0 12H48M48 12L38 6M48 12L38 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* COLUMN 2: APPLICATION GATEWAY & ORCHESTRATION */}
          <div className="h-full flex flex-col justify-between">
            <div className="text-[0.68rem] font-bold uppercase tracking-wider text-yellow-900 border-b border-yellow-600/30 pb-1 flex items-center justify-between">
              <span>App Gateway Boundary</span>
              <span className="rounded bg-yellow-400/30 px-1.5 py-0.2 text-[0.58rem] font-bold text-yellow-950">SSR / Edge</span>
            </div>

            <div className="rounded-xl border-2 border-yellow-600/40 bg-gradient-to-b from-yellow-300/15 to-yellow-400/10 p-5 shadow-md flex flex-col justify-between h-full my-auto space-y-3">
              <div>
                <div className="flex items-center justify-between text-[0.65rem] font-bold text-yellow-900">
                  <span>ORCHESTRATION LAYER</span>
                  <span className="font-mono bg-white/80 px-2 py-0.5 rounded border border-yellow-600/20">Next.js App Router</span>
                </div>
                <h4 className="mt-1.5 text-base font-bold text-neutral-950">Full-Stack Server Gateway</h4>
                <p className="mt-1.5 text-xs text-neutral-800 leading-relaxed">
                  Separates public SSR page caching from dynamic transactional server actions and file upload handlers.
                </p>

                <div className="mt-3 space-y-1.5 bg-white/90 p-3 rounded-lg border border-yellow-600/20 text-xs text-neutral-900">
                  <p className="text-[0.72rem] leading-snug">• Server-Side Rendering (ISR) for speed</p>
                  <p className="text-[0.72rem] leading-snug">• Server Actions for validation &amp; submission</p>
                  <p className="text-[0.72rem] leading-snug">• Multipart document stream handler</p>
                </div>
              </div>

              <div className="pt-2 border-t border-yellow-600/20 text-[0.62rem] text-neutral-600 font-semibold">
                <span>Vercel Edge Deployment</span>
              </div>
            </div>
          </div>

          {/* CONNECTOR 2: NEXT.JS -> DECOUPLED SERVICES */}
          <div className="flex flex-col items-center justify-center h-full px-1 w-16">
            <span className="text-[0.58rem] font-bold text-neutral-500 uppercase tracking-tight text-center leading-tight mb-1">
              Dispatch
            </span>
            <svg className="w-14 h-6 text-neutral-700" viewBox="0 0 56 24" fill="none">
              <path d="M0 12H48M48 12L38 6M48 12L38 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* COLUMN 3: DECOUPLED SERVICE ECOSYSTEM (4 ISOLATED TARGETS) */}
          <div className="flex flex-col justify-between h-full space-y-2.5">
            <div className="text-[0.68rem] font-bold uppercase tracking-wider text-neutral-500 border-b border-black/10 pb-1 flex items-center justify-between">
              <span>Isolated Subsystems</span>
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
            </div>

            {/* Service 1: Sanity CMS */}
            <div className="rounded-lg border border-black/10 bg-[#fdfbf6] p-2.5">
              <div className="flex items-center justify-between text-[0.6rem] font-bold text-yellow-800">
                <span>EDITORIAL CONTENT</span>
                <span className="font-mono bg-black/5 px-1 py-0.2 rounded text-[0.55rem]">Sanity CMS</span>
              </div>
              <p className="mt-0.5 text-xs font-bold text-neutral-950">Headless Content Lake</p>
              <p className="text-[0.68rem] text-neutral-600">Zero-code editorial publishing for NGO staff.</p>
            </div>

            {/* Service 2: PostgreSQL */}
            <div className="rounded-lg border border-black/10 bg-[#fdfbf6] p-2.5">
              <div className="flex items-center justify-between text-[0.6rem] font-bold text-yellow-800">
                <span>OPERATIONAL RECORDS</span>
                <span className="font-mono bg-black/5 px-1 py-0.2 rounded text-[0.55rem]">Neon PostgreSQL</span>
              </div>
              <p className="mt-0.5 text-xs font-bold text-neutral-950">Prisma ORM Relations</p>
              <p className="text-[0.68rem] text-neutral-600">Relational mentorship applications &amp; logs.</p>
            </div>

            {/* Service 3: Cloudinary */}
            <div className="rounded-lg border border-dashed border-black/15 bg-neutral-50 p-2.5">
              <div className="flex items-center justify-between text-[0.6rem] font-bold text-neutral-600">
                <span>DOCUMENT ASSETS</span>
                <span className="font-mono bg-neutral-200 px-1 py-0.2 rounded text-[0.55rem]">Cloudinary</span>
              </div>
              <p className="mt-0.5 text-xs font-bold text-neutral-950">Secure File Storage</p>
              <p className="text-[0.68rem] text-neutral-600">Isolates PDF/CV binaries from database.</p>
            </div>

            {/* Service 4: Resend */}
            <div className="rounded-lg border border-dashed border-black/15 bg-neutral-50 p-2.5">
              <div className="flex items-center justify-between text-[0.6rem] font-bold text-neutral-600">
                <span>NOTIFICATIONS</span>
                <span className="font-mono bg-neutral-200 px-1 py-0.2 rounded text-[0.55rem]">Resend API</span>
              </div>
              <p className="mt-0.5 text-xs font-bold text-neutral-950">Transactional Emails</p>
              <p className="text-[0.68rem] text-neutral-600">Instant submission receipts &amp; admin alerts.</p>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Flow Diagram */}
        <div className="lg:hidden space-y-4">
          <div className="rounded-xl border border-black/10 bg-[#fdfbf6] p-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-neutral-500">
              Boundary 01: Client Traffic
            </span>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-black/10 bg-white p-2.5">
                <span className="text-[0.6rem] font-bold text-yellow-800 uppercase">Public Users</span>
                <p className="text-xs text-neutral-700">Health storytelling &amp; mentorship application forms.</p>
              </div>
              <div className="rounded-lg border border-black/10 bg-white p-2.5">
                <span className="text-[0.6rem] font-bold text-yellow-800 uppercase">Staff Editors</span>
                <p className="text-xs text-neutral-700">Sanity Studio editorial workflows.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-1">
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 shadow-sm text-neutral-700">
              <span className="text-[0.62rem] font-bold uppercase tracking-wider">HTTPS / RSC</span>
              <svg className="w-3.5 h-3.5 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          <div className="rounded-xl border-2 border-yellow-600/40 bg-yellow-400/15 p-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-yellow-900">
              Boundary 02: Next.js App Router Gateway
            </span>
            <h4 className="mt-1 text-sm font-bold text-neutral-950">Orchestrator &amp; Server Actions</h4>
            <p className="mt-1 text-xs text-neutral-800">Routes read requests to cache and write requests to respective backend services.</p>
          </div>

          <div className="flex items-center justify-center py-1">
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 shadow-sm text-neutral-700">
              <span className="text-[0.62rem] font-bold uppercase tracking-wider">Service Dispatch</span>
              <svg className="w-3.5 h-3.5 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-[#fdfbf6] p-3">
              <span className="text-[0.6rem] font-bold uppercase text-yellow-800">Sanity CMS</span>
              <p className="text-xs text-neutral-800 font-bold mt-0.5">Editorial Content Lake</p>
            </div>
            <div className="rounded-xl border border-black/10 bg-[#fdfbf6] p-3">
              <span className="text-[0.6rem] font-bold uppercase text-yellow-800">Neon PostgreSQL</span>
              <p className="text-xs text-neutral-800 font-bold mt-0.5">Relational Prisma Tables</p>
            </div>
            <div className="rounded-xl border border-black/10 bg-neutral-50 p-3">
              <span className="text-[0.6rem] font-bold uppercase text-neutral-600">Cloudinary</span>
              <p className="text-xs text-neutral-800 font-bold mt-0.5">Encrypted CV Storage</p>
            </div>
            <div className="rounded-xl border border-black/10 bg-neutral-50 p-3">
              <span className="text-[0.6rem] font-bold uppercase text-neutral-600">Resend API</span>
              <p className="text-xs text-neutral-800 font-bold mt-0.5">Transactional Email Alerts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
