"use client";

import React, { useState } from "react";
import Image from "next/image";
import InteractivePlatformIcons from "@/components/InteractivePlatformIcons";

// ─── TYPES ────────────────────────────────────────────────────────
interface ServiceTab {
  id: string;
  number: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
}

// ─── DATA ─────────────────────────────────────────────────────────
const serviceTabs: ServiceTab[] = [
  {
    id: "lead-management",
    number: "/01",
    title: "Lead Management & Follow-up Automation",
    desc: "Automatically capture leads, send WhatsApp follow-ups, qualify prospects, and update your CRM so your sales team can focus on closing deals.",
    tags: [
      "LEAD CAPTURE AND ROUTING",
      "WHATSAPP FOLLOW-UPS",
      "CRM PIPELINE UPDATES",
      "PROSPECT QUALIFICATION"
    ],
    image: "https://framerusercontent.com/images/asQa6gsMqcRwvrpFilKoebV2sc.jpg"
  },
  {
    id: "quotation-automation",
    number: "/02",
    title: "Quotation & Document Automation",
    desc: "Turn customer enquiries into professional quotations and business documents using approved pricing, templates, and automated workflows.",
    tags: [
      "DYNAMIC PRICING RULES",
      "AUTOMATED QUOTATIONS",
      "DOCUMENT WORKFLOWS",
      "TEMPLATE GENERATION"
    ],
    image: "https://framerusercontent.com/images/zD3UuYyXMmL8fnvkZzrayutgKOY.jpg"
  },
  {
    id: "workforce-automation",
    number: "/03",
    title: "Attendance & Workforce Automation",
    desc: "Simplify employee attendance with geofenced check-ins, selfie verification, automated records, and attendance reports for managers.",
    tags: [
      "GEOFENCED CHECK-INS",
      "SELFIE VERIFICATION",
      "AUTOMATED ATTENDANCE",
      "MANAGER REPORTS"
    ],
    image: "https://framerusercontent.com/images/auGJPuua76bbDYRekD2oK5eow.jpg"
  },
  {
    id: "data-entry",
    number: "/04",
    title: "Data Entry & Workflow Automation",
    desc: "Eliminate repetitive manual tasks by connecting your business tools, synchronizing data, and automating routine operations across spreadsheets, forms, and databases.",
    tags: [
      "TOOL INTEGRATIONS",
      "DATA SYNCHRONIZATION",
      "SPREADSHEETS & FORMS",
      "ZERO MANUAL ENTRY"
    ],
    image: "https://framerusercontent.com/images/jp3l3SNbav0gU2iuljYpuGnTB8.jpg"
  }
];

const faqs = [
  {
    q: "01/ What does Kola actually do?",
    a: "Kola builds practical automations for real business workflows. We connect your existing tools — WhatsApp, Sheets, CRM, email, and ERPs — so your team stops doing manual copy-pasting, follow-ups, and repetitive data entry."
  },
  {
    q: "02/ How do I get started?",
    a: "Tell us about the repetitive task slowing your team down using the form below. We'll review your process and provide a preliminary scope assessment within 24 business hours."
  },
  {
    q: "03/ How long until we see working automations?",
    a: "We target working automations in 30 days. We start with a focused pilot workflow so you see tangible time saved immediately rather than waiting for an oversized multi-month IT project."
  },
  {
    q: "04/ Do we need technical engineers on our team?",
    a: "None. Kola handles all architecture, API connections, logic, and testing. You only need someone who knows your current process to explain how it works."
  },
  {
    q: "05/ Who owns the systems and data?",
    a: "You own 100% of your data and workflows. Everything runs directly inside your own approved accounts and platforms."
  },
  {
    q: "06/ What tools do you connect?",
    a: "WhatsApp Business API, Google Workspace, Airtable, HubSpot, custom SQL databases, Zapier, n8n, Slack, and any software with a standard API or webhook."
  }
];

