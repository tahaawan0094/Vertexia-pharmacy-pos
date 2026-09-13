"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Shield, Sparkles, Download } from "lucide-react";

const comparisonData = [
  {
    feature: "Batch & Expiry Date Alerts (30/60/90 Days)",
    vertexia: true,
    genericPos: false,
    manualRegister: false,
  },
  {
    feature: "Generic Formula Salt & Substitute Search",
    vertexia: true,
    genericPos: false,
    manualRegister: false,
  },
  {
    feature: "Cashier Role Security (Block Cost & Profit View)",
    vertexia: true,
    genericPos: "Partial",
    manualRegister: false,
  },
  {
    feature: "Low Stock Automatic Reorder Warnings",
    vertexia: true,
    genericPos: true,
    manualRegister: false,
  },
  {
    feature: "1-Click Inventory, Sales & Expiry Reports",
    vertexia: true,
    genericPos: false,
    manualRegister: false,
  },
  {
    feature: "Distributor Payables & Credit Ledgers",
    vertexia: true,
    genericPos: "Partial",
    manualRegister: false,
  },
  {
    feature: "Offline Billing with Auto Cloud Backup",
    vertexia: true,
    genericPos: false,
    manualRegister: false,
  },
  {
    feature: "Dedicated Local Onboarding & Support in PK",
    vertexia: true,
    genericPos: false,
    manualRegister: false,
  },
];

export default function PharmacyPosComparison() {
  return (
    <section className="bg-black text-white py-24 px-6 sm:px-10 lg:px-16 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-mono tracking-[0.2em] text-[#b692ff] uppercase mb-3"
          >
            // FEATURE COMPARISON MATRIX
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Why Switch to <span className="text-[#b692ff]">Vertexia POS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal"
          >
            See how Vertexia compares against generic retail POS systems and traditional paper registers.
          </motion.p>
        </div>

        {/* Comparison Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/15 bg-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-xs font-mono text-white/70 uppercase">
                  <th className="p-5 font-semibold">Capability / Feature</th>
                  <th className="p-5 font-extrabold text-[#b692ff] bg-[#b692ff]/10 text-center">
                    Vertexia Pharmacy POS
                  </th>
                  <th className="p-5 font-semibold text-center text-white/50">Generic Retail POS</th>
                  <th className="p-5 font-semibold text-center text-white/50">Manual Register</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs font-mono">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                    <td className="p-5 text-white font-semibold">{row.feature}</td>

                    {/* Vertexia Column */}
                    <td className="p-5 bg-[#b692ff]/5 text-center">
                      {row.vertexia === true ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#b692ff] text-black">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <span className="text-[#b692ff] font-bold">{row.vertexia}</span>
                      )}
                    </td>

                    {/* Generic POS Column */}
                    <td className="p-5 text-center text-white/50">
                      {row.genericPos === true ? (
                        <Check className="w-4 h-4 text-green-400 mx-auto" />
                      ) : row.genericPos === false ? (
                        <X className="w-4 h-4 text-red-500/60 mx-auto" />
                      ) : (
                        <span className="text-yellow-400 text-[10px] font-bold">{row.genericPos}</span>
                      )}
                    </td>

                    {/* Manual Register Column */}
                    <td className="p-5 text-center text-white/50">
                      <X className="w-4 h-4 text-red-500/60 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-white/5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Sparkles className="w-4 h-4 text-[#b692ff]" />
              <span>Full 15-Day Free Trial Available Immediately</span>
            </div>
            <a
              href="/pos/MedKit%20POS%20Setup.exe"
              download="MedKit POS Setup.exe"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#b692ff] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#a273ff] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Setup (.exe)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
