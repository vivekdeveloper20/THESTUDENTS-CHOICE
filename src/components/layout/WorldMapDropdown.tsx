'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

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

const mapPins = [
  { flag: 'us', label: 'USA',       sub: ['Top Universities', 'High Visa Success'],        href: '/study-abroad/usa',       coords: [-100, 40] as [number, number], cardDir: 'right' },
  { flag: 'ca', label: 'Canada',    sub: ['PR Friendly', 'Great Opportunities'],           href: '/study-abroad/canada',    coords: [-96, 56]  as [number, number], cardDir: 'right' },
  { flag: 'gb', label: 'UK',        sub: ['World-Class Education', 'Diverse Culture'],     href: '/study-abroad/uk',        coords: [-2, 54]   as [number, number], cardDir: 'right' },
  { flag: 'ie', label: 'Ireland',   sub: ['Affordable Education', 'Post Study Work Visa'], href: '/study-abroad/ireland',   coords: [-8, 48]   as [number, number], cardDir: 'left'  },
  { flag: 'de', label: 'Germany',   sub: ['Low Tuition Fees', 'Excellent Opportunities'],  href: '/study-abroad/germany',   coords: [10, 51]   as [number, number], cardDir: 'right' },
  { flag: 'au', label: 'Australia', sub: ['Quality Education', 'Work Opportunities'],      href: '/study-abroad/australia', coords: [134, -25] as [number, number], cardDir: 'left'  },
];

/* ── Animated glow marker rendered in SVG ── */
function GlowMarker({ hovered }: { hovered: boolean }) {
  return (
    <g>
      {/* Outermost ripple — slowest */}
      <circle r={18} fill="none" stroke="#c084fc" strokeWidth={0.6} opacity={hovered ? 0.5 : 0.25}>
        <animate attributeName="r" values="14;22;14" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2.4s" repeatCount="indefinite" />
      </circle>

      {/* Middle ripple */}
      <circle r={12} fill="none" stroke="#a855f7" strokeWidth={0.8} opacity={hovered ? 0.6 : 0.35}>
        <animate attributeName="r" values="9;16;9" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.45;0;0.45" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Inner ripple — fastest */}
      <circle r={7} fill="none" stroke="#e879f9" strokeWidth={1} opacity={hovered ? 0.8 : 0.5}>
        <animate attributeName="r" values="5;10;5" dur="1.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="1.2s" repeatCount="indefinite" />
      </circle>

      {/* Purple outer glow ring — static */}
      <circle
        r={5}
        fill="none"
        stroke={hovered ? '#e879f9' : '#a855f7'}
        strokeWidth={1.5}
        style={{ filter: 'drop-shadow(0 0 4px #a855f7)' }}
      />

      {/* Soft blur halo */}
      <circle
        r={4}
        fill={hovered ? '#c084fc' : '#8b5cf6'}
        opacity={0.4}
        style={{ filter: 'blur(2px)' }}
      />

      {/* White center core */}
      <circle
        r={2.5}
        fill={hovered ? '#ffffff' : '#e9d5ff'}
        style={{ filter: hovered ? 'drop-shadow(0 0 5px #fff) drop-shadow(0 0 8px #c084fc)' : 'drop-shadow(0 0 3px #a855f7)' }}
      >
        {hovered && (
          <animate attributeName="r" values="2;3;2" dur="0.8s" repeatCount="indefinite" />
        )}
      </circle>
    </g>
  );
}

