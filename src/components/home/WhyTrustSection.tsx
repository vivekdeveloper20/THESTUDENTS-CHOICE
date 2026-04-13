'use client';

import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function WhyTrustSection() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Squiggle on the far right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-full opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <path d="M150 50C100 150 180 250 120 350C60 450 140 550 100 650" stroke="#8424e8" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column: Image Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[600px] animate-float">
            <img 
              src="/assets/images/student-trust.png" 
              alt="Global Landmarks" 
              className="w-full h-auto drop-shadow-2xl"
            />
            {/* Subtle glow behind the tablet */}
            <div className="absolute inset-0 bg-blue-400 opacity-10 blur-[80px] -z-10 rounded-full"></div>
          </div>
        </motion.div>

        {/* Right Column: Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pl-10"
        >
          <h2 className="text-[32px] md:text-[44px] font-bold text-[#8424e8] leading-[1.2] mb-8">
            Why 50000+ students trust Student&apos;s Choice?
          </h2>
          
          <div className="space-y-4 mb-10">
            <p className="text-[18px] md:text-[20px] text-[#8424e8]/80 leading-relaxed max-w-[550px]">
              Because we provide expert personalized guidance, a curated network of leading educational and financial partners, and a seamless process to make your academic dreams a reality.
            </p>
          </div>

          <Button 
            variant="gradient" 
            gradient={{ from: '#8424e8', to: '#be9eff' }}
            size="lg"
            radius="xl"
            rightSection={<IconArrowRight size={18} />}
            className="px-10 h-14 font-bold text-lg shadow-lg hover:shadow-purple-200 transition-all hover:-translate-y-0.5"
          >
            Explore
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
