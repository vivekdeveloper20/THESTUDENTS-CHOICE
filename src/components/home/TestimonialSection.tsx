'use client';

import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import '@mantine/carousel/styles.css';

const testimonials = [
  {
    type: 'text',
    content: "I had the best experience with GradRight, they helped me throughout the process and were always available to resolve my queries.",
    author: "Tejas Rane",
    role: "Study Abroad Aspirant",
    location: "United States",
    rotation: -2
  },
  {
    type: 'text',
    content: "I had a great experience with the GradRight team. I'm incredibly grateful to Varun for helping me throughout this journey, and to Ayushi for all her support!",
    author: "Ramandeep",
    role: "Study Abroad Aspirant",
    location: "United States",
    rotation: 2
  },
  {
    type: 'video',
    thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    author: "Ananya",
    role: "Washington University",
    subRole: "MS in Analytics",
    rotation: -1
  },
  {
    type: 'video',
    thumbnail: "/assets/images/student-trust.png",
    author: "David",
    role: "Washington University",
    rotation: 1
  },
  {
    type: 'text',
    content: "The loan process was so much easier than I expected. They handled all the paperwork and I got my sanction letter in just 3 days!",
    author: "Siddharth",
    role: "International Student",
    location: "Canada",
    rotation: -1.5
  }
];

export function TestimonialSection() {
  const autoplay = useRef(
    Autoplay({
      delay: 2200,
      stopOnInteraction: false,
      stopOnMouseEnter: false
    })
  );

  return (
    <section className="w-full bg-white pt-24 pb-16 relative overflow-hidden">
      {/* Dotted Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#8424e8 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }}
      ></div>
      <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-center text-[38px] md:text-[46px] font-bold text-[#8424e8] mb-16 tracking-tight">
          What Students Say About Us !
        </h2>

        <Carousel
          slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
          slideGap="xl"
          withControls={false}
          emblaOptions={{
            align: 'start',
            loop: true,
            dragFree: true,
            slidesToScroll: 1,
            duration: 28
          }}
          plugins={[autoplay.current]}
          classNames={{
            viewport: '!overflow-visible',
          }}
          className="pb-10"
        >
          {testimonials.map((t, index) => (
            <Carousel.Slide key={index} className="pt-10 px-4">
              <div 
                className="bg-white p-8 rounded-sm border border-[#f0e8ff] shadow-[0_12px_32px_rgba(132,36,232,0.12)] relative h-full flex flex-col transition-transform duration-300 hover:scale-[1.03]"
                style={{ 
                  transform: `rotate(${t.rotation}deg)`,
                  transformOrigin: 'center center'
                }}
              >
                {/* Tape Effect */}
                <div 
                  className="absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-8 bg-blue-100/60 -rotate-3 mix-blend-multiply border border-blue-200/20"
                  style={{ backdropFilter: 'blur(1px)' }}
                ></div>

                {t.type === 'text' ? (
                  <div className="flex-grow mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                      &quot;{t.content}&quot;
                    </p>
                  </div>
                ) : (
                  <div className="flex-grow mb-8 overflow-hidden rounded-lg relative group cursor-pointer">
                    <img 
                      src={t.thumbnail} 
                      alt={t.author} 
                      className="w-full h-48 object-cover transition-transform group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-[#8424e8] shadow-lg">
                        <IconPlayerPlayFilled size={24} />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#f3edff] flex items-center justify-center text-[#8424e8] font-bold text-lg overflow-hidden">
                    {t.type === 'video' ? (
                        <img src={t.thumbnail} alt={t.author} className="w-full h-full object-cover" />
                    ) : (
                        t.author.charAt(0)
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 leading-tight">
                      {t.author} <span className="font-normal text-gray-400">|</span> <span className="text-[#8424e8] text-sm">{t.role}</span>
                    </h4>
                    {t.location && <p className="text-gray-500 text-sm mt-0.5">{t.location}</p>}
                    {t.subRole && <p className="text-gray-500 text-sm mt-0.5">{t.subRole}</p>}
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
