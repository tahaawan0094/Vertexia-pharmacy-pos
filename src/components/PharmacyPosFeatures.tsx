"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Boxes,
  Clock,
  Search,
  Printer,
  ShieldAlert,
  Users,
  BarChart3,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Headphones,
  Database,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Batch & Expiry Date Management",
    description:
      "Automatically alerts staff 30, 60, and 90 days before medicine expiration. Prevents selling expired stock and minimizes pharmacy waste.",
  },
  {
    icon: Search,
    title: "Instant Generic Formula Search",
    description:
      "Search medicines by active salt ingredient (e.g. Paracetamol, Ibuprofen). Suggest substitute brands instantly when a requested brand is out of stock.",
  },
  {
    icon: Boxes,
    title: "Low Stock & Reorder Auto-Trigger",
    description:
      "Set minimum stock thresholds per item. Generate automated purchase orders (PO) for suppliers with one click.",
  },
  {
    icon: Printer,
    title: "Thermal & Invoice Printing",
    description:
      "Compatible with all 80mm and 58mm thermal printers. Supports custom receipt headers, discount breakdown, barcode, and store branding.",
  },
  {
    icon: ShieldAlert,
    title: "Controlled Drugs & Prescription Log",
    description:
      "Record doctor prescriptions and patient details for controlled/narcotic medications to ensure full regulatory compliance.",
  },
  {
    icon: Users,
    title: "Multi-Counter & Cashier Security",
    description:
      "Manage multiple sales counters simultaneously. Assign cashier roles with custom permission levels and shift closing cash reconciliations.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Sales & Profit Reports",
    description:
      "Gain deep insights into daily, weekly, and monthly net profit margins, top-selling medicines, peak hours, and tax summaries.",
  },
  {
    icon: Smartphone,
    title: "Cloud Backup & Offline Mode",
    description:
      "Keep selling even without an active internet connection. Offline transactions automatically sync back to cloud server when reconnected.",
  },
];

const benefits = [
  "Zero setup fee with full data migration assistance",
  "Dedicated 24/7 technical support & staff training",
  "Tailored specifically for Pakistani medical stores & hospital pharmacies",
  "Supports barcode scanners, cash drawers, & thermal bill printers",
];

export default function PharmacyPosFeatures() {
  return (
    <section id="features" className="relative isolate bg-[#0a0a0a] text-white py-24 px-6 sm:px-10 lg:px-16 border-t border-white/10">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#b692ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#b692ff] text-xs font-mono tracking-widest uppercase mb-3"
          >
            // COMPLETE PHARMACY OS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Everything Your Medical Store Needs to{" "}
            <span className="text-[#b692ff]">Operate Flawlessly</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-white/60 leading-relaxed"
          >
            Say goodbye to manual register books and stock mismatches. Vertexia Pharmacy POS is built specifically for fast, accurate retail and wholesale medicine management.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#b692ff]/50 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#b692ff]/10 border border-[#b692ff]/30 flex items-center justify-center text-[#b692ff] group-hover:bg-[#b692ff] group-hover:text-black transition-colors duration-300 mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide mb-2 group-hover:text-[#b692ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40">
                <span>MODULE #{index + 1}</span>
                <span className="text-[#b692ff] opacity-0 group-hover:opacity-100 transition-opacity">
                  ACTIVE →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#121218] via-[#0d0d12] to-black border border-white/15 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b692ff]/20 text-[#b692ff] text-xs font-mono">
              <Headphones className="w-3.5 h-3.5" />
              <span>Full Local Onboarding Support</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Ready to Upgrade Your Pharmacy Operations?
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              We provide complete data import for your existing medicine list, inventory setup, hardware configuration, and staff training across Pakistan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                  <CheckCircle className="w-4 h-4 text-[#b692ff] shrink-0" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center lg:items-end space-y-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#b692ff] text-black font-extrabold text-xs uppercase tracking-widest hover:bg-[#a273ff] hover:shadow-[0_0_30px_rgba(182,146,255,0.4)] transition-all"
            >
              <span>Schedule Free Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="flex items-center gap-4 text-xs font-mono text-white/50">
              <span className="flex items-center gap-1">
                <Database className="w-3.5 h-3.5 text-[#b692ff]" /> Cloud / On-Prem
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#b692ff]" /> 100% Encrypted
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
