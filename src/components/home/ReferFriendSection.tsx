'use client';

import Link from 'next/link';
import { Button } from '@mantine/core';
import { motion } from 'framer-motion';

export function ReferFriendSection() {
  return (
    <section className="w-full bg-white pb-16 px-4 sm:px-6 lg:px-8 mt-12 mb-0">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-[24px] bg-gradient-to-r from-[#9b30f0] via-[#8424e8] to-[#6a16c9] flex flex-col md:flex-row items-stretch min-h-[320px] mt-24 shadow-[0_30px_70px_rgba(132,36,232,0.30)]"
          style={{ overflow: 'visible' }}
        >
          {/* Background concentric rings */}
          <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 right-[20%] -translate-y-1/2 translate-x-1/2 w-[650px] h-[650px] rounded-full border-[1.5px] border-white/10" />
            <div className="absolute top-1/2 right-[20%] -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full border-[1.5px] border-white/10 bg-white/[0.02]" />
            <div className="absolute top-1/2 right-[20%] -translate-y-1/2 translate-x-1/2 w-[350px] h-[350px] rounded-full border-[1.5px] border-white/10 bg-white/[0.03]" />
            <div className="absolute top-1/2 right-[20%] -translate-y-1/2 translate-x-1/2 w-[200px] h-[200px] rounded-full border-[1.5px] border-white/10 bg-white/[0.04]" />
          </div>

          {/* Left Column: Content */}
          <div className="w-full md:w-[65%] flex flex-col justify-center py-10 px-8 lg:pl-20 z-10 order-1">
            <span className="inline-flex items-center gap-2 self-start bg-white/15 border border-white/20 text-white text-[12px] font-semibold px-3 py-1.5 rounded-full mb-3">
              ⭐ The path to study abroad is better together with friends &amp; family
            </span>
            <h2 className="text-white text-[28px] md:text-[38px] font-extrabold leading-[1.2]">
              Refer a Friend, Earn Rewards
            </h2>
            <p className="text-white/90 mt-4 text-[16px] md:text-[17px] max-w-xl">
              Make your friends a part of the Student&apos;s Choice community and help them fast-track their future. Know someone who needs an education loan? Just introduce them to us and we&apos;ll take care of the rest.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link href="/contact-us?type=refer">
                <Button bg="white" c="#8424e8" radius="md" size="md" className="font-bold px-7 hover:bg-gray-100 transition-colors shadow-sm">
                  Refer a Friend
                </Button>
              </Link>
              <span className="text-white/90 text-sm font-semibold">🎁 Earn up to ₹5,000 per successful referral</span>
            </div>
          </div>

          {/* Right Column: Image bursting out top */}
          <div className="relative w-full md:w-[35%] flex justify-center order-2" style={{ overflow: 'visible' }}>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              src="/assets/images/refers students.png"
              alt="Refer a Friend"
              className="absolute bottom-0 z-10 w-auto object-contain object-bottom drop-shadow-[10px_0_30px_rgba(0,0,0,0.18)] pointer-events-none"
              style={{ height: '130%' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
