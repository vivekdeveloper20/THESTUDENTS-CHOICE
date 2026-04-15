'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button, Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';

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

/* ─── Study Abroad mega-menu data ────────────────────────────── */
const studyAbroadGroups = [
  {
    heading: '🌎 Popular Destinations',
    items: [
      { label: 'USA', href: '/study-abroad/usa', flag: '🇺🇸' },
      { label: 'UK', href: '/study-abroad/uk', flag: '🇬🇧' },
      { label: 'Canada', href: '/study-abroad/canada', flag: '🇨🇦' },
      { label: 'Australia', href: '/study-abroad/australia', flag: '🇦🇺' },
    ],
  },
  {
    heading: '🏰 Europe',
    items: [
      { label: 'Germany', href: '/study-abroad/germany', flag: '🇩🇪' },
      { label: 'France', href: '/study-abroad/france', flag: '🇫🇷' },
      { label: 'Ireland', href: '/study-abroad/ireland', flag: '🇮🇪' },
      { label: 'Italy', href: '/study-abroad/italy', flag: '🇮🇹' },
      { label: 'Spain', href: '/study-abroad/spain', flag: '🇪🇸' },
      { label: 'Switzerland', href: '/study-abroad/switzerland', flag: '🇨🇭' },
    ],
  },
  {
    heading: '🌏 Asia & Others',
    items: [
      { label: 'Singapore', href: '/study-abroad/singapore', flag: '🇸🇬' },
      { label: 'UAE', href: '/study-abroad/uae', flag: '🇦🇪' },
      { label: 'New Zealand', href: '/study-abroad/new-zealand', flag: '🇳🇿' },
      { label: 'India', href: '/study-abroad/india', flag: '🇮🇳' },
    ],
  },
  {
    heading: '✨ Extras',
    items: [
      { label: 'Not Sure? Get Free Counseling', href: '/contact-us?type=counseling', flag: '🤔' },
      { label: 'Talk to Expert', href: '/contact-us?type=expert', flag: '👨‍💼' },
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

const contactItems: DropdownItem[] = [
  { label: 'Book Free Consultation', href: '/contact-us?type=consultation', icon: '📅' },
  { label: 'Call Us', href: 'tel:+918888888888', icon: '📞' },
  { label: 'WhatsApp Support', href: 'https://wa.me/918888888888', icon: '💬' },
  { label: 'Email Support', href: 'mailto:hello@studentschoice.in', icon: '✉️' },
  { label: 'Become a Partner', href: '/partner', icon: '🤝' },
];

/* ─── Study Abroad Mega-menu (Desktop) ───────────────────────── */
function StudyAbroadMega() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
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
        className={`absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-[0_24px_70px_rgba(132,36,232,0.16)] border border-[#ede8f7] overflow-hidden transition-all duration-200 origin-top z-50 ${
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

        {/* Grid of groups */}
        <div className="grid grid-cols-4 gap-0 p-2">
          {studyAbroadGroups.map((group) => (
            <div key={group.heading} className="px-3 py-3">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">
                {group.heading}
              </p>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-2 py-[7px] rounded-lg text-[13.5px] font-medium text-gray-700 hover:bg-[#f4eeff] hover:text-[#8424e8] transition-colors group"
                >
                  <span className="text-[16px] group-hover:scale-110 transition-transform leading-none">
                    {item.flag}
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-3 bg-gradient-to-r from-[#8424e8] to-[#a855f7] flex items-center justify-between">
          <span className="text-white text-[13px] font-medium">
            Not sure where to study? We&apos;ll help you decide!
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

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
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
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <StudyAbroadMega />

            <Link
              href="/education-loan"
              className="relative text-black font-semibold text-[15px] transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#8424e8] after:transition-[width] after:duration-300 hover:text-[#8424e8] hover:after:w-full"
            >
              Education Loan
            </Link>

            <DesktopDropdown label="Tools" items={toolsItems} />
            <DesktopDropdown label="Contact Us" items={contactItems} />
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
            className="h-12 w-auto object-contain"
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
                    <span>{item.flag}</span>
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
          </MobileAccordion>

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

          {/* Contact Us accordion */}
          <MobileAccordion label="Contact Us">
            <div className="flex flex-col gap-1">
              {contactItems.map((item) => (
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
