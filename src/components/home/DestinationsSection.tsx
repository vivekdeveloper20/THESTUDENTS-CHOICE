'use client';

import { motion } from 'framer-motion';

const topRowDestinations = [
  {
    name: "United States",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Ireland",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "India",
    image: "https://images.unsplash.com/photo-1571260899066-23aaf3ee3039?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Italy",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80"
  }
];

const bottomRowDestinations = [
  {
    name: "Spain",
    image: "https://images.unsplash.com/photo-1520521051822-47c82e2e6b0f?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1512453475868-a34144e5eda0?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "New Zealand",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "UAE",
    image: "https://images.unsplash.com/photo-1563299789-0e951286ead6?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Netherlands",
    image: "https://images.unsplash.com/photo-1487170554993-3a41b86b7ee1?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Sweden",
    image: "https://images.unsplash.com/photo-1531366336629-fe4eca57f12a?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Japan",
    image: "https://images.unsplash.com/photo-1540959375944-7049f642e9b5?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "South Korea",
    image: "https://images.unsplash.com/photo-1526401485004-46490f4bee94?auto=format&fit=crop&w=600&q=80"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function DestinationsSection() {
  return (
    <section className="w-full bg-white pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-[38px] md:text-[44px] font-bold text-[#8424e8] mb-3 tracking-tight">
            Explore popular study destinations
          </h2>
          <p className="text-[17px] md:text-[20px] text-gray-600 font-medium">
            Find a country to learn and excel in all aspects of life
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Top Row - Scrolling Left */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex items-center gap-6 animate-marquee-left-fast">
                {[...topRowDestinations, ...topRowDestinations].map((dest, idx) => (
                  <div key={idx} className="w-40 md:w-56 flex-shrink-0">
                    <div className="w-full h-28 md:h-36 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <p className="mt-3 text-[14px] md:text-[16px] font-bold text-gray-700 hover:text-[#8424e8] transition-colors text-center">
                      {dest.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row - Scrolling Right */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex items-center gap-6 animate-marquee-right-fast">
                {[...bottomRowDestinations, ...bottomRowDestinations].map((dest, idx) => (
                  <div key={idx} className="w-40 md:w-56 flex-shrink-0">
                    <div className="w-full h-28 md:h-36 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <p className="mt-3 text-[14px] md:text-[16px] font-bold text-gray-700 hover:text-[#8424e8] transition-colors text-center">
                      {dest.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
