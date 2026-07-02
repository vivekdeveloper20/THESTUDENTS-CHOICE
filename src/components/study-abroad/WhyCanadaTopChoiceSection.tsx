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
    description: 'Canadian universities are respected worldwide for academic quality, research excellence, and industry-focused programs.',
  },
  {
    number: 2,
    title: 'Strong Career Opportunities',
    icon: '💼',
    description: 'Students benefit from internships, co-op programs, networking opportunities, and growing demand across technology, healthcare, finance, engineering, and business sectors.',
  },
  {
    number: 3,
    title: 'Affordable Education Compared to Other Major Destinations',
    icon: '💰',
    description: 'Canada often provides a better balance between tuition costs, quality education, and long-term career value.',
  },
  {
    number: 4,
    title: 'Post-Study Work Opportunities',
    icon: '🚀',
    description: 'Eligible graduates may receive post-study work opportunities that allow valuable international work experience after graduation.',
  },
  {
    number: 5,
    title: 'Safe & Student-Friendly Environment',
    icon: '🏡',
    description: 'Canada is known for its welcoming communities, safety, diversity, and high quality of life.',
  },
  {
    number: 6,
    title: 'Multicultural Society',
    icon: '🌍',
    description: 'Students from around the world study and live in Canada, creating an inclusive and globally connected environment.',
  },
  {
    number: 7,
    title: 'Research & Innovation Focus',
    icon: '🔬',
    description: 'Canadian institutions are recognised for research, innovation, sustainability, AI, healthcare, and technology development.',
  },
  {
    number: 8,
    title: 'Industry-Focused Learning',
    icon: '🛠️',
    description: 'Programs often include practical projects, co-op placements, and real-world industry exposure.',
  },
  {
    number: 9,
    title: 'Pathways for Long-Term Career Growth',
    icon: '📈',
    description: 'Canada remains attractive for students seeking global work experience and future career opportunities.',
  },
  {
    number: 10,
    title: 'Scholarships & Financial Support',
    icon: '🎁',
    description: 'Many universities offer scholarships, grants, and financial support for eligible international students.',
  },
  {
    number: 11,
    title: 'End-to-End Guidance with Students Choice',
    icon: '🤝',
    description: 'From university shortlisting to education loans, visa guidance, and pre-departure support — Students Choice helps students at every stage.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function WhyCanadaTopChoiceSection() {
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
            Why Canada Continues to Be a{' '}
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
              Choosing Canada means access to globally respected education, practical learning, multicultural campuses, and strong opportunities for career growth after graduation.
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
