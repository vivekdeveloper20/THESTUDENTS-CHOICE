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
      'University of Oxford',
      'University of Cambridge',
      'Imperial College London',
      'University College London (UCL)',
      "King's College London",
    ],
    bestFor: 'Research, global brand value, competitive careers, high academic excellence',
  },
  {
    icon: '💼',
    title: 'Career-Focused & Industry Connected',
    universities: [
      'University of Manchester',
      'University of Warwick',
      'University of Bristol',
      'University of Leeds',
      'Durham University',
    ],
    bestFor: 'Employability, internships, business, engineering, strong alumni networks',
  },
  {
    icon: '📘',
    title: 'STEM, Tech & Innovation',
    universities: [
      'University of Edinburgh',
      'University of Southampton',
      'University of Glasgow',
      'Newcastle University',
      'University of Birmingham',
    ],
    bestFor: 'Computer Science, Data Science, AI, Engineering, innovation-led programs',
  },
  {
    icon: '💰',
    title: 'Value + Quality + ROI',
    universities: [
      'Queen Mary University of London',
      'Coventry University',
      'Northumbria University',
      'University of Portsmouth',
      'Nottingham Trent University',
    ],
    bestFor: 'Affordable options, strong student support, practical learning, career value',
  },
];

export function UKPopularUniversitiesSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#8424e8] mb-8">
            UK Popular Universities Students Explore
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-gray-300 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Header Row */}
              <thead>
                <tr className="border-b border-gray-300 bg-gray-50">
                  {categories.map((cat, idx) => (
                    <th
                      key={idx}
                      className="border-r border-gray-300 px-6 py-6 text-left last:border-r-0"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{cat.icon}</span>
                        <span className="font-bold text-gray-900 text-sm md:text-base">
                          {cat.title}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* University Rows */}
              <tbody>
                {[0, 1, 2, 3, 4].map((rowIdx) => (
                  <tr key={rowIdx} className="border-b border-gray-300 last:border-b-0">
                    {categories.map((cat, colIdx) => (
                      <td
                        key={colIdx}
                        className="border-r border-gray-300 px-6 py-5 text-center last:border-r-0 align-top"
                      >
                        <p className="text-gray-900 font-medium text-sm md:text-base">
                          {cat.universities[rowIdx]}
                        </p>
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Best For Row */}
                <tr className="bg-gray-50 border-t-2 border-gray-300">
                  {categories.map((cat, idx) => (
                    <td
                      key={idx}
                      className="border-r border-gray-300 px-6 py-6 last:border-r-0"
                    >
                      <p className="text-gray-700 text-sm leading-relaxed font-medium">
                        <span className="font-bold text-gray-900">Best For:</span> {cat.bestFor}
                      </p>
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
