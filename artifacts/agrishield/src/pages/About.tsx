import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Check, ChevronDown, Award, Users, FileText, 
  Linkedin, Twitter, Globe, Star, ArrowRight, UserCheck, 
  Flame, Droplets, Compass, Target
} from "lucide-react";
import { Link } from "wouter";

const LOGO_STRIP = [
  { name: "ISO 9001:2015", icon: ShieldCheck, label: "Quality System Certified" },
  { name: "MPCB Consent", icon: Award, label: "Environmental Approval" },
  { name: "DRC Certified", icon: UserCheck, label: "Organic Bio-Stimulants" },
  { name: "CIBRC Licensed", icon: FileText, label: "Insecticides & Protection" }
];

const STATS = [
  { value: "50 MT", label: "Daily Fertilizer Production" },
  { value: "24 Yrs", label: "MD's Chemical Field Experience" },
  { value: "2020", label: "Establishment Year" }
];

const VALUES = [
  {
    title: "Trust (Earth)",
    desc: "Like the earth, we are dependable. We work with integrity of purpose, honesty in action and fairness in all our dealings.",
    color: "#854d0e",
    bg: "#fefbeb",
    border: "#fef08a",
    icon: Compass
  },
  {
    title: "Adaptability (Water)",
    desc: "Adaptive, like water. Constantly transforming ourselves, we are nimble-footed and highly responsive to change.",
    color: "#0369a1",
    bg: "#f0f9ff",
    border: "#bae6fd",
    icon: Droplets
  },
  {
    title: "Speed (Fire)",
    desc: "Blazing ahead like fire. Quick and agile, we constantly strive to work with speed in the way we observe, think and act.",
    color: "#b91c1c",
    bg: "#fef2f2",
    border: "#fecaca",
    icon: Flame
  }
];

const INFRASTRUCTURE = [
  {
    title: "State-of-the-Art Production Facility",
    content: "Our facility has dedicated processing zones for Organic Biostimulants, Bio Fertilizers, Adjuvants, Micronutrients, Water Soluble Fertilizers, Insecticides, and Pesticides. Equipped with SS & PP-FRP reactors, centrifuges, raw storage tanks, digital pouch & bag sealing systems, automatic powder packing, and batch number coding machinery. The plant features a dedicated DM Water Plant and an Effluent Treatment Plant (ETP) to ensure environmental safety."
  },
  {
    title: "Advanced Quality Control Laboratory",
    content: "Agrishield runs a highly sophisticated QC Lab to test chemical purity and potency. Our testing instruments include Atomic Absorption Spectroscopy (AAS), Flame Photometers, pH Meters, Conductivity Meters, Digital Hot Air Ovens, Digital Centrifuges, Digital Micro-Weighing Balances, and a dedicated lab-scale pilot plant for experimental batch manufacturing."
  },
  {
    title: "Comprehensive Licensing & Certifications",
    content: "We hold full active government licenses and consents: ISO 9001:2015 certification for quality management, DRC Domestic Registrations for Organic Biostimulants & Bio-fertilizers, official manufacturing licenses for Micronutrients and Water-Soluble Fertilizers (NPK formulations), CIBRC licensing, and Maharashtra state manufacturing licenses for insecticides, alongside the Maharashtra Pollution Control Board's (MPCB) Consent to Operate."
  }
];

