'use client';

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
      'University of Auckland',
      'University of Otago',
      'University of Canterbury',
      'University of Waikato',
    ],
    bestFor: 'Research excellence, global recognition, academic prestige, competitive careers',
  },
  {
    icon: '💻',
    title: 'Engineering & Technology',
    universities: [
      'Auckland University of Technology',
      'Massey University',
      'University of Canterbury',
      'Victoria University of Wellington',
    ],
    bestFor: 'Engineering, IT, Data Science, Innovation, industry-linked programs',
  },
  {
    icon: '📈',
    title: 'Career-Focused Options',
    universities: [
      'University of Waikato',
      'Victoria University of Wellington',
      'Ara Institute of Canterbury',
      'Otago Polytechnic',
    ],
    bestFor: 'Business, Management, Practical learning, strong employability focus',
  },
  {
    icon: '💰',
    title: 'Value + Quality + ROI',
    universities: [
      'Lincoln University',
      'Eastern Institute of Technology',
      'Toi Ohomai Institute',
      'Southern Institute of Technology',
    ],
    bestFor: 'Affordable tuition, strong ROI, flexible programs, career support',
  },
];

export function NewZealandPopularUniversitiesSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-[#fafbff] via-white to-[#f3eeff] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            Popular New Zealand Universities{' '}
            <span className="text-[#8424e8]">Students Explore</span>
          </h2>
        </div>

        {/* Table with subtle shadow and rounded corners */}
        <div className="overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Header Row with gradient */}
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
                  {categories.map((cat, idx) => (
                    <th
                      key={idx}
                      className="border-r-2 border-gray-200 px-6 py-6 text-left last:border-r-0 relative"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8424e8] to-[#6c47ff] flex items-center justify-center text-xl shadow-md">
                          {cat.icon}
                        </div>
                        <span className="font-black text-gray-900 text-sm md:text-base leading-tight">
                          {cat.title}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* University Rows with hover effects */}
              <tbody>
                {[0, 1, 2, 3].map((rowIdx) => (
                  <tr
                    key={rowIdx}
                    className={`border-b border-gray-200 last:border-b-0 transition-colors hover:bg-[#faf7ff] ${
                      rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    {categories.map((cat, colIdx) => (
                      <td
                        key={colIdx}
                        className="border-r border-gray-200 px-6 py-5 text-center last:border-r-0 align-middle"
                      >
                        <p className="text-gray-900 font-semibold text-sm md:text-base">
                          {cat.universities[rowIdx]}
                        </p>
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Best For Row with gradient background */}
                <tr className="bg-gradient-to-r from-[#faf7ff] to-[#f3eeff] border-t-2 border-gray-200">
                  {categories.map((cat, idx) => (
                    <td
                      key={idx}
                      className="border-r border-gray-200 px-6 py-6 last:border-r-0 align-top"
                    >
                      <div className="space-y-2">
                        <p className="text-xs font-black uppercase tracking-widest text-[#8424e8]">
                          Best For
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed font-medium">
                          {cat.bestFor}
                        </p>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