export function WorldMapDropdown() {
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([20, 10]);
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);

  const handleZoomIn  = useCallback(() => setZoom((z) => Math.min(z * 1.5, 6)), []);
  const handleZoomOut = useCallback(() => setZoom((z) => Math.max(z / 1.5, 1)), []);

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
            <p className="text-[11px] text-gray-500 leading-relaxed mb-2">
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

      {/* World Map */}
      <div
        className="mx-4 mb-3 rounded-xl overflow-hidden relative"
        style={{
          background: 'linear-gradient(135deg, #0f0528 0%, #1e0a5c 35%, #2d1080 65%, #0f0528 100%)',
          height: '215px',
        }}
      >
        {/* Subtle grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#a855f7" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Label */}
        <p className="absolute top-2 left-1/2 -translate-x-1/2 text-white/60 text-[10px] font-medium z-10 whitespace-nowrap pointer-events-none tracking-widest uppercase">
          ✦ Live Study Destinations Map ✦
        </p>

        {/* Zoom controls */}
        <div className="absolute top-8 left-3 z-20 flex flex-col gap-1">
          <button
            onClick={handleZoomIn}
            className="w-6 h-6 bg-[#1e0a5c]/90 border border-[#7c3aed]/70 text-white/90 rounded flex items-center justify-center text-sm font-bold hover:bg-[#7c3aed] hover:border-[#c084fc] transition-all shadow-[0_0_8px_rgba(168,85,247,0.4)]"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            onClick={handleZoomOut}
            className="w-6 h-6 bg-[#1e0a5c]/90 border border-[#7c3aed]/70 text-white/90 rounded flex items-center justify-center text-sm font-bold hover:bg-[#7c3aed] hover:border-[#c084fc] transition-all shadow-[0_0_8px_rgba(168,85,247,0.4)]"
            aria-label="Zoom out"
          >
            −
          </button>
        </div>

        {/* Map */}
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 120, center: [20, 10] }}
          style={{ width: '100%', height: '100%' }}
        >
          {/* SVG defs for filters */}
          <defs>
            <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur1" />
              <feGaussianBlur stdDeviation="6" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-soft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <ZoomableGroup
            zoom={zoom}
            center={center}
            onMoveEnd={({ coordinates, zoom: z }) => {
              setCenter(coordinates as [number, number]);
              setZoom(z);
            }}
          >
            {/* Countries */}
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#2e1065"
                    stroke="#5b21b6"
                    strokeWidth={0.35}
                    style={{
                      default: { outline: 'none' },
                      hover:   { fill: '#4c1d95', outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Pins */}
            {mapPins.map((pin) => {
              const isHovered = hoveredPin === pin.label;
              const cardX = pin.cardDir === 'right' ? 10 : -115;
              const cardY = -28;

              return (
                <Marker
                  key={pin.href}
                  coordinates={pin.coords}
                  onMouseEnter={() => setHoveredPin(pin.label)}
                  onMouseLeave={() => setHoveredPin(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Connector line from dot to card */}
                  <line
                    x1={0}
                    y1={0}
                    x2={pin.cardDir === 'right' ? 10 : -10}
                    y2={-20}
                    stroke={isHovered ? '#e879f9' : '#a855f7'}
                    strokeWidth={0.6}
                    strokeDasharray="2,2"
                    opacity={isHovered ? 0.9 : 0.5}
                    style={{ filter: isHovered ? 'drop-shadow(0 0 2px #e879f9)' : 'none' }}
                  />

                  {/* Glowing marker */}
                  <GlowMarker hovered={isHovered} />

                  {/* Info card */}
                  <foreignObject
                    x={cardX}
                    y={cardY}
                    width={108}
                    height={54}
                    style={{ overflow: 'visible', pointerEvents: 'all' }}
                  >
                    <Link href={pin.href}>
                      <div
                        style={{
                          background: isHovered
                            ? 'rgba(88,28,220,0.92)'
                            : 'rgba(20,8,60,0.85)',
                          border: isHovered
                            ? '1px solid rgba(232,121,249,0.8)'
                            : '1px solid rgba(139,92,246,0.45)',
                          borderRadius: '8px',
                          padding: '4px 6px',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '5px',
                          backdropFilter: 'blur(8px)',
                          boxShadow: isHovered
                            ? '0 0 12px rgba(232,121,249,0.5), 0 0 24px rgba(139,92,246,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                            : '0 0 6px rgba(139,92,246,0.25), inset 0 1px 0 rgba(255,255,255,0.05)',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                          transition: 'all 0.2s ease',
                          minWidth: '100px',
                        }}
                      >
                        <img
                          src={`https://flagcdn.com/20x15/${pin.flag}.png`}
                          width={14}
                          height={10}
                          alt={pin.label}
                          style={{ borderRadius: '2px', flexShrink: 0, marginTop: '2px' }}
                        />
                        <div>
                          <p style={{ color: '#fff', fontSize: '10px', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
                            {pin.label}
                          </p>
                          {pin.sub.map((line, i) => (
                            <p key={i} style={{ color: isHovered ? 'rgba(233,213,255,0.85)' : 'rgba(196,181,253,0.6)', fontSize: '8px', lineHeight: 1.3, margin: 0 }}>
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </foreignObject>
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>
      </div>
    </>
  );
}
