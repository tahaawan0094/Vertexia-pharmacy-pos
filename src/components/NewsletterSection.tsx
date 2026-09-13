"use client";

import React, { useEffect, useRef, useState } from "react";

// Canvas-based Smooth Rotating Dotted Sphere / Globe
function AnimatedDottedSphere() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    // Generate points on a sphere (Fibonacci sphere algorithm)
    const numPoints = 140;
    const points: { x: number; y: number; z: number }[] = [];
    const radius = 38;

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle

    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({ x: x * radius, y: y * radius, z: z * radius });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      angle += 0.008; // Rotation speed

      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      // Sort points by Z to render back-to-front for realistic depth
      const rotatedPoints = points.map((p) => {
        // Rotate around Y axis & slightly tilted X axis
        const x1 = p.x * cosA - p.z * sinA;
        const z1 = p.x * sinA + p.z * cosA;

        // Subtle X tilt
        const y2 = p.y * Math.cos(0.3) - z1 * Math.sin(0.3);
        const z2 = p.y * Math.sin(0.3) + z1 * Math.cos(0.3);

        return { x: x1, y: y2, z: z2 };
      });

      rotatedPoints.sort((a, b) => a.z - b.z);

      rotatedPoints.forEach((p) => {
        // Perspective projection scale based on Z depth
        const scale = (p.z + radius * 2) / (radius * 3);
        const dotRadius = Math.max(0.6, scale * 2.2);
        const opacity = Math.max(0.25, Math.min(1, scale * 0.9 + 0.1));

        ctx.beginPath();
        ctx.arc(centerX + p.x, centerY + p.y, dotRadius, 0, Math.PI * 2);
        
        // Updated to use explicit Hex Code with globalAlpha for opacity
        ctx.globalAlpha = opacity;
        ctx.fillStyle = "#B692FF";
        ctx.fill();
        ctx.globalAlpha = 1.0; // Reset alpha
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={100}
      height={100}
      className="shrink-0 pointer-events-none"
    />
  );
}

