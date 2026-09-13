"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Pill,
  ShieldCheck,
  Zap,
  TrendingUp,
  Barcode,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function PharmacyPosHero() {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white pt-32 pb-20 px-6 sm:px-10 lg:px-16 flex flex-col justify-center">
      {/* Background Glows & Overlay */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b692ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#7c4dff]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Header */}
      <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-[#b692ff] text-xs font-mono tracking-widest uppercase mb-8 shadow-inner"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Vertexia Enterprise Product</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#b692ff] animate-pulse" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] max-w-5xl"
        >
          Smart Pharmacy POS & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b692ff] via-[#d4bbfc] to-white">
            Inventory Software
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-white/70 max-w-3xl leading-relaxed font-normal"
        >
          Engineered for medical stores, retail pharmacies, and wholesale distributors in Pakistan.
          Automate batch & expiry tracking, fast billing barcode scanning, formula lookups, and profit analytics.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#b692ff] text-black font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#a273ff] hover:shadow-[0_0_30px_rgba(182,146,255,0.4)]"
          >
            <span>Book Live POS Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-medium text-sm tracking-wider uppercase hover:bg-white/10 transition-colors"
          >
            <span>Explore Capabilities</span>
          </a>
        </motion.div>

        {/* Key Selling Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {[
            { icon: Zap, label: "Fast Billing", sub: "< 2 Sec Per Invoice" },
            { icon: ShieldCheck, label: "Expiry Alert System", sub: "Zero Profit Loss" },
            { icon: Barcode, label: "Barcode Scanner", sub: "100% Plug & Play" },
            { icon: TrendingUp, label: "Daily Tax Reports", sub: "FBR / Local Compliant" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#b692ff]/40 transition-colors"
            >
              <item.icon className="w-5 h-5 text-[#b692ff] mb-2" />
              <span className="text-xs font-semibold text-white tracking-wider">{item.label}</span>
              <span className="text-[10px] text-white/50 font-mono mt-0.5">{item.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Interactive POS Mockup Display */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-16 max-w-6xl mx-auto w-full relative z-10"
      >
        <div className="relative rounded-2xl border border-white/15 bg-[#0f0f13]/90 backdrop-blur-xl p-4 sm:p-6 shadow-2xl shadow-black/90">
          {/* Header Bar of Mockup */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-white/40">Vertexia Pharmacy POS v2.4 — Active Counter #01</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                ONLINE / CONNECTED
              </span>
            </div>
          </div>

          {/* Grid Mock Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left 2 Cols: Cart & Medicine Search */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <Pill className="w-5 h-5 text-[#b692ff]" />
                <input
                  type="text"
                  readOnly
                  value="Panadol Extra 500mg (Paracetamol + Caffeine) - Batch #B902"
                  className="bg-transparent text-sm text-white focus:outline-none w-full font-mono"
                />
                <span className="text-xs bg-[#b692ff] text-black font-bold px-2 py-1 rounded">SCANNER ACTIVE</span>
              </div>

              <div className="border border-white/10 rounded-xl overflow-hidden bg-black/40">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/5 text-white/50 uppercase font-mono text-[10px] border-b border-white/10">
                    <tr>
                      <th className="p-3">Medicine Name</th>
                      <th className="p-3">Batch</th>
                      <th className="p-3">Expiry</th>
                      <th className="p-3">Qty</th>
                      <th className="p-3 text-right">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/80 font-mono">
                    <tr>
                      <td className="p-3 font-semibold text-white">Panadol Extra 500mg Strip</td>
                      <td className="p-3 text-white/50">#PN-982</td>
                      <td className="p-3 text-green-400">11/2027</td>
                      <td className="p-3">2 x 10 pcs</td>
                      <td className="p-3 text-right font-bold text-[#b692ff]">PKR 340.00</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Augmentin 625mg Syrup</td>
                      <td className="p-3 text-white/50">#AG-411</td>
                      <td className="p-3 text-yellow-400">04/2026</td>
                      <td className="p-3">1 Bottle</td>
                      <td className="p-3 text-right font-bold text-[#b692ff]">PKR 485.00</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Softin 10mg Tablets</td>
                      <td className="p-3 text-white/50">#SF-209</td>
                      <td className="p-3 text-green-400">08/2028</td>
                      <td className="p-3">1 Pack</td>
                      <td className="p-3 text-right font-bold text-[#b692ff]">PKR 210.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Col: Bill Summary Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-white/70 mb-4 flex items-center justify-between">
                  <span>Invoice Checkout</span>
                  <Clock className="w-4 h-4 text-[#b692ff]" />
                </h3>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between text-white/60">
                    <span>Subtotal:</span>
                    <span>PKR 1,035.00</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Discount (5%):</span>
                    <span className="text-green-400">- PKR 51.75</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Sales Tax (GST):</span>
                    <span>PKR 0.00</span>
                  </div>
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex justify-between text-base font-extrabold text-white">
                    <span>Total Payable:</span>
                    <span className="text-[#b692ff]">PKR 983.25</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <button className="w-full py-3 rounded-lg bg-[#b692ff] text-black font-extrabold text-xs uppercase tracking-widest hover:bg-[#a273ff] transition-colors">
                  Print Thermal Receipt [F12]
                </button>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-white/40 font-mono">
                  <CheckCircle2 className="w-3 h-3 text-green-400" />
                  <span>Inventory Auto-Deducted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
