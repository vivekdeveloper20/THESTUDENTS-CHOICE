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
    description: 'Singapore universities are respected worldwide for academic quality, innovation, and research excellence.',
  },
  {
    number: 2,
    title: "Asia's Leading Business & Technology Hub",
    icon: '🏙️',
    description: 'Singapore is home to major global companies across finance, technology, logistics, healthcare, and business sectors.',
  },
  {
    number: 3,
    title: 'Strong Career Opportunities',
    icon: '💼',
    description: 'Students benefit from internships, practical learning, networking opportunities, and industry-linked education.',
  },
  {
    number: 4,
    title: 'Modern & Industry-Focused Education',
    icon: '🛠️',
    description: 'Programs are designed around innovation, employability, and real-world skills demanded by global employers.',
  },
  {
    number: 5,
    title: 'Safe & Student-Friendly Environment',
    icon: '🛡️',
    description: 'Singapore is known for safety, cleanliness, excellent public transport, and high quality of life.',
  },
  {
    number: 6,
    title: 'Strategic Global Location',
    icon: '🌏',
    description: 'Its strong international connectivity makes Singapore a major gateway between Asia and global markets.',
  },
  {
    number: 7,
    title: 'Multicultural International Environment',
    icon: '🌍',
    description: 'Students study alongside peers from diverse cultures and backgrounds in a globally connected environment.',
  },
  {
    number: 8,
    title: 'Strong Focus on Innovation & Research',
    icon: '🔬',
    description: 'Singapore invests heavily in technology, AI, business innovation, and advanced research sectors.',
  },
  {
    number: 9,
    title: 'English-Taught Programs',
    icon: '🗣️',
    description: 'English is widely used in education and professional environments, making it comfortable for international students.',
  },
  {
    number: 10,
    title: 'Scholarships & Financial Support',
    icon: '💰',
    description: 'Many institutions offer scholarships, grants, and tuition support for eligible international students.',
  },
  {
    number: 11,
    title: 'End-to-End Guidance with Students Choice',
    icon: '🤝',
    description: 'From university shortlisting to education loans, visas, and pre-departure planning — we support students through every stage.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function WhySingaporeTopChoiceSection() {
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
            Why Singapore Continues to Be a{' '}
            <span className="text-[#6E00E0]">Top Choice</span> for Students
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 text-lg leading-relaxed max-w-5xl mx-auto text-left"
          >
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
              Choosing Singapore means gaining access to globally respected education, modern campuses, strong industry connections, and one of Asia&apos;s strongest economies.
            </p>
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
              Singapore offers students a perfect balance of academic excellence, safety, career growth, and international exposure — with Singapore City, Jurong, and Queenstown as top student areas.
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
