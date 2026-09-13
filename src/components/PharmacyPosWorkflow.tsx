"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Database,
  Printer,
  Calculator,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function PharmacyPosWorkflow() {
  const [dailyInvoices, setDailyInvoices] = useState(120);

  // ROI calculations based on daily invoices
  const hoursSavedPerMonth = Math.round((dailyInvoices * 1.5 * 30) / 60);
  const moneySavedOnExpiry = Math.round(dailyInvoices * 180 * 0.05); // PKR saved on zero expired medicine
  const netProfitBoostPercent = 18;

  const steps = [
    {
      stepNum: "01",
      title: "Download & Install Setup",
      subtitle: "Instant 1-Click Installation",
      description:
        "Download the Windows installer executable (.exe). Run the setup wizard to get your pharmacy software ready in under 2 minutes with no technical knowledge required.",
      icon: Download,
      actionText: "Download Windows App (.exe)",
      actionHref: "/pos/MedKit%20POS%20Setup.exe",
      badge: "STEP 1",
    },
    {
      stepNum: "02",
      title: "Import Your Stock Database",
      subtitle: "Excel / CSV or Pre-Loaded Catalog",
      description:
        "Upload your existing inventory via Excel/CSV or choose from our pre-configured database of 10,000+ Pakistani medicines with formula salts and prices.",
      icon: Database,
      actionText: "Pre-Loaded 10k+ Medicines",
      badge: "STEP 2",
    },
    {
      stepNum: "03",
      title: "Plug Hardware & Start Selling",
      subtitle: "Barcode Scanner & Printer Ready",
      description:
        "Connect your barcode scanner and thermal receipt printer. Create cashier user logins and start issuing fast, error-free invoices immediately.",
      icon: Printer,
      actionText: "100% Plug & Play",
      badge: "STEP 3",
    },
  ];

  return (
    <section className="bg-black text-white py-24 px-6 sm:px-10 lg:px-16 border-t border-white/10 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#b692ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-mono tracking-[0.2em] text-[#b692ff] uppercase mb-3"
          >
            // 3-STEP ONBOARDING WORKFLOW
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Get Your Pharmacy Running <br />
            <span className="text-[#b692ff]">In 3 Simple Steps</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal"
          >
            No complex server configurations or months of delay. Start managing your stock and printing bills today.
          </motion.p>
        </div>

        {/* 3 Steps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative p-8 rounded-3xl bg-[#080808] border border-white/10 hover:border-[#b692ff]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-white/30 group-hover:text-[#b692ff] transition-colors font-mono">
                    /{step.stepNum}
                  </span>
                  <span className="bg-[#b692ff]/15 text-[#b692ff] border border-[#b692ff]/30 text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold">
                    {step.badge}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#b692ff]/10 border border-[#b692ff]/30 text-[#b692ff] flex items-center justify-center mb-6 group-hover:bg-[#b692ff] group-hover:text-black transition-colors">
                  <step.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                  {step.title}
                </h3>
                <div className="text-xs text-[#b692ff] font-mono mb-4">{step.subtitle}</div>
                <p className="text-xs text-white/60 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                {step.actionHref ? (
                  <a
                    href={step.actionHref}
                    download="MedKit POS Setup.exe"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#b692ff] hover:text-white transition-colors"
                  >
                    <span>{step.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{step.actionText}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Pharmacy ROI & Savings Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#0f0f14] border border-white/15 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Slider Control (6 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b692ff]/20 text-[#b692ff] text-xs font-mono">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE ROI CALCULATOR</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Calculate Your Pharmacy's Monthly Time & Money Savings
              </h3>

              <p className="text-xs text-white/60 leading-relaxed">
                Drag the slider to match your estimated daily customer billing invoices:
              </p>

              {/* Range Slider */}
              <div className="space-y-3 bg-white/5 p-5 rounded-2xl border border-white/10">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/60">Daily Customer Invoices:</span>
                  <span className="text-[#b692ff] font-extrabold text-base">{dailyInvoices} Bills / Day</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={dailyInvoices}
                  onChange={(e) => setDailyInvoices(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#b692ff]"
                />
                <div className="flex justify-between text-[10px] text-white/40 font-mono">
                  <span>20 Bills</span>
                  <span>250 Bills</span>
                  <span>500+ Bills</span>
                </div>
              </div>
            </div>

            {/* Right Output Metrics (6 Cols) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center flex flex-col items-center justify-center">
                <Clock className="w-6 h-6 text-[#b692ff] mb-2" />
                <div className="text-2xl font-extrabold text-white font-mono">{hoursSavedPerMonth} hrs</div>
                <div className="text-[10px] text-white/50 font-mono mt-1 uppercase">Time Saved / Month</div>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center flex flex-col items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mb-2" />
                <div className="text-2xl font-extrabold text-emerald-400 font-mono">
                  PKR {moneySavedOnExpiry.toLocaleString()}
                </div>
                <div className="text-[10px] text-emerald-300 font-mono mt-1 uppercase">Zero Expiry Waste</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-center flex flex-col items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#b692ff] mb-2" />
                <div className="text-2xl font-extrabold text-white font-mono">+{netProfitBoostPercent}%</div>
                <div className="text-[10px] text-white/50 font-mono mt-1 uppercase">Profit Margin Boost</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
