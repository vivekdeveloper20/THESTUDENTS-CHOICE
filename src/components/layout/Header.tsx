'use client';

import Link from 'next/link';
import { Button, Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure, useWindowScroll } from '@mantine/hooks';

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();
  const scrolled = (scroll.y ?? 0) > 8;

  const navLinks = [
    { label: 'Study Abroad', href: '/study-abroad' },
    { label: 'Education Loan', href: '/education-loan' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Tools', href: '/tools' },
  ];

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
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <img 
              src="/assets/images/header-logo.png" 
              alt="Student's Choice" 
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Navigation Menu (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="relative text-black font-semibold text-[15px] transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[#8424e8] after:transition-[width] after:duration-300 hover:text-[#8424e8] hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Button (Desktop) */}
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

          {/* Mobile Menu Toggle */}
          <Burger 
            opened={opened} 
            onClick={toggle} 
            className="md:hidden" 
            size="sm" 
            color="#8424e8"
          />
          
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title={
          <img 
            src="/assets/images/header-logo.png" 
            alt="Student's Choice" 
            className="h-30 w-auto object-contain"
          />
        }
        className="md:hidden"
        zIndex={100}
      >
        <Stack gap="lg" mt="xl">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href} 
              onClick={close}
              className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4"
            >
              {link.label}
            </Link>
          ))}
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
