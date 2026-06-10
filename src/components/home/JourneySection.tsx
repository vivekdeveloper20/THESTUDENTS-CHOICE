'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Students',
    description: "We'll guide you to your dream course — from course selection to campus life.",
    buttonText: 'Sign up',
    href: '/contact-us',
    image: '/assets/images/journey/students.jpg',
    tag: 'For Students',
    icon: '🎓',
    color: 'from-[#8424e8] to-[#6c1cb8]',
  },
  {
    title: 'Agents',
    description: 'Get support to submit quick and compliant applications, and earn your commissions.',
    buttonText: 'Become a Partner',
    href: '/partner',
    image: '/assets/images/journey/agents.jpg',
    tag: 'For Agents',
    icon: '🤝',
    color: 'from-[#6c1cb8] to-[#4f0fa3]',
  },
  {
    title: 'Institutions',
    description: 'Increase your reach and gain high-quality applications by partnering with us.',
    buttonText: 'Become a Partner',
    href: '/partner',
    image: '/assets/images/journey/Institutions.jpg',
    tag: 'For Institutions',
    icon: '🏛️',
    color: 'from-[#4f0fa3] to-[#3b0d8a]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function JourneySection() {
  return (
    <section className="w-full relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'linear-gradient(135deg, #faf7ff 0%, #f3ebff 50%, #fdf8ff 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#8424e8]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#6c1cb8]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#f3ebff] text-[#8424e8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Who We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Start Your Journey{' '}
            <span className="text-[#8424e8]">With Us</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Whether you&apos;re a student, agent, or institution — we have the right solution for you.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(132,36,232,0.10)] border border-[#ede8f7] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-60`} />

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <span>{card.icon}</span>
                    {card.tag}
                  </span>
                </div>

                {/* Number */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                  <span className="text-white font-black text-lg">{idx + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[#8424e8] transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed mb-7 flex-grow">
                  {card.description}
                </p>

                {/* CTA */}
                <Link
                  href={card.href}
                  className={`self-start inline-flex items-center gap-2 bg-gradient-to-r ${card.color} text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                >
                  {card.buttonText}
                  <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Bottom accent line */}
              <div className={`h-1 w-full bg-gradient-to-r ${card.color}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
