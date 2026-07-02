'use client';

import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';
import { IconArrowRight } from '@tabler/icons-react';
import { useLeadForm } from '@/components/lead/LeadModal';

const WorldMapDropdown = dynamic(
  () => import('./WorldMapDropdown').then((m) => m.WorldMapDropdown),
  {
    ssr: false,
    loading: () => (
      <div className="mx-4 mb-3 rounded-xl bg-[#1a0a4a] animate-pulse" style={{ height: '215px' }} />
    ),
  }
);

/* ─── Icon helpers ───────────────────────────────────────────── */
const ChevronDown = ({ open }: { open?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ─── Study Abroad mega-menu data (mobile only) ──────────────── */
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

/* ─── Study Abroad Mega-menu (Desktop) ───────────────────────── */
function StudyAbroadMega() {
  const [open, setOpen] = useState(false);
  const closeTimer = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer[0]) clearTimeout(closeTimer[0]);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => setOpen(false), 300);
    closeTimer[1](timer);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center whitespace-nowrap text-black font-sans font-medium text-[15px] transition-colors hover:text-[#6E00E0] focus:outline-none"
        aria-expanded={open}
      >
        Study Abroad
        <ChevronDown open={open} />
      </button>

      {/* Mega panel */}
      <div
        className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[880px] bg-white rounded-2xl shadow-[0_24px_70px_rgba(110,0,224,0.18)] border border-[#ede8f7] overflow-hidden transition-all duration-200 origin-top z-50 ${
          open
            ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
            : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
        }`}
      >
        {/* Purple top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#6E00E0] to-[#b36af5]" />

        {/* Header banner */}
        <div className="px-6 py-3 bg-gradient-to-r from-[#f9f5ff] to-[#fdf8ff] border-b border-[#ede8f7]">
          <p className="text-[13px] font-semibold text-[#6E00E0] uppercase tracking-widest">
            🌍 Explore Study Destinations
          </p>
        </div>

        {/* World map + country lists */}
        <WorldMapDropdown />

        {/* Footer CTA */}
        <div className="px-6 py-3 bg-gradient-to-r from-[#6E00E0] to-[#a855f7] flex items-center justify-between">
          <span className="text-white text-[13px] font-medium">
            💡 Not sure where to study? We&apos;ll help you decide!
          </span>
          <Link
            href="/contact-us?type=counseling"
            className="text-[12px] font-bold bg-white text-[#6E00E0] px-4 py-1.5 rounded-full hover:bg-[#f4eeff] transition-colors"
          >
            Free Counseling →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile accordion ───────────────────────────────────────── */
function MobileAccordion({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 pb-2">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full text-xl font-bold text-gray-900 py-3 focus:outline-none"
      >
        {label}
        <ChevronDown open={open} />
      </button>
      {open && <div className="mt-1 ml-2">{children}</div>}
    </div>
  );
}

/* ─── Main Header ────────────────────────────────────────────── */
export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();
  const scrolled = (scroll.y ?? 0) > 8;
  const { open: openLead } = useLeadForm();

  return (
    <header className="sticky top-0 z-50 w-full pt-3 px-3 sm:px-4 lg:px-5">
      <div
        className={`max-w-[1480px] mx-auto rounded-2xl border border-gray-100 border-t-[3px] border-t-[#6E00E0] px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-[0_12px_40px_rgba(110,0,224,0.14)]'
            : 'bg-white shadow-[0_6px_24px_rgba(110,0,224,0.08)]'
        }`}
      >
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/assets/images/header-logo.png"
              alt="Student's Choice"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Right group: Nav + CTA */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <nav className="flex items-center gap-4 xl:gap-6">
            <StudyAbroadMega />
            <Link
              href="/beyond-rejection"
              className="relative whitespace-nowrap text-black font-sans font-medium text-[15px] transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#6E00E0] after:transition-[width] after:duration-300 hover:text-[#6E00E0] hover:after:w-full"
            >
              Beyond Rejection
            </Link>
            <Link
              href="/education-loan"
              className="relative whitespace-nowrap text-black font-sans font-medium text-[15px] transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#6E00E0] after:transition-[width] after:duration-300 hover:text-[#6E00E0] hover:after:w-full"
            >
              Education Loan
            </Link>
            <div className="flex flex-col items-center justify-center whitespace-nowrap cursor-default select-none">
              <span className="text-black font-sans font-medium text-[15px]">Tools</span>
              <span className="text-[10px] font-light text-gray-400 leading-none mt-0.5">Coming soon</span>
            </div>
            <Link
              href="/contact-us"
              className="relative whitespace-nowrap text-black font-sans font-medium text-[15px] transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#6E00E0] after:transition-[width] after:duration-300 hover:text-[#6E00E0] hover:after:w-full"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center shrink-0">
            <button
              onClick={() => openLead('Apply Now')}
              className="flex items-center gap-2 shrink-0 whitespace-nowrap bg-[#6E00E0] text-white font-semibold text-[14px] px-6 py-2.5 rounded-full shadow-[0_6px_20px_rgba(110,0,224,0.28)] hover:-translate-y-0.5 hover:shadow-[0_8px_26px_rgba(110,0,224,0.38)] transition-all"
            >
              Apply Now
              <IconArrowRight size={17} className="shrink-0" />
            </button>
          </div>
          </div>

          {/* Burger */}
          <Burger
            opened={opened}
            onClick={toggle}
            className="lg:hidden"
            size="sm"
            color="#6E00E0"
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title={
          <img
            src="/assets/images/header-logo.png"
            alt="Student's Choice"
            className="h-16 w-auto object-contain"
          />
        }
        className="lg:hidden"
        zIndex={100}
      >
        <Stack gap="xs" mt="md">
          {/* Study Abroad accordion */}
          <MobileAccordion label="Study Abroad">
            {studyAbroadGroups.map((group) => (
              <div key={group.heading} className="mb-3">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-2 mb-1">
                  {group.heading}
                </p>
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-[#f4eeff] hover:text-[#6E00E0] transition-colors"
                  >
                    <img
                      src={`https://flagcdn.com/20x15/${item.flag}.png`}
                      width={20}
                      height={15}
                      alt={item.label}
                      className="rounded-[2px] flex-shrink-0"
                    />
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </MobileAccordion>

          <Link
            href="/beyond-rejection"
            onClick={close}
            className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 pt-2"
          >
            Beyond Rejection
          </Link>

          <Link
            href="/education-loan"
            onClick={close}
            className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 pt-2"
          >
            Education Loan
          </Link>

          {/* Tools — coming soon (no inner pages) */}
          <div className="flex items-center justify-between text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 pt-2">
            <span>Tools</span>
            <span className="text-[12px] font-light text-gray-400">Coming soon</span>
          </div>

          {/* Contact Us link */}
          <Link
            href="/contact-us"
            onClick={close}
            className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 pt-2"
          >
            Contact Us
          </Link>

          <button
            onClick={() => { close(); openLead('Apply Now'); }}
            className="mt-4 flex items-center justify-center gap-2 bg-[#6E00E0] text-white font-bold h-14 rounded-xl shadow-[0_6px_20px_rgba(110,0,224,0.28)]"
          >
            Apply Now <IconArrowRight size={18} />
          </button>
        </Stack>
      </Drawer>
    </header>
  );
}
