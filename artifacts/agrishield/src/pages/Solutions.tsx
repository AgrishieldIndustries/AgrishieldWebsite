import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const SOLUTIONS = [
  {
    title: "Nutrient Management",
    subtitle: "For every crop stage",
    desc: "Balanced NPK and micronutrient programmes from seedling establishment to fruiting — tailored to your soil profile and crop demand.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=500&fit=crop&q=85",
    tags: ["Wheat", "Paddy", "Cotton", "Vegetables"],
  },
  {
    title: "Pest & Disease Control",
    subtitle: "Targeted chemistry",
    desc: "Systemic and contact formulations that eliminate threats without harming beneficial organisms or exceeding residue limits on export crops.",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop&q=85",
    tags: ["Grapes", "Pomegranate", "Onion", "Soybean"],
  },
  {
    title: "Biostimulants",
    subtitle: "Unlock soil potential",
    desc: "Humic, fulvic and seaweed extract-based products that improve root development, nutrient uptake and stress recovery across all soil types.",
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=500&fit=crop&q=85",
    tags: ["Banana", "Sugarcane", "Turmeric", "Chilli"],
  },
  {
    title: "Soil Health",
    subtitle: "Long-term productivity",
    desc: "Soil conditioners and beneficial microbial inoculants that restore pH balance, improve structure and increase organic carbon over successive seasons.",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=500&fit=crop&q=85",
    tags: ["All crops", "Drip & flood irrigation"],
  },
];

export default function Solutions() {
  return (
    <div className="w-full bg-white pb-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-12 pb-10">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 bg-primary/10 rounded-full px-4 py-1.5 text-[12px] font-semibold text-primary tracking-wider uppercase mb-4">
            Agrishield Solutions
          </div>
          <h1 className="text-[32px] md:text-[44px] font-bold text-gray-900 leading-[1.1] mb-4">
            Complete crop-care, from seed to harvest.
          </h1>
          <p className="text-[16px] text-gray-500 leading-relaxed">
            Our agronomy team designs integrated programmes combining nutrition, protection and biostimulation — so every rupee you invest in inputs delivers maximum yield.
          </p>
        </div>

        <div className="space-y-8">
          {SOLUTIONS.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 rounded-[20px] overflow-hidden"
              data-testid={`card-solution-${i}`}
            >
              <div className={`${i % 2 === 1 ? "md:order-2" : ""} aspect-[16/10] md:aspect-auto`}>
                <img
                  src={sol.img}
                  alt={sol.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  style={{ minHeight: 260 }}
                />
              </div>
              <div className={`${i % 2 === 1 ? "md:order-1" : ""} p-8 flex flex-col justify-center`}>
                <div className="text-[12px] font-semibold text-primary uppercase tracking-widest mb-2">{sol.subtitle}</div>
                <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-3">{sol.title}</h2>
                <p className="text-[15px] text-gray-500 leading-relaxed mb-6">{sol.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {sol.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[12px] font-medium text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary hover:underline"
                >
                  View related products <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="bg-[#f5f5f5] rounded-[20px] p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-2">Need a custom agronomy programme?</h3>
            <p className="text-[15px] text-gray-500">Our field officers visit your farm and design a solution around your crop and soil.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-colors"
            data-testid="btn-solutions-cta"
          >
            Talk to an agronomist <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
