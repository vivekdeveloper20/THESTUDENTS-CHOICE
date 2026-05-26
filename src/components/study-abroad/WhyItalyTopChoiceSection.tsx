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
    description: 'Italian universities are known for academic excellence, historic reputation, and research-driven education.',
  },
  {
    number: 2,
    title: 'Affordable Education Compared to Europe',
    icon: '💰',
    description: 'Italy offers lower tuition fees and living costs compared to many other European study destinations.',
  },
  {
    number: 3,
    title: 'World Leader in Design & Architecture',
    icon: '🎨',
    description: 'Italy is globally recognised for fashion, luxury management, architecture, interior design, and creative industries.',
  },
  {
    number: 4,
    title: 'Strong Engineering & Technology Programs',
    icon: '🔧',
    description: 'Students gain access to modern programs in engineering, automotive technology, robotics, and innovation.',
  },
  {
    number: 5,
    title: 'Scholarships & Financial Support',
    icon: '🎁',
    description: 'Many universities and regional authorities offer scholarships and tuition fee reductions for eligible international students.',
  },
  {
    number: 6,
    title: 'Rich Cultural & International Experience',
    icon: '🏛️',
    description: 'Italy offers a unique combination of history, art, food, travel, and multicultural student life.',
  },
  {
    number: 7,
    title: 'Part-Time Work Opportunities',
    icon: '🕒',
    description: 'Eligible students may work part-time while studying to gain experience and manage living expenses.',
  },
  {
    number: 8,
    title: 'Access to Europe\'s Career Market',
    icon: '🌍',
    description: 'Studying in Italy gives students exposure to European industries, internships, and international networking opportunities.',
  },
  {
    number: 9,
    title: 'English-Taught Programs',
    icon: '📚',
    description: 'Many universities now offer internationally focused bachelor\'s and master\'s programs in English.',
  },
  {
    number: 10,
    title: 'Safe & Student-Friendly Cities',
    icon: '🏙️',
    description: 'Cities like Milan, Bologna, Turin, and Florence provide vibrant student communities and quality living.',
  },
  {
    number: 11,
    title: 'End-to-End Guidance with Students Choice',
    icon: '🤝',
    description: 'From university selection to education loans, visas, and pre-departure support — Students Choice guides students through every stage.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function WhyItalyTopChoiceSection() {
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
            Why Italy Continues to Be a{' '}
            <span className="text-[#8424e8]">Top Choice</span> for Students
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm text-gray-600 text-lg leading-relaxed text-center">
              Choosing Italy means gaining access to globally respected education, affordable tuition, cultural richness, and growing opportunities across Europe. Italy combines academic quality with lifestyle, innovation, and practical learning.
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
