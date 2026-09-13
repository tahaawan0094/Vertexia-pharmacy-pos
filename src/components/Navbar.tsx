"use client";

import React, { useState, useRef, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Pill, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  badge: string | null;
  dropdown?: { label: string; href: string; description: string; badge?: string }[];
}

const navItems: NavItem[] = [
  {
    label: "PRODUCTS",
    badge: "NEW",
    dropdown: [
      {
        label: "Pharmacy POS",
        href: "/products/pharmacy-pos",
        description: "Complete Pharmacy Management, Batch Expiry & Sales POS",
        badge: "15D TRIAL",
      },
    ],
  },
  { label: "WORK", href: "/work", badge: "5" },
  { label: "ABOUT", href: "/about", badge: null },
  { label: "WHISPERS", href: "/", badge: "7" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const handleMouseEnterProducts = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  // Mobile Curtain Menu Variants
  const menuVariants = {
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const linkContainerVariants = {
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkItemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.4 } },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-5 sm:px-10 lg:px-12 bg-black text-white border-b border-white/10"
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-baseline group relative z-[110]">
          <span className="text-2xl sm:text-3xl text-[#b692ff] lowercase tracking-tight font-bold transition-opacity group-hover:opacity-80">
            vertexia
          </span>
          <span className="text-[#b692ff] text-xs ml-0.5 font-bold">®</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => {
            if (item.dropdown) {
              const isChildActive = item.dropdown.some((d) => pathname === d.href);

              return (
                <div
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={handleMouseEnterProducts}
                  onMouseLeave={handleMouseLeaveProducts}
                >
                  <button
                    onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                    className={`relative text-xs tracking-[0.2em] font-medium transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer ${
                      isChildActive || isProductsDropdownOpen
                        ? "text-[#b692ff]"
                        : "text-white/80 hover:text-[#b692ff]"
                    }`}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="bg-[#b692ff]/20 text-[#b692ff] border border-[#b692ff]/40 text-[9px] rounded-sm px-1 py-0 leading-tight font-mono font-semibold">
                        {item.badge}
                      </span>
                    )}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isProductsDropdownOpen ? "rotate-180 text-[#b692ff]" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isProductsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-84 bg-[#0a0a0d]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-3.5 shadow-2xl shadow-black/95 z-[120] overflow-hidden"
                      >
                        {/* Top Ambient Glow */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b692ff]/60 to-transparent" />

                        <div className="text-[10px] tracking-[0.2em] font-mono text-[#b692ff] uppercase px-3 pt-1 pb-2 flex items-center justify-between">
                          <span>Featured Product</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#b692ff] animate-ping" />
                        </div>

                        {item.dropdown.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              onClick={() => setIsProductsDropdownOpen(false)}
                              className={`group/item flex items-center gap-3.5 p-3 rounded-xl border transition-all duration-300 ${
                                isSubActive
                                  ? "bg-[#b692ff]/20 border-[#b692ff]/50 text-white shadow-lg shadow-[#b692ff]/10"
                                  : "bg-white/[0.03] border-white/10 hover:bg-[#b692ff]/10 hover:border-[#b692ff]/40 text-white/90"
                              }`}
                            >
                              <div className="w-10 h-10 rounded-xl bg-[#b692ff]/15 border border-[#b692ff]/30 text-[#b692ff] flex items-center justify-center group-hover/item:bg-[#b692ff] group-hover/item:text-black transition-all duration-300 shrink-0">
                                <Pill className="w-5 h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-sm font-bold text-white tracking-tight group-hover/item:text-[#b692ff] transition-colors">
                                    {sub.label}
                                  </span>
                                  {sub.badge && (
                                    <span className="bg-[#b692ff] text-black text-[9px] font-extrabold font-mono px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                                      {sub.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-white/60 leading-snug mt-0.5 group-hover/item:text-white/80 line-clamp-2">
                                  {sub.description}
                                </p>
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-[#b692ff] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all shrink-0" />
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                to={item.href!}
                className={`relative text-xs tracking-[0.2em] font-medium transition-colors ${
                  isActive ? "text-[#b692ff]" : "text-white/80 hover:text-[#b692ff]"
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="absolute -top-2 -right-4 bg-white text-black text-[9px] rounded-sm px-1 py-0 leading-tight font-mono font-semibold">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Right Action */}
        <Link
          to="/contact"
          className="hidden md:block text-xs tracking-[0.2em] font-medium text-white/80 hover:text-[#b692ff] transition-colors"
        >
          CONTACT
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-end gap-1.5 p-1 relative z-[110] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <span className="w-6 h-[2px] bg-white rounded-full transition-all" />
              <span className="w-4 h-[2px] bg-white rounded-full transition-all" />
              <span className="w-6 h-[2px] bg-white rounded-full transition-all" />
            </>
          )}
        </button>
      </motion.nav>

      {/* Mobile Curtain Drop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[90] bg-[#121212]/95 backdrop-blur-md flex flex-col justify-between pt-28 pb-12 px-8 md:hidden overflow-y-auto"
          >
            <motion.div
              variants={linkContainerVariants}
              className="flex flex-col items-end space-y-6 text-right w-full mt-4"
            >
              {/* Home Link */}
              <motion.div variants={linkItemVariants}>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-extrabold tracking-wider transition-colors ${
                    pathname === "/" ? "text-[#b692ff]" : "text-white hover:text-[#b692ff]"
                  }`}
                >
                  HOME
                </Link>
              </motion.div>

              {/* Dynamic Links & Accordion */}
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <motion.div key={item.label} variants={linkItemVariants} className="w-full flex flex-col items-end">
                      <button
                        onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                        className="text-3xl font-extrabold tracking-wider transition-colors text-white hover:text-[#b692ff] flex items-center gap-2"
                      >
                        <ChevronDown
                          className={`w-6 h-6 transition-transform duration-300 ${
                            isMobileProductsOpen ? "rotate-180 text-[#b692ff]" : ""
                          }`}
                        />
                        <span>{item.label}</span>
                      </button>

                      {isMobileProductsOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col items-end gap-3 mt-3 pr-2 border-r-2 border-[#b692ff]/40"
                        >
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-2 text-lg font-semibold text-[#b692ff] hover:text-white transition-colors"
                            >
                              <span>{sub.label}</span>
                              <ArrowUpRight className="w-4 h-4" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  );
                }

                const isActive = pathname === item.href;

                return (
                  <motion.div key={item.label} variants={linkItemVariants}>
                    <Link
                      to={item.href!}
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl font-extrabold tracking-wider transition-colors ${
                        isActive ? "text-[#b692ff]" : "text-white hover:text-[#b692ff]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Contact Link */}
              <motion.div variants={linkItemVariants}>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-extrabold tracking-wider transition-colors ${
                    pathname === "/contact" ? "text-[#b692ff]" : "text-white hover:text-[#b692ff]"
                  }`}
                >
                  CONTACT
                </Link>
              </motion.div>
            </motion.div>

            {/* Bottom Footer Info inside Curtain */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="border-t border-white/10 pt-6 flex justify-between items-center text-xs text-white/50"
            >
              <span>Vertexia® Agency</span>
              <span className="text-[#b692ff]">2026</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}