'use client';

import { motion } from 'framer-motion';

interface ReasonPoint {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const reasonPoints: ReasonPoint[] = [
  {
    number: 1,
    title: 'World-Renowned Universities',
    icon: '🏛️',
    description: 'The USA is home to globally respected institutions known for academic quality, cutting-edge research, innovation, and employer recognition.',
  },
  {
    number: 2,
    title: 'Flexible Education System',
    icon: '📚',
    description: 'Students can explore electives, interdisciplinary learning, and personalised academic pathways across various fields.',
  },
  {
    number: 3,
    title: 'Strong Career Opportunities',
    icon: '💼',
    description: 'The USA offers access to internships, networking, practical training opportunities, and career-focused education.',
  },
  {
    number: 4,
    title: 'Advanced Research & Innovation',
    icon: '🔬',
    description: 'From Artificial Intelligence and Data Science to Healthcare and Robotics, the USA leads global innovation and research development.',
  },
  {
    number: 5,
    title: 'Diverse Student Community',
    icon: '🌍',
    description: 'Study alongside students from around the world, experience different cultures, and build a truly international network.',
  },
  {
    number: 6,
    title: 'STEM & Technology Advantage',
    icon: '🚀',
    description: 'Access cutting-edge programs in technology, engineering, and sciences with extended OPT opportunities for STEM graduates.',
  },
  {
    number: 7,
    title: 'Scholarships & Funding Opportunities',
    icon: '💰',
    description: 'Many universities offer scholarships, tuition support, assistantships, and merit-based funding opportunities for eligible students.',
  },
  {
    number: 8,
    title: 'Practical Learning & Industry Exposure',
    icon: '🎯',
    description: 'Programs often include internships, lab work, capstone projects, and industry collaboration that improve employability.',
  },
  {
    number: 9,
    title: 'Global Recognition & Career Value',
    icon: '🏆',
    description: 'A degree from the right US university is recognised worldwide and can create opportunities across international industries.',
  },
  {
    number: 10,
    title: 'Part-Time Work While Studying',
    icon: '🕒',
    description: 'Eligible students may work part-time during studies, helping them gain experience and manage living expenses.',
  },
  {
    number: 11,
    title: 'End-to-End Support with Students Choice',
    icon: '🤝',
    description: 'From profile evaluation and university shortlisting to education loans, visa guidance, and pre-departure support — Students Choice helps simplify your complete study abroad journey.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function WhyUSATopChoiceSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#fafbff]">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-8 max-w-4xl mx-auto leading-tight"
          >
            Why the USA Continues to Be a{' '}
            <span className="text-[#6E00E0]">Top Choice</span> for Global Students
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-lg leading-relaxed max-w-5xl mx-auto text-left"
          >
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
              Choosing the USA means gaining access to innovation-driven education, advanced research facilities, multicultural campuses, and some of the world's strongest industry connections.
            </p>
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
              The USA offers flexibility, academic freedom, and opportunities across technology, business, healthcare, engineering, and more — preparing students for long-term career growth and global success.
            </p>
          </motion.div>
        </div>

        {/* Grid-based Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasonPoints.map((point, i) => (
            <motion.div
              key={point.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white/60 backdrop-blur-md border border-white p-7 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6E00E0]/5 to-[#6c47ff]/5 border border-[#6E00E0]/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-black text-[#6E00E0]/40 tracking-tighter">
                      {point.number.toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#6E00E0] transition-colors">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {point.description}
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
