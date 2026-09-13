"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

const FAQS = [
  {
    q: "How do I get started?",
    a: "Select the plan that suits you and complete the checkout. We'll direct you to our onboarding questionnaire. No rush, though - if you're not ready, fill it out at your convenience; we'll email you the link.\n\nNeed help? Contact us anytime. And welcome aboard!",
  },
  {
    q: "Which plan is right for me?",
    a: "Each of our plans is tailor-made for small businesses. On the Website Launch Package, you get a professional online presence, including a custom website, domain, email, secure hosting and fast support. The Plus Plan, our most popular plan, offers concierge services for on-demand website edits and enhanced features to attract more customers. The Growth Plan takes it further with 1-on-1 marketing and a personalized growth strategy for your business.\n\nExplore complete plan details here and save with our yearly or two-year plans. Questions? Speak with us over Live Chat, email us at office@vertexiaagency.com, or call us at (92) 317-2981931. Our team is ready to guide you in choosing the best plan.",
  },
  {
    q: "How does this all work?",
    a: "1. Choose & Checkout: Pick your plan and proceed to checkout.\n\n2. Business Questionnaire: Complete a simple online form to give us critical details about you and your business. This step sets the stage for your personalized website.\n\n3. Launch & Training Call: Book this session to unveil your website. We'll present your new site and make any changes that you require. We'll also guide you on using our intuitive editor, empowering you to make future updates effortlessly.\n\nPlus or Growth plan members will also receive an exclusive walkthrough of your plan's features, ensuring you leverage every advantage. Remember: our goal is that you love your website, so you can request as many changes as you'd like during the first 30 days after you sign up.",
  },
  {
    q: "Can I switch plans?",
    a: "Absolutely! When upgrading or downgrading your website plan, you will receive either a prorated charge or credits, depending on the cost of your new plan.",
  },
  {
    q: "How do I cancel?",
    a: "Cancelling is an easy process. It's done from your Vertexia Business Hub. Signing up for Vertexia comes with a 30-day money-back guarantee, so if you are unhappy with your website or the service for any reason in the first 30 days, you can request a refund, no questions asked.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-12 lg:px-20 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between space-y-10">
          <div className="space-y-6">
            {/* Top Eyebrow with Line */}
            <div className="relative pt-2">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  FAQ
                </span>
              </div>
              <div className="relative mt-2 w-full h-[1px] bg-slate-200">
                <div className="absolute top-0 left-0 h-[2px] w-6 bg-[#b692ff]" />
              </div>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#4a4f5a] leading-[1.1]">
              Clearing doubts <br />
              and concerns
            </h2>

            {/* Subtitle */}
            <div className="flex items-start gap-2 pt-2 text-[#6c727e] text-sm sm:text-base">
              <span className="shrink-0 text-slate-400 font-light">—</span>
              <p>
                Explore the most common questions about working with Vertexia, all in one place.
              </p>
            </div>

            {/* Vertical Hatch/Dash Pattern Line */}
            <div className="pt-6 flex items-center gap-[3px] opacity-40 select-none">
              {Array.from({ length: 42 }).map((_, i) => (
                <div key={i} className="w-[1.5px] h-4 bg-slate-400" />
              ))}
            </div>
          </div>

          {/* Bottom Contact / Profile Section */}
          <div className="pt-8 space-y-6">
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
              Book a quick chat and we'll walk you through how we do things.
            </p>

            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
               
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-slate-800 leading-tight">
                    Muhammad Ammar
                  </h4>
                  <p className="text-[11px] text-slate-400">Project Manager</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="bg-[#b692ff] hover:bg-[#d0b7ff] text-white text-[11px] font-bold tracking-wider px-5 py-3 rounded-xl transition-transform active:scale-95 flex items-center gap-1.5 shrink-0 shadow-sm"
              >
                BOOK A CALL <span className="text-sm leading-none">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - ACCORDION */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-2xl overflow-hidden ${
                  isOpen
                    ? "bg-[#f8f9fa] p-6 border border-slate-200/60"
                    : "p-4 sm:p-5 hover:bg-slate-50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span
                    className={`text-base sm:text-lg font-medium pr-4 transition-colors ${
                      isOpen ? "text-slate-800" : "text-[#525866] group-hover:text-slate-900"
                    }`}
                  >
                    {faq.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl font-light text-[#b692ff] shrink-0 leading-none"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pt-4 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-200/60 mt-3 whitespace-pre-line">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}