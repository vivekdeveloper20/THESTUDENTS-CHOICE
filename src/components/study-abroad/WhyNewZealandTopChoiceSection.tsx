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
    title: 'Globally Recognised Universities',
    icon: '🎓',
    description: 'New Zealand universities are respected worldwide for academic quality, research excellence, and practical education.',
  },
  {
    number: 2,
    title: 'Safe & Student-Friendly Environment',
    icon: '🌿',
    description: 'New Zealand consistently ranks among the safest countries in the world, making it highly attractive for international students.',
  },
  {
    number: 3,
    title: 'Practical & Industry-Focused Learning',
    icon: '🛠️',
    description: 'Programs are designed around real-world applications, research, innovation, and employability skills.',
  },
  {
    number: 4,
    title: 'Strong Post-Study Work Opportunities',
    icon: '🚀',
    description: 'Eligible graduates may access post-study work opportunities to gain valuable international experience after graduation.',
  },
  {
    number: 5,
    title: 'English-Speaking Education System',
    icon: '🗣️',
    description: 'Students benefit from studying in English while gaining global communication and career exposure.',
  },
  {
    number: 6,
    title: 'High Quality of Life',
    icon: '🏔️',
    description: 'New Zealand offers a balanced lifestyle with modern cities, clean environment, outdoor experiences, and welcoming communities.',
  },
  {
    number: 7,
    title: 'Research & Innovation Driven Universities',
    icon: '🔬',
    description: 'The country is known for research-focused education in technology, environmental sciences, healthcare, engineering, and business.',
  },
  {
    number: 8,
    title: 'Growing Demand for Skilled Professionals',
    icon: '📈',
    description: 'Industries like IT, construction, healthcare, engineering, agriculture, and data analytics continue to grow rapidly.',
  },
  {
    number: 9,
    title: 'Scholarships & Funding Opportunities',
    icon: '💰',
    description: 'Many institutions offer scholarships and financial support options for eligible international students.',
  },
  {
    number: 10,
    title: 'Multicultural Student Community',
    icon: '🌍',
    description: 'Students from different countries create a diverse and globally connected learning environment.',
  },
  {
    number: 11,
    title: 'End-to-End Guidance with Students Choice',
    icon: '🤝',
    description: 'From university shortlisting to education loans, visas, accommodation, and pre-departure support — we guide students throughout the journey.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function WhyNewZealandTopChoiceSection() {
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
            Why New Zealand Continues to Be a{' '}
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
              Choosing New Zealand means gaining access to globally recognised education, modern teaching methods, practical learning opportunities, and a safe multicultural environment.
            </p>
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
              The country is known for its research-driven universities, excellent quality of life, and growing demand for skilled professionals across industries — with Auckland, Wellington, Christchurch, and Hamilton as top student cities.
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
