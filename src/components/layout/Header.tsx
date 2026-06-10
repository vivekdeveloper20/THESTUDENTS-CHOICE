'use client';

import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button, Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';

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

/* ─── Simple dropdown data ───────────────────────────────────── */
interface DropdownItem { label: string; href: string; icon: string }

const toolsItems: DropdownItem[] = [
  { label: 'Education Loan EMI Calculator', href: '/tools/emi-calculator', icon: '🧮' },
  { label: 'INR USD Calculator', href: '/tools/inr-usd-calculator', icon: '💱' },
  { label: 'Loan Eligibility Checker', href: '/tools/loan-eligibility', icon: '✅' },
  { label: 'Currency Converter', href: '/tools/currency-converter', icon: '🔄' },
  { label: 'About Us', href: '/about-us', icon: '🏫' },
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
        className="flex items-center text-black font-semibold text-[15px] transition-colors hover:text-[#8424e8] focus:outline-none"
        aria-expanded={open}
      >
        Study Abroad
        <ChevronDown open={open} />
      </button>

      {/* Mega panel */}
      <div
        className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[880px] bg-white rounded-2xl shadow-[0_24px_70px_rgba(132,36,232,0.18)] border border-[#ede8f7] overflow-hidden transition-all duration-200 origin-top z-50 ${
          open
            ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
            : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
        }`}
      >
        {/* Purple top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#8424e8] to-[#b36af5]" />

        {/* Header banner */}
        <div className="px-6 py-3 bg-gradient-to-r from-[#f9f5ff] to-[#fdf8ff] border-b border-[#ede8f7]">
          <p className="text-[13px] font-semibold text-[#8424e8] uppercase tracking-widest">
            🌍 Explore Study Destinations
          </p>
        </div>

        {/* World map + country lists */}
        <WorldMapDropdown />

        {/* Footer CTA */}
        <div className="px-6 py-3 bg-gradient-to-r from-[#8424e8] to-[#a855f7] flex items-center justify-between">
          <span className="text-white text-[13px] font-medium">
            💡 Not sure where to study? We&apos;ll help you decide!
          </span>
          <Link
            href="/contact-us?type=counseling"
            className="text-[12px] font-bold bg-white text-[#8424e8] px-4 py-1.5 rounded-full hover:bg-[#f4eeff] transition-colors"
          >
            Free Counseling →
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Simple dropdown (Desktop) ──────────────────────────────── */
function DesktopDropdown({ label, items }: { label: string; items: DropdownItem[] }) {
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
        className="flex items-center text-black font-semibold text-[15px] transition-colors hover:text-[#8424e8] focus:outline-none"
        aria-expanded={open}
      >
        {label}
        <ChevronDown open={open} />
      </button>

      <div
        className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 min-w-[240px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(132,36,232,0.14)] border border-[#ede8f7] overflow-hidden transition-all duration-200 origin-top z-50 ${
          open
            ? 'opacity-100 scale-100 pointer-events-auto translate-y-0'
            : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
        }`}
      >
        <div className="h-1 w-full bg-gradient-to-r from-[#8424e8] to-[#b36af5]" />
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-5 py-3 text-[14px] font-medium text-gray-700 hover:bg-[#f7f0ff] hover:text-[#8424e8] transition-colors group"
            >
              <span className="text-[18px] group-hover:scale-110 transition-transform">{item.icon}</span>
              {item.label}
            </Link>
          ))}
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

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-[#ede8f7] bg-white/88 backdrop-blur-md shadow-[0_10px_40px_rgba(132,36,232,0.09)]'
          : 'border-gray-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/assets/images/header-logo.png"
              alt="Student's Choice"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <StudyAbroadMega />

            <Link
              href="/beyond-rejection"
              className="relative text-black font-semibold text-[15px] transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#8424e8] after:transition-[width] after:duration-300 hover:text-[#8424e8] hover:after:w-full"
            >
              Beyond Rejection
            </Link>

            <Link
              href="/education-loan"
              className="relative text-black font-semibold text-[15px] transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#8424e8] after:transition-[width] after:duration-300 hover:text-[#8424e8] hover:after:w-full"
            >
              Education Loan
            </Link>

            <DesktopDropdown label="Tools" items={toolsItems} />

            <Link
              href="/contact-us"
              className="relative text-black font-semibold text-[15px] transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#8424e8] after:transition-[width] after:duration-300 hover:text-[#8424e8] hover:after:w-full"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button
              radius="xl"
              size="md"
              bg="#8424e8"
              className="font-semibold px-8 shadow-[0_6px_20px_rgba(132,36,232,0.28)] transition-all hover:opacity-95 hover:shadow-[0_8px_26px_rgba(132,36,232,0.38)] hover:-translate-y-0.5"
            >
              Login
            </Button>
          </div>

          {/* Burger */}
          <Burger
            opened={opened}
            onClick={toggle}
            className="md:hidden"
            size="sm"
            color="#8424e8"
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
        className="md:hidden"
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
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-[14px] font-medium text-gray-700 hover:bg-[#f4eeff] hover:text-[#8424e8] transition-colors"
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

          {/* Tools accordion */}
          <MobileAccordion label="Tools">
            <div className="flex flex-col gap-1">
              {toolsItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-[15px] font-medium text-gray-700 hover:bg-[#f7f0ff] hover:text-[#8424e8] transition-colors"
                >
                  <span className="text-[18px]">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </MobileAccordion>

          {/* Contact Us link */}
          <Link
            href="/contact-us"
            onClick={close}
            className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4 pt-2"
          >
            Contact Us
          </Link>

          <Button
            radius="xl"
            size="lg"
            bg="#8424e8"
            className="mt-4 font-bold h-14"
          >
            Login
          </Button>
        </Stack>
      </Drawer>
    </header>
  );
}
