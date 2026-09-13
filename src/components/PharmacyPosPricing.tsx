"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Download, Crown, Zap, ArrowRight } from "lucide-react";

export default function PharmacyPosPricing() {
  return (
    <section id="pricing" className="bg-black text-white py-24 px-6 sm:px-10 lg:px-16 border-t border-white/10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#b692ff]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-mono tracking-[0.2em] text-[#b692ff] uppercase mb-3"
          >
            // PRICING & LICENSING
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold tracking-tighter text-white leading-none uppercase"
          >
            Simple Plans<span className="text-[#b692ff]">.</span> No Hidden Costs<span className="text-[#b692ff]">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed font-normal"
          >
            Every pharmacy gets a 15-Day Free Trial. Choose flexible monthly rental or lifetime $180 once ownership.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Card 1: Monthly Rental Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#080808] border border-white/10 p-8 sm:p-10 flex flex-col justify-between hover:border-white/25 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
                  MONTHLY RENTAL
                </span>
                <span className="bg-white/10 text-white text-[10px] font-mono px-3 py-1 rounded-full font-bold">
                  5K / MONTH
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white tracking-tight">Monthly Plan</h3>
              <p className="text-xs text-white/50 mt-2 leading-relaxed">
                Pay month-to-month rent. Cancel anytime with zero long-term commitments.
              </p>

              <div className="my-8 pt-6 border-t border-white/5">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white font-mono">PKR 5,000</span>
                  <span className="text-xs font-mono text-white/40">/ Month</span>
                </div>
                <div className="text-xs font-mono text-[#b692ff] mt-2 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>15-Day Free Trial Included</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-white/80 font-normal">
                {[
                  "Full Access to all Pharmacy POS Features",
                  "15-Day Free Trial Setup Included",
                  "Batch & Expiry Date Alerts (30/60/90 Days)",
                  "Generic Formula Salt & Substitute Lookup",
                  "Cashier Roles & Permission Security",
                  "1-Click Profit/Loss & Tax Reports",
                  "Cloud Sync & Offline Billing Mode",
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/5">
              <a
                href="/pos/MedKit%20POS%20Setup.exe"
                download="MedKit POS Setup.exe"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 border border-white/15 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Start 15-Day Free Trial</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2: Lifetime License Plan ($180 Once) - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-3xl bg-[#0c0a14] border-2 border-[#b692ff] p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-[#b692ff]/10"
          >
            {/* Top Featured Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#b692ff] text-black text-[10px] font-extrabold uppercase font-mono px-4 py-1 rounded-full shadow-lg tracking-widest">
              POPULAR • $180 ONCE
            </div>

            <div>
              <div className="flex items-center justify-between mb-6 pt-2">
                <span className="text-[11px] font-mono text-[#b692ff] uppercase tracking-widest font-bold">
                  LIFETIME OWNERSHIP
                </span>
                <span className="bg-[#b692ff]/20 text-[#b692ff] border border-[#b692ff]/40 text-[10px] font-mono px-3 py-1 rounded-full font-bold">
                  $180 ONCE
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white tracking-tight">Lifetime License</h3>
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                Pay $180 once. Use forever with zero recurring monthly fees.
              </p>

              <div className="my-8 pt-6 border-t border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white font-mono">$180</span>
                  <span className="text-xs font-mono text-white/50">ONCE (PKR 50,000)</span>
                </div>
                <div className="text-xs font-mono text-[#b692ff] mt-2 flex items-center gap-1.5 font-bold">
                  <Crown className="w-4 h-4" />
                  <span>15-Day Free Trial Included • Lifetime Key</span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-white/90 font-normal">
                {[
                  "$180 One-Time Lifetime Software License",
                  "15-Day Free Trial Included Before Payment",
                  "Zero Monthly Fees Ever",
                  "Multi-Counter & Unlimited Staff Accounts",
                  "Distributor Payables & Purchase Orders",
                  "1-Click Financial, Stock Audit & Expiry Reports",
                  "1 Year Free Updates & Priority Onboarding",
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#b692ff] shrink-0" />
                    <span className={idx < 3 ? "font-bold text-white" : ""}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 space-y-2">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#b692ff] text-black font-extrabold text-xs uppercase tracking-widest hover:bg-[#a273ff] hover:shadow-[0_0_30px_rgba(182,146,255,0.4)] transition-all"
              >
                <Crown className="w-4 h-4" />
                <span>Get Lifetime — $180 Once</span>
              </Link>
              <div className="text-center text-[10px] font-mono text-white/40 pt-1">
                Test with 15-Day Free Trial setup first
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
