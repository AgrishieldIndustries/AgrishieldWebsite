import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Check, ChevronDown, Award, Users, FileText, 
  Linkedin, Twitter, Globe, Star, ArrowRight, UserCheck 
} from "lucide-react";
import { Link } from "wouter";

const LOGO_STRIP = [
  { name: "ISO 9001:2015", icon: ShieldCheck, label: "Quality Certified" },
  { name: "MPCB Compliant", icon: Award, label: "Eco Approved" },
  { name: "Startup India", icon: UserCheck, label: "Recognized Unit" },
  { name: "NABL Labs", icon: FileText, label: "Accredited Testing" }
];

const STATS = [
  { value: "98%", label: "Farmer Satisfaction Rate" },
  { value: "1.8L+", label: "Farmers Empowered" },
  { value: "11+", label: "Official Government Registrations" }
];

const ACCORDIONS = [
  {
    title: "Tailored Crop Solutions",
    content: "We don't believe in one-size-fits-all. Every formulation we develop is customized to suit specific soil types, nutrient gaps, and crop challenges faced by Indian farmers."
  },
  {
    title: "High-Yield & Rapid Absorption",
    content: "Our biostimulants and water-soluble fertilizers utilize EDTA/EDDHA chelating technology to maximize nutrient absorption, ensuring visible field results within days."
  },
  {
    title: "Agronomist-Led Support",
    content: "We complement our premium products with direct support. Our team of regional agronomists performs soil testing, field diagnostics, and guides farmers on precise schedules."
  },
  {
    title: "Compliance & Purity First",
    content: "Quality is non-negotiable. Every production run at our Pune factory undergoes strict testing in accredited laboratories before dispatch, meeting full Fertilisers Control Order regulations."
  }
];

const TEAM = [
  {
    name: "Sarthak Patil",
    role: "Managing Director & Founder",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    bio: "Focussed on bringing industrial-grade precision and digital-age innovation to Indian farmers."
  },
  {
    name: "Dr. Ramesh Patil",
    role: "Head of R&D / Chief Agronomist",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
    bio: "PhD in Soil Science with 20+ years of experience researching biostimulant efficacy."
  },
  {
    name: "Sanjay Deshmukh",
    role: "Director of Factory Operations",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80",
    bio: "Manages our state-of-the-art Pune production plant, ensuring strict FCO compliance."
  },
  {
    name: "Meera Shinde",
    role: "Chief Compliance Officer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80",
    bio: "Oversees lab accreditations and state government manufacturing license renewals."
  }
];

const TESTIMONIALS = [
  {
    name: "Rajendra Patil",
    location: "Nashik, Maharashtra",
    crop: "Grapes",
    rating: 5,
    quote: "Agrishield WSF 19:19:19 वापरल्यानंतर माझ्या द्राक्षांचा आकार आणि रंग दोन्ही सुधारले. उत्पादनात थेट वाढ झाली.",
    quoteen: "After using WSF 19:19:19, both the size and color of my grapes improved. Yield increased directly."
  },
  {
    name: "Sunita Deshmukh",
    location: "Pune, Maharashtra",
    crop: "Pomegranate",
    rating: 5,
    quote: "HumiGrowth मुळे मातीची सुपीकता वाढली आणि दुष्काळातही झाडं हिरवीगार राहिली. उत्कृष्ट उत्पादन.",
    quoteen: "HumiGrowth improved soil fertility and kept plants green even during water shortage. Excellent product."
  },
  {
    name: "Vikas Shinde",
    location: "Solapur, Maharashtra",
    crop: "Sugarcane",
    rating: 5,
    quote: "Chelamin Plus ने माझ्या ऊसाचे उत्पादन ३०% वाढले. फुटवे जास्त निघाले आणि कांड्यांची लांबी वाढली.",
    quoteen: "Chelamin Plus increased my sugarcane yield by 30%. More tillers grew and cane length improved."
  }
];

