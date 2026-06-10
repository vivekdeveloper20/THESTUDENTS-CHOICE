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
    title: 'Globally Respected Universities',
    icon: '🎓',
    description: 'German universities are known for academic quality, research excellence, and innovation-led education.',
  },
  {
    number: 2,
    title: 'Affordable Education System',
    icon: '💰',
    description: 'Many public universities offer low or no tuition fees, making Germany one of the most cost-effective study destinations.',
  },
  {
    number: 3,
    title: 'Engineering & Technology Hub',
    icon: '🔧',
    description: 'Germany is globally recognised for engineering, automotive technology, AI, robotics, and industrial innovation.',
  },
  {
    number: 4,
    title: 'Strong Career Opportunities',
    icon: '💼',
    description: 'Students benefit from internships, practical learning, networking opportunities, and Europe-wide career pathways.',
  },
  {
    number: 5,
    title: 'Research & Innovation Focus',
    icon: '🔬',
    description: 'Germany invests heavily in science, research, sustainability, and technological advancement.',
  },
  {
    number: 6,
    title: 'Post-Study Work Opportunities',
    icon: '🚀',
    description: 'Eligible graduates may stay back after studies to explore international work opportunities.',
  },
  {
    number: 7,
    title: 'Practical Learning Approach',
    icon: '🛠️',
    description: 'Programs are designed with strong industry collaboration, real-world projects, and applied learning.',
  },
  {
    number: 8,
    title: 'Safe & Student-Friendly Environment',
    icon: '🏡',
    description: 'Germany offers excellent public infrastructure, quality of life, and student-friendly cities.',
  },
  {
    number: 9,
    title: 'Growing Demand for Skilled Professionals',
    icon: '📈',
    description: 'Industries including engineering, AI, healthcare, cybersecurity, renewable energy, and data science continue growing rapidly.',
  },
  {
    number: 10,
    title: 'Scholarships & Funding Opportunities',
    icon: '🎁',
    description: 'Many universities and organisations provide scholarships and financial support for eligible international students.',
  },
  {
    number: 11,
    title: 'End-to-End Guidance with Students Choice',
    icon: '🤝',
    description: 'From university shortlisting to visa guidance, blocked account support, education loans, and pre-departure planning, Students Choice supports students through every step.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function WhyGermanyTopChoiceSection() {
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
            Why Germany Continues to Be a{' '}
            <span className="text-[#8424e8]">Top Choice</span> for Students
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-lg leading-relaxed max-w-5xl mx-auto text-left"
          >
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
              Germany offers a powerful combination of affordable education, industry-focused learning, advanced research opportunities, and strong employability outcomes across Europe.
            </p>
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
              Choosing Germany means gaining access to world-class engineering programs, cutting-edge technology, innovation-driven research, and some of the strongest industry connections in Europe.
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
