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
    description: 'Spanish universities are respected for academic quality, international programs, and growing global partnerships.',
  },
  {
    number: 2,
    title: 'Affordable Education & Living Costs',
    icon: '💶',
    description: 'Compared to many European destinations, Spain offers relatively lower tuition fees and student-friendly living expenses.',
  },
  {
    number: 3,
    title: 'Strong International Student Environment',
    icon: '🌍',
    description: 'Students experience multicultural campuses, global networking opportunities, and exposure to European culture.',
  },
  {
    number: 4,
    title: 'Business, Tourism & Hospitality Hub',
    icon: '🏨',
    description: 'Spain is internationally known for tourism, hospitality, international business, and management education.',
  },
  {
    number: 5,
    title: 'Excellent Lifestyle & Climate',
    icon: '☀️',
    description: 'Students enjoy pleasant weather, vibrant cities, rich history, and a balanced lifestyle throughout the year.',
  },
  {
    number: 6,
    title: 'Opportunities Across Europe',
    icon: '🗺️',
    description: 'Studying in Spain gives students access to wider European opportunities for travel, networking, and future careers.',
  },
  {
    number: 7,
    title: 'Growing Demand for Skilled Professionals',
    icon: '📈',
    description: 'Industries such as technology, business, tourism, healthcare, and renewable energy continue to expand.',
  },
  {
    number: 8,
    title: 'Research & Innovation Opportunities',
    icon: '🔬',
    description: 'Many universities focus on innovation, sustainability, entrepreneurship, and applied learning.',
  },
  {
    number: 9,
    title: 'Scholarships & Financial Support',
    icon: '💰',
    description: 'Several universities and institutions offer scholarships and grants for eligible international students.',
  },
  {
    number: 10,
    title: 'End-to-End Guidance with Students Choice',
    icon: '🤝',
    description: 'From university shortlisting to visas, education planning, and pre-departure support — we guide students through every stage.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function WhySpainTopChoiceSection() {
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
            Why Spain Continues to Be a{' '}
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
              Choosing Spain means gaining access to globally recognised education, affordable tuition compared to many Western countries, vibrant student cities, and a lifestyle that combines academic growth with international exposure.
            </p>
            <p className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm">
              Spain is especially attractive for students interested in business, hospitality, tourism, architecture, international relations, and creative industries.
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