export default function KolaLandingPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  // Calculator State
  const [teamSize, setTeamSize] = useState<number>(6);
  const [hoursPerDay, setHoursPerDay] = useState<number>(3);
  const [workingDays, setWorkingDays] = useState<number>(22);
  const [monthlySalary, setMonthlySalary] = useState<number>(45000);
  const [autoPct, setAutoPct] = useState<number>(65);

  // Enquiry Form State
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    interest: "Lead Management & Follow-up Automation",
    task: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [formErr, setFormErr] = useState("");

  // Calculator Calculations
  const monthlyWorkingHours = workingDays * 8.5;
  const annualTaskHours = teamSize * hoursPerDay * workingDays * 12;
  const annualHoursFreed = Math.round(annualTaskHours * (autoPct / 100));
  const hourlyRate = monthlySalary / (monthlyWorkingHours || 1);
  const annualCapacityValue = Math.round(annualHoursFreed * hourlyRate);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleApplyCalc = () => {
    setForm(prev => ({
      ...prev,
      task: `Team of ${teamSize} people spending ${hoursPerDay}h/day on manual tasks (~${annualHoursFreed.toLocaleString()} hours/year potential automation capacity).`
    }));
    scrollTo("enquiry");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.task.trim()) {
      setFormErr("Please fill in your name, work email, and a description of your manual task.");
      return;
    }
    setFormErr("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] text-[#151619] selection:bg-[#151619] selection:text-white relative bg-grain">
      
      {/* Outer border container with dashed borders matching AIthor */}
      <div className="max-w-[1280px] mx-auto border-x border-dashed border-[#dcdcdc] min-h-screen bg-[#f0f0f0] relative">

        {/* ══════════════════════════════════════════════════════════
            HEADER & NAVIGATION
        ══════════════════════════════════════════════════════════ */}
        <header className="sticky top-0 z-50 bg-[#f0f0f0]/95 backdrop-blur-md border-b border-dashed border-[#dcdcdc]">
          <div className="px-6 sm:px-10 h-20 flex items-center justify-between">
            
            {/* Left: Brand Wordmark (Logo icon removed, renamed to Kola Communication) */}
            <a href="#" className="flex items-center group">
              <span className="font-editorial text-2xl font-bold tracking-tight text-[#151619] group-hover:opacity-85 transition-opacity">
                Kola Communication
              </span>
            </a>

            {/* Center: Navigation Links with Dot Separators */}
            <nav className="hidden md:flex items-center gap-5 text-[13px] font-medium text-[#4f4f4f]">
              <button onClick={() => scrollTo("hero")} className="hover:text-[#151619] transition-colors cursor-pointer">Home</button>
              <span className="text-[#bbb]">·</span>
              <button onClick={() => scrollTo("about")} className="hover:text-[#151619] transition-colors cursor-pointer">About</button>
              <span className="text-[#bbb]">·</span>
              <button onClick={() => scrollTo("services")} className="hover:text-[#151619] transition-colors cursor-pointer">Services</button>
              <span className="text-[#bbb]">·</span>
              <button onClick={() => scrollTo("calculator")} className="hover:text-[#151619] transition-colors cursor-pointer">Calculator</button>
              <span className="text-[#bbb]">·</span>
              <button onClick={() => scrollTo("proof")} className="hover:text-[#151619] transition-colors cursor-pointer">Why Us</button>
            </nav>

            {/* Right: Black Pill Button with Dot */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => scrollTo("enquiry")}
                className="aithor-btn-dark cursor-pointer text-xs sm:text-[13.5px]"
              >
                <span>Book a call</span>
                <span className="aithor-dot"></span>
              </button>

              {/* Mobile hamburger */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#4f4f4f] hover:text-[#151619]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden px-6 py-4 bg-[#e5e5e5] border-t border-dashed border-[#dcdcdc] space-y-3">
              <button onClick={() => scrollTo("hero")} className="block w-full text-left py-1 text-sm font-medium text-[#151619]">Home</button>
              <button onClick={() => scrollTo("about")} className="block w-full text-left py-1 text-sm font-medium text-[#151619]">About</button>
              <button onClick={() => scrollTo("services")} className="block w-full text-left py-1 text-sm font-medium text-[#151619]">Services</button>
              <button onClick={() => scrollTo("calculator")} className="block w-full text-left py-1 text-sm font-medium text-[#151619]">Calculator</button>
              <button onClick={() => scrollTo("proof")} className="block w-full text-left py-1 text-sm font-medium text-[#151619]">Why Us</button>
              <button onClick={() => scrollTo("pricing")} className="block w-full text-left py-1 text-sm font-medium text-[#151619]">Pricing</button>
            </div>
          )}
        </header>

        {/* ══════════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════════ */}
        <section id="hero" className="px-6 sm:px-10 pt-12 pb-16 lg:pt-16 lg:pb-24 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-7 space-y-7 z-10">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-black/10 bg-white/60 backdrop-blur-sm text-[12.5px] font-medium text-[#151619] shadow-xs">
                <span className="flex items-center gap-1 text-[#ff3700] font-semibold text-xs">
                  <span>✦</span> New
                </span>
                <span>AI readiness audits are open</span>
                <span className="text-black/40">›</span>
              </div>

              {/* Main Headline with Editorial Italic (from Screenshot 1) */}
              <h1 className="font-editorial text-5xl sm:text-6xl lg:text-[76px] leading-[1.04] tracking-[-0.035em] text-[#151619] font-semibold">
                We Put AI To Work<br />
                Where It Actually<br />
                <span className="italic font-normal">Pays Off.</span>
              </h1>

              {/* Supporting Subtext */}
              <p className="text-[16px] sm:text-[17px] text-[#4f4f4f] leading-relaxed max-w-xl font-normal">
                From lead follow-ups to quotations and attendance, Kola builds practical automations that reduce repetitive work and help your team focus on what matters.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button 
                  onClick={() => scrollTo("enquiry")}
                  className="aithor-btn-dark cursor-pointer text-sm"
                >
                  <span>Book a call</span>
                  <span className="aithor-dot"></span>
                </button>

                <button 
                  onClick={() => scrollTo("about")}
                  className="aithor-btn-light cursor-pointer text-sm"
                >
                  <span>How it works</span>
                </button>
              </div>

              {/* Social Proof Cluster */}
              <div className="pt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center -space-x-2">
                  <Image 
                    src="https://framerusercontent.com/images/8L30Y1QB3IXIkeM2XmcptPLA9XQ.jpg" 
                    alt="User" 
                    width={36} 
                    height={36} 
                    className="w-9 h-9 rounded-full border-2 border-[#f0f0f0] object-cover" 
                  />
                  <Image 
                    src="https://framerusercontent.com/images/qwvF1AhsbbQsLO94BpPjY1VG6fA.jpg" 
                    alt="User" 
                    width={36} 
                    height={36} 
                    className="w-9 h-9 rounded-full border-2 border-[#f0f0f0] object-cover" 
                  />
                  <Image 
                    src="https://framerusercontent.com/images/YYcjRNKml3qYfrR3SPUi4xO9NM.jpg" 
                    alt="User" 
                    width={36} 
                    height={36} 
                    className="w-9 h-9 rounded-full border-2 border-[#f0f0f0] object-cover" 
                  />
                  <Image 
                    src="https://framerusercontent.com/images/Ei69MIekny44S5h8sGQwGYhuo.jpg" 
                    alt="User" 
                    width={36} 
                    height={36} 
                    className="w-9 h-9 rounded-full border-2 border-[#f0f0f0] object-cover" 
                  />
                  <div className="w-9 h-9 rounded-full bg-[#151619] text-white text-[11px] font-bold flex items-center justify-center border-2 border-[#f0f0f0]">
                    +96
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-[#ff3700] text-sm">
                    {"★".repeat(5)}
                  </div>
                  <span className="text-[12.5px] font-medium text-[#4f4f4f]">
                    Trusted by 100+ businesses
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Classical Greek Statue with Floating Badges (Screenshot 1 & AIthor Blend) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[440px] lg:max-w-[480px] aspect-[4/5] flex items-center justify-center">
                
                {/* Athena Statue Image with Multiply Blend Mode and Soft Bottom Gradient Mask */}
                <div 
                  className="relative w-full h-full flex items-center justify-center mix-blend-multiply pointer-events-none select-none"
                  style={{
                    WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 98%)",
                    maskImage: "linear-gradient(to bottom, black 75%, transparent 98%)",
                  }}
                >
                  <Image
                    src="https://framerusercontent.com/images/zQ5ikIqphRtvCuUakOjpdQskRMs.jpg"
                    alt="Kola AI Classical Statue"
                    width={560}
                    height={700}
                    priority
                    className="w-full h-auto object-contain select-none pointer-events-none"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                {/* Floating Badge 1: Top Right (White pill, black icon disc, dark text matching AIthor) */}
                <div className="absolute top-[22%] -right-2 sm:-right-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#151619] text-[12.5px] sm:text-[13px] font-medium shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2.5 border border-black/[0.06] hover:scale-105 transition-transform duration-300">
                  <span className="w-5 h-5 rounded-full bg-[#151619] text-white flex items-center justify-center text-[10px] shrink-0">⚡</span>
                  <span className="whitespace-nowrap">Pilots live in 30 days.</span>
                </div>

                {/* Floating Badge 2: Mid Left (Positioned under Athena's raised forearm) */}
                <div className="absolute top-[50%] -left-3 sm:-left-6 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#151619] text-[12.5px] sm:text-[13px] font-medium shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2.5 border border-black/[0.06] hover:scale-105 transition-transform duration-300">
                  <span className="w-5 h-5 rounded-full bg-[#151619] text-white flex items-center justify-center text-[10px] shrink-0">🛡️</span>
                  <span className="whitespace-nowrap">Your data stays yours.</span>
                </div>

                {/* Floating Badge 3: Bottom Right (Level with bottom of shield) */}
                <div className="absolute bottom-[10%] right-2 sm:right-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#151619] text-[12.5px] sm:text-[13px] font-medium shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2.5 border border-black/[0.06] hover:scale-105 transition-transform duration-300">
                  <span className="w-5 h-5 rounded-full bg-[#151619] text-white flex items-center justify-center text-[10px] shrink-0">✦</span>
                  <span className="whitespace-nowrap">Strategy. Engineering. Adoption.</span>
                </div>

                {/* Subtle Interactive / Focal Dot matching AIthor */}
                <div className="absolute top-[52%] right-[44%] z-20 w-3 h-3 rounded-full bg-[#151619] shadow-md flex items-center justify-center pointer-events-none">
                  <span className="w-1 h-1 rounded-full bg-white"></span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            LOGO STRIP WITH DASHED BORDERS (Screenshot 2)
        ══════════════════════════════════════════════════════════ */}
        <section className="border-y border-dashed border-[#dcdcdc] bg-[#e8e8e8]/50 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 divide-x divide-dashed divide-[#dcdcdc]">
            {[
              "https://framerusercontent.com/images/Sy5KWX2qzve6uVKx4PA8RCd4A.svg",
              "https://framerusercontent.com/images/ThiPMi5yUjVdKo6t4N9wLOgcQ.svg",
              "https://framerusercontent.com/images/BrSvSHXO0TEgMV8PBsJNMJBsMzc.svg",
              "https://framerusercontent.com/images/c9xcNnzzro9hTogwyy4kKi9vXHk.svg",
              "https://framerusercontent.com/images/4I0nUFgLGKqAqwEE0S5l6yrCXzQ.svg",
              "https://framerusercontent.com/images/Qifbcz2UjIveHTCuImUZcqT9kZg.svg",
              "https://framerusercontent.com/images/gjmyWxGl1gWzjkyIh4cJfB7rg.svg",
            ].map((logoUrl, idx) => (
              <div key={idx} className="h-16 flex items-center justify-center px-4 grayscale opacity-65 hover:opacity-100 transition-opacity">
                <Image src={logoUrl} alt="Partner Logo" width={90} height={24} className="max-h-6 w-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 001: ABOUT US & BENTO GRID (Screenshot 2 & 3)
        ══════════════════════════════════════════════════════════ */}
        <section id="about" className="px-6 sm:px-10 py-20 sm:py-24 border-b border-dashed border-[#dcdcdc]">
          
          {/* Section Header */}
          <div className="mb-14">
            <span className="aithor-pill-tag mb-4">
              001/ ABOUT US
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-3">
              <div className="lg:col-span-7">
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-[#151619] font-semibold">
                  We Build The Boring Half.
                </h2>
              </div>
              <div className="lg:col-span-5 flex items-start gap-3 text-sm text-[#4f4f4f] leading-relaxed pt-2">
                <span className="text-black text-xs mt-1">●</span>
                <p>
                  The audit, the plumbing, the handover. Everything that decides whether a pilot turns into a system your team actually runs.
                </p>
              </div>
            </div>
          </div>

          {/* Bento Grid (Exact reproduction of Screenshot 3) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* Card 1: Left Tall Card (Founder/Engineer with Classical Pillars) */}
            <div 
              className="lg:col-span-4 rounded-3xl overflow-hidden relative min-h-[460px] flex flex-col justify-between p-7 text-white shadow-sm group"
              style={{ position: "relative" }}
            >
              <Image
                src="https://framerusercontent.com/images/cVVDwAtHi1477GTfIpnSQb0Si4.jpg"
                alt="Kola Team"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30"></div>

              {/* Top Tag */}
              <div className="relative z-10">
                <span className="px-2.5 py-1 rounded bg-black/40 backdrop-blur-md text-[10.5px] font-mono tracking-wider uppercase border border-white/10">
                  SINCE 2019
                </span>
              </div>

              {/* Bottom Quote & Stats */}
              <div className="relative z-10 space-y-5">
                <div>
                  <h3 className="font-editorial text-2xl font-bold leading-tight">
                    We stay past the demo.
                  </h3>
                  <p className="text-xs text-white/70 mt-1">
                    Senior people, start to finish.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/15 grid grid-cols-2 gap-3 text-left">
                  <div>
                    <div className="text-xl font-bold font-mono">40+</div>
                    <div className="text-[10px] text-white/60 tracking-wider uppercase">Systems Shipped</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-mono">12</div>
                    <div className="text-[10px] text-white/60 tracking-wider uppercase">Industries Served</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Group (Cards 2, 3, 4) */}
            <div className="lg:col-span-8 flex flex-col gap-5">
              
              {/* Row: Card 2 (What We Do) + Card 3 (68% Average) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                
                {/* Card 2: What We Do */}
                <div className="md:col-span-7 bg-[#e5e5e5] rounded-3xl p-7 flex flex-col justify-between border border-black/5">
                  <div>
                    <span className="text-[10.5px] font-mono tracking-wider uppercase text-[#777]">
                      WHAT WE DO
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-[26px] font-semibold text-[#151619] leading-snug mt-2">
                      Manual work → systems that run themselves
                    </h3>
                  </div>

                  <div className="mt-8 pt-6 border-t border-black/10">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#777] block mb-3">
                      WHO WE BUILD FOR
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {["OPS TEAMS", "REVENUE TEAMS", "FINTECH", "E-COMMERCE", "SAAS", "LOGISTICS", "+6"].map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-full border border-black/15 bg-white/40 text-[10px] font-semibold tracking-wider text-[#333]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card 3: 68% Average Workload Removed */}
                <div className="md:col-span-5 bg-[#e5e5e5] rounded-3xl p-7 flex flex-col justify-between border border-black/5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-2xl font-bold text-[#151619]">68%</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-black/10 text-[#555]">
                        AVERAGE
                      </span>
                    </div>
                    <p className="text-xs text-[#4f4f4f] leading-relaxed">
                      Manual workload removed in the first year.
                    </p>
                  </div>

                  <div className="space-y-3 mt-8">
                    <div>
                      <div className="flex justify-between text-[11px] text-[#777] mb-1 font-mono">
                        <span>BEFORE</span>
                        <span>40 hrs / week</span>
                      </div>
                      <div className="w-full h-3 bg-black/15 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-[#999] rounded-full"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-[#151619] mb-1 font-mono font-bold">
                        <span>AFTER</span>
                        <span>13 hrs / week</span>
                      </div>
                      <div className="w-full h-3 bg-black/15 rounded-full overflow-hidden">
                        <div className="w-[32%] h-full bg-[#151619] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Card 4: 30+ Platforms Bottom Wide Card with Interactive Magnetic Cursor Floating Icons */}
              <InteractivePlatformIcons />

            </div>

          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 002: EVERYTHING YOU NEED (Screenshot 4 & 5)
            Interactive Expandable Accordion Carousel!
        ══════════════════════════════════════════════════════════ */}
        <section id="services" className="px-6 sm:px-10 py-20 sm:py-24 border-b border-dashed border-[#dcdcdc]">
          
          {/* Section Header (Book a Call button removed as requested) */}
          <div className="mb-12">
            <span className="aithor-pill-tag mb-4">
              002/ OUR SERVICES
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-[#151619] font-semibold mt-3">
              Everything You Need.
            </h2>
            <p className="text-sm sm:text-base text-[#4f4f4f] mt-2 max-w-xl">
              Strategy, automation, custom builds, and the team to run them, all in one place.
            </p>
          </div>

          {/* Interactive Horizontal Accordion Panels (Smooth 60fps Interpolated Flex Accordion - 4 Services) */}
          <div className="flex flex-col md:flex-row gap-3 sm:gap-3.5 h-[640px] sm:h-[680px] md:h-[500px] lg:h-[520px] w-full items-stretch">
            {serviceTabs.map((tab, idx) => {
              const isActive = activeTab === idx;

              return (
                <div
                  key={tab.id}
                  onClick={() => {
                    if (!isActive) setActiveTab(idx);
                  }}
                  className={`group relative rounded-[28px] overflow-hidden select-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isActive
                      ? "border-2 border-[#ff3700] shadow-xl cursor-default"
                      : "bg-[#e6e6e6] hover:bg-[#dedede] border border-black/10 cursor-pointer"
                  }`}
                  style={{
                    flex: isActive ? "4.5 1 0%" : "0.5 1 0%",
                    transform: "translateZ(0)",
                    willChange: "flex-grow, flex-basis",
                  }}
                  title={!isActive ? `Expand ${tab.title}` : undefined}
                >
                  {/* Background Statue Image with subtle dark gradient overlay (Cross-fade transition) */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none select-none ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transform: "translateZ(0)" }}
                  >
                    <Image
                      src={tab.image}
                      alt={tab.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 850px"
                      className="object-cover object-top"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                  </div>

                  {/* ACTIVE EXPANDED CONTENT: Top /01, large headline, description, tags */}
                  <div
                    className={`absolute inset-0 p-7 sm:p-9 flex flex-col justify-between z-10 transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0 pointer-events-auto delay-150"
                        : "opacity-0 translate-y-3 pointer-events-none duration-200"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-mono font-bold text-[#ff3700]">
                        {tab.number}
                      </span>
                    </div>

                    <div className="space-y-4 max-w-xl">
                      <h3 className="font-editorial text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] text-white font-normal tracking-tight">
                        {tab.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                        {tab.desc}
                      </p>

                      {/* Pill Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {tab.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-white/90"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* INACTIVE SLIM BAR CONTENT: Top /02, vertical title, bottom + button */}
                  <div
                    className={`absolute inset-0 p-4 md:py-8 md:px-3 flex md:flex-col items-center justify-between z-10 transition-opacity duration-300 ${
                      !isActive
                        ? "opacity-100 pointer-events-auto delay-100"
                        : "opacity-0 pointer-events-none duration-150"
                    }`}
                  >
                    <span className="text-xs font-mono font-bold text-[#ff3700]">
                      {tab.number}
                    </span>

                    {/* Vertical title on desktop, horizontal on mobile */}
                    <div
                      className="hidden md:block font-editorial text-base lg:text-lg font-semibold tracking-tight text-[#151619] group-hover:text-black whitespace-nowrap select-none"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {tab.title}
                    </div>
                    <div className="md:hidden font-editorial text-base font-semibold text-[#151619]">
                      {tab.title}
                    </div>

                    <div className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center text-xs font-bold text-[#151619] group-hover:bg-[#151619] group-hover:text-white transition-colors shadow-xs">
                      +
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 003: INTERACTIVE HOURS-SAVED CALCULATOR
        ══════════════════════════════════════════════════════════ */}
        <section id="calculator" className="px-6 sm:px-10 py-20 sm:py-24 border-b border-dashed border-[#dcdcdc]">
          
          <div className="mb-14">
            <span className="aithor-pill-tag mb-4">
              003/ SAVINGS CALCULATOR
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-3">
              <div className="lg:col-span-7">
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-[#151619] font-semibold">
                  How Much Time Is Manual Work Costing You?
                </h2>
              </div>
              <div className="lg:col-span-5 text-sm text-[#4f4f4f] leading-relaxed pt-2">
                Estimate how many hours your team could reclaim by automating repetitive tasks. Adjust the inputs below to see your immediate labor capacity freed.
              </div>
            </div>
          </div>

          <div className="relative bg-[#e6e6e6] rounded-[32px] p-4 sm:p-7 md:p-8 border border-black/8 shadow-sm max-w-6xl mx-auto">
            {/* Top Center Black Dot Indicator */}
            <div className="w-3 h-3 rounded-full bg-[#151619] absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-xs"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              
              {/* Sliders Input Surface: Unified architectural panel with dashed dividers */}
              <div className="lg:col-span-7 bg-[#ededed] rounded-[26px] p-6 sm:p-7 border border-black/8 flex flex-col justify-between divide-y divide-dashed divide-black/12">
                
                {/* 1. Team Size */}
                <div className="pb-5 space-y-2.5">
                  <div className="flex justify-between items-baseline gap-2">
                    <label className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#4f4f4f]">
                      Team members doing repetitive work
                    </label>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 shadow-xs shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3700]"></span>
                      <span className="font-mono text-xs font-bold text-[#151619]">{teamSize}</span>
                      <span className="font-mono text-[11px] text-[#777]">people</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                  <div className="flex justify-between text-[10.5px] text-[#777] font-mono">
                    <span>1 person</span>
                    <span>25</span>
                    <span>50 people</span>
                  </div>
                </div>

                {/* 2. Hours per day */}
                <div className="py-5 space-y-2.5">
                  <div className="flex justify-between items-baseline gap-2">
                    <label className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#4f4f4f]">
                      Hours spent per person / day on task
                    </label>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 shadow-xs shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3700]"></span>
                      <span className="font-mono text-xs font-bold text-[#151619]">{hoursPerDay}</span>
                      <span className="font-mono text-[11px] text-[#777]">hrs/day</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="8"
                    step="0.5"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(Number(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                  <div className="flex justify-between text-[10.5px] text-[#777] font-mono">
                    <span>30 mins</span>
                    <span>4 hours</span>
                    <span>8 hours</span>
                  </div>
                </div>

                {/* 3. Working Days */}
                <div className="py-5 space-y-2.5">
                  <div className="flex justify-between items-baseline gap-2">
                    <label className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#4f4f4f]">
                      Working days per month
                    </label>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 shadow-xs shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3700]"></span>
                      <span className="font-mono text-xs font-bold text-[#151619]">{workingDays}</span>
                      <span className="font-mono text-[11px] text-[#777]">days</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="28"
                    value={workingDays}
                    onChange={(e) => setWorkingDays(Number(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                  <div className="flex justify-between text-[10.5px] text-[#777] font-mono">
                    <span>15 days</span>
                    <span>22 days</span>
                    <span>28 days</span>
                  </div>
                </div>

                {/* 4. Average Monthly Salary */}
                <div className="py-5 space-y-2.5">
                  <div className="flex justify-between items-baseline gap-2">
                    <label className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#4f4f4f]">
                      Average monthly salary per person (₹)
                    </label>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 shadow-xs shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3700]"></span>
                      <span className="font-mono text-xs font-bold text-[#151619]">₹{monthlySalary.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="15000"
                    max="200000"
                    step="5000"
                    value={monthlySalary}
                    onChange={(e) => setMonthlySalary(Number(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                  <div className="flex justify-between text-[10.5px] text-[#777] font-mono">
                    <span>₹15k</span>
                    <span>₹1 Lakh</span>
                    <span>₹2 Lakh</span>
                  </div>
                </div>

                {/* 5. Percentage automatable */}
                <div className="pt-5 space-y-2.5">
                  <div className="flex justify-between items-baseline gap-2">
                    <label className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#4f4f4f]">
                      Portion of task that can be automated
                    </label>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 shadow-xs shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3700]"></span>
                      <span className="font-mono text-xs font-bold text-[#151619]">{autoPct}%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="90"
                    step="5"
                    value={autoPct}
                    onChange={(e) => setAutoPct(Number(e.target.value))}
                    className="w-full cursor-pointer"
                  />
                  <div className="flex justify-between text-[10.5px] text-[#777] font-mono">
                    <span>20% (Partial)</span>
                    <span>65% (Recommended)</span>
                    <span>90% (High potential)</span>
                  </div>
                </div>

              </div>

              {/* Output Results Card (Solid Dark Architectural Card matching Why Us & Pricing) */}
              <div className="lg:col-span-5 bg-[#151619] text-white rounded-[26px] p-7 sm:p-9 flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden">
                <div>
                  {/* Top Status Header */}
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-white/60 pb-5 border-b border-dashed border-white/15">
                    <span>PROJECTED ANNUAL IMPACT</span>
                    <span className="inline-flex items-center gap-1.5 text-[#ff3700] font-semibold text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff3700] animate-pulse"></span>
                      CALCULATED
                    </span>
                  </div>

                  <div className="space-y-6 pt-6">
                    {/* Metric 1 */}
                    <div>
                      <span className="text-[11px] text-white/60 uppercase tracking-wider font-mono block mb-1">
                        Estimated Annual Hours Freed
                      </span>
                      <div className="font-editorial text-5xl sm:text-6xl text-white font-normal tracking-tight">
                        {annualHoursFreed.toLocaleString()} <span className="font-sans text-base text-white/50 font-normal">hrs/yr</span>
                      </div>
                      <p className="text-xs text-white/65 mt-1.5 font-light">
                        Equivalent to ~{Math.round(annualHoursFreed / (workingDays * 8.5 * 12) * 10) / 10} full-time capacity equivalents.
                      </p>
                    </div>

                    {/* Metric 2 */}
                    <div className="pt-6 border-t border-dashed border-white/15">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[11px] text-white/60 uppercase tracking-wider font-mono">
                          Annual Labour Capacity Value
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 text-[10.5px] font-mono border border-white/15">
                          Capacity Freed
                        </span>
                      </div>
                      <div className="font-editorial text-4xl sm:text-5xl text-[#ff3700] font-normal tracking-tight">
                        ₹{annualCapacityValue.toLocaleString("en-IN")}
                      </div>
                      <p className="text-[11px] text-white/50 mt-2.5 leading-relaxed font-light">
                        *Note: Represents estimated capacity and time freed to redeploy on revenue-generating work.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-8">
                  <button
                    onClick={handleApplyCalc}
                    className="w-full py-4 px-6 rounded-full bg-white hover:bg-[#f0f0f0] text-[#151619] font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:scale-[1.01]"
                  >
                    <span>Get My Automation Plan</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#151619]"></span>
                  </button>
                  <p className="text-center text-[10.5px] text-white/50 mt-2.5 font-mono">
                    Pre-fills your numbers into the scoping form below
                  </p>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 004: WHY US / AI PARTNER DONE RIGHT (Screenshot Exact Match)
        ══════════════════════════════════════════════════════════ */}
        <section id="proof" className="px-6 sm:px-10 py-20 sm:py-24 border-b border-dashed border-[#dcdcdc]">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <span className="aithor-pill-tag mb-4">
              004/ WHY US
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-[#151619] font-semibold mt-3">
              AI Partner, Done Right.
            </h2>
            <p className="text-sm sm:text-base text-[#4f4f4f] mt-3">
              The difference between a quick fix and a system that lasts.
            </p>
          </div>

          {/* 3-Column Comparison Table Container matching AIthor Screenshot */}
          <div className="relative bg-[#e6e6e6] rounded-[32px] p-3 sm:p-4 border border-black/8 max-w-6xl mx-auto shadow-sm">
            {/* Top Center Black Dot Indicator */}
            <div className="w-3 h-3 rounded-full bg-[#151619] absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-xs"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 items-stretch">
              
              {/* Column 1: Freelance */}
              <div className="p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#151619] mb-6">
                    Freelance
                  </h3>

                  <div className="divide-y divide-dashed divide-black/10">
                    {[
                      "One person, limited capacity",
                      "Narrow skill set, gaps in others",
                      "Slows down when they get busy",
                      "Little process or documentation",
                      "Gone the moment it ships"
                    ].map((item, idx) => (
                      <div key={idx} className="py-4.5 flex items-center gap-3.5 text-xs sm:text-[13.5px] text-[#4f4f4f]">
                        <span className="text-black/45 text-sm font-light shrink-0">✕</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2: Other Agencies */}
              <div className="p-6 sm:p-7 flex flex-col justify-between border-t md:border-t-0 md:border-l border-dashed border-black/10">
                <div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#151619] mb-6">
                    Other Agencies
                  </h3>

                  <div className="divide-y divide-dashed divide-black/10">
                    {[
                      "Generic, pre-built solutions",
                      "Slow, bloated onboarding",
                      "Junior team does the real work",
                      "Locked into their tools",
                      "Handover, then radio silence"
                    ].map((item, idx) => (
                      <div key={idx} className="py-4.5 flex items-center gap-3.5 text-xs sm:text-[13.5px] text-[#4f4f4f]">
                        <span className="text-black/45 text-sm font-light shrink-0">✕</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 3: Working with Us (Hero Card with Orange Checkmarks) */}
              <div className="bg-[#151619] rounded-[26px] p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl border border-white/10">
                <div>
                  <h3 className="font-editorial text-2xl font-semibold text-white mb-6">
                    Working with Us
                  </h3>

                  <div className="divide-y divide-dashed divide-white/15">
                    {[
                      "Senior team across the full AI stack",
                      "Custom-built around your data",
                      "2–4 week pilots with clear metrics",
                      "Fully documented, owned by you",
                      "Ongoing optimisation and support"
                    ].map((item, idx) => (
                      <div key={idx} className="py-4.5 flex items-center gap-3.5 text-xs sm:text-[13.5px] text-white/90">
                        <span className="text-[#ff3700] text-sm font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 005: HOW IT WORKS
        ══════════════════════════════════════════════════════════ */}
        <section id="how-it-works" className="px-6 sm:px-10 py-20 sm:py-24 border-b border-dashed border-[#dcdcdc]">
          
          <div className="mb-14">
            <span className="aithor-pill-tag mb-4">
              005/ OUR PROCESS
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-3">
              <div className="lg:col-span-7">
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-[#151619] font-semibold">
                  From Repetitive Tasks to Working Automation
                </h2>
              </div>
              <div className="lg:col-span-5 text-sm text-[#4f4f4f] leading-relaxed pt-2">
                A simple, proven 4-step path from your first discovery call to a team that runs on reliable automations.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                num: "01",
                title: "Understand",
                desc: "We learn how your current process works, identify bottlenecks, and map the manual touchpoints."
              },
              {
                num: "02",
                title: "Design",
                desc: "We map the workflow, business rules, edge cases, data structures, and third-party integrations."
              },
              {
                num: "03",
                title: "Build and Test",
                desc: "We implement the automation and test its behaviour rigorously with real scenarios and safeguards."
              },
              {
                num: "04",
                title: "Deploy",
                desc: "We launch the agreed workflow and provide the included handover, team walkthrough, and support."
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-[#e5e5e5] rounded-3xl p-7 border border-black/10 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-bold text-[#ff3700] mb-3">
                    {step.num}/ STEP
                  </div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#151619] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4f4f4f] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 006: PRICING (Exact reproduction of AIthor)
        ══════════════════════════════════════════════════════════ */}
        <section id="pricing" className="px-6 sm:px-10 py-20 sm:py-24 border-b border-dashed border-[#dcdcdc]">
          
          <div className="mb-14">
            <span className="aithor-pill-tag mb-4">
              006/ OUR PRICING
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-3">
              <div className="lg:col-span-7">
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-[#151619] font-semibold">
                  Pricing that scales.
                </h2>
                <p className="text-sm sm:text-base text-[#4f4f4f] mt-2">
                  Start with a focused pilot, grow into an embedded partnership.
                </p>
              </div>

              {/* Monthly / Yearly Toggle Switch (from Screenshot 1) */}
              <div className="lg:col-span-5 flex lg:justify-end">
                <div className="inline-flex items-center gap-3 bg-[#e5e5e5] px-3.5 py-1.5 rounded-full border border-black/8 shadow-2xs">
                  <span className={`text-xs font-medium cursor-pointer transition-colors ${billingPeriod === "monthly" ? "font-bold text-[#151619]" : "text-[#777]"}`} onClick={() => setBillingPeriod("monthly")}>
                    Monthly
                  </span>
                  <button
                    type="button"
                    onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
                    className="w-10 h-5 bg-[#151619] rounded-full p-0.5 transition-colors relative cursor-pointer flex items-center"
                    aria-label="Toggle billing period"
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                        billingPeriod === "yearly" ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                  <span className={`text-xs font-medium cursor-pointer transition-colors ${billingPeriod === "yearly" ? "font-bold text-[#151619]" : "text-[#777]"}`} onClick={() => setBillingPeriod("yearly")}>
                    Yearly <span className="text-[#ff3700] text-[11px] font-mono font-bold">−20%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pricing Cards matching Screenshot 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Card 1: Pilot */}
            <div className="rounded-3xl bg-[#e5e5e5] p-3 border border-black/8 shadow-xs flex flex-col justify-between overflow-hidden">
              {/* Top Dark Box */}
              <div className="bg-[#151619] text-white rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
                <div>
                  <div className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center text-white/80 mb-5">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                      <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2 5-2"/>
                      <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2-5 2-5"/>
                    </svg>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold tracking-tight">
                    Pilot
                  </h3>
                  <p className="text-xs text-white/60 font-light mt-0.5">
                    Start with one high-impact win.
                  </p>
                </div>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {billingPeriod === "monthly" ? "$1.995" : "$1.595"}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                    /MONTHLY
                  </span>
                </div>
              </div>

              {/* Lower Details */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-editorial text-base font-semibold text-[#151619] mb-4">
                    What&apos;s included:
                  </h4>
                  <div className="space-y-3 text-xs text-[#333]">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>AI readiness audit</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>90-day roadmap</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>1 workflow automated or 1 AI build</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>2–4 week delivery</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>Handover docs + 1 workshop</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => scrollTo("enquiry")}
                  className="aithor-btn-dark w-full py-3.5 text-xs font-semibold justify-center shadow-xs mt-8 cursor-pointer"
                >
                  <span>Book a call</span>
                  <span className="aithor-dot"></span>
                </button>
              </div>
            </div>

            {/* Card 2: Partner (Featured with Silky Metallic Chrome Texture) */}
            <div 
              className="rounded-3xl p-3 border border-black/12 shadow-sm flex flex-col justify-between overflow-hidden relative"
              style={{
                background: "linear-gradient(145deg, #e7e8ea 0%, #f7f8f9 20%, #d8dade 45%, #ffffff 60%, #cbd0d8 85%, #e2e4e8 100%)",
              }}
            >
              {/* Subtle metallic sheen highlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/60 pointer-events-none"></div>

              {/* Top Dark Box */}
              <div className="bg-[#151619] text-white rounded-2xl p-6 flex flex-col justify-between min-h-[200px] relative z-10 shadow-md">
                <div>
                  <div className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center text-white/80 mb-5">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2-2"/>
                      <path d="m14 14-2-2a1 1 0 0 0-1.4 0l-4.3 4.3a1 1 0 0 0 0 1.4l2 2"/>
                      <path d="M18 11V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4"/>
                      <path d="M14 6h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-editorial text-2xl font-bold tracking-tight">
                      Partner
                    </h3>
                    <span className="px-2 py-0.5 rounded-full border border-white/20 text-[9px] font-mono tracking-wider uppercase text-white/80 bg-white/10">
                      POPULAR
                    </span>
                  </div>
                  <p className="text-xs text-white/60 font-light mt-0.5">
                    Your AI team, always building.
                  </p>
                </div>

                <div className="mt-6 flex items-baseline justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      {billingPeriod === "monthly" ? "$2.995" : "$2.395"}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                      /MONTHLY
                    </span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-white/80 shadow-xs"></div>
                </div>
              </div>

              {/* Lower Details */}
              <div className="p-5 flex flex-col justify-between flex-1 relative z-10">
                <div>
                  <h4 className="font-editorial text-base font-semibold text-[#151619] mb-4">
                    What&apos;s included:
                  </h4>
                  <div className="space-y-3 text-xs text-[#222]">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>Everything in Pilot</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>Multiple builds per quarter</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>Custom agents &amp; integrations</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>Bi-weekly strategy reviews</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>Priority support (Slack, 24–48h)</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => scrollTo("enquiry")}
                  className="aithor-btn-dark w-full py-3.5 text-xs font-semibold justify-center shadow-md mt-8 cursor-pointer"
                >
                  <span>Book a call</span>
                  <span className="aithor-dot"></span>
                </button>
              </div>
            </div>

            {/* Card 3: Scale */}
            <div className="rounded-3xl bg-[#e5e5e5] p-3 border border-black/8 shadow-xs flex flex-col justify-between overflow-hidden">
              {/* Top Dark Box */}
              <div className="bg-[#151619] text-white rounded-2xl p-6 flex flex-col justify-between min-h-[200px]">
                <div>
                  <div className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center text-white/80 mb-5">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                      <polyline points="16 7 22 7 22 13"/>
                    </svg>
                  </div>
                  <h3 className="font-editorial text-2xl font-bold tracking-tight">
                    Scale
                  </h3>
                  <p className="text-xs text-white/60 font-light mt-0.5">
                    Org-wide AI across teams.
                  </p>
                </div>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="font-editorial text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    {billingPeriod === "monthly" ? "$5.995" : "$4.795"}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                    /MONTHLY
                  </span>
                </div>
              </div>

              {/* Lower Details */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-editorial text-base font-semibold text-[#151619] mb-4">
                    What&apos;s included:
                  </h4>
                  <div className="space-y-3 text-xs text-[#333]">
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>Everything in Partner</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>Multi-team rollout</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>Security &amp; compliance review</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>Dedicated PM + on-call support</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-[#ff3700] font-bold text-sm leading-none mt-0.5">✔</span>
                      <span>Training program + playbooks/SOPs</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => scrollTo("enquiry")}
                  className="aithor-btn-dark w-full py-3.5 text-xs font-semibold justify-center shadow-xs mt-8 cursor-pointer"
                >
                  <span>Book a call</span>
                  <span className="aithor-dot"></span>
                </button>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center text-xs text-[#777]">
            Pricing depends on workflow complexity, integrations, and implementation requirements. No enterprise retainers.
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 007: FAQS
        ══════════════════════════════════════════════════════════ */}
        <section className="px-6 sm:px-10 py-20 sm:py-24 border-b border-dashed border-[#dcdcdc]">
          
          <div className="mb-14">
            <span className="aithor-pill-tag mb-4">
              007/ FAQS
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-3">
              <div className="lg:col-span-7">
                <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.035em] text-[#151619] font-semibold">
                  Need Answers?
                </h2>
              </div>
              <div className="lg:col-span-5 text-sm text-[#4f4f4f] leading-relaxed pt-2">
                Everything you need to know about working with Kola before getting started.
              </div>
            </div>
          </div>

          <div className="max-w-4xl divide-y divide-black/10 border-y border-black/10">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className="font-editorial text-xl sm:text-2xl font-semibold text-[#151619] group-hover:text-[#ff3700] transition-colors">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-base font-bold text-[#151619] group-hover:bg-[#151619] group-hover:text-white transition-colors">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 text-sm text-[#4f4f4f] leading-relaxed max-w-2xl">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 008: FINAL ENQUIRY FORM
        ══════════════════════════════════════════════════════════ */}
        <section id="enquiry" className="px-6 sm:px-10 py-20 sm:py-24 border-b border-dashed border-[#dcdcdc] bg-[#e8e8e8]/40">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Heading and Promises */}
            <div className="lg:col-span-5 space-y-6">
              <span className="aithor-pill-tag">
                008/ GET IN TOUCH
              </span>

              <h2 className="font-editorial text-4xl sm:text-5xl leading-[1.08] tracking-[-0.035em] text-[#151619] font-semibold">
                What Is Your Team Still Doing Manually?
              </h2>

              <p className="text-sm text-[#4f4f4f] leading-relaxed">
                Tell us about the repetitive task slowing your business down. We&apos;ll help you identify a practical automation opportunity.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#333]">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#151619] text-white flex items-center justify-center text-[10px]">✔</span>
                  <span>No pushy sales calls — just practical workflow analysis.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#151619] text-white flex items-center justify-center text-[10px]">✔</span>
                  <span>Clear scope with estimated completion timeline.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#151619] text-white flex items-center justify-center text-[10px]">✔</span>
                  <span>Works with WhatsApp, Sheets, Airtable, HubSpot, and custom CRMs.</span>
                </div>
              </div>
            </div>

            {/* Right Column: Enquiry Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/10 shadow-sm">
                
                {submitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl font-bold">
                      ✓
                    </div>
                    <h3 className="font-editorial text-3xl font-semibold text-[#151619]">
                      Automation Request Received
                    </h3>
                    <p className="text-sm text-[#4f4f4f] max-w-md mx-auto">
                      Thank you, <span className="font-bold text-[#151619]">{form.name}</span>. We&apos;ve logged your request for <span className="font-medium text-[#151619]">{form.company || "your business"}</span> regarding <span className="font-medium text-[#ff3700]">{form.interest}</span>.
                    </p>
                    <div className="p-4 rounded-2xl bg-[#f0f0f0] border border-black/5 text-xs text-[#666] text-left max-w-md mx-auto">
                      <strong>Client Note:</strong> Client-side validation confirmed. We will reach out to <strong>{form.email}</strong> within 24 business hours.
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-semibold text-[#ff3700] hover:underline cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    
                    {formErr && (
                      <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                        {formErr}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#4f4f4f] mb-1.5 uppercase tracking-wider">
                          Your Name <span className="text-[#ff3700]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl bg-[#f0f0f0] border border-black/10 focus:border-[#151619] focus:outline-none text-sm text-[#151619]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#4f4f4f] mb-1.5 uppercase tracking-wider">
                          Work Email <span className="text-[#ff3700]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#f0f0f0] border border-black/10 focus:border-[#151619] focus:outline-none text-sm text-[#151619]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#4f4f4f] mb-1.5 uppercase tracking-wider">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Acme Real Estate"
                          className="w-full px-4 py-3 rounded-xl bg-[#f0f0f0] border border-black/10 focus:border-[#151619] focus:outline-none text-sm text-[#151619]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#4f4f4f] mb-1.5 uppercase tracking-wider">
                          Automation of Interest
                        </label>
                        <select
                          value={form.interest}
                          onChange={(e) => setForm({ ...form, interest: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#f0f0f0] border border-black/10 focus:border-[#151619] focus:outline-none text-sm text-[#151619]"
                        >
                          <option value="Lead Management & Follow-up Automation">Lead Management & Follow-up Automation</option>
                          <option value="Quotation & Document Automation">Quotation & Document Automation</option>
                          <option value="Attendance & Workforce Automation">Attendance & Workforce Automation</option>
                          <option value="Data Entry & Workflow Automation">Data Entry & Workflow Automation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4f4f4f] mb-1.5 uppercase tracking-wider">
                        Brief description of the manual task <span className="text-[#ff3700]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.task}
                        onChange={(e) => setForm({ ...form, task: e.target.value })}
                        placeholder="Tell us what task your team is currently handling manually, what software you use, and where the delay happens..."
                        className="w-full px-4 py-3 rounded-xl bg-[#f0f0f0] border border-black/10 focus:border-[#151619] focus:outline-none text-sm text-[#151619]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="aithor-btn-dark w-full py-4 text-sm font-semibold cursor-pointer shadow-md justify-center"
                    >
                      <span>Request an Automation Plan</span>
                      <span className="aithor-dot"></span>
                    </button>

                    <p className="text-[11.5px] text-center text-[#777]">
                      We respond within 24 business hours with a preliminary scope assessment.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>

        </section>

        {/* ══════════════════════════════════════════════════════════
            FOOTER: WITH GIANT KOLA WORDMARK
        ══════════════════════════════════════════════════════════ */}
        <footer className="px-6 sm:px-10 pt-16 pb-12 bg-[#f0f0f0]">
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-12 border-b border-dashed border-[#dcdcdc]">
            <div className="max-w-sm space-y-3">
              <a href="#" className="font-editorial text-3xl font-bold text-[#151619]">
                Kola Communication
              </a>
              <p className="text-xs text-[#555] leading-relaxed">
                Practical automations for SMEs, real estate, finance, and operations teams. Cut manual work without IT company pricing.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 text-xs font-medium text-[#4f4f4f]">
              <button onClick={() => scrollTo("hero")} className="hover:text-[#151619] cursor-pointer">Home</button>
              <button onClick={() => scrollTo("about")} className="hover:text-[#151619] cursor-pointer">About</button>
              <button onClick={() => scrollTo("services")} className="hover:text-[#151619] cursor-pointer">Services</button>
              <button onClick={() => scrollTo("calculator")} className="hover:text-[#151619] cursor-pointer">Calculator</button>
              <button onClick={() => scrollTo("proof")} className="hover:text-[#151619] cursor-pointer">Case Studies</button>
              <button onClick={() => scrollTo("pricing")} className="hover:text-[#151619] cursor-pointer">Pricing</button>
              <button onClick={() => scrollTo("enquiry")} className="hover:text-[#151619] cursor-pointer">Contact</button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#777] gap-4">
            <div>
              &copy; 2026 Kola Communication. All rights reserved.
            </div>
            <div>
              Built for high performance &middot; Next.js &amp; Tailwind CSS
            </div>
          </div>

          {/* Giant AIthor-style serif wordmark at bottom */}
          <div className="pt-10 overflow-hidden select-none pointer-events-none">
            <h1 className="font-editorial text-[60px] sm:text-[90px] md:text-[130px] lg:text-[160px] font-bold text-[#151619]/10 leading-none tracking-tight text-center whitespace-nowrap">
              KOLA COMMUNICATION
            </h1>
          </div>

        </footer>

      </div>
    </div>
  );
}