const TEAM = [
  {
    name: "Dr. Shantishwar Patil",
    role: "Managing Director",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
    bio: "Postgraduate, MBA in Operation Management with 24 years of chemical industrial operations experience."
  },
  {
    name: "Mrs. Pratibha Patil",
    role: "HRD Director",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80",
    bio: "Maintains a collaborative, neat workplace environment and professional family-like 'Not I, Say We' culture."
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
            {/* Red Line + About Us Label */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-[3px] bg-[#b91c1c] shrink-0" />
              <span className="text-[20px] font-bold text-[#b91c1c] uppercase tracking-wider">
                About Us
              </span>
            </div>
            
            {/* Main Welcome Title */}
            <h1 className="text-[36px] md:text-[48px] lg:text-[54px] font-extrabold text-gray-900 leading-[1.1] mb-3 tracking-tight">
              Welcome to Agrishield Industries Pvt Ltd
            </h1>

            {/* Subtitle */}
            <div className="text-[18px] md:text-[22px] font-bold text-[#1a3a6e] mb-8">
              Agrochemical's Manufacturer in Pune
            </div>

            <p className="text-[15.5px] md:text-[17px] text-gray-500 leading-relaxed mb-8 max-w-2xl">
              AGRISHIELD® Brand of Agrishield Industries Pvt Ltd located in the Pune District of Maharashtra State, in the Kuruli Industrial Area, Tal- Khed near Chakan. It is well connected by road, rail &amp; air. Our product range includes Organic Biostimulants, Organic Bio Fertilizers, Adjuvants, Chelated Micronutrients, Water Soluble Fertilizers Formulations (NPK’s) Straight Micronutrients &amp; their mixtures, Liquid Fertilizers, Insecticides, Pesticides, Herbicides and various Agrochemicals.
            </p>

            <Link href="/contact">
              <span className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary/95 text-white font-bold text-[15px] px-8 py-4 rounded-full transition-colors cursor-pointer shadow-lg hover:shadow-xl shadow-primary/10">
                Contact Our Facility <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[32px] overflow-hidden aspect-[4/3] relative shadow-2xl border border-gray-100 bg-gray-50">
              <img
                src="/company-building.png"
                alt="Agrishield Industries Manufacturing Facility in Pune"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* ── LOGO STRIP ──────────────────────────────────────── */}
        <div className="border-t border-b border-gray-100 py-8 mb-24">
          <p className="text-[12px] font-bold text-gray-400 uppercase tracking-widest text-center mb-6">
            Official Accreditations &amp; Consents
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">
            {LOGO_STRIP.map((logo) => (
              <div key={logo.name} className="flex items-center gap-3 justify-center">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <logo.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold text-gray-800 leading-none mb-1">{logo.name}</h4>
                  <p className="text-[10.5px] font-semibold text-gray-400 leading-none">{logo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── DRIVEN BY INNOVATION SECTION ───────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 items-center">
          <div className="lg:col-span-6 lg:order-2">
            <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-3 block">
              Company Overview
            </span>
            <h2 className="text-[32px] md:text-[44px] font-extrabold text-gray-900 leading-[1.1] mb-6">
              Reputation Built on Quality &amp; Honest Intentions
            </h2>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
              AGRISHIELD® organisation started in the year 2020. The organisation is ISO 9001: 2015 certified, Organic Biostimulants, Organic Bio Fertilizers DRC Certified, Adjuvants, Micronutrients &amp; Water Soluble Fertilizers Manufacturing license, CIBRC &amp; Maharashtra state manufacturing license of Insecticides etc. The organisation also has the Maharashtra Pollution Control Board’s Consent to operate.
            </p>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
              Our comprehensive product range includes **Organic Biostimulants**, **Organic Bio-fertilizers**, **Adjuvants**, **Chelated Micronutrients**, **NPK Water Soluble Fertilizer formulations**, straight micronutrients &amp; mixtures, liquid fertilizers, insecticides, pesticides, herbicides, and custom agricultural inputs.
            </p>
            <Link href="/products">
              <span className="inline-flex items-center gap-1.5 text-[15px] font-bold text-primary hover:underline cursor-pointer group">
                Browse Full Product Range <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="relative">
              {/* Highlight image card */}
              <div className="rounded-[32px] overflow-hidden aspect-[4/5] max-w-[420px] mx-auto relative shadow-xl border border-gray-100 bg-white">
                <img
                  src="/iso-certificate.png"
                  alt="Agrishield ISO 9001:2015 Certification Document"
                  className="w-full h-full object-contain p-4"
                />
                
                {/* Floating metrics badge */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Star className="w-5 h-5 text-green-600 fill-green-600" />
                  </div>
                  <div>
                    <h5 className="text-[13px] font-extrabold text-gray-800 leading-tight">ISO 9001:2015</h5>
                    <p className="text-[11px] font-bold text-green-600">Accredited Production</p>
                  </div>
                </div>

                {/* Floating pill tags */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 shadow-lg">
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {["NPK Mixtures", "Chelates", "Bio Fertilizers", "Adjuvants"].map((tag) => (
                      <span key={tag} className="text-[9px] font-bold uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded-md text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-[13.5px] font-bold text-gray-900 leading-snug">
                    Committed to double farmer productivity at minimum cost.
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
              <div className="text-[13.5px] font-bold text-gray-500 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── VISION & MISSION ────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-primary/[0.02] border border-primary/10 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full flex items-center justify-center">
              <Compass className="w-8 h-8 text-primary/30" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full" /> Our Vision
            </h3>
            <p className="text-[14.5px] text-gray-600 leading-relaxed">
              Our sacred vision is to provide quality agrochemicals for plant protection, to help farmers by finding appropriate solutions for their problems, and to offer optimum use of inputs.
            </p>
          </div>
          <div className="bg-primary/[0.02] border border-primary/10 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full flex items-center justify-center">
              <Target className="w-8 h-8 text-primary/30" />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-primary rounded-full" /> Our Mission
            </h3>
            <p className="text-[14.5px] text-gray-600 leading-relaxed">
              Our Mission is to provide comprehensive agricultural solutions right from sowing to harvest, aimed towards the objective of improving the sustainability &amp; profitability of farm holdings through continuous research.
            </p>
          </div>
        </div>

        {/* ── OUR CORE VALUES ─────────────────────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-2 block">
              Core Principles
            </span>
            <h2 className="text-[32px] font-extrabold text-gray-900 leading-none">
              Our Core Values
            </h2>
            <p className="text-[14px] text-gray-500 mt-3">
              Representing the three fundamental elements that define our action and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((val) => (
              <div 
                key={val.title}
                className="rounded-2xl p-6 border transition-shadow duration-300 hover:shadow-md"
                style={{ backgroundColor: val.bg, borderColor: val.border }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${val.color}15` }}>
                    <val.icon className="w-5 h-5" style={{ color: val.color }} />
                  </div>
                  <h3 className="text-[16px] font-extrabold" style={{ color: val.color }}>
                    {val.title}
                  </h3>
                </div>
                <p className="text-[13.5px] leading-relaxed text-gray-600">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── INFRASTRUCTURE & ACCORDIONS ─────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-[32px] overflow-hidden aspect-[4/3] relative shadow-xl border border-gray-100">
              <img
                src="/company-lab.png"
                alt="Agrishield Quality Control Laboratory showing Automatic Absorption Spectroscopy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-black/45 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[12px] font-semibold text-white">
                Quality Control Lab &amp; AAS System
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-3 block">
              Infrastructure
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-tight mb-8">
              Advanced Production &amp; Lab Standards
            </h2>

            {/* Accordion List */}
            <div className="space-y-4">
              {INFRASTRUCTURE.map((item, index) => {
                const isOpen = openAccord === index;
                return (
                  <div 
                    key={item.title}
                    className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm hover:border-gray-200 transition-all"
                  >
                    <button
                      onClick={() => toggleAccord(index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-[15.5px] font-bold text-gray-900">{item.title}</span>
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
                            {item.content}
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

        {/* ── DIRECTORS & LEADERSHIP SECTION ─────────────────── */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-3 block">
              Leadership
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-tight">
              Our Directors
            </h2>
            <p className="text-gray-500 text-[14.5px] mt-4 leading-relaxed">
              Meet the key leaders steering Agrishield Industries towards agricultural excellence and professional employee culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Dr. Shantishwar Patil */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-primary/20">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80"
                      alt="Dr. Shantishwar Patil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-extrabold text-gray-900 leading-tight">Dr. Shantishwar Patil</h3>
                    <p className="text-[13px] font-bold text-primary">Managing Director</p>
                  </div>
                </div>
                <p className="text-[13px] text-gray-400 font-semibold mb-4 uppercase tracking-wider">
                  Postgraduate, MBA in Operation Management
                </p>
                <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6">
                  Over **24 years** of vast industrial experience in the chemical field operation. Technically sound, dynamic, and focused on real-time decision making. He steers the production, R&amp;D, and marketing departments.
                </p>
              </div>
              <div className="bg-primary/[0.02] border border-primary/5 rounded-2xl p-5 italic text-[13px] text-gray-600 leading-relaxed relative">
                <span className="absolute -top-3 left-4 bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">MD Message</span>
                ” I believe and salute Farmer’s strength &amp; patience. Our country’s growth depends on the growth of our farmers. They are the backbone of our economy. I extend my heartfelt thanks to our Annadatas. We run our organisation on the slogan 'CONSERVE THE NATURE, SERVE THE FUTURE'. “
              </div>
            </div>

            {/* Mrs. Pratibha Patil */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-primary/20">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&q=80"
                      alt="Mrs. Pratibha Patil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-extrabold text-gray-900 leading-tight">Mrs. Pratibha Patil</h3>
                    <p className="text-[13px] font-bold text-primary">HRD Director</p>
                  </div>
                </div>
                <p className="text-[13px] text-gray-400 font-semibold mb-4 uppercase tracking-wider">
                  Human Resources &amp; Culture Director
                </p>
                <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6">
                  Dedicated to maintaining a professional yet familial culture in the organisation, ensuring workplace safety, employee welfare, and aligning team workflows to support positive thinking and employee empowerment.
                </p>
              </div>
              <div className="bg-primary/[0.02] border border-primary/5 rounded-2xl p-5 italic text-[13px] text-gray-600 leading-relaxed relative">
                <span className="absolute -top-3 left-4 bg-primary text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">HRD Message</span>
                “ I always bind to maintain the neat and clean environment of the company, and to support the positive thinking and hard work of our employees. We continuously maintain a family culture built on 'Not I, Say We' from top to bottom. “
              </div>
            </div>
          </div>
        </div>

        {/* ── TESTIMONIALS SECTION ────────────────────────────── */}
        <div className="border-t border-gray-100 pt-20">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-[12px] font-bold text-primary tracking-widest uppercase mb-3 block">
              Farmer Testimonials
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-none">
              Proven in the Fields of Maharashtra
            </h2>
            <p className="text-[15px] text-gray-500 mt-4 leading-relaxed">
              Read how dealers and farmers across Maharashtra experience the efficacy of Agrishield inputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test) => (
              <div 
                key={test.name}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 flex flex-col justify-between shadow-sm"
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
