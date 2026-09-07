import React from "react";

export function OakleyArchitectureDiagram() {
  return (
    <div className="mt-8 rounded-[1.35rem] border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/8 pb-4 mb-6 gap-2">
        <div>
          <span className="text-[0.65rem] font-bold uppercase tracking-wider text-yellow-800">
            System Topology &amp; Boundary Isolation
          </span>
          <h3 className="display-type text-lg sm:text-xl font-bold text-neutral-950 mt-0.5">
            Two Independent Frontends · Single API Gateway · Relational Persistence
          </h3>
        </div>
        <span className="self-start sm:self-auto rounded-full bg-[#fbf7ed] px-3 py-1 text-[0.68rem] font-mono font-bold text-neutral-800 border border-black/10">
          Topology Map v2.4
        </span>
      </div>

      {/* Main Architecture Diagram Container */}
      <div className="space-y-6">
        {/* Desktop / Large Screen Grid Diagram (Hidden on small screens, shown on lg+) */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1.1fr_auto_1fr] items-center gap-2 relative">
          
          {/* COLUMN 1: CLIENT FRONTEND BOUNDARY */}
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="text-[0.68rem] font-bold uppercase tracking-wider text-neutral-500 border-b border-black/10 pb-1 flex items-center justify-between">
              <span>Client Application Boundary</span>
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
            </div>

            {/* Client 1: Storefront */}
            <div className="rounded-xl border border-black/12 bg-[#fdfbf6] p-4 shadow-sm hover:border-yellow-600/40 transition-colors">
              <div className="flex items-center justify-between text-[0.62rem] font-bold text-yellow-800">
                <span>CLIENT APP 01</span>
                <span className="rounded bg-black/5 px-1.5 py-0.5 font-mono">React · Vite SPA</span>
              </div>
              <h4 className="mt-1.5 text-sm font-bold text-neutral-950">Customer Storefront</h4>
              <p className="mt-1 text-xs text-neutral-700 leading-relaxed">
                Product catalog, CartContext, delivery capture, guest checkout drafts.
              </p>
              <div className="mt-2.5 pt-2 border-t border-black/5 flex items-center gap-1.5 text-[0.65rem] font-semibold text-neutral-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Displays Mobile Money instructions</span>
              </div>
            </div>

            {/* Client 2: Vendor Dashboard */}
            <div className="rounded-xl border border-black/12 bg-[#fdfbf6] p-4 shadow-sm hover:border-yellow-600/40 transition-colors">
              <div className="flex items-center justify-between text-[0.62rem] font-bold text-yellow-800">
                <span>CLIENT APP 02</span>
                <span className="rounded bg-black/5 px-1.5 py-0.5 font-mono">React · PWA</span>
              </div>
              <h4 className="mt-1.5 text-sm font-bold text-neutral-950">Vendor Dashboard</h4>
              <p className="mt-1 text-xs text-neutral-700 leading-relaxed">
                Inventory admin, product CRUD, real-time orders, payment proof review.
              </p>
              <div className="mt-2.5 pt-2 border-t border-black/5 flex items-center gap-1.5 text-[0.65rem] font-semibold text-neutral-600">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>Restricted Vendor Session</span>
              </div>
            </div>
          </div>

          {/* CONNECTOR 1: CLIENTS -> CENTRAL API (SVG ARROWS) */}
          <div className="flex flex-col justify-around h-full py-6 px-1 w-20">
            {/* Top Arrow: Storefront -> API */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-[0.6rem] font-bold text-neutral-500 uppercase tracking-tight text-center leading-tight mb-1">
                HTTPS / Drafts
              </span>
              <svg className="w-16 h-6 text-neutral-700" viewBox="0 0 64 24" fill="none">
                <path d="M0 12H56M56 12L46 6M56 12L46 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Bottom Arrow: Vendor -> API */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-[0.6rem] font-bold text-neutral-500 uppercase tracking-tight text-center leading-tight mb-1">
                Auth / JWT
              </span>
              <svg className="w-16 h-6 text-neutral-700" viewBox="0 0 64 24" fill="none">
                <path d="M0 12H56M56 12L46 6M56 12L46 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* COLUMN 2: CENTRALIZED BACKEND & API GATEWAY (CORE BOUNDARY) */}
          <div className="h-full flex flex-col justify-between">
            <div className="text-[0.68rem] font-bold uppercase tracking-wider text-yellow-900 border-b border-yellow-600/30 pb-1 flex items-center justify-between">
              <span>Core Application Boundary</span>
              <span className="rounded bg-yellow-400/30 px-1.5 py-0.2 text-[0.58rem] font-bold text-yellow-950">Sole Gateway</span>
            </div>

            <div className="rounded-xl border-2 border-yellow-600/40 bg-gradient-to-b from-yellow-300/15 to-yellow-400/10 p-5 shadow-md flex flex-col justify-between h-full my-auto">
              <div>
                <div className="flex items-center justify-between text-[0.65rem] font-bold text-yellow-900">
                  <span>CENTRALIZED API LAYER</span>
                  <span className="font-mono bg-white/80 px-2 py-0.5 rounded border border-yellow-600/20">Express · Node.js</span>
                </div>
                <h4 className="mt-1.5 text-base font-bold text-neutral-950">Single Source of Truth</h4>
                <p className="mt-1.5 text-xs text-neutral-800 leading-relaxed">
                  Sole boundary between frontends and database. Frontends cannot access PostgreSQL directly.
                </p>

                <div className="mt-3.5 space-y-1.5 bg-white/90 p-3 rounded-lg border border-yellow-600/20 text-xs text-neutral-900">
                  <div className="flex items-center gap-1.5 font-bold text-[0.7rem] text-yellow-900 border-b border-black/5 pb-1">
                    <span>Enforced Backend Boundaries:</span>
                  </div>
                  <p className="text-[0.72rem] leading-snug">• JWT Claim Verification &amp; Role-based Access</p>
                  <p className="text-[0.72rem] leading-snug">• 3D State Machine Transitions (Payment/Fulfillment/Stock)</p>
                  <p className="text-[0.72rem] leading-snug">• Draft Order Token Hashing &amp; Rate Limiting</p>
                  <p className="text-[0.72rem] leading-snug">• Multipart Media Upload Interceptor</p>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-yellow-600/20 flex items-center justify-between text-[0.62rem] text-neutral-600 font-semibold">
                <span>Atomic Transactions</span>
                <span>Deterministic Transitions</span>
              </div>
            </div>
          </div>

          {/* CONNECTOR 2: API -> PERSISTENCE & SERVICES (SVG ARROWS) */}
          <div className="flex flex-col justify-around h-full py-6 px-1 w-20">
            {/* Top Arrow: API -> PostgreSQL */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-[0.6rem] font-bold text-neutral-500 uppercase tracking-tight text-center leading-tight mb-1">
                Drizzle / SQL
              </span>
              <svg className="w-16 h-6 text-neutral-700" viewBox="0 0 64 24" fill="none">
                <path d="M0 12H56M56 12L46 6M56 12L46 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Bottom Arrow: API -> External Services */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-[0.6rem] font-bold text-neutral-500 uppercase tracking-tight text-center leading-tight mb-1">
                Multipart / Cron
              </span>
              <svg className="w-16 h-6 text-neutral-700" viewBox="0 0 64 24" fill="none">
                <path d="M0 12H56M56 12L46 6M56 12L46 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* COLUMN 3: PERSISTENCE LAYER & EXTERNAL SERVICES */}
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="text-[0.68rem] font-bold uppercase tracking-wider text-neutral-500 border-b border-black/10 pb-1 flex items-center justify-between">
              <span>Persistence &amp; External Boundary</span>
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
            </div>

            {/* Persistence Layer */}
            <div className="rounded-xl border border-black/12 bg-[#fdfbf6] p-4 shadow-sm hover:border-yellow-600/40 transition-colors">
              <div className="flex items-center justify-between text-[0.62rem] font-bold text-yellow-800">
                <span>PERSISTENCE LAYER</span>
                <span className="rounded bg-black/5 px-1.5 py-0.5 font-mono">PostgreSQL</span>
              </div>
              <h4 className="mt-1.5 text-sm font-bold text-neutral-950">Relational Database &amp; RLS</h4>
              <p className="mt-1 text-xs text-neutral-700 leading-relaxed">
                Normalized schemas, foreign keys, and Row-Level Security policies for vendor isolation.
              </p>
              <div className="mt-2.5 pt-2 border-t border-black/5 flex items-center gap-1.5 text-[0.65rem] font-semibold text-neutral-600">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Isolated tenant rows via PostgreSQL RLS</span>
              </div>
            </div>

            {/* External Services */}
            <div className="rounded-xl border border-dashed border-black/20 bg-neutral-50 p-4 shadow-sm">
              <div className="flex items-center justify-between text-[0.62rem] font-bold text-neutral-600">
                <span>EXTERNAL INFRASTRUCTURE</span>
                <span className="rounded bg-neutral-200 px-1.5 py-0.5 font-mono">Cloud Services</span>
              </div>
              <h4 className="mt-1.5 text-sm font-bold text-neutral-950">Cloudinary &amp; Email Delivery</h4>
              <p className="mt-1 text-xs text-neutral-700 leading-relaxed">
                Direct media asset delivery &amp; Nodemailer hourly reconciliation summaries.
              </p>
              <div className="mt-2.5 pt-2 border-t border-black/10 flex items-center gap-1.5 text-[0.62rem] text-neutral-500">
                <span>Outside application boundary</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Flow Diagram (Shown on < lg) */}
        <div className="lg:hidden space-y-4">
          {/* Step 1: Frontends */}
          <div className="rounded-xl border border-black/10 bg-[#fdfbf6] p-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-neutral-500">
              Boundary 01: Client Applications
            </span>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-black/10 bg-white p-3">
                <span className="text-[0.6rem] font-bold text-yellow-800 uppercase">Customer Storefront</span>
                <p className="text-xs text-neutral-700 mt-1">Catalog, cart, guest checkout drafts, Mobile Money payment display.</p>
              </div>
              <div className="rounded-lg border border-black/10 bg-white p-3">
                <span className="text-[0.6rem] font-bold text-yellow-800 uppercase">Vendor Dashboard</span>
                <p className="text-xs text-neutral-700 mt-1">Role-authenticated inventory CRUD, order board, proof review.</p>
              </div>
            </div>
          </div>

          {/* Directional Arrow: Clients -> API */}
          <div className="flex items-center justify-center py-1">
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 shadow-sm text-neutral-700">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider">REST APIs / JWT Session</span>
              <svg className="w-4 h-4 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Step 2: Central API */}
          <div className="rounded-xl border-2 border-yellow-600/40 bg-yellow-400/15 p-4">
            <div className="flex items-center justify-between">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-yellow-900">
                Boundary 02: Centralized API Gateway
              </span>
              <span className="text-[0.6rem] font-mono bg-white px-1.5 py-0.5 rounded border border-yellow-600/20">Express · Node.js</span>
            </div>
            <h4 className="mt-1 text-sm font-bold text-neutral-950">Single Source of Truth</h4>
            <p className="mt-1 text-xs text-neutral-800">
              Sole gateway to database. Handles state machines, JWT auth, rate limits, and order hashing.
            </p>
          </div>

          {/* Directional Arrow: API -> Persistence & External */}
          <div className="flex items-center justify-center py-1">
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 shadow-sm text-neutral-700">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider">SQL Queries &amp; Media Uploads</span>
              <svg className="w-4 h-4 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Step 3: Persistence & Supporting Services */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-black/10 bg-[#fdfbf6] p-4">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-yellow-800">
                Boundary 03: Persistence
              </span>
              <h4 className="mt-1 text-xs font-bold text-neutral-950">PostgreSQL &amp; RLS</h4>
              <p className="mt-1 text-xs text-neutral-700">Vendor-isolated tenant rows and transactional consistency.</p>
            </div>
            <div className="rounded-xl border border-dashed border-black/20 bg-neutral-50 p-4">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-neutral-500">
                Boundary 04: External
              </span>
              <h4 className="mt-1 text-xs font-bold text-neutral-950">Cloudinary &amp; Cron Alerts</h4>
              <p className="mt-1 text-xs text-neutral-700">Product images CDN and scheduled background reconciliation.</p>
            </div>
          </div>
        </div>

        {/* Technical Accuracy Note on Payment Architecture */}
        <div className="rounded-xl border border-black/8 bg-[#faf7f0] p-3.5 sm:p-4 text-xs text-neutral-700 flex items-start gap-2.5">
          <span className="mt-0.5 text-yellow-700 text-sm font-bold">ℹ</span>
          <div>
            <p className="font-bold text-neutral-900 text-xs">Architectural Accuracy Note on Payment Flow:</p>
            <p className="mt-0.5 text-[0.72rem] leading-relaxed text-neutral-600">
              There is no third-party automated payment gateway API (no Stripe/MTN API integration). Payment operates via user-directed Mobile Money transaction codes recorded in the order state, verified manually by the vendor before status advancement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