export default function About() {
  const [openAccord, setOpenAccord] = useState<number | null>(0);

  const toggleAccord = (index: number) => {
    setOpenAccord(openAccord === index ? null : index);
  };

  return (
    <div className="w-full bg-white pb-24 text-gray-900 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-12">

        {/* ── HERO SECTION ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 items-center">
          <div className="lg:col-span-7">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[13px] font-semibold text-gray-400 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-600">About Us</span>
            </div>
            
            <h1 className="text-[36px] md:text-[52px] lg:text-[60px] font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-6">
              Your Trusted Partner in Agricultural Innovation
            </h1>

            {/* Trust badge */}
            <div className="flex items-center gap-3.5 mb-8">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-[10px] font-bold text-primary">A</div>
                <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-white flex items-center justify-center text-[10px] font-bold text-green-700">B</div>
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border-2 border-white flex items-center justify-center text-[10px] font-bold text-amber-700">C</div>
              </div>
              <span className="text-[13.5px] font-bold text-gray-700">
                25+ Years of Field Validation &amp; Farming Success
              </span>
            </div>

            <p className="text-[16px] md:text-[18px] text-gray-500 leading-relaxed mb-8 max-w-xl">
              We help farmers and distribution partners harness the power of advanced crop nutrition, premium biostimulants, and certified crop protection to achieve sustainable agricultural growth.
            </p>

            <Link href="/contact">
              <span className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary/95 text-white font-bold text-[15px] px-8 py-4 rounded-full transition-colors cursor-pointer shadow-lg hover:shadow-xl shadow-primary/10">
                Let's Grow Together <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[32px] overflow-hidden aspect-[4/3] relative shadow-2xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=600&fit=crop&q=80"
                alt="Agricultural fields and precision farming"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* ── LOGO STRIP ──────────────────────────────────────── */}
        <div className="border-t border-b border-gray-100 py-8 mb-24">
          <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest text-center mb-6">
            Verified Standards &amp; Registrations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
            {LOGO_STRIP.map((logo) => (
              <div key={logo.name} className="flex items-center gap-3 justify-center">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <logo.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-gray-800 leading-none mb-1">{logo.name}</h4>
                  <p className="text-[11px] font-semibold text-gray-400 leading-none">{logo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DRIVEN BY INNOVATION SECTION ───────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 items-center">
          <div className="lg:col-span-6 lg:order-2">
            <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-3 block">
              About Us
            </span>
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-gray-900 leading-[1.1] mb-6">
              Driven by Science. Powered by Trust.
            </h2>
            <p className="text-[15.5px] text-gray-500 leading-relaxed mb-6">
              Founded on the belief that research-backed products shouldn't lose potency between the lab and the field, Agrishield manufactures every single input under strict quality controls in Pune.
            </p>
            <p className="text-[15.5px] text-gray-500 leading-relaxed mb-8">
              We operate an accredited facility where we formulate NPK fertilizers, chelates, biostimulants, and insecticides. By utilizing pure ingredients and local soil testing data, we ensure our formulations feed the crop exactly what it requires.
            </p>
            <Link href="/products">
              <span className="inline-flex items-center gap-1.5 text-[15px] font-bold text-primary hover:underline cursor-pointer group">
                Explore Product Range <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="relative">
              {/* Highlight image card */}
              <div className="rounded-[32px] overflow-hidden aspect-[4/5] max-w-[420px] mx-auto relative shadow-xl border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=600&h=750&fit=crop&q=80"
                  alt="Farmer inspecting green crops"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating metrics badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-green-600 fill-green-600" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-extrabold text-gray-800 leading-tight">Trusted Partner</h5>
                    <p className="text-[11px] font-bold text-green-600">NABL Lab Approved</p>
                  </div>
                </div>

                {/* Floating pill tags */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 shadow-lg">
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {["Precision NPKs", "Organic Acids", "Maximum Yield"].map((tag) => (
                      <span key={tag} className="text-[9.5px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded-md text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-[14px] font-bold text-gray-900 leading-snug">
                    Helping farmers grow better, healthier crops.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── STATS ROW ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 border-t border-b border-gray-100 py-12 text-center bg-gray-50/50 rounded-3xl px-6">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`px-4 ${i !== 2 ? "md:border-r border-gray-100" : ""}`}>
              <div className="text-[40px] md:text-[48px] font-extrabold text-primary leading-none mb-3">
                {stat.value}
              </div>
              <div className="text-[13px] md:text-[14.5px] font-bold text-gray-500 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── WHY CHOOSE US ───────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-[32px] overflow-hidden aspect-[4/3] relative shadow-xl border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&q=80"
                alt="Agronomist laboratory analysis"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-black/45 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[12px] font-semibold text-white">
                NABL Accredited In-house Research
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-tight mb-8">
              Built on Trust, Driven by Field Results
            </h2>

            {/* Accordion List */}
            <div className="space-y-4">
              {ACCORDIONS.map((acc, index) => {
                const isOpen = openAccord === index;
                return (
                  <div 
                    key={acc.title}
                    className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:border-gray-200 transition-all"
                  >
                    <button
                      onClick={() => toggleAccord(index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-[15.5px] font-bold text-gray-900">{acc.title}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`} 
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 pt-1 text-[13.5px] text-gray-500 leading-relaxed border-t border-gray-50 bg-gray-50/30">
                            {acc.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── OUR TEAM SECTION ───────────────────────────────── */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-3 block">
                Our Team
              </span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-tight">
                Meet the Minds Behind the Solutions
              </h2>
            </div>
            <p className="text-gray-500 text-[14.5px] max-w-sm leading-relaxed">
              Our leadership is composed of industry experts, agronomists, and production managers committed to crop nutrition standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member) => (
              <div 
                key={member.name}
                className="group bg-white border border-gray-100 rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="rounded-2xl overflow-hidden aspect-square mb-4 relative">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Hover Social Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href="#" className="w-8 h-8 rounded-full bg-white hover:bg-primary hover:text-white text-gray-800 flex items-center justify-center transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white hover:bg-primary hover:text-white text-gray-800 flex items-center justify-center transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-[16px] font-extrabold text-gray-900 leading-tight mb-1">{member.name}</h3>
                  <p className="text-[12.5px] font-bold text-primary mb-3 leading-none">{member.role}</p>
                </div>
                <p className="text-[12.5px] text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── TESTIMONIALS SECTION ────────────────────────────── */}
        <div className="border-t border-gray-100 pt-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-3 block">
              Testimonials
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-none">
              Reviews That Speak Volumes
            </h2>
            <p className="text-[15px] text-gray-500 mt-4 leading-relaxed">
              Read how dealers and farmers across Maharashtra experience the efficacy of Agrishield inputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test, index) => (
              <div 
                key={test.name}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: test.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Marathi quote */}
                  <blockquote className="text-[14.5px] font-medium text-gray-800 leading-relaxed italic mb-3">
                    "{test.quote}"
                  </blockquote>
                  
                  {/* English quote */}
                  <p className="text-[12.5px] text-gray-500 leading-relaxed mb-6">
                    "{test.quoteen}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[14px]">
                    {test.name[0]}
                  </div>
                  <div>
                    <h4 className="text-[13.5px] font-extrabold text-gray-900 leading-none mb-1">{test.name}</h4>
                    <p className="text-[11px] font-semibold text-gray-400 leading-none">{test.location} · {test.crop}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
