import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, FileText, CheckCircle, Mail, X, Send, 
  Lock, Building2, User, Phone, CheckCircle2, Award, Trophy, Maximize2 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CERTIFICATIONS = [
  {
    code: "ISO 9001:2015",
    title: "ISO 9001:2015 Quality Management",
    issuer: "Quality Control Certification (QCC) · Accredited by UABL",
    file: "iso-certificate.png",
    color: "#b91c1c",
  },
  {
    code: "GST Certificate",
    title: "GST Registration",
    issuer: "Government of India – Income Tax Department",
    file: "GST Certificate - Agrishield Inds Pvt Ltd.pdf",
    color: "#1f7a3a",
  },
  {
    code: "Udyam Registration",
    title: "MSME / Udyam Registration",
    issuer: "Ministry of MSME, Government of India",
    file: "Udyam Registration Certificate- AIPL 17.01.26.pdf",
    color: "#1f7a3a",
  },
  {
    code: "IEC Certificate",
    title: "Import Export Code (IEC)",
    issuer: "DGFT – Ministry of Commerce, Government of India",
    file: "IEC Certificate- Agrishield Inds Pvt Ltd.pdf",
    color: "#0e6bc2",
  },
  {
    code: "LEI Certificate",
    title: "Legal Entity Identifier (LEI)",
    issuer: "Global Legal Entity Identifier Foundation (GLEIF)",
    file: "LEI Certificate 984500E77959CADB0309.pdf",
    color: "#0e6bc2",
  },
  {
    code: "Startup India",
    title: "Startup India Certificate",
    issuer: "DPIIT – Department for Promotion of Industry and Internal Trade",
    file: "Startup Certificate AIPL.pdf",
    color: "#f59e0b",
  },
  {
    code: "MPCB Consent",
    title: "Consent to Operate (MPCB)",
    issuer: "Maharashtra Pollution Control Board (MPCB)",
    file: "Consent to Operate MPCB Certificate AIPL.pdf",
    color: "#16a34a",
  },
  {
    code: "DRC – Biostimulants",
    title: "Domestic Registration – Biostimulants",
    issuer: "Plant Protection Advisor of India (OAABD2026030107351)",
    file: "DRC BIOSTIMULANTS AIPL # OAABD2026030107351.pdf",
    color: "#16a34a",
  },
  {
    code: "DRC – Fertilisers",
    title: "Domestic Registration – Fertilisers",
    issuer: "Dept. of Agriculture & Cooperation (OAAFD202603028971)",
    file: "DRC FERTILISERS AIPL # OAAFD202603028971.pdf",
    color: "#16a34a",
  },
  {
    code: "MRC – Fertilisers",
    title: "Manufacturing Registration – Fertilisers",
    issuer: "Dept. of Agriculture & Cooperation (OAAFM202603006481)",
    file: "MRC FERTILISERS AIPL # OAAFM202603006481.pdf",
    color: "#0e6bc2",
  },
  {
    code: "Mfg. License – Insecticides",
    title: "Manufacturing License for Insecticides",
    issuer: "Agriculture Commissioner – Maharashtra Government",
    file: "Mfg License of Insecticides- AIPL.pdf",
    color: "#dc2626",
  },
  {
    code: "MEPL Membership",
    title: "MEPL Membership Certificate",
    issuer: "Maharashtra Exports Promotion Ltd. (MEPL)",
    file: "MEPL Membership Certificate.pdf",
    color: "#7c3aed",
  },
];

