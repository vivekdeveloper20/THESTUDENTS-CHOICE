'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

const studyAbroadGroups = [
  {
    heading: '🌎 Popular Destinations',
    items: [
      { label: 'USA',       href: '/study-abroad/usa',         flag: 'us' },
      { label: 'UK',        href: '/study-abroad/uk',          flag: 'gb' },
      { label: 'Canada',    href: '/study-abroad/canada',      flag: 'ca' },
      { label: 'Australia', href: '/study-abroad/australia',   flag: 'au' },
    ],
  },
  {
    heading: '🏰 Europe',
    items: [
      { label: 'Germany',     href: '/study-abroad/germany',     flag: 'de' },
      { label: 'France',      href: '/study-abroad/france',      flag: 'fr' },
      { label: 'Ireland',     href: '/study-abroad/ireland',     flag: 'ie' },
      { label: 'Italy',       href: '/study-abroad/italy',       flag: 'it' },
      { label: 'Spain',       href: '/study-abroad/spain',       flag: 'es' },
      { label: 'Switzerland', href: '/study-abroad/switzerland', flag: 'ch' },
    ],
  },
  {
    heading: '🌏 Asia & Others',
    items: [
      { label: 'Singapore',   href: '/study-abroad/singapore',   flag: 'sg' },
      { label: 'UAE',         href: '/study-abroad/uae',         flag: 'ae' },
      { label: 'New Zealand', href: '/study-abroad/new-zealand', flag: 'nz' },
    ],
  },
];

// Pin positions as % of SVG viewBox (0-100)
const mapPins = [
  { flag: 'us', label: 'USA',       sub: ['Top Universities', 'High Visa Success'],        href: '/study-abroad/usa',       x: 18,  y: 38, cardDir: 'right' },
  { flag: 'ca', label: 'Canada',    sub: ['PR Friendly', 'Great Opportunities'],           href: '/study-abroad/canada',    x: 17,  y: 28, cardDir: 'right' },
  { flag: 'gb', label: 'UK',        sub: ['World-Class Education', 'Diverse Culture'],     href: '/study-abroad/uk',        x: 46,  y: 28, cardDir: 'right' },
  { flag: 'ie', label: 'Ireland',   sub: ['Affordable Education', 'Post Study Work Visa'], href: '/study-abroad/ireland',   x: 43,  y: 30, cardDir: 'left'  },
  { flag: 'de', label: 'Germany',   sub: ['Low Tuition Fees', 'Excellent Opportunities'],  href: '/study-abroad/germany',   x: 51,  y: 27, cardDir: 'right' },
  { flag: 'au', label: 'Australia', sub: ['Quality Education', 'Work Opportunities'],      href: '/study-abroad/australia', x: 82,  y: 72, cardDir: 'left'  },
];

