import React from "react";

export function ObjectIDArchitectureDiagram() {
  return (
    <div className="mt-8 rounded-[1.35rem] border border-white/12 bg-[#111111] p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-2">
        <div>
          <span className="text-[0.65rem] font-bold uppercase tracking-wider text-yellow-300">
            Inference Pipeline &amp; Dual-Path Recognition Topology
          </span>
          <h3 className="display-type text-lg sm:text-xl font-bold text-white mt-0.5">
            Android Client Boundary · Dual Recognition Routes · Fallback Routing
          </h3>
        </div>
        <span className="self-start sm:self-auto rounded-full bg-white/5 px-3 py-1 text-[0.68rem] font-mono font-bold text-yellow-200 border border-white/10">
          Inference Map v1.8
        </span>
      </div>

      {/* Main Diagram Area */}
      <div className="space-y-6">
        {/* Desktop / Large Screen Grid Diagram */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1.2fr_auto_1fr] items-center gap-2 relative">
          
          {/* STAGE 1: INPUT & LOCAL PREPROCESSING */}
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="text-[0.68rem] font-bold uppercase tracking-wider text-white/50 border-b border-white/10 pb-1 flex items-center justify-between">
              <span>01. Image Capture &amp; Prep</span>
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 p-4 space-y-3">
              <div className="flex items-center justify-between text-[0.62rem] font-bold text-yellow-300">
                <span>INPUT SOURCE</span>
                <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-white/70">Android CameraX / Gallery</span>
              </div>
              <h4 className="text-sm font-bold text-white">Camera Bitmap &amp; ROI</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Raw capture, aspect-ratio scaling (224×224 / 300×300), and interactive Region-of-Interest (ROI) touch selection.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 text-[0.65rem] font-semibold text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Zero-allocation bitmap pooling</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-white/60">
              <p className="font-bold text-white/80 text-[0.7rem]">Pre-Inference Normalization:</p>
              <p className="mt-0.5 text-[0.68rem]">RGB byte buffer tensor allocation &amp; orientation matrix correction.</p>
            </div>
          </div>

          {/* CONNECTOR 1: PREPROCESSING -> ROUTER */}
          <div className="flex flex-col items-center justify-center h-full px-1 w-16">
            <span className="text-[0.58rem] font-bold text-white/50 uppercase tracking-tight text-center leading-tight mb-1">
              Tensor Buffer
            </span>
            <svg className="w-14 h-6 text-yellow-300/80" viewBox="0 0 56 24" fill="none">
              <path d="M0 12H48M48 12L38 6M48 12L38 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* STAGE 2: INFERENCE ENGINE & ROUTING LOGIC */}
          <div className="h-full flex flex-col justify-between space-y-3">
            <div className="text-[0.68rem] font-bold uppercase tracking-wider text-yellow-300 border-b border-yellow-300/30 pb-1 flex items-center justify-between">
              <span>02. Recognition Router &amp; Dual Engine</span>
              <span className="rounded bg-yellow-400/20 px-1.5 py-0.2 text-[0.58rem] font-bold text-yellow-300">Strategy Pattern</span>
            </div>

            {/* Path A: On-Device TFLite */}
            <div className="rounded-xl border border-white/15 bg-black/60 p-3.5 hover:border-yellow-300/40 transition-colors">
              <div className="flex items-center justify-between text-[0.62rem] font-bold text-emerald-300">
                <span>PATH A: FAST (ON-DEVICE)</span>
                <span className="font-mono bg-emerald-400/10 px-1.5 py-0.5 rounded text-emerald-300 border border-emerald-400/20">~40ms · Offline</span>
              </div>
              <h4 className="mt-1 text-xs sm:text-sm font-bold text-white">TensorFlow Lite Model</h4>
              <p className="mt-0.5 text-[0.72rem] text-white/70 leading-snug">
                Local MobileNet quantized model running on Android NNAPI/GPU delegate with zero network latency.
              </p>
            </div>

            {/* Path B: Cloud Vision API */}
            <div className="rounded-xl border border-white/15 bg-black/60 p-3.5 hover:border-yellow-300/40 transition-colors">
              <div className="flex items-center justify-between text-[0.62rem] font-bold text-yellow-300">
                <span>PATH B: ACCURATE (CLOUD)</span>
                <span className="font-mono bg-yellow-300/10 px-1.5 py-0.5 rounded text-yellow-200 border border-yellow-300/20">~350ms · Deep</span>
              </div>
              <h4 className="mt-1 text-xs sm:text-sm font-bold text-white">Imagga Vision API (HTTPS)</h4>
              <p className="mt-0.5 text-[0.72rem] text-white/70 leading-snug">
                Cloud-based categorization returning multi-tag confidence vectors and hierarchical semantic labels.
              </p>
            </div>

            {/* Fallback Bridge */}
            <div className="rounded-lg border border-dashed border-yellow-300/30 bg-yellow-300/5 p-2.5 text-[0.68rem] text-yellow-100 flex items-center justify-between">
              <span><strong>Auto Fallback:</strong> If TFLite score &lt; 0.65 threshold</span>
              <span className="font-mono text-yellow-300 font-bold">Escalate ↗</span>
            </div>
          </div>

          {/* CONNECTOR 2: ROUTER -> OUTPUT */}
          <div className="flex flex-col items-center justify-center h-full px-1 w-16">
            <span className="text-[0.58rem] font-bold text-white/50 uppercase tracking-tight text-center leading-tight mb-1">
              Confidence Score
            </span>
            <svg className="w-14 h-6 text-yellow-300/80" viewBox="0 0 56 24" fill="none">
              <path d="M0 12H48M48 12L38 6M48 12L38 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* STAGE 3: RESULT RENDERING & UI OVERLAY */}
          <div className="flex flex-col justify-between h-full space-y-4">
            <div className="text-[0.68rem] font-bold uppercase tracking-wider text-white/50 border-b border-white/10 pb-1 flex items-center justify-between">
              <span>03. Output &amp; Canvas</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>

            <div className="rounded-xl border border-white/10 bg-black/40 p-4 space-y-3">
              <div className="flex items-center justify-between text-[0.62rem] font-bold text-yellow-300">
                <span>UI AGGREGATOR</span>
                <span className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-white/70">Android Canvas</span>
              </div>
              <h4 className="text-sm font-bold text-white">Visual Annotation</h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Dynamic bounding box overlay, classification tags, top-3 ranked confidence bars, and fallback status badge.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 text-[0.65rem] font-semibold text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                <span>Real-time UI thread decoupler</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-white/60">
              <p className="font-bold text-white/80 text-[0.7rem]">Offline Resilience:</p>
              <p className="mt-0.5 text-[0.68rem]">Network failure gracefully defaults to local prediction without crashing UI.</p>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Vertical Flow Diagram */}
        <div className="lg:hidden space-y-4">
          {/* Step 1 */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-4">
            <div className="flex items-center justify-between text-[0.65rem] font-bold text-yellow-300">
              <span>STAGE 01: IMAGE INPUT &amp; PREPROCESSING</span>
              <span className="text-white/40">CameraX / Gallery</span>
            </div>
            <h4 className="mt-1 text-sm font-bold text-white">Interactive Touch ROI</h4>
            <p className="mt-1 text-xs text-white/70">Aspect ratio scaling, bitmap buffer pooling, and touch bounding box selection.</p>
          </div>

          {/* Downward Arrow */}
          <div className="flex items-center justify-center py-1">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black px-3 py-1 text-white/70">
              <span className="text-[0.62rem] font-bold uppercase tracking-wider">Normalized Tensor Buffer</span>
              <svg className="w-3.5 h-3.5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-xl border-2 border-yellow-400/30 bg-black/60 p-4 space-y-3">
            <div className="flex items-center justify-between text-[0.65rem] font-bold text-yellow-300">
              <span>STAGE 02: DUAL-PATH RECOGNITION ENGINE</span>
              <span className="text-white/40">Routing Logic</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="rounded-lg border border-emerald-400/20 bg-emerald-950/20 p-3">
                <span className="text-[0.6rem] font-bold text-emerald-300 uppercase">Path A: On-Device TFLite</span>
                <p className="text-xs text-white/80 mt-0.5">~40ms, offline MobileNet model, instant bounding box.</p>
              </div>
              <div className="rounded-lg border border-yellow-400/20 bg-yellow-950/20 p-3">
                <span className="text-[0.6rem] font-bold text-yellow-200 uppercase">Path B: Cloud Imagga API</span>
                <p className="text-xs text-white/80 mt-0.5">~350ms over HTTPS, deep semantic classification tags.</p>
              </div>
            </div>
            <p className="text-[0.68rem] text-yellow-200/80 bg-white/5 p-2 rounded border border-white/5">
              <strong>Auto Fallback:</strong> If on-device TFLite score &lt; 0.65, triggers cloud inference automatically.
            </p>
          </div>

          {/* Downward Arrow */}
          <div className="flex items-center justify-center py-1">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black px-3 py-1 text-white/70">
              <span className="text-[0.62rem] font-bold uppercase tracking-wider">Bounding Box &amp; Confidence Vectors</span>
              <svg className="w-3.5 h-3.5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-xl border border-white/10 bg-black/40 p-4">
            <div className="flex items-center justify-between text-[0.65rem] font-bold text-emerald-300">
              <span>STAGE 03: UI CANVAS RENDERING</span>
              <span className="text-white/40">Canvas Overlay</span>
            </div>
            <h4 className="mt-1 text-sm font-bold text-white">Visual Classification Labels</h4>
            <p className="mt-1 text-xs text-white/70">Displays top-ranked predictions, confidence bars, and fallback status without blocking UI thread.</p>
          </div>
        </div>

        {/* Boundary & Inference Tradeoff Note */}
        <div className="rounded-xl border border-white/10 bg-black/30 p-3.5 sm:p-4 text-xs text-white/80 flex items-start gap-2.5">
          <span className="mt-0.5 text-yellow-300 text-sm font-bold">ℹ</span>
          <div>
            <p className="font-bold text-white text-xs">Architectural Boundary &amp; Latency Trade-off:</p>
            <p className="mt-0.5 text-[0.72rem] leading-relaxed text-white/65">
              The on-device TFLite pipeline prioritizes immediate user feedback (zero network dependency) while the Imagga Cloud API path prioritizes classification accuracy. The router decouples the recognition strategy from the UI layer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
