'use client';

import { motion } from 'framer-motion';

interface UniversityCategory {
  icon: string;
  title: string;
  universities: string[];
  bestFor: string;
}

const categories: UniversityCategory[] = [
  {
    icon: '🏛️',
    title: 'Elite Global Institutions',
    universities: [
      'Harvard University',
      'Stanford University',
      'Columbia University',
      'University of Chicago',
      'University of Pennsylvania',
    ],
    bestFor: 'Research excellence, global brand value, Ivy League prestige, competitive careers',
  },
  {
    icon: '💼',
    title: 'STEM, Tech & Innovation',
    universities: [
      'Massachusetts Institute of Technology (MIT)',
      'Carnegie Mellon University',
      'Georgia Institute of Technology',
      'Purdue University',
      'University of California, Berkeley',
    ],
    bestFor: 'Computer Science, Engineering, AI, Data Science, cutting-edge technology programs',
  },
  {
    icon: '💰',
    title: 'Value + Quality + ROI',
    universities: [
      'Arizona State University',
      'University at Buffalo',
      'Northeastern University',
      'University of Texas at Dallas',
      'University of Illinois Chicago',
    ],
    bestFor: 'Affordable tuition, strong ROI, practical learning, career-focused programs',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function USAPopularUniversitiesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#fafbff] via-white to-[#f3eeff] relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-100/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Popular USA Universities{' '}
            <span className="text-[#8424e8]">Students Explore</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15, duration: 0.6 }}
              className="group"
            >
              {/* Card with subtle tilt effect */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
                {/* Header */}
                <div className="bg-gradient-to-br from-[#8424e8] to-[#6c47ff] px-6 py-5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
                  <div className="flex items-center gap-3 relative z-10">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="font-black text-white text-lg leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Universities List */}
                <div className="p-6 space-y-3">
                  {category.universities.map((uni, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.15 + idx * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#faf7ff] transition-colors group/item"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#8424e8]/10 to-[#6c47ff]/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <span className="text-[#8424e8] font-black text-sm">
                          {idx + 1}
                        </span>
                      </div>
                      <p className="text-gray-800 font-semibold text-sm leading-snug group-hover/item:text-[#8424e8] transition-colors">
                        {uni}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Best For Footer */}
                <div className="bg-gradient-to-br from-[#faf7ff] to-[#f3eeff] px-6 py-5 border-t border-purple-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#8424e8] mb-2">
                    Best For
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    {category.bestFor}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
