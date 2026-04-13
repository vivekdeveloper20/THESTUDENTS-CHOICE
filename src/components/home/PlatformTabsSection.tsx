'use client';

import { useState } from 'react';
import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

const tabData = [
  {
    id: 'university',
    label: 'University Selection',
    title: 'Get Your Perfect University Shortlist in Minutes',
    description: 'We analyze your academic profile, budget, and career goals to create a personalized shortlist of universities that best match your future — no guesswork, only smart decisions.',
    buttonText: 'Create Your Shortlist',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'loan',
    label: 'Education Loan',
    title: 'Secure Your Education Loan with Confidence',
    description: 'Get connected with the right lenders based on your profile. Compare offers, find the best options, and apply with confidence — with expert guidance at every step.',
    buttonText: 'Apply Now',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'insurance',
    label: 'Insurance',
    title: 'Secure Your Health Coverage Before You Fly',
    description: 'Get comprehensive health insurance plans designed for international students. We compare top plans and help you get the best coverage at the lowest cost.',
    buttonText: 'Explore Plan',
    image: 'https://images.unsplash.com/photo-1505751172107-1bc9ba880006?auto=format&fit=crop&w=600&q=80'
  }
];

export function PlatformTabsSection() {
  const [activeTab, setActiveTab] = useState('university');

  const activeContent = tabData.find(t => t.id === activeTab) || tabData[0];

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-[20px] md:text-[24px] font-bold text-[#8424e8] mb-2">
            Your All-in One Platform for Studying Abroad
          </p>
          <h2 className="text-[36px] md:text-[54px] font-extrabold text-[#520cbd] leading-tight">
            Plan, and Apply with Student&apos;s Choice
          </h2>
        </motion.div>

        {/* Tabs Bar (Capsule) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-white border border-gray-100 shadow-sm rounded-full p-2 gap-2">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-full text-[15px] md:text-[16px] font-bold transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-[#8424e8] text-white shadow-lg' 
                    : 'text-gray-500 hover:text-[#8424e8] hover:bg-purple-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Box with Gradient */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="relative w-full min-h-[500px] rounded-[40px] overflow-hidden bg-gradient-to-br from-[#520cbd] via-[#c666f5] to-[#f8f0ff] p-10 md:p-20 shadow-xl flex flex-col lg:flex-row items-center gap-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="flex flex-col lg:flex-row items-center gap-12 w-full"
            >
              {/* Text Area */}
              <div className="flex flex-col items-start gap-6 w-full lg:w-[60%]">
                <h3 className="text-[32px] md:text-[48px] font-extrabold text-white leading-[1.1] mb-2 tracking-tight">
                  {activeContent.title}
                </h3>
                
                <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed mb-6 font-medium">
                  {activeContent.description}
                </p>

                <Button
                  variant="outline"
                  color="white"
                  size="lg"
                  radius="xl"
                  rightSection={<IconArrowRight size={20} />}
                  className="hover:bg-white hover:text-[#8424e8] border-white text-white font-bold h-14 px-8 transition-all hover:scale-105 mt-auto"
                >
                  {activeContent.buttonText}
                </Button>
              </div>

              {/* Image Area */}
              <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[350px] aspect-square rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/20">
                  <img 
                    src={activeContent.image} 
                    alt={activeContent.label} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Background Decorative Flare */}
          <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-white opacity-20 blur-[100px] rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
