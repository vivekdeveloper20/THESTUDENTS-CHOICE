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
    description: 'French universities and Grandes Écoles are respected worldwide for academic quality, research excellence, and industry-focused education.',
  },
  {
    number: 2,
    title: 'Affordable Public Education',
    icon: '💰',
    description: 'Many public universities in France offer comparatively affordable tuition fees for international students.',
  },
  {
    number: 3,
    title: 'Strong Business & Management Education',
    icon: '💼',
    description: 'France is home to some of Europe\'s top business schools known for finance, management, luxury brand management, and entrepreneurship.',
  },
  {
    number: 4,
    title: 'Innovation & Research Opportunities',
    icon: '🔬',
    description: 'France continues to invest heavily in research, technology, aerospace, AI, sustainability, healthcare, and engineering.',
  },
  {
    number: 5,
    title: 'Post-Study Career Opportunities',
    icon: '🚀',
    description: 'Eligible graduates may receive opportunities to stay and explore professional pathways after completing their studies.',
  },
  {
    number: 6,
    title: 'Gateway to Europe',
    icon: '🌍',
    description: 'Studying in France allows students to experience European culture while accessing travel and networking opportunities across the Schengen region.',
  },
  {
    number: 7,
    title: 'Multicultural Student Environment',
    icon: '🤝',
    description: 'France welcomes students from around the world, creating diverse campuses and international learning experiences.',
  },
  {
    number: 8,
    title: 'Industry-Focused Learning',
    icon: '🛠️',
    description: 'Programs often include internships, practical exposure, company collaborations, and real-world projects.',
  },
  {
    number: 9,
    title: 'Growing Demand for Skilled Professionals',
    icon: '📈',
    description: 'Industries like business, hospitality, luxury, fashion, technology, AI, and engineering continue to create opportunities for skilled graduates.',
  },
  {
    number: 10,
    title: 'Scholarships & Financial Support',
    icon: '🎁',
    description: 'Many institutions and government initiatives provide scholarships and funding opportunities for eligible international students.',
  },
  {
    number: 11,
    title: 'End-to-End Guidance with Students Choice',
    icon: '🤝',
    description: 'From university selection to education loans, visas, accommodation guidance, and pre-departure support — Students Choice helps students at every stage.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function WhyFranceTopChoiceSection() {
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
            Why France Continues to Be a{' '}
            <span className="text-[#6E00E0]">Top Choice</span> for Students
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm text-gray-600 text-lg leading-relaxed text-center">
              Choosing France means gaining access to globally respected universities, affordable public education, multicultural campuses, and career opportunities across Europe. France is especially popular among students interested in business, hospitality, luxury management, fashion, culinary arts, engineering, and technology.
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