export function WorldMapDropdown() {
  const [zoom, setZoom] = useState(1);
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  const handleZoomIn  = useCallback(() => setZoom((z) => Math.min(z + 0.3, 2.5)), []);
  const handleZoomOut = useCallback(() => setZoom((z) => Math.max(z - 0.3, 1)), []);

  return (
    <>
      {/* Top section: country lists + CTA card */}
      <div className="grid grid-cols-[1fr_1fr_1fr_210px] gap-0 px-4 pt-4 pb-2">
        {studyAbroadGroups.map((group) => (
          <div key={group.heading} className="px-3 py-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-1">
              {group.heading}
            </p>
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-2 py-[6px] rounded-lg text-[13px] font-medium text-gray-700 hover:bg-[#f4eeff] hover:text-[#8424e8] transition-colors group"
              >
                <img
                  src={`https://flagcdn.com/20x15/${item.flag}.png`}
                  width={20}
                  height={15}
                  alt={item.label}
                  className="rounded-[2px] flex-shrink-0 group-hover:scale-110 transition-transform"
                />
                {item.label}
              </Link>
            ))}
          </div>
        ))}

        {/* CTA card */}
        <div className="bg-[#f4f0ff] rounded-xl p-4 border border-[#e0d4ff] flex flex-col justify-between">
          <div>
            <p className="text-[14px] font-black text-gray-900 leading-snug mb-1">
              Choose Your <span className="text-[#8424e8]">Dream Country</span> 🌍
            </p>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Hover over the map or select a country to know more about studying there.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#ddd4f7]">
            <div className="text-center flex-1">
              <p className="text-[12px] font-black text-[#8424e8]">🎓 5000+</p>
              <p className="text-[9px] text-gray-500">Students Guided</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-[12px] font-black text-[#8424e8]">🌍 12+</p>
              <p className="text-[9px] text-gray-500">Countries</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-[12px] font-black text-[#8424e8]">🏆 95%</p>
              <p className="text-[9px] text-gray-500">Visa Success</p>
            </div>
          </div>
        </div>
      </div>

      {/* World Map — image background with SVG pins overlay */}
      <div
        className="mx-4 mb-3 rounded-xl overflow-hidden relative select-none"
        style={{
          background: 'linear-gradient(135deg, #0f0528 0%, #1e0a5c 35%, #2d1080 65%, #0f0528 100%)',
          height: '215px',
        }}
      >
        {/* World Map SVG — inlined for crisp rendering */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center center', transition: 'transform 0.3s ease', opacity: 0.55 }}
        >
          <img
            src="/assets/images/studyabroadcountry/World.svg"
            alt="World Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[#0f0528]/40 pointer-events-none" />

        {/* Grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mgrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#a855f7" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mgrid)" />
        </svg>

        {/* Label */}
        <p className="absolute top-2 left-1/2 -translate-x-1/2 text-white/60 text-[10px] font-medium z-10 whitespace-nowrap pointer-events-none tracking-widest uppercase">
          ✦ Live Study Destinations Map ✦
        </p>

        {/* Zoom controls */}
        <div className="absolute top-8 left-3 z-20 flex flex-col gap-1">
          <button onClick={handleZoomIn}
            className="w-6 h-6 bg-[#1e0a5c]/90 border border-[#7c3aed]/70 text-white/90 rounded flex items-center justify-center text-sm font-bold hover:bg-[#7c3aed] transition-all"
            aria-label="Zoom in">+</button>
          <button onClick={handleZoomOut}
            className="w-6 h-6 bg-[#1e0a5c]/90 border border-[#7c3aed]/70 text-white/90 rounded flex items-center justify-center text-sm font-bold hover:bg-[#7c3aed] transition-all"
            aria-label="Zoom out">−</button>
        </div>

        {/* SVG pins overlay */}
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="mglow">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="mglowstrong">
              <feGaussianBlur stdDeviation="5" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* Pins */}
          {mapPins.map((pin) => {
            const px = (pin.x / 100) * 1000;
            const py = (pin.y / 100) * 500;
            const isHovered = hoveredPin === pin.label;
            const cardW = 108;
            const cardH = 46;
            const cardX = pin.cardDir === 'right' ? px + 12 : px - cardW - 12;
            const cardY = py - cardH / 2;
            const lineX2 = pin.cardDir === 'right' ? px + 12 : px - 12;

            return (
              <g key={pin.href}
                onMouseEnter={() => setHoveredPin(pin.label)}
                onMouseLeave={() => setHoveredPin(null)}
                style={{ cursor: 'pointer' }}
              >
                {/* Dashed connector line */}
                <line
                  x1={px} y1={py}
                  x2={lineX2} y2={py}
                  stroke={isHovered ? '#e879f9' : '#a855f7'}
                  strokeWidth={0.7}
                  strokeDasharray="3,2"
                  opacity={isHovered ? 1 : 0.55}
                />

                {/* Outermost ripple */}
                <circle cx={px} cy={py} r="0" fill="none" stroke="#c084fc" strokeWidth="0.5">
                  <animate attributeName="r" values="4;20;4" dur="2.4s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite"/>
                </circle>
                {/* Mid ripple */}
                <circle cx={px} cy={py} r="0" fill="none" stroke="#a855f7" strokeWidth="0.8">
                  <animate attributeName="r" values="3;13;3" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="1.8s" repeatCount="indefinite" begin="0.3s"/>
                </circle>
                {/* Inner ripple */}
                <circle cx={px} cy={py} r="0" fill="none" stroke="#e879f9" strokeWidth="1">
                  <animate attributeName="r" values="2;8;2" dur="1.2s" repeatCount="indefinite" begin="0.6s"/>
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="1.2s" repeatCount="indefinite" begin="0.6s"/>
                </circle>

                {/* Purple glow ring */}
                <circle cx={px} cy={py} r="5" fill="none"
                  stroke={isHovered ? '#e879f9' : '#a855f7'} strokeWidth="1.5"
                  filter="url(#mglow)"
                  opacity={isHovered ? 1 : 0.8}
                />
                {/* Soft halo */}
                <circle cx={px} cy={py} r="4" fill={isHovered ? '#c084fc' : '#8b5cf6'} opacity="0.35" filter="url(#mglow)"/>
                {/* White core */}
                <circle cx={px} cy={py} r={isHovered ? 3 : 2.5}
                  fill={isHovered ? '#ffffff' : '#e9d5ff'}
                  filter={isHovered ? 'url(#mglowstrong)' : 'url(#mglow)'}
                >
                  {isHovered && <animate attributeName="r" values="2.5;3.5;2.5" dur="0.8s" repeatCount="indefinite"/>}
                </circle>

                {/* Glassmorphism info card */}
                <foreignObject x={cardX} y={cardY} width={cardW} height={cardH + 10} style={{ overflow: 'visible' }}>
                  <Link href={pin.href}>
                    <div style={{
                      background: isHovered ? 'rgba(88,28,220,0.92)' : 'rgba(15,5,40,0.82)',
                      border: `1px solid ${isHovered ? 'rgba(232,121,249,0.8)' : 'rgba(139,92,246,0.4)'}`,
                      borderRadius: '8px',
                      padding: '5px 7px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '5px',
                      backdropFilter: 'blur(10px)',
                      boxShadow: isHovered
                        ? '0 0 14px rgba(232,121,249,0.55), 0 0 28px rgba(139,92,246,0.3), inset 0 1px 0 rgba(255,255,255,0.12)'
                        : '0 0 8px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.05)',
                      transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                      transition: 'all 0.2s ease',
                      minWidth: `${cardW}px`,
                    }}>
                      <img src={`https://flagcdn.com/20x15/${pin.flag}.png`} width={14} height={10} alt={pin.label}
                        style={{ borderRadius: '2px', flexShrink: 0, marginTop: '3px' }}/>
                      <div>
                        <p style={{ color: '#fff', fontSize: '10px', fontWeight: 700, lineHeight: 1.3, margin: 0 }}>{pin.label}</p>
                        {pin.sub.map((line, i) => (
                          <p key={i} style={{ color: isHovered ? 'rgba(233,213,255,0.9)' : 'rgba(196,181,253,0.6)', fontSize: '8px', lineHeight: 1.3, margin: 0 }}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </Link>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
    </>
  );
}
