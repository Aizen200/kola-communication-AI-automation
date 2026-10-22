"use client";

import React from "react";

interface PlatformIcon {
  name: string;
  category: string;
  svg: React.ReactNode;
}

export default function InteractivePlatformIcons() {
  // Rich suite of 10 primary platforms across CRM, DB, AI models, and automations
  const platforms: PlatformIcon[] = [
    {
      name: "HubSpot",
      category: "CRM & Pipelines",
      svg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M18.5 7.2a3.3 3.3 0 0 0-2.4 1l-3.3-2.4a3.3 3.3 0 1 0-1.6 1.4l3.2 2.4a3.3 3.3 0 0 0 0 1.8l-4 3a2.4 2.4 0 1 0 1.2 1.6l4.2-3.1a3.3 3.3 0 1 0 2.7-5.7zm0 4.8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6.6 19.5a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm4.2-12a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6z" />
        </svg>
      )
    },
    {
      name: "Zapier",
      category: "Integration Hub",
      svg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M11 2h2v7.5l5.3-5.3 1.4 1.4-5.3 5.4H22v2h-7.6l5.4 5.3-1.4 1.4-5.4-5.3V22h-2v-7.6l-5.3 5.4-1.4-1.4 5.3-5.4H2v-2h7.6L4.3 5.7l1.4-1.4 5.3 5.3V2z" />
        </svg>
      )
    },
    {
      name: "Airtable",
      category: "Relational DB",
      svg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M11.5 2.5a.9.9 0 0 1 1 0l9.3 5.4a.9.9 0 0 1 0 1.6l-9.3 5.4a.9.9 0 0 1-1 0L2.2 9.5a.9.9 0 0 1 0-1.6l9.3-5.4zm-9 9.2l8.8 5.1v5a.9.9 0 0 1-1.4.8l-7.4-4.5a.9.9 0 0 1-.4-.8v-5.6zm19.8 0v5.6a.9.9 0 0 1-.4.8l-7.4 4.5a.9.9 0 0 1-1.4-.8v-5l8.8-5.1a.9.9 0 0 1 .4 0z" />
        </svg>
      )
    },
    {
      name: "Notion",
      category: "Workspace & SOPs",
      svg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M4.46 3.19l13.62-1.92c1.23-.17 1.78.27 2.06 1.15l2.25 14.77c.17 1.1-.38 1.83-1.78 2.03l-14 1.7c-.96.12-1.62-.27-1.89-.96L2.34 5.12c-.27-.96.22-1.73 2.12-1.93zm2.5 3.3v10.74c0 .52.33.74.85.69l1.62-.22c.55-.08.6-.33.6-.74V9.6l4.64 6.7c.36.52.74.66 1.32.58l2.25-.33c.44-.06.66-.36.66-.74V5.41c0-.5-.33-.74-.82-.69l-1.68.25c-.47.08-.58.33-.58.74v7.06l-4.78-6.9c-.36-.5-.71-.63-1.32-.55l-2.17.33c-.47.08-.6.38-.6.84z" />
        </svg>
      )
    },
    {
      name: "WhatsApp",
      category: "Business API",
      svg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.31-1.18l-.31-.18-3.12.82.83-3.04-.2-.32a8.18 8.18 0 0 1-1.26-4.34c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.18-.48-.3z" />
        </svg>
      )
    },
    {
      name: "OpenAI",
      category: "LLM & Reasoning",
      svg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M22.28 10.7a5.7 5.7 0 0 0-.48-4.63 5.8 5.8 0 0 0-4.9-2.92c-.37 0-.74.04-1.1.13a5.7 5.7 0 0 0-4.32-1.93c-2.42 0-4.57 1.5-5.4 3.74a5.75 5.75 0 0 0-3.8 2.76 5.8 5.8 0 0 0 .34 6.27 5.7 5.7 0 0 0 .48 4.63 5.8 5.8 0 0 0 4.9 2.92c.37 0 .74-.04 1.1-.13a5.7 5.7 0 0 0 4.32 1.93c2.42 0 4.57-1.5 5.4-3.74a5.75 5.75 0 0 0 3.8-2.76 5.8 5.8 0 0 0-.34-6.27zM13 20.65a4.34 4.34 0 0 1-2.6-.87l.14-.08 4.34-2.5a.73.73 0 0 0 .37-.64v-6.13l1.84 1.06v5.85a4.4 4.4 0 0 1-4.09 3.31zm-7.6-3.85a4.3 4.3 0 0 1-.56-2.69 4.38 4.38 0 0 1 1.07-2.83l.14.08 4.34 2.5a.73.73 0 0 0 .74 0l5.31-3.07v2.13l-5.07 2.93a4.4 4.4 0 0 1-5.97-.05zm-1.4-8.8a4.33 4.33 0 0 1 2.04-1.82 4.4 4.4 0 0 1 2.99-.22l-.14.08-4.34 2.5a.73.73 0 0 0-.37.64v6.13L2.48 14.2V8.35a4.4 4.4 0 0 1 1.52-.35zm12.35 1.58l-5.31 3.07v-2.13l5.07-2.93a4.4 4.4 0 0 1 4.45 7.42l-.14-.08-4.34-2.5a.73.73 0 0 0-.73 0zm2.98-2.93a4.33 4.33 0 0 1-2.04 1.82 4.4 4.4 0 0 1-2.99.22l.14-.08 4.34-2.5a.73.73 0 0 0 .37-.64V5.27l1.72 1a4.4 4.4 0 0 1-1.54 4.38zm-6.93 1.93l-2.4-1.39 2.4-1.39 2.4 1.39-2.4 1.39z" />
        </svg>
      )
    },
    {
      name: "Slack",
      category: "Team Alerts & Bots",
      svg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
        </svg>
      )
    },
    {
      name: "Sheets",
      category: "Google Sheets",
      svg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H6v-3h6v3zm0-5H6V9h6v3zm7 5h-5v-3h5v3zm0-5h-5V9h5v3z" />
        </svg>
      )
    },
    {
      name: "Claude",
      category: "Anthropic Agents",
      svg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
        </svg>
      )
    },
    {
      name: "Database",
      category: "Postgres & SQL",
      svg: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 3C7.58 3 4 4.34 4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6c0-1.66-3.58-3-8-3zm0 2c3.87 0 6 1.05 6 1s-2.13 1-6 1-6-1.05-6-1 2.13-1 6-1zm6 13c0 .05-2.13 1-6 1s-6-.95-6-1v-2.22c1.61.78 3.72 1.22 6 1.22s4.39-.44 6-1.22V18zm0-4.5c0 .05-2.13 1-6 1s-6-.95-6-1v-2.22c1.61.78 3.72 1.22 6 1.22s4.39-.44 6-1.22v2.22z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#e5e5e5] rounded-3xl p-7 border border-black/8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
      {/* Left text */}
      <div className="z-10 max-w-sm shrink-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="font-mono text-xl font-bold text-[#151619]">30+</span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-black/10 text-[#555] tracking-wider">
            PLATFORMS
          </span>
        </div>
        <p className="text-xs sm:text-[13px] text-[#4f4f4f] leading-relaxed">
          The models we build on, and the apps and databases we wire them into.
        </p>
      </div>

      {/* Smooth Continuous Infinite Moving Marquee Track matching AIthor */}
      <div 
        className="relative w-full md:w-[62%] lg:w-[65%] overflow-hidden py-2"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="animate-marquee flex items-center gap-3 sm:gap-3.5">
          {/* Duplicated list creates a seamless, infinite loop without any visual seam */}
          {[...platforms, ...platforms].map((platform, i) => (
            <div
              key={`${platform.name}-${i}`}
              className="group relative flex flex-col items-center shrink-0"
            >
              {/* White Squircle Platform Tile with Gentle Organic Wave */}
              <div 
                className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-white border border-black/10 text-[#222] group-hover:text-black group-hover:border-black/30 flex items-center justify-center shadow-xs group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-gentle-bob"
                style={{
                  animationDelay: `${(i % 5) * 0.4}s`,
                }}
              >
                {platform.svg}
              </div>

              {/* Tooltip on hover */}
              <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap px-2.5 py-0.5 rounded-full bg-[#151619] text-white text-[10px] font-mono shadow-md z-30">
                {platform.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
