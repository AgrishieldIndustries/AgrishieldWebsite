import { Link } from "wouter";
import { motion } from "framer-motion";
import { FlaskConical, Leaf, Microscope, ChevronRight } from "lucide-react";

const PILLARS = [
  {
    Icon: FlaskConical,
    title: "Formulation R&D",
    desc: "Our chemists develop suspension concentrates, water-dispersible granules and water-soluble powders that deliver maximum active ingredient bioavailability at minimum dose.",
  },
  {
    Icon: Microscope,
    title: "Field Trials",
    desc: "Every new product completes a minimum of three seasons of multi-location trials across different agro-climatic zones before commercialisation.",
  },
  {
    Icon: Leaf,
    title: "Sustainable Chemistry",
    desc: "We invest in bio-rational formulations, plant-based actives and controlled-release technologies that reduce environmental load while maintaining efficacy.",
  },
];

const PIPELINE = [
  { status: "Launched 2024", name: "AGRISHIELD NANO BORON", desc: "Nano-particle boron formulation with 3× higher leaf absorption vs conventional boron." },
  { status: "Field trials", name: "AGRISHIELD BIO NPK", desc: "Microbial consortium of N-fixers and P-solubilisers in a granular seed-treatment format." },
  { status: "Under development", name: "AGRISHIELD SMART DRIP", desc: "Fully chelated, pH-buffered nutrient concentrate designed for precision drip fertigation." },
];

export default function Innovation() {
  return (
    <div className="w-full bg-white pb-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-12">
        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-primary/10 rounded-full px-4 py-1.5 text-[12px] font-semibold text-primary tracking-wider uppercase mb-4">
              R&amp;D &amp; Innovation
            </div>
            <h1 className="text-[32px] md:text-[44px] font-bold text-gray-900 leading-[1.1] mb-5">
              Science that works in the field, not just the lab.
            </h1>
            <p className="text-[16px] text-gray-500 leading-relaxed mb-6">
              Agrishield's 12,000 sq ft research facility in Pune develops formulations that are efficacious, safe and commercially viable — tested under the specific conditions Indian farmers face.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-colors"
              data-testid="btn-innovation-cta"
            >
              Partner with us <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-[20px] overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop&q=85"
              alt="R&D laboratory"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-gray-50 rounded-[16px] p-7"
              data-testid={`card-pillar-${i}`}
            >
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <pillar.Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-2">{pillar.title}</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pipeline */}
        <div className="mb-10">
          <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-6">Product pipeline</h2>
          <div className="space-y-4">
            {PIPELINE.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.35 }}
                className="flex items-start gap-5 bg-gray-50 rounded-[14px] p-6"
                data-testid={`pipeline-item-${i}`}
              >
                <div className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap mt-0.5 ${
                  item.status === "Launched 2024"
                    ? "bg-primary/10 text-primary"
                    : item.status === "Field trials"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-gray-200 text-gray-600"
                }`}>
                  {item.status}
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-gray-900 mb-1">{item.name}</div>
                  <div className="text-[14px] text-gray-500">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#f5f5f5] rounded-[20px] px-8 md:px-14 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "12,000", unit: "sq ft", label: "Research facility" },
              { value: "28", unit: "+", label: "Scientists & agronomists" },
              { value: "3", unit: " seasons", label: "Minimum field trials" },
              { value: "40", unit: "+", label: "Patents filed" },
            ].map((stat) => (
              <div key={stat.label} data-testid={`innovation-stat-${stat.label.replace(/\s/g, "-")}`}>
                <div className="text-[32px] md:text-[40px] font-bold text-primary leading-none mb-1">
                  {stat.value}<span className="text-[20px]">{stat.unit}</span>
                </div>
                <div className="text-[13px] text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
