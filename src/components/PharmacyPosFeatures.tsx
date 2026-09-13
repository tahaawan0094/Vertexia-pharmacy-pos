"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Boxes,
  Clock,
  ShieldAlert,
  Users,
  BarChart3,
  FileSpreadsheet,
  Truck,
  CheckCircle2,
  Download,
  AlertTriangle,
  Lock,
  Search,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  FileText,
  UserCheck,
  ChevronRight,
} from "lucide-react";

export default function PharmacyPosFeatures() {
  const [activeTab, setActiveTab] = useState(0);

  const featureSections = [
    {
      id: "inventory",
      title: "Smart Inventory System",
      icon: Boxes,
      badge: "Real-time Stock",
      tagline: "Track 10,000+ medicines effortlessly with batch numbers and formula lookup.",
      description:
        "Complete pharmacy inventory tracking with real-time stock levels, purchase prices, retail prices, and multi-location warehouse management.",
      details: [
        "Search medicines by Brand or Generic Formula (Active Salt)",
        "Barcode scanner auto-linking for instant stock additions",
        "Automated cost of goods (COGS) and profit margin calculator",
        "Bulk CSV import for initial pharmacy inventory setup",
      ],
      widget: (
        <div className="bg-[#0f0f13] border border-gray-800 rounded-2xl p-5 text-white font-mono shadow-2xl text-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <span className="text-gray-400 font-bold flex items-center gap-2">
              <Boxes className="w-4 h-4 text-[#b692ff]" /> LIVE INVENTORY DATABASE
            </span>
            <span className="bg-[#b692ff]/20 text-[#b692ff] text-[10px] px-2 py-0.5 rounded font-bold">
              1,420 ITEMS ACTIVE
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
              <div>
                <div className="font-bold text-white">Panadol Extra 500mg (Tabs)</div>
                <div className="text-[10px] text-gray-400">Formula: Paracetamol + Caffeine</div>
              </div>
              <div className="text-right">
                <div className="text-[#b692ff] font-extrabold">340 Strips</div>
                <div className="text-[10px] text-gray-400">Batch: #PN-982</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
              <div>
                <div className="font-bold text-white">Augmentin 625mg (Syrup)</div>
                <div className="text-[10px] text-gray-400">Formula: Amoxicillin + Clavulanic</div>
              </div>
              <div className="text-right">
                <div className="text-[#b692ff] font-extrabold">45 Bottles</div>
                <div className="text-[10px] text-gray-400">Batch: #AG-411</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "lowstock",
      title: "Low Stock Alert System",
      icon: AlertTriangle,
      badge: "Reorder Warnings",
      tagline: "Never run out of essential medicines with automatic reorder triggers.",
      description:
        "Set custom minimum threshold limits for each medicine. Get real-time notifications on screen and generate purchase orders with one click.",
      details: [
        "Customizable minimum reorder thresholds per item",
        "Automated vendor reorder notifications",
        "Prevent lost sales from out-of-stock fast movers",
        "Fast 1-click Purchase Order (PO) creation",
      ],
      widget: (
        <div className="bg-[#0f0f13] border border-gray-800 rounded-2xl p-5 text-white font-mono shadow-2xl text-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <span className="text-yellow-400 font-bold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" /> CRITICAL LOW STOCK WARNINGS
            </span>
            <span className="bg-yellow-500/20 text-yellow-300 text-[10px] px-2 py-0.5 rounded font-bold animate-pulse">
              3 ITEMS NEED REORDER
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
              <div>
                <div className="font-bold text-white">Brufen 400mg Tablets</div>
                <div className="text-[10px] text-yellow-200">Current: 8 Packs (Min Limit: 20)</div>
              </div>
              <button className="bg-yellow-400 text-black text-[10px] font-bold px-2.5 py-1 rounded hover:bg-yellow-300">
                + Auto Reorder
              </button>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
              <div>
                <div className="font-bold text-white">Flygyl 400mg Suspension</div>
                <div className="text-[10px] text-yellow-200">Current: 3 Bottles (Min Limit: 15)</div>
              </div>
              <button className="bg-yellow-400 text-black text-[10px] font-bold px-2.5 py-1 rounded hover:bg-yellow-300">
                + Auto Reorder
              </button>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "expiry",
      title: "Expiry Alerts & Dead Stock Protection",
      icon: Clock,
      badge: "Zero Profit Loss",
      tagline: "Proactive 30, 60, and 90-day expiry notifications to eliminate waste.",
      description:
        "Protect your pharmacy's bottom line. Receive color-coded notifications months before batch expiration so you can return items to distributors in time.",
      details: [
        "Color-coded expiry alerts (30 days, 60 days, 90 days)",
        "First-Expiry-First-Out (FEFO) automated billing logic",
        "Distributor return list auto-generator for expiring batches",
        "Prevent accidental sale of expired medicines to customers",
      ],
      widget: (
        <div className="bg-[#0f0f13] border border-gray-800 rounded-2xl p-5 text-white font-mono shadow-2xl text-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <span className="text-red-400 font-bold flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-400" /> BATCH EXPIRY MONITORING
            </span>
            <span className="bg-red-500/20 text-red-400 text-[10px] px-2 py-0.5 rounded font-bold">
              ATTENTION REQUIRED
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-red-500/15 border border-red-500/30">
              <div>
                <div className="font-bold text-white">Amoxil 250mg Capsules</div>
                <div className="text-[10px] text-red-300">Batch: #AM-09 • Expiring in 18 Days</div>
              </div>
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                RETURN TO VENDOR
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-500/15 border border-amber-500/30">
              <div>
                <div className="font-bold text-white">Risek 20mg Capsules</div>
                <div className="text-[10px] text-amber-300">Batch: #RK-77 • Expiring in 52 Days</div>
              </div>
              <span className="bg-amber-500 text-black text-[10px] font-bold px-2 py-0.5 rounded">
                PROMO SALE
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "roles",
      title: "Staff & Role-Based Access Control",
      icon: Users,
      badge: "Security & Auditing",
      tagline: "Create custom users and strictly control staff access levels.",
      description:
        "Create accounts for cashiers, managers, and stock boys. Limit cashier access strictly to billing while locking sensitive profit reports and cost prices.",
      details: [
        "Role-based permissions: Cashier, Pharmacist, Store Manager, Admin",
        "Restrict cashiers from editing prices or viewing profit margins",
        "Shift-ending cash drawer reconciliation per cashier",
        "Detailed staff activity audit logs for every transaction",
      ],
      widget: (
        <div className="bg-[#0f0f13] border border-gray-800 rounded-2xl p-5 text-white font-mono shadow-2xl text-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <span className="text-[#b692ff] font-bold flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#b692ff]" /> USER ROLES & PERMISSIONS
            </span>
            <span className="text-gray-400 text-[10px]">STAFF ACCOUNTS (4)</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-[10px]">
                  CS
                </div>
                <div>
                  <div className="font-bold text-white">Ali Raza (Counter Cashier)</div>
                  <div className="text-[10px] text-gray-400">Access: Billing Only • Reports Blocked</div>
                </div>
              </div>
              <span className="text-green-400 text-[10px] font-bold bg-green-500/10 px-2 py-0.5 rounded">
                ACTIVE
              </span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#b692ff]/20 text-[#b692ff] flex items-center justify-center font-bold text-[10px]">
                  MG
                </div>
                <div>
                  <div className="font-bold text-white">Dr. Tariq (Store Manager)</div>
                  <div className="text-[10px] text-gray-400">Access: Full Inventory & Purchase Orders</div>
                </div>
              </div>
              <span className="text-[#b692ff] text-[10px] font-bold bg-[#b692ff]/10 px-2 py-0.5 rounded">
                MANAGER
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "sales",
      title: "Daily & Monthly Sales & Profit/Loss Analytics",
      icon: BarChart3,
      badge: "Real-time Metrics",
      tagline: "Track net revenue, gross margins, and profit/loss in real-time.",
      description:
        "Get instant clarity on your medical store's financial health. Monitor daily sales totals, net profit margins, top-selling medicines, and expense logs.",
      details: [
        "Daily, weekly, and monthly net profit & loss calculations",
        "Gross sales vs. net profit after supplier costs breakdown",
        "Top fast-moving vs. slow-moving medicine revenue charts",
        "FBR tax compliance & customer discount analytics",
      ],
      widget: (
        <div className="bg-[#0f0f13] border border-gray-800 rounded-2xl p-5 text-white font-mono shadow-2xl text-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <span className="text-emerald-400 font-bold flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" /> DAILY PROFIT & LOSS DASHBOARD
            </span>
            <span className="text-emerald-400 text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded font-bold">
              +24.5% MARGIN
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
              <div className="text-[10px] text-gray-400">TODAY'S GROSS SALES</div>
              <div className="text-base font-extrabold text-white mt-1">PKR 142,850</div>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <div className="text-[10px] text-emerald-300">NET PROFIT (NET)</div>
              <div className="text-base font-extrabold text-emerald-400 mt-1">PKR 35,000</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "reports",
      title: "One-Click Comprehensive Reports",
      icon: FileSpreadsheet,
      badge: "1-Click Export",
      tagline: "Generate complete reports for stock, sales, returns, and distributors in seconds.",
      description:
        "No complicated configurations. Download or print instant Excel & PDF reports for inventory valuation, low stock, expired stock, customer sales, returns, and supplier ledgers.",
      details: [
        "1-Click Export to Excel & PDF format",
        "Complete Stock Valuation & Asset audit reports",
        "Customer sales & product return summaries",
        "Distributor ledgers, pending payments & purchase histories",
      ],
      widget: (
        <div className="bg-[#0f0f13] border border-gray-800 rounded-2xl p-5 text-white font-mono shadow-2xl text-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <span className="text-[#b692ff] font-bold flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#b692ff]" /> INSTANT REPORT GENERATOR
            </span>
            <span className="text-gray-400 text-[10px]">EXCEL / PDF</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Inventory Audit",
              "Low Stock Alert",
              "Expiry Log",
              "Sales Returns",
              "Distributor Ledger",
              "Profit & Loss",
            ].map((rep, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/10 hover:border-[#b692ff]/40 cursor-pointer"
              >
                <span className="text-[11px] text-white font-semibold">{rep}</span>
                <ArrowUpRight className="w-3 h-3 text-[#b692ff]" />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "distributors",
      title: "Distributor & Vendor Management",
      icon: Truck,
      badge: "Supplier Hub",
      tagline: "Manage all medicine suppliers, invoices, and payment balances in one place.",
      description:
        "Keep track of company distributors (e.g. Searle, GSK, Abbott, Getz Pharma). Record incoming bills, manage credit accounts, and track payable balances.",
      details: [
        "Centralized distributor directory with contact info",
        "Credit balance ledgers & invoice payment tracking",
        "Record purchase bills with batch numbers & expiry dates",
        "Track pending vendor returns & credit notes",
      ],
      widget: (
        <div className="bg-[#0f0f13] border border-gray-800 rounded-2xl p-5 text-white font-mono shadow-2xl text-xs space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800">
            <span className="text-cyan-400 font-bold flex items-center gap-2">
              <Truck className="w-4 h-4 text-cyan-400" /> DISTRIBUTOR SUPPLIER LEDGERS
            </span>
            <span className="text-gray-400 text-[10px]">PAYABLES</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
              <div>
                <div className="font-bold text-white">GSK Pakistan Distributors</div>
                <div className="text-[10px] text-gray-400">Last Invoice: #GSK-8812</div>
              </div>
              <div className="text-right">
                <div className="text-cyan-400 font-extrabold">PKR 85,000</div>
                <div className="text-[10px] text-gray-400">Balance Due</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
              <div>
                <div className="font-bold text-white">Getz Pharma Distribution</div>
                <div className="text-[10px] text-gray-400">Last Invoice: #GZ-4019</div>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-extrabold">PKR 0.00</div>
                <div className="text-[10px] text-green-400">FULLY PAID</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* SECTION 1: Clean White Theme Features Highlight */}
      <section id="features" className="bg-white text-gray-900 py-24 px-6 sm:px-10 lg:px-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b692ff]/15 text-[#7c4dff] text-xs font-mono tracking-widest uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Built Specially For Pakistani Pharmacies</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight"
            >
              Powerful Features Designed to <br />
              <span className="text-[#7c4dff]">Automate Your Medical Store</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
            >
              From intelligent batch & expiry management to 1-click comprehensive reports and role-based staff security, Vertexia POS gives you 100% control over your pharmacy.
            </motion.p>
          </div>

          {/* Interactive Feature Tabs + Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Nav Tabs (4 Cols) */}
            <div className="lg:col-span-4 space-y-2">
              {featureSections.map((sec, idx) => {
                const isActive = activeTab === idx;
                const IconComponent = sec.icon;

                return (
                  <button
                    key={sec.id}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? "bg-[#0f0f13] text-white shadow-xl scale-[1.02]"
                        : "bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-lg transition-colors ${
                          isActive
                            ? "bg-[#b692ff] text-black"
                            : "bg-gray-200 text-gray-700 group-hover:bg-[#b692ff]/20 group-hover:text-[#7c4dff]"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold tracking-tight">{sec.title}</div>
                        <div
                          className={`text-[11px] font-mono mt-0.5 ${
                            isActive ? "text-[#b692ff]" : "text-gray-500"
                          }`}
                        >
                          {sec.badge}
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "text-[#b692ff] translate-x-1" : "text-gray-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Display Card (8 Cols) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 text-white rounded-3xl p-6 sm:p-10 border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[520px]"
                >
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#b692ff]/10 rounded-full blur-3xl pointer-events-none" />

                  <div>
                    {/* Header Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-[#b692ff]/20 text-[#b692ff] border border-[#b692ff]/40 text-xs font-mono px-3 py-1 rounded-full uppercase tracking-wider">
                        {featureSections[activeTab].badge}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        FEATURE MODULE #{activeTab + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                      {featureSections[activeTab].title}
                    </h3>
                    <p className="text-sm text-[#b692ff] font-medium mb-6">
                      {featureSections[activeTab].tagline}
                    </p>

                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                      {featureSections[activeTab].description}
                    </p>

                    {/* Bullet Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {featureSections[activeTab].details.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-[#b692ff] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive UI Mockup Widget */}
                  <div className="mt-4">{featureSections[activeTab].widget}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Clean Dark Theme Bottom Download Banner */}
      <section className="bg-black text-white py-20 px-6 sm:px-10 lg:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#121218] via-[#0d0d12] to-black border border-white/15 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl"
          >
            <div className="space-y-6 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b692ff]/20 text-[#b692ff] text-xs font-mono">
                <Download className="w-3.5 h-3.5" />
                <span>15 Days Full Access Free Trial</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Start Managing Your Pharmacy <span className="text-[#b692ff]">In 2 Minutes</span>
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Download the setup file directly, install on Windows, and test all inventory, sales, low stock alerts, and distributor features for 15 days completely free.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center lg:items-end space-y-4">
              <a
                href="https://github.com/tahaawan0094/Vertexia-pharmacy-pos/releases/download/v1.0.0/MedKit.POS.Setup.exe"
                download="MedKit.POS.Setup.exe"
                className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-[#b692ff] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#a273ff] hover:shadow-[0_0_35px_rgba(182,146,255,0.4)] transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download Free For Windows</span>
              </a>
              <div className="flex items-center gap-3 text-xs font-mono text-white/50 pt-1">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> Windows .exe
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#b692ff]" /> No Credit Card Required
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
