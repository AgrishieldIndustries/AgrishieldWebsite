import { useState } from "react";
import { Link } from "wouter";
import { Heart, Star, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    id: 1,
    name: "AGRISHIELD WSF 19:19:19",
    type: "Water Soluble Fertilizer",
    category: "NPK",
    sizes: "1 kg · 5 kg",
    price: "₹420",
    rating: 4.92,
    badge: true,
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 2,
    name: "AGRISHIELD HUMIGROWTH",
    type: "Organic Biostimulant",
    category: "Humic",
    sizes: "500 ml · 1 L",
    price: "₹360",
    rating: 4.88,
    badge: true,
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 3,
    name: "AGRISHIELD WASHOUT 41",
    type: "Systemic Herbicide",
    category: "Glyphosate",
    sizes: "1 L · 5 L",
    price: "₹540",
    rating: 4.81,
    badge: true,
    img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 4,
    name: "AGRISHIELD CALCIUM NITRATE",
    type: "Calcium Fertilizer",
    category: "Calcium Nit.",
    sizes: "25 kg sack",
    price: "₹1,890",
    rating: 4.76,
    badge: true,
    img: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=600&h=600&fit=crop&q=80",
  },
];

const STATES = [
  { state: "Maharashtra", crops: "Grape & pomegranate" },
  { state: "Karnataka", crops: "Coffee & arecanut" },
  { state: "Punjab", crops: "Wheat & paddy" },
  { state: "Gujarat", crops: "Cotton & groundnut" },
  { state: "Tamil Nadu", crops: "Banana & turmeric" },
  { state: "Andhra Pradesh", crops: "Chilli & paddy" },
  { state: "Madhya Pradesh", crops: "Soybean & gram" },
  { state: "Rajasthan", crops: "Mustard & cumin" },
  { state: "West Bengal", crops: "Jute & potato" },
  { state: "Haryana", crops: "Wheat & sugarcane" },
  { state: "Uttar Pradesh", crops: "Sugarcane & potato" },
  { state: "Kerala", crops: "Coconut & spices" },
];

function ProductCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group cursor-pointer"
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative aspect-square rounded-[14px] overflow-hidden mb-3">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 text-[11px] font-semibold text-gray-800 shadow-sm">
            Dealer favorite
          </div>
        )}
        <button
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
          data-testid={`btn-like-${product.id}`}
          aria-label="Save product"
        >
          <Heart
            className={`w-[18px] h-[18px] transition-colors ${liked ? "fill-primary text-primary" : "text-white drop-shadow"}`}
            strokeWidth={2}
          />
        </button>
      </div>

      <div className="px-0.5">
        <div className="flex items-start justify-between gap-2 mb-0.5">
          <span className="text-[13px] font-bold text-gray-900 leading-tight line-clamp-1">{product.name}</span>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
            <span className="text-[13px] font-semibold text-gray-900">{product.rating}</span>
          </div>
        </div>
        <div className="text-[13px] text-gray-500">{product.type} · {product.category}</div>
        <div className="text-[13px] text-gray-500">{product.sizes}</div>
        <div className="text-[13px] text-gray-900 mt-1"><span className="font-bold">{product.price}</span> per pack</div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<"CROP" | "CONCERN" | "REGION">("CROP");

  return (
    <div className="w-full bg-white">
      {/* HERO CARD */}
      <section className="px-4 md:px-6 pt-6 pb-8">
        <div className="max-w-[1280px] mx-auto">
          <div
            className="relative rounded-[20px] overflow-hidden"
            style={{ minHeight: 480 }}
          >
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&h=700&fit=crop&q=85"
              alt="Farmland aerial view"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-12" style={{ minHeight: 480 }}>
              <div className="max-w-[600px]">
                <div className="inline-flex items-center gap-1.5 bg-white/95 rounded-full px-4 py-1.5 text-[11px] font-semibold text-gray-700 tracking-wider uppercase mb-6">
                  Manufactured in Pune · Trusted across India
                </div>
                <h1 className="text-[36px] md:text-[52px] font-bold text-white leading-[1.1] mb-4">
                  Fertilizers &amp; micronutrients that boost your plant growth.
                </h1>
                <p className="text-[15px] md:text-[16px] text-white/80 leading-relaxed max-w-[500px]">
                  The complete crop-care catalogue from Agrishield Industries — biostimulants, NPKs, chelated micronutrients and plant protection, engineered for every crop.
                </p>
              </div>

              <div className="mt-8">
                <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-[12px] overflow-hidden border border-white/20">
                  {(["CROP", "CONCERN", "REGION"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      data-testid={`tab-hero-${tab.toLowerCase()}`}
                      className={`px-6 py-3 text-[12px] font-semibold tracking-wider transition-colors ${
                        activeTab === tab
                          ? "bg-white text-gray-900"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="px-4 md:px-6 py-10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between mb-7">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900">
              Inspiration for your next season
            </h2>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-1 text-[14px] font-semibold text-gray-900 underline-offset-2 hover:underline"
              data-testid="link-view-all-products"
            >
              View all products
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="mt-6 md:hidden text-center">
            <Link href="/products" className="text-[14px] font-semibold text-gray-900 underline">
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* STATS CARD */}
      <section className="px-4 md:px-6 py-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="bg-[#f5f5f5] rounded-[20px] px-8 md:px-16 py-12">
            <p className="text-[18px] md:text-[22px] font-semibold text-gray-900 mb-10 max-w-xl">
              Trusted by farmers and dealers across India's most productive fields.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "15+", label: "Years of experience" },
                { value: "120+", label: "Products in catalogue" },
                { value: "2,400+", label: "Dealers & retailers" },
                { value: "180k+", label: "Farmers served" },
              ].map((stat) => (
                <div key={stat.label} data-testid={`stat-${stat.label.replace(/\s+/g, "-").toLowerCase()}`}>
                  <div className="text-[40px] md:text-[52px] font-bold text-primary leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[13px] text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CROP COVERAGE GRID */}
      <section className="px-4 md:px-6 py-12">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900 mb-8">
            We understand every crop's need
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
            {STATES.map((s) => (
              <div key={s.state} data-testid={`state-${s.state.toLowerCase().replace(/\s/g, "-")}`}>
                <div className="text-[14px] font-semibold text-gray-900">{s.state}</div>
                <div className="text-[13px] text-gray-500 mt-0.5">{s.crops}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS STRIP */}
      <section className="px-4 md:px-6 py-10 bg-gray-50">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center justify-between mb-7">
            <h2 className="text-[24px] md:text-[28px] font-bold text-gray-900">
              Solutions for every challenge
            </h2>
            <Link href="/solutions" className="hidden md:flex items-center gap-1 text-[14px] font-semibold text-gray-900 underline-offset-2 hover:underline">
              View all solutions
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Nutrient Management",
                desc: "Balanced NPK programmes for every crop stage — from seedling establishment to fruiting.",
                img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&q=80",
              },
              {
                title: "Pest & Disease Control",
                desc: "Targeted chemistry that eliminates threats without harming beneficial organisms or residue limits.",
                img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop&q=80",
              },
              {
                title: "Biostimulants",
                desc: "Humic, fulvic and seaweed extract-based products that unlock the natural potential of your soil.",
                img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop&q=80",
              },
            ].map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="bg-white rounded-[16px] overflow-hidden border border-gray-100 hover:shadow-[rgba(0,0,0,0.02)_0_0_0_1px,rgba(0,0,0,0.04)_0_2px_6px,rgba(0,0,0,0.1)_0_4px_8px] transition-shadow cursor-pointer"
                data-testid={`card-solution-${i}`}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={sol.img} alt={sol.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-[16px] text-gray-900 mb-2">{sol.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">{sol.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-4 md:px-6 py-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 leading-tight mb-3">
                Enquiries, dealerships, agronomy<br className="hidden md:block" /> — we're a call away.
              </h2>
              <p className="text-[15px] text-gray-500 max-w-xl">
                Tell us about your crop, your region and what you're trying to solve. Our field officers respond within one working day.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-colors"
              data-testid="btn-contact-cta"
            >
              Get in touch <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
