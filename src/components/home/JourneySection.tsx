'use client';

import { IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: "Students",
    description: "We'll guide you to your dream course — from course selection to campus life.",
    buttonText: "Sign up",
    image: "/assets/images/journey/students.jpg"
  },
  {
    title: "Agents",
    description: "Get support to submit quick and compliant applications, and earn your commissions.",
    buttonText: "Become a partner",
    image: "/assets/images/journey/agents.jpg"
  },
  {
    title: "Institutions",
    description: "Increase your reach and gain high-quality applications by partnering with us.",
    buttonText: "Become a partner",
    image: "/assets/images/journey/Institutions.jpg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function JourneySection() {
  return (
    <section className="w-full bg-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[38px] md:text-[44px] font-bold text-[#8424e8] mb-14 tracking-tight"
        >
          Start your journey with us
        </motion.h2>
        
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
              className="bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="h-56 w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-[22px] font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed mb-8 flex-grow">
                  {card.description}
                </p>

                {/* Action Button */}
                <button className="self-start mt-auto w-max group cursor-pointer bg-[#8424e8] text-white font-semibold rounded-full flex items-center px-6 py-2.5 transition-all duration-300 hover:bg-[#6c1cb8] hover:shadow-md hover:-translate-y-0.5">
                  <span className="whitespace-nowrap">{card.buttonText}</span>
                  <IconArrowRight size={20} className="ml-2 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
