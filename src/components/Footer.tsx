"use client";

import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/animations";

export function Footer() {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeInUp}
      className="border-t border-emerald-500/10 bg-black/80 py-6 text-center text-[11px] text-slate-400"
    >
      <p>
        © 2026 Mafabi Hussein — Software Engineer. Building
        digital solutions that work.
      </p>
    </motion.footer>
  );
}