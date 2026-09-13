"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Barcode,
  Printer,
  CreditCard,
  Tag,
  Monitor,
  HardDrive,
  CheckCircle2,
  Cpu,
  Zap,
} from "lucide-react";

const hardwareList = [
  {
    icon: Barcode,
    title: "1D & 2D Barcode Scanners",
    specs: "USB, Wireless, Bluetooth & Omnidirectional",
    description: "Plug-and-play barcode scanning for instantaneous medicine lookup and rapid billing.",
    badge: "100% COMPATIBLE",
  },
  {
    icon: Printer,
    title: "Thermal Receipt Printers",
    specs: "80mm & 58mm ESC/POS, USB, Ethernet LAN",
    description: "High-speed silent printing with automatic paper cutter and custom pharmacy header logo.",
    badge: "ESC/POS SUPPORT",
  },
  {
    icon: CreditCard,
    title: "Automatic Cash Drawers",
    specs: "RJ11 Direct Printer Trigger Kick",
    description: "Pops open automatically upon payment completion to keep cashier cash safe and organized.",
    badge: "AUTO-KICK",
  },
  {
    icon: Tag,
    title: "Barcode Label Printers",
    specs: "TVS, Xprinter, Zebra Sticker Label",
    description: "Print custom barcode stickers with MRP, batch number, and store name for unbarcoded items.",
    badge: "STICKER PRINTING",
  },
  {
    icon: Monitor,
    title: "Dual Screen Customer Display",
    specs: "HDMI, VGA & Second Pole Displays",
    description: "Show total invoice amount, items scanned, and promotional messages to customers in real time.",
    badge: "DUAL DISPLAY",
  },
  {
    icon: HardDrive,
    title: "Offline Local Database Backup",
    specs: "SQLite / Local SQL + Cloud Sync",
    description: "Never lose sales during internet outages. Local offline database syncs automatically when online.",
    badge: "OFFLINE MODE",
  },
];

export default function PharmacyPosHardware() {
  return (
    <section className="bg-white text-gray-900 py-24 px-6 sm:px-10 lg:px-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7c4dff]/10 text-[#7c4dff] text-xs font-mono tracking-widest uppercase mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>PERIPHERAL INTEGRATIONS</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black leading-tight"
          >
            100% Plug & Play <br />
            <span className="text-[#7c4dff]">Hardware Compatibility</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-gray-600 leading-relaxed"
          >
            Works seamlessly with all standard POS hardware already installed at your medical store.
          </motion.p>
        </div>

        {/* Hardware Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hardwareList.map((hw, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#7c4dff]/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#7c4dff]/10 border border-[#7c4dff]/20 text-[#7c4dff] flex items-center justify-center group-hover:bg-[#7c4dff] group-hover:text-white transition-colors duration-300">
                    <hw.icon className="w-6 h-6" />
                  </div>
                  <span className="bg-[#7c4dff]/15 text-[#7c4dff] text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold">
                    {hw.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#7c4dff] transition-colors">
                  {hw.title}
                </h3>
                <div className="text-[11px] font-mono text-gray-500 mb-3">{hw.specs}</div>
                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {hw.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ZERO DRIVER REQ.
                </span>
                <Zap className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#7c4dff] transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
