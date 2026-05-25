'use client';

interface ReasonPoint {
  number: number;
  title: string;
  description: string;
}

const reasonPoints: ReasonPoint[] = [
  {
    number: 1,
    title: 'World-Renowned Universities',
    description: 'The UK is home to globally respected institutions known for academic quality, research excellence, and employer reputation. A UK qualification is recognised and valued across the world.',
  },
  {
    number: 2,
    title: 'Wide Range of Courses',
    description: 'Students can choose from thousands of programmes across business, technology, engineering, healthcare, law, arts, and more — allowing the right fit for every career goal.',
  },
  {
    number: 3,
    title: 'Shorter Degree Duration',
    description: 'Many undergraduate programmes are completed in three years, while several masters programmes take just one year. This helps save time and reduces total study costs.',
  },
  {
    number: 4,
    title: 'Strong Career Opportunities',
    description: 'The UK offers access to internships, graduate roles, networking events, and industry-linked learning that supports employability after graduation.',
  },
  {
    number: 5,
    title: 'Research & Innovation Hub',
    description: 'From science and technology to finance and healthcare, the UK remains a leader in innovation and advanced research.',
  },
  {
    number: 6,
    title: 'Multicultural Student Experience',
    description: 'Study alongside students from around the world, experience different cultures, and build a truly international network.',
  },
  {
    number: 7,
    title: 'Vibrant Cities & Student Lifestyle',
    description: 'Whether you prefer a global city or a peaceful campus town, the UK offers safe, exciting, and student-friendly destinations.',
  },
  {
    number: 8,
    title: 'Scholarships & Funding Opportunities',
    description: 'Many universities and organisations offer scholarships, grants, and funding options that can help reduce overall costs.',
  },
  {
    number: 9,
    title: 'Part-Time Work While Studying',
    description: 'Eligible students may work part-time during studies, helping them gain experience and manage living expenses.',
  },
  {
    number: 10,
    title: 'Post-Study Work Opportunities',
    description: 'Graduates may explore post-study pathways that allow them to gain international work experience after completing their degree.',
  },
  {
    number: 11,
    title: 'End-to-End Support with Students Choice',
    description: 'From university shortlisting to applications, education loans, visas, and pre-departure planning — Students Choice guides you through every step with expert support.',
  },
];

export function WhyUKTopChoiceSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-[#8424e8] mb-8">
            Why the UK Continues to Be a Top Choice for Global Students
          </h2>
          
          {/* Intro Paragraphs */}
          <div className="space-y-6 text-gray-700 text-base leading-relaxed mb-12">
            <p>
              Choosing the UK means choosing academic excellence, international recognition, faster degree completion, and access to global opportunities. It is one of the world's most trusted education destinations for students who want more than just a degree — they want real career outcomes, global exposure, and long-term value.
            </p>
            <p>
              With prestigious universities, practical learning models, multicultural campuses, and strong post-study opportunities, the UK offers a complete environment for ambitious students to grow and succeed.
            </p>
          </div>
        </div>

        {/* Numbered Points */}
        <div className="space-y-8">
          {reasonPoints.map((point) => (
            <div key={point.number} className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">
                {point.number}. {point.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
