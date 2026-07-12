import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileText, CheckCircle, ExternalLink, X } from "lucide-react";

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
  const [activePdf, setActivePdf] = useState<typeof CERTIFICATIONS[0] | null>(null);

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
              <span className="text-[13px] font-semibold">11 Official Certifications &amp; Registrations</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
          {[
            { value: "11", label: "Certificates & Registrations" },
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

        {/* Certificates Grid */}
        <div id="certifications" className="scroll-mt-24">
          <div className="mb-10">
            <h2 className="text-[26px] md:text-[32px] font-bold text-gray-900 mb-3">
              Official Certificates &amp; Registrations
            </h2>
            <p className="text-[15px] text-gray-500 max-w-2xl">
              Click "View PDF" to open and inspect any of Agrishield's official government registration documents.
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
                    onClick={() => setActivePdf(cert)}
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white text-[13px] font-semibold px-4 py-2.5 rounded-full transition-colors cursor-pointer"
                    data-testid={`btn-view-${i}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> View PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* ── PDF VIEWER MODAL ────────────────────────────────── */}
      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActivePdf(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl overflow-hidden w-full max-w-4xl h-[85vh] shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                <div>
                  <h3 className="font-bold text-gray-900 text-[16px] leading-snug">{activePdf.title}</h3>
                  <p className="text-[12px] text-gray-500 font-semibold">{activePdf.issuer}</p>
                </div>
                <button
                  onClick={() => setActivePdf(null)}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors ml-4 cursor-pointer"
                  aria-label="Close PDF viewer"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* PDF or Image Viewer */}
              <div className="flex-1 bg-gray-100 relative overflow-auto flex items-center justify-center p-4">
                {activePdf.file.endsWith(".pdf") ? (
                  <iframe
                    src={`/${activePdf.file}#toolbar=0`}
                    title={activePdf.title}
                    className="w-full h-full border-0"
                  />
                ) : (
                  <img
                    src={`/${activePdf.file}`}
                    alt={activePdf.title}
                    className="max-w-full max-h-full object-contain shadow-md rounded"
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