export default function NewsletterSection() {
  const [buttonState, setButtonState] = useState<'idle' | 'sending' | 'thankyou'>('idle');

  const openMailClient = (email: string) => {
    const subject = encodeURIComponent('Website Contact Request');
    const body = encodeURIComponent(`Please contact this email:\n${email}`);
    window.location.href = `mailto:office@vertexiaagency.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="w-full bg-[#f8f9fa] text-[#797D82] font-sans pt-20 pb-12 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* LEFT COLUMN - NEWSLETTER SIGN UP */}
        <div className="lg:col-span-5 space-y-6">
          {/* Heading + Animated Dotted Globe */}
          <div className="flex items-start gap-4">
            <h3 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#4a4f5a] leading-[1.1]">
              Keep you in <br />
              the loop.
            </h3>

            {/* Canvas Animated Sphere / Globe */}
            <div className="shrink-0 -mt-2">
              <AnimatedDottedSphere />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#797D82] max-w-sm font-normal">
              Get actionable website, SEO & digital growth tips delivered to your inbox. <span className="text-[#b692ff]">*</span>
          </p>

          {/* Form Controls */}
          <form
            className="space-y-4 pt-2 max-w-sm"
            onSubmit={async (event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const emailInput = form.elements.namedItem("email") as HTMLInputElement | null;
              if (!emailInput || !emailInput.value) return;

              const email = emailInput.value.trim();
              if (!email) return;

              setButtonState("sending");
              const fallbackMailto = () => {
                const subject = encodeURIComponent("Website Contact Request");
                const body = encodeURIComponent(`Please contact this email:\n${email}`);
                window.location.href = `mailto:office@vertexiaagency.com?subject=${subject}&body=${body}`;
              };

              try {
                const response = await fetch("/api/send-email", {
                  method: "POST",
                  headers: { "content-type": "application/json" },
                  body: JSON.stringify({ email }),
                });

                const responseJson = await response.json().catch(() => ({}));
                if (!response.ok) {
                  const message = typeof responseJson?.error === "string" ? responseJson.error : "Send failed";
                  console.error(message);
                  fallbackMailto();
                  setButtonState("idle");
                  return;
                }

                setButtonState("thankyou");
                emailInput.value = "";
              } catch (error) {
                console.error(error);
                fallbackMailto();
                setButtonState("idle");
                return;
              }

              window.setTimeout(() => setButtonState("idle"), 3200);
            }}
          >
            <div className="relative">
              <input
                name="email"
                type="email"
                required
                placeholder="Enter Your Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="w-full bg-transparent border-b border-slate-300 py-3 text-xs sm:text-sm text-slate-800 placeholder-[#9a9a9a] focus:outline-none focus:border-[#b692ff] transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={buttonState !== "idle"}
              className="w-full sm:w-auto bg-[#b692ff] hover:bg-[#d0b7ff] disabled:cursor-not-allowed disabled:opacity-60 text-white text-xs font-bold tracking-wider px-8 py-3.5 rounded-2xl transition-all shadow-sm active:scale-95 inline-flex items-center justify-center gap-2"
            >
              {buttonState === "idle" && "CONTACT US →"}
              {buttonState === "sending" && "SENDING..."}
              {buttonState === "thankyou" && "THANK YOU"}
            </button>
          </form>

          <div className="space-y-1 pt-1">
            <p className="text-[11px] text-[#9a9a9a]">
              By submitting, you agree to our{' '}
              <a href="/terms-of-services" className="text-[#b692ff] hover:underline font-medium">
                Terms of Service.
              </a>
            </p>
            <p className="text-[11px] text-[#b692ff] font-medium">
              * <span className="text-[#9a9a9a]">No spam, just awesome updates.</span>
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - LINKS & SOCIALS */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-16 lg:pl-12">
          {/* TOP SECTION: NAVIGATE & LINKS */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            
            {/* Column 1: Navigate */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#9a9a9a] font-semibold">
                  NAVIGATE
                </span>
                <div className="w-full h-[1px] bg-slate-200" />
              </div>

              <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium text-[#525866]">
                {[
                  { label: "Home", href: "/" },
                  { label: "Work", href: "/work" },
                  { label: "About", href: "/about" },
                  { label: "Whispers", href: "/work" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-[#b692ff] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Links */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#9a9a9a] font-semibold">
                  LINKS
                </span>
                <div className="w-full h-[1px] bg-slate-200" />
              </div>

              <ul className="space-y-2.5 text-xs tracking-wider uppercase font-medium text-[#525866]">
                {[
                  { label: "Terms of Service", href: "/terms-of-services" },
                  { label: "Privacy Policy", href: "/privacy-policy" },
                ].map((item) => (
                  <li key={item.label}>
                      <a href={item.href} className="hover:text-[#b692ff] transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* BOTTOM SECTION: SOCIALS */}
          <div className="pt-8 flex items-center justify-between gap-4 border-t border-transparent">
            <span className="text-xs sm:text-sm text-[#797D82]">
              Follow us on socials
            </span>

            <div className="flex items-center gap-4 text-xs font-bold text-[#b692ff]">
              {[
                { label: "FB", href: "https://www.facebook.com/people/Vertexia/61591263672377/" },
                { label: "IG", href: "https://www.instagram.com/vertexia_agency/" },
                { label: "X", href: "https://x.com/vertexia_agency" },
                { label: "Li", href: "https://www.linkedin.com/in/vertexia-agency/" },
                { label: "WA", href: "https://wa.me/923172981931" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM DASHED PATTERN BORDER */}
      <div className="mt-16 pt-6 flex items-center justify-center gap-[3px] opacity-30 select-none overflow-hidden">
        {Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className="w-[1.5px] h-3 bg-slate-400 shrink-0" />
        ))}
      </div>
    </footer>
  );
}