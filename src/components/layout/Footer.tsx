import Link from "next/link";
import { 
  IconWorld, 
  IconBrandInstagram, 
  IconBrandLinkedinFilled, 
  IconBrandFacebookFilled, 
  IconBrandYoutubeFilled, 
  IconBrandX 
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#40138C] py-16 text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-[#8424e8]/15 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">
          
          {/* Left Column (Info) */}
          <div className="w-full lg:w-[35%] flex flex-col gap-6">
            
            {/* Logo Section */}
            <div className="mb-4">
              <img 
                src="/assets/images/white-logo.png" 
                alt="Student's Choice" 
                className="h-30 w-auto object-cover -ml-2"
              />
            </div>

            {/* Tagline */}
            <div className="font-bold text-[15px] mt-2">
              Fueling Ambitions. Enabling Education.
            </div>

            {/* Address */}
            <div className="flex flex-col leading-relaxed mt-2 text-[14px]">
              <span className="font-bold mb-1">Delhi</span>
              <span className="font-bold">Students Choice</span>
              <span className="text-white/80">WZ - 113/4, Subhash Nagar,</span>
              <span className="text-white/80">Meenakshi Garden, Ashok Nagar,</span>
              <span className="text-white/80">New Delhi - 110018</span>
            </div>

            {/* Contact */}
            <div className="flex flex-col leading-relaxed mt-2 text-[14px]">
              <span className="font-bold mb-1">Contact us</span>
              <span className="text-white/90">info@studentschoice.in</span>
              <span className="font-bold mt-0.5">+91 98018 21680</span>
              <span className="text-white/60 mt-0.5 text-sm">Mon- Fri | 10am - 7 pm</span>
            </div>

            {/* Socials */}
            <div className="flex flex-col mt-2">
              <span className="font-bold mb-3">Socials</span>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 transition-all hover:scale-110 hover:opacity-95 hover:shadow-lg">
                  <IconBrandInstagram size={20} className="text-white" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#007AB9] transition-all hover:scale-110 hover:opacity-95 hover:shadow-lg">
                  <IconBrandLinkedinFilled size={18} className="text-white" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0866FF] transition-all hover:scale-110 hover:opacity-95 hover:shadow-lg">
                  <IconBrandFacebookFilled size={20} className="text-white" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-[#FF0000] transition-all hover:scale-110 hover:opacity-95 hover:shadow-lg">
                  <IconBrandYoutubeFilled size={20} className="text-white" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full flex items-center justify-center bg-black transition-all hover:scale-110 hover:opacity-95 hover:shadow-lg">
                  <IconBrandX size={18} className="text-white" />
                </a>
              </div>
            </div>
            
          </div>

          {/* Right Column (Links) */}
          <div className="w-full lg:w-[65%] flex flex-col gap-10 lg:pl-10">
            
            {/* Company Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[17px]">Company</h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-[14px]">
                <Link href="/about" className="text-white/90 hover:text-white transition-colors">About Us</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact Us</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/blogs" className="text-white/90 hover:text-white transition-colors">Blogs</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/terms" className="text-white/90 hover:text-white transition-colors">Terms & Conditions</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/privacy" className="text-white/90 hover:text-white transition-colors">Privacy Policy</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/faqs" className="text-white/90 hover:text-white transition-colors">FAQs</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/testimonials" className="text-white/90 hover:text-white transition-colors">Testimonials</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/careers" className="text-white/90 hover:text-white transition-colors">Careers</Link>
              </div>
            </div>

            {/* Services Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[17px]">Services</h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-[14px]">
                <Link href="/loans" className="text-white/90 hover:text-white transition-colors">Abroad Education Loans</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/us-credit-card" className="text-white/90 hover:text-white transition-colors">U.S. Credit Card</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/accommodations" className="text-white/90 hover:text-white transition-colors">Accommodations</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/forex" className="text-white/90 hover:text-white transition-colors">Forex Card</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/block-account" className="text-white/90 hover:text-white transition-colors">Block Account Germany</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/uk-bank-account" className="text-white/90 hover:text-white transition-colors">UK Bank Account</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/events" className="text-white/90 hover:text-white transition-colors">Events</Link>
              </div>
            </div>

            {/* Tools Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-[17px]">Tools</h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-[14px]">
                <Link href="/sop-review" className="text-white/90 hover:text-white transition-colors">SOP Review</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/emi-calculator" className="text-white/90 hover:text-white transition-colors">EMI Calculator</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/grade-converter" className="text-white/90 hover:text-white transition-colors">Grade Converter</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/university-compare" className="text-white/90 hover:text-white transition-colors">University Compare</Link>
                <span className="text-white/30 text-xs">|</span>
                <Link href="/refer" className="text-white/90 hover:text-white transition-colors">Refer your Friend</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