export default function Awards() {
  const { toast } = useToast();
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATIONS[0] | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    purpose: "Dealership / Retail Partnership",
    message: "",
  });
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    alt: string;
    title: string;
    subtitle?: string;
  } | null>(null);

  const handleOpenRequest = (cert: typeof CERTIFICATIONS[0]) => {
    setSelectedCert(cert);
    setSubmitted(false);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
    setSubmitted(false);
    setLoading(false);
  };

  const handleSubmitRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCert) return;
    setLoading(true);

    const payload = {
      access_key: "28ca6348-1a33-4b31-a833-4519a4453046",
      subject: `Document Access Request: ${selectedCert.title} (${selectedCert.code}) - Agrishield Industries`,
      from_name: "Agrishield Document Request Portal",
      certificate_title: selectedCert.title,
      certificate_code: selectedCert.code,
      certificate_issuer: selectedCert.issuer,
      requester_name: formData.name,
      requester_email: formData.email,
      requester_phone: formData.phone,
      organization: formData.organization || "Not specified",
      purpose: formData.purpose,
      additional_notes: formData.message || "None",
      message: `A visitor has requested to view official document "${selectedCert.title}" (${selectedCert.code}).\n\nRequester Information:\n• Name: ${formData.name}\n• Email: ${formData.email}\n• Phone: ${formData.phone}\n• Organization: ${formData.organization || "Independent"}\n• Purpose: ${formData.purpose}\n• Notes: ${formData.message || "None"}\n\nDocument Information:\n• Title: ${selectedCert.title}\n• Code: ${selectedCert.code}\n• Issuer: ${selectedCert.issuer}`
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
          description: `Your request to view ${selectedCert.title} has been forwarded to our compliance desk.`,
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
        description: "A network error occurred. Please try again later or email us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const mailtoHref = selectedCert
    ? `mailto:shantishwar.patil@agrishieldindustries.com?cc=info.agrishield@gmail.com&subject=${encodeURIComponent(
        `Request to View Certificate: ${selectedCert.title} (${selectedCert.code})`
      )}&body=${encodeURIComponent(
        `Hello Agrishield Compliance Team,\n\nI would like to request access to view the following official document:\n\n- Document: ${selectedCert.title}\n- Code: ${selectedCert.code}\n- Issuer: ${selectedCert.issuer}\n\nMy Details:\nName: ${formData.name || "[Your Name]"}\nPhone: ${formData.phone || "[Your Phone]"}\nEmail: ${formData.email || "[Your Email]"}\nOrganization: ${formData.organization || "[Your Organization / Firm]"}\nPurpose: ${formData.purpose}\nNotes: ${formData.message || "None"}\n\nThank you.`
      )}`
    : "#";

  return (
    <div className="w-full bg-white pb-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-12">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-primary/10 rounded-full px-4 py-1.5 text-[12px] font-semibold text-primary tracking-wider uppercase mb-4">
              Certifications &amp; Compliance
            </div>
            <h1 className="text-[32px] md:text-[44px] font-bold text-gray-900 leading-[1.1] mb-5">
              Certified, registered &amp; trusted across every standard.
            </h1>
            <p className="text-[16px] text-gray-500 leading-relaxed mb-6">
              Agrishield Industries Pvt. Ltd. holds all mandatory licenses, government registrations, and industry certifications required to manufacture, sell, and export agri-inputs across India.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-2 text-[13px] font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-3 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" /> GST Registered
              </div>
              <div className="flex items-center gap-2 text-[13px] font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-3 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" /> MPCB Compliant
              </div>
              <div className="flex items-center gap-2 text-[13px] font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-3 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" /> Startup India Recognized
              </div>
              <div className="flex items-center gap-2 text-[13px] font-semibold text-gray-700 bg-gray-50 border border-gray-200 px-3 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" /> IEC Export Certified
              </div>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-colors"
              data-testid="btn-awards-contact"
            >
              Enquire for Dealership
            </a>
          </div>
          <div className="rounded-[20px] overflow-hidden aspect-[4/3] relative shadow-md">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=85"
              alt="Certificates and compliance background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-white" />
              <span className="text-[13px] font-semibold">{CERTIFICATIONS.length} Official Certifications &amp; Registrations</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {[
            { value: `${CERTIFICATIONS.length}`, label: "Certificates & Registrations" },
            { value: "2026", label: "Latest Registration Year" },
            { value: "IEC", label: "Export Code Certified" },
            { value: "MPCB", label: "Pollution Board Approved" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
              className="bg-gray-50 rounded-[16px] p-6 text-center"
              data-testid={`stat-cert-${i}`}
            >
              <div className="text-[32px] md:text-[40px] font-extrabold text-primary leading-none mb-2">{stat.value}</div>
              <div className="text-[12.5px] text-gray-500 font-medium leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* ── INDUSTRY AWARDS & RECOGNITION ───────────────────── */}
        <div id="awards" className="mb-24 scroll-mt-24">
          <div className="mb-8">
            <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-800 border border-amber-500/20 rounded-full px-3.5 py-1 text-[12px] font-semibold tracking-wider uppercase mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-600" /> Honors &amp; Recognition
            </div>
            <h2 className="text-[26px] md:text-[34px] font-bold text-gray-900 mb-3 tracking-tight font-['Lexend',sans-serif]">
              Industry Awards &amp; Honors
            </h2>
            <p className="text-[15px] text-gray-500 max-w-2xl leading-relaxed">
              Recognizing outstanding leadership, industry contribution, and commitment to farmer empowerment.
            </p>
          </div>

          {/* Lokmat Excellence Award Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-[24px] border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            data-testid="card-lokmat-award"
          >
            <div className="p-6 md:p-10">
              {/* Header Title & Description */}
              <div className="mb-8 pb-6 border-b border-gray-100">
                <h3 className="text-[26px] md:text-[32px] font-bold text-gray-900 leading-snug tracking-tight font-['Lexend',sans-serif] mb-3">
                  Lokmat Excellence Awards 2025
                </h3>
                <blockquote className="text-[16px] md:text-[17px] font-semibold text-gray-800 leading-relaxed mb-2">
                  “Recognition of Dr. Shantishwar Patil of Agrishield Industries at the Lokmat Excellence Awards 2025.”
                </blockquote>
                <p className="text-[13px] text-gray-500 font-medium">
                  विशेष गौरव: ‘लोकमत एक्सलन्स अवॉर्ड्स २०२५’ — डॉ. शांतीश्वर पाटील, एक्सलन्स इन ॲग्रीकल्चर इंडस्ट्री
                </p>
              </div>

              {/* Two Photographs Section */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Photo 1: Primary Award Recognition Image (Portrait newspaper / award clipping) */}
                <div className="lg:col-span-5 flex flex-col">
                  <div
                    onClick={() =>
                      setPreviewImage({
                        src: "/lokmat-excellence-award-2025-recognition.jpg",
                        alt: "Lokmat Excellence Awards 2025 recognition featuring Dr. Shantishwar Patil.",
                        title: "Lokmat Excellence Awards 2025 – Award Recognition",
                        subtitle: "डॉ. शांतीश्वर पाटील – एक्सलन्स इन ॲग्रीकल्चर इंडस्ट्री",
                      })
                    }
                    className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md cursor-pointer flex-1 flex items-center justify-center p-3 transition-all duration-200"
                    data-testid="img-lokmat-recognition"
                  >
                    <img
                      src="/lokmat-excellence-award-2025-recognition.jpg"
                      alt="Lokmat Excellence Awards 2025 recognition featuring Dr. Shantishwar Patil."
                      className="w-full h-auto max-h-[480px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-gray-900 text-[12px] font-semibold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                        <Maximize2 className="w-3.5 h-3.5" /> Click to view larger
                      </span>
                    </div>
                  </div>
                  <p className="text-[12px] text-gray-500 mt-2.5 text-center font-medium">
                    Award recognition coverage · ‘लोकमत एक्सलन्स अवॉर्ड्स २०२५’
                  </p>
                </div>

                {/* Photo 2: Full-stage Ceremony Photograph (Landscape) */}
                <div className="lg:col-span-7 flex flex-col">
                  <div
                    onClick={() =>
                      setPreviewImage({
                        src: "/lokmat-excellence-award-2025-stage.jpg",
                        alt: "Group photograph from the Lokmat Excellence Awards 2025 ceremony.",
                        title: "Lokmat Excellence Awards 2025 – Stage Ceremony",
                        subtitle: "Presentation ceremony with dignitaries on stage",
                      })
                    }
                    className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50/50 shadow-sm hover:shadow-md cursor-pointer flex-1 flex items-center justify-center p-3 transition-all duration-200"
                    data-testid="img-lokmat-stage"
                  >
                    <img
                      src="/lokmat-excellence-award-2025-stage.jpg"
                      alt="Group photograph from the Lokmat Excellence Awards 2025 ceremony."
                      className="w-full h-auto max-h-[480px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-gray-900 text-[12px] font-semibold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                        <Maximize2 className="w-3.5 h-3.5" /> Click to view larger
                      </span>
                    </div>
                  </div>
                  <p className="text-[12px] text-gray-500 mt-2.5 text-center font-medium">
                    Group presentation ceremony on stage with dignitaries
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certificates Grid */}
        <div id="certifications" className="scroll-mt-24">
          <div className="mb-10">
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-3">
              Official Certificates &amp; Registrations
            </h2>
            <p className="text-[15px] text-gray-500 max-w-2xl">
              Click "Request to View" on any certificate or license to submit a verified access request directly to our compliance desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.4 }}
                className="bg-white rounded-[16px] border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col justify-between"
                data-testid={`card-cert-${i}`}
              >
                <div className="p-5">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div
                      className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wide"
                      style={{ background: `${cert.color}18`, color: cert.color }}
                    >
                      {cert.code}
                    </div>
                    <FileText className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" />
                  </div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-1 leading-snug">{cert.title}</h3>
                  <p className="text-[12.5px] font-semibold" style={{ color: cert.color }}>{cert.issuer}</p>
                </div>

                {/* Actions */}
                <div className="px-5 pb-5 flex items-center gap-3 pt-3 border-t border-gray-50">
                  <button
                    onClick={() => handleOpenRequest(cert)}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white text-[13px] font-semibold px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow active:scale-[0.99]"
                    data-testid={`btn-request-${i}`}
                  >
                    <Mail className="w-3.5 h-3.5" /> Request to View
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* ── REQUEST TO VIEW MODAL ────────────────────────────────── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-white rounded-2xl overflow-hidden w-full max-w-lg shadow-2xl relative my-8 border border-gray-100 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-gray-100 flex items-start justify-between bg-gray-50/70">
                <div>
                  <div
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide mb-1.5"
                    style={{ background: `${selectedCert.color}18`, color: selectedCert.color }}
                  >
                    <Lock className="w-3 h-3" /> {selectedCert.code}
                  </div>
                  <h3 className="font-bold text-gray-900 text-[17px] leading-snug">{selectedCert.title}</h3>
                  <p className="text-[12px] text-gray-500 font-medium mt-0.5">{selectedCert.issuer}</p>
                </div>
                <button
                  onClick={handleCloseModal}
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
                        Official regulatory licenses and certificates are shared upon verification. Fill in your details below and an automated request will be dispatched directly to our compliance team.
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
                              data-testid="input-request-name"
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
                              data-testid="input-request-phone"
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
                            data-testid="input-request-email"
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
                              data-testid="input-request-org"
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
                            data-testid="select-request-purpose"
                          >
                            <option value="Dealership / Retail Partnership">Dealership / Retail Partnership</option>
                            <option value="Institutional / B2B Procurement">Institutional / B2B Procurement</option>
                            <option value="Regulatory & Compliance Audit">Regulatory & Compliance Audit</option>
                            <option value="Export & International Trade">Export & International Trade</option>
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
                          data-testid="textarea-request-notes"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-11 bg-primary hover:bg-primary/90 text-white font-semibold text-[14px] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer mt-2"
                        data-testid="btn-submit-document-request"
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

                      <div className="pt-2 text-center">
                        <a
                          href={mailtoHref}
                          className="text-[12px] text-gray-500 hover:text-primary transition-colors underline inline-flex items-center gap-1"
                        >
                          <Mail className="w-3.5 h-3.5" /> Prefer your email client? Send directly via mail app
                        </a>
                      </div>
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
                      Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your formal request to inspect <strong className="text-gray-900">{selectedCert.title}</strong> has been emailed to our compliance desk.
                    </p>

                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-left mb-6 text-[12.5px] space-y-1.5">
                      <div className="flex justify-between text-gray-500">
                        <span>Document:</span>
                        <strong className="text-gray-800">{selectedCert.code}</strong>
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

                    <p className="text-[12px] text-gray-400 mb-6">
                      Our compliance desk verifies requests and shares documentation within 1 business day.
                    </p>

                    <button
                      onClick={handleCloseModal}
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

      {/* ── IMAGE LIGHTBOX MODAL ─────────────────────────────────── */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[92vh] shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/80">
                <div>
                  <h3 className="font-bold text-gray-900 text-[16px] leading-snug">{previewImage.title}</h3>
                  {previewImage.subtitle && (
                    <p className="text-[12px] text-gray-500 font-medium">{previewImage.subtitle}</p>
                  )}
                </div>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer text-gray-500 hover:text-gray-800"
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Full Image */}
              <div className="flex-1 overflow-auto p-4 bg-gray-950 flex items-center justify-center min-h-[300px]">
                <img
                  src={previewImage.src}
                  alt={previewImage.alt}
                  className="max-w-full max-h-[75vh] object-contain rounded shadow"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
