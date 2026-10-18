import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, ChevronDown, Award, FileText, 
  Star, ArrowRight, UserCheck, Compass, Target,
  Lock, Mail, Send, CheckCircle2, X, Building2, User, Phone
} from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

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
    title: "Trust",
    desc: "Like the earth, we are dependable. We work with integrity of purpose, honesty in action and fairness in all our dealings.",
    img: "/val-trust.png"
  },
  {
    title: "Adaptability",
    desc: "Adaptive, like water. Constantly transforming ourselves like water, we are nimble-footed and highly responsive to change.",
    img: "/val-adaptability.png"
  },
  {
    title: "Speed",
    desc: "Blazing ahead like fire. Quick and agile, Like fire we constantly strive to work with speed in the way. We observe, think and act.",
    img: "/val-speed.png"
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
  const { toast } = useToast();
  const [openAccord, setOpenAccord] = useState<number | null>(0);
  const [requestModalOpen, setRequestModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    purpose: "Quality & Compliance Verification",
    message: "",
  });

  const toggleAccord = (index: number) => {
    setOpenAccord(openAccord === index ? null : index);
  };

  const handleSubmitRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      access_key: "28ca6348-1a33-4b31-a833-4519a4453046",
      subject: "Document Access Request: ISO 9001:2015 Quality Management - Agrishield",
      from_name: "Agrishield Document Request Portal",
      certificate_title: "ISO 9001:2015 Quality Management",
      certificate_code: "ISO 9001:2015",
      certificate_issuer: "Quality Control Certification (QCC) · Accredited by UABL",
      requester_name: formData.name,
      requester_email: formData.email,
      requester_phone: formData.phone,
      organization: formData.organization || "Not specified",
      purpose: formData.purpose,
      additional_notes: formData.message || "None",
      message: `A visitor has requested to view official document "ISO 9001:2015 Quality Management".\n\nRequester Information:\n• Name: ${formData.name}\n• Email: ${formData.email}\n• Phone: ${formData.phone}\n• Organization: ${formData.organization || "Independent"}\n• Purpose: ${formData.purpose}\n• Notes: ${formData.message || "None"}\n\nDocument Information:\n• Title: ISO 9001:2015 Quality Management\n• Code: ISO 9001:2015\n• Issuer: Quality Control Certification (QCC) · Accredited by UABL`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        toast({
          title: "Request Sent Successfully",
          description: "Your request to view the ISO 9001:2015 Certificate has been forwarded to our compliance desk.",
        });
      } else {
        toast({
          title: "Submission failed",
          description: data.message || "Please try again or email us directly.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Submission failed",
        description: "A network error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
              Welcome to Agrishield Industries Pvt. Ltd.
            </h1>

            {/* Subtitle */}
            <div className="text-[18px] md:text-[22px] font-bold text-[#1a3a6e] mb-8">
              Agrochemicals Manufacturer in Pune
            </div>

            <p className="text-[15.5px] md:text-[17px] text-gray-500 leading-relaxed mb-8 max-w-2xl">
              AGRISHIELD® Brand of Agrishield Industries Pvt. Ltd. located in the Pune District of Maharashtra State, in the Kuruli Industrial Area, Tal- Khed near Chakan. It is well connected by road, rail &amp; air. Our product range includes Organic Biostimulants, Organic Bio Fertilizers, Adjuvants, Chelated Micronutrients, Water Soluble Fertilizers Formulations (NPK’s) Straight Micronutrients &amp; their mixtures, Liquid Fertilizers, Insecticides, Pesticides, Herbicides and various Agrochemicals.
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
             <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
              AGRISHIELD® organization started in the year 2020. The organization is ISO 9001:2015 certified, Organic Biostimulants, Organic Bio Fertilizers DRC Certified, Adjuvants, Micronutrients &amp; Water Soluble Fertilizers Manufacturing license, CIBRC &amp; Maharashtra state manufacturing license of Insecticides etc. The organization also has the Maharashtra Pollution Control Board’s Consent to operate.
            </p>
            <Link href="/products">
              <span className="inline-flex items-center gap-1.5 text-[15px] font-bold text-primary hover:underline cursor-pointer group">
                Browse Full Product Range <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-6 lg:order-1">
            <div className="relative">
              {/* Highlight image card with secure overlay */}
              <div className="rounded-[32px] overflow-hidden aspect-[4/5] max-w-[420px] mx-auto relative shadow-2xl border border-gray-100 bg-gray-950 group">
                <img
                  src="/iso-certificate.png"
                  alt="Agrishield ISO 9001:2015 Certification Document"
                  className="w-full h-full object-contain p-4 filter blur-[7px] opacity-40 scale-95 transition-all duration-300"
                />

                {/* Security Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/75 to-transparent flex flex-col items-center justify-end p-6 text-center text-white pb-8">
                  <div className="w-13 h-13 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-3 shadow-lg">
                    <Lock className="w-6 h-6 text-white" />
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/15 text-white mb-2 border border-white/15">
                    Restricted Compliance Record
                  </div>

                  <h3 className="text-[18px] font-bold text-white mb-1">
                    ISO 9001:2015 Certificate
                  </h3>
                  <p className="text-[12px] text-gray-300 max-w-[280px] mb-4 leading-relaxed">
                    Official accreditation documents are restricted to verified partners &amp; regulatory inquiries.
                  </p>

                  <button
                    onClick={() => {
                      setRequestModalOpen(true);
                      setSubmitted(false);
                    }}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-[13.5px] px-6 py-2.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 active:scale-95 mb-3"
                    data-testid="btn-about-request-iso"
                  >
                    <Mail className="w-4 h-4" /> Request to View
                  </button>

                  <Link href="/awards#certifications">
                    <span className="text-[12px] text-gray-300 hover:text-white underline cursor-pointer">
                      View all 12 licenses &amp; certificates &rarr;
                    </span>
                  </Link>
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
          <div className="flex items-center gap-4 mb-16 justify-start">
            <div className="w-16 h-[3px] bg-[#b91c1c] shrink-0" />
            <span className="text-[20px] font-bold text-[#b91c1c] uppercase tracking-wider">
              Our Values
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {VALUES.map((val) => (
              <div 
                key={val.title}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="w-20 h-20 flex items-center justify-center mb-6">
                  <img
                    src={val.img}
                    alt={val.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-[22px] font-bold text-gray-900 mb-4">
                  {val.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-gray-500">
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
        <div className="bg-[#f4f6f9] rounded-[40px] p-8 md:p-14 mb-24">
          <div className="mb-14 text-center md:text-left">
            <span className="text-[12px] font-bold text-[#b91c1c] tracking-widest uppercase mb-3 block">
              Leadership
            </span>
            <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 leading-tight">
              Our Directors
            </h2>
          </div>

          <div className="space-y-20">
            {/* Dr. Shantishwar Patil */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="text-[15.5px] text-gray-700 leading-relaxed font-medium mb-8">
                  " I believe and salute Farmer’s strength &amp; patience to walk in all up and down weather conditions, Our country’s growth depends on the growth of our farmers. They are the backbone of our economy. I extend my heartfelt thanks to our country’s Annadatas, the farmers who stay close to nature and work extensively to bring out the gems from Mother Earth to feed our growing population. We are running our organization AGRISHIELD® Brand of Agrishield Industries Pvt. Ltd. on the slogan “CONSERVE THE NATURE, SERVE THE FUTURE”. We believe in educating and sharing new technology through our advanced crop protection solutions and services to ensure National Food Security, and to support today’s farmers to become the agricultural leaders of tomorrow. AGRISHIELD® organization is bound to manufacture and sell quality products at reasonable cost in future. "
                </p>
                <div>
                  <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#1a3a6e] leading-tight mb-1">
                    Dr. Shantishwar Patil
                  </h3>
                  <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wide">
                    Managing Director
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[380px] aspect-[4/3] mr-4 mb-4">
                  {/* Red backdrop offset */}
                  <div className="absolute inset-0 bg-[#b91c1c] rounded-2xl translate-x-3 translate-y-3" />
                  {/* Image card */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-gray-150 bg-white">
                    <img
                      src="/director-shantishwar.png"
                      alt="Dr. Shantishwar Patil, Managing Director of Agrishield Industries Pvt. Ltd."
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Mrs. Pratibha Patil */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-t border-gray-200/60 pt-16">
              <div className="lg:col-span-7 lg:order-2 flex flex-col justify-center">
                <p className="text-[15.5px] text-gray-700 leading-relaxed font-medium mb-8">
                  " I always bind to maintain the neat and clean environment of company, To support the Positive thinking and hard work employees. Also continuously maintaining the professional and family culture in the organisation that is “Not I, Say We” from top to bottom of employees. "
                </p>
                <div>
                  <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#1a3a6e] leading-tight mb-1">
                    Mrs. Pratibha Patil
                  </h3>
                  <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wide">
                    HRD Director
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-[380px] aspect-[3/4] mr-4 mb-4">
                  {/* Red backdrop offset */}
                  <div className="absolute inset-0 bg-[#b91c1c] rounded-2xl translate-x-3 translate-y-3" />
                  {/* Image card */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-gray-150 bg-white">
                    <img
                      src="/mrs-pratibha-patil.png"
                      alt="Mrs. Pratibha Patil, HRD Director of Agrishield Industries Pvt. Ltd."
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
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

      {/* ── REQUEST TO VIEW MODAL ────────────────────────────────── */}
      <AnimatePresence>
        {requestModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setRequestModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-white rounded-2xl overflow-hidden w-full max-w-lg shadow-2xl relative my-8 border border-gray-100 flex flex-col text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between bg-gray-50/70">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide mb-1.5 bg-red-100 text-red-700">
                    <Lock className="w-3 h-3" /> ISO 9001:2015
                  </div>
                  <h3 className="font-bold text-gray-900 text-[17px] leading-snug">
                    ISO 9001:2015 Quality Management
                  </h3>
                  <p className="text-[12px] text-gray-500 font-medium mt-0.5">
                    Quality Control Certification (QCC) · Accredited by UABL
                  </p>
                </div>
                <button
                  onClick={() => setRequestModalOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors ml-4 cursor-pointer text-gray-500 hover:text-gray-800"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {!submitted ? (
                  <div>
                    <div className="bg-primary/[0.04] border border-primary/15 rounded-xl p-3.5 mb-5 flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-[13px] text-gray-600 leading-relaxed">
                        Official compliance records are shared upon verified request. Fill in your details below and our team will verify and forward the document to your email.
                      </p>
                    </div>

                    <form onSubmit={handleSubmitRequest} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12.5px] font-semibold text-gray-700 mb-1">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Your full name"
                              className="w-full h-10.5 pl-10 pr-3 rounded-lg border border-gray-200 text-[13.5px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition bg-white"
                              data-testid="input-about-request-name"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[12.5px] font-semibold text-gray-700 mb-1">
                            Phone / WhatsApp <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              required
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+91 98765 43210"
                              className="w-full h-10.5 pl-10 pr-3 rounded-lg border border-gray-200 text-[13.5px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition bg-white"
                              data-testid="input-about-request-phone"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12.5px] font-semibold text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@company.com"
                            className="w-full h-10.5 pl-10 pr-3 rounded-lg border border-gray-200 text-[13.5px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition bg-white"
                            data-testid="input-about-request-email"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[12.5px] font-semibold text-gray-700 mb-1">
                            Organization / Firm
                          </label>
                          <div className="relative">
                            <Building2 className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <input
                              type="text"
                              value={formData.organization}
                              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                              placeholder="e.g. Kisan Agri Centre / Dealer"
                              className="w-full h-10.5 pl-10 pr-3 rounded-lg border border-gray-200 text-[13.5px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition bg-white"
                              data-testid="input-about-request-org"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[12.5px] font-semibold text-gray-700 mb-1">
                            Purpose of Request
                          </label>
                          <select
                            value={formData.purpose}
                            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                            className="w-full h-10.5 px-3 rounded-lg border border-gray-200 text-[13.5px] text-gray-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition bg-white"
                            data-testid="select-about-request-purpose"
                          >
                            <option value="Quality & Compliance Verification">Quality &amp; Compliance Verification</option>
                            <option value="Dealership / Retail Partnership">Dealership / Retail Partnership</option>
                            <option value="Institutional / B2B Procurement">Institutional / B2B Procurement</option>
                            <option value="Export & International Trade">Export &amp; International Trade</option>
                            <option value="Other Verification">Other Verification</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12.5px] font-semibold text-gray-700 mb-1">
                          Notes / Specific requirement (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Provide any specific requirement or notes..."
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition bg-white resize-none"
                          data-testid="textarea-about-request-notes"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold text-[14px] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer mt-2"
                        data-testid="btn-submit-about-request"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending Request to Agrishield...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" /> Submit Request to View
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 px-2"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-100 shadow-sm">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>

                    <h4 className="text-[20px] font-bold text-gray-900 mb-2">Request Submitted Successfully</h4>
                    <p className="text-[14px] text-gray-600 mb-6 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your formal request to inspect <strong className="text-gray-900">ISO 9001:2015 Quality Management</strong> has been emailed to our compliance desk.
                    </p>

                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-left mb-6 text-[12.5px] space-y-1.5">
                      <div className="flex justify-between text-gray-500">
                        <span>Document:</span>
                        <strong className="text-gray-800">ISO 9001:2015</strong>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Dispatched to:</span>
                        <strong className="text-primary truncate ml-2">shantishwar.patil@agrishieldindustries.com</strong>
                      </div>
                      <div className="flex justify-between text-gray-500">
                        <span>Contact Info:</span>
                        <span className="text-gray-700">{formData.email} · {formData.phone}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setRequestModalOpen(false)}
                      className="w-full h-11 bg-gray-900 hover:bg-black text-white font-semibold text-[14px] rounded-xl transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
