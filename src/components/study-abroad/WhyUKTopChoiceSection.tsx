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
    icon: '🎓',
    description: 'The UK is home to globally respected institutions known for academic quality, research excellence, and employer reputation.',
  },
  {
    number: 2,
    title: 'Wide Range of Courses',
    icon: '📚',
    description: 'Choose from thousands of programmes across business, technology, engineering, healthcare, law, and arts.',
  },
  {
    number: 3,
    title: 'Shorter Degree Duration',
    icon: '⏳',
    description: 'Complete undergraduate degrees in three years and masters in just one, saving both time and study costs.',
  },
  {
    number: 4,
    title: 'Strong Career Opportunities',
    icon: '💼',
    description: 'Access internships, graduate roles, and industry-linked learning that significantly supports your employability.',
  },
  {
    number: 5,
    title: 'Research & Innovation Hub',
    icon: '🔬',
    description: 'Remain at the forefront of science, technology, and finance in one of the world\'s leading innovation leaders.',
  },
  {
    number: 6,
    title: 'Multicultural Experience',
    icon: '🌍',
    description: 'Study alongside students from around the world and build a truly international professional network.',
  },
  {
    number: 7,
    title: 'Vibrant Student Lifestyle',
    icon: '🏙️',
    description: 'Experience safe, exciting, and student-friendly destinations, from global cities to peaceful campus towns.',
  },
  {
    number: 8,
    title: 'Scholarships & Funding',
    icon: '💰',
    description: 'Benefit from various scholarships, grants, and funding options available to help reduce your overall expenses.',
  },
  {
    number: 9,
    title: 'Part-Time Work Rights',
    icon: '🕒',
    description: 'Work part-time during your studies to gain valuable experience and help manage your daily living expenses.',
  },
  {
    number: 10,
    title: 'Post-Study Career Path',
    icon: '🚀',
    description: 'Explore post-study pathways that allow you to gain international work experience after completing your degree.',
  },
  {
    number: 11,
    title: 'End-to-End Support',
    icon: '🤝',
    description: 'From university shortlisting to visas and loans—Students Choice guides you through every single step.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: 'easeOut' },
  }),
};

export function WhyUKTopChoiceSection() {
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
            Why the UK Continues to Be a{' '}
            <span className="text-[#8424e8]">Top Choice</span> for Global Students
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-lg leading-relaxed max-w-5xl mx-auto text-left"
          >
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
              Choosing the UK means choosing academic excellence, international recognition, faster degree completion, and access to global opportunities. It is one of the world's most trusted education destinations.
            </p>
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
              With prestigious universities, practical learning models, multicultural campuses, and strong post-study opportunities, the UK offers a complete environment for ambitious students to grow and succeed.
            </p>
          </motion.div>
        </div>

        {/* Grid-based Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasonPoints.map((point, i) => (
            <motion.div
              key={point.number}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white/60 backdrop-blur-md border border-white p-7 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8424e8]/5 to-[#6c47ff]/5 border border-[#8424e8]/10 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-black text-[#8424e8]/40 tracking-tighter">
                      {point.number.toString().padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8424e8] transition-colors">
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
