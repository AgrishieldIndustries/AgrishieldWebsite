import { useState } from "react";
import { Link } from "wouter";
import { Heart, Star, ChevronRight, Search, MapPin, Sprout, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

/* ─── DATA ─────────────────────────────────────────────────── */

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
    img: "/product-photos/wsf_19_19_19.jpeg",
  },
  {
    id: 2,
    name: "AGRISHIELD® HumiGrowth",
    type: "Organic Soil Conditioner Powder 98%",
    category: "Biostimulant",
    sizes: "500 g",
    price: "₹580",
    rating: 4.88,
    badge: true,
    img: "/product-photos/humigrowth.jpeg",
  },
  {
    id: 3,
    name: "AGRISHIELD WASHOUT 41",
    type: "Systemic Herbicide",
    category: "Herbicide",
    sizes: "1 L · 5 L",
    price: "₹1,080 - ₹4,850",
    rating: 4.81,
    badge: true,
    img: "/product-photos/washout_41.jpeg",
  },
  {
    id: 4,
    name: "AGRISHIELD CalciNitro",
    type: "Water Soluble Fertilizer",
    category: "NPK",
    sizes: "1 kg · 25 kg",
    price: "₹165 - ₹3,465",
    rating: 4.81,
    badge: true,
    img: "/product-photos/calcinitro.jpeg",
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

const SOLUTIONS = [
  {
    title: "Nutrient Management",
    desc: "Balanced NPK programmes for every crop stage — from seedling establishment to fruiting.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&h=460&fit=crop&q=85",
  },
  {
    title: "Pest & Disease Control",
    desc: "Targeted chemistry that eliminates threats without harming beneficial organisms or residue limits.",
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=700&h=460&fit=crop&q=85",
  },
  {
    title: "Biostimulants",
    desc: "Humic, fulvic and seaweed extract-based products that unlock the natural potential of your soil.",
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=700&h=460&fit=crop&q=85",
  },
];

/* ─── PRODUCT CARD ──────────────────────────────────────────── */
function ProductCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  const [liked, setLiked] = useState(false);

  return (
    <Link href="/products">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
        className="group cursor-pointer"
        data-testid={`card-product-${product.id}`}
      >
        <div className="relative aspect-square rounded-2xl overflow-hidden mb-3.5 shadow-sm">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />
          {product.badge && (
            <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] font-semibold text-gray-800 shadow-sm">
              Dealer favorite
            </div>
          )}
          <button
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setLiked(!liked); }}
            data-testid={`btn-like-${product.id}`}
            aria-label="Save product"
          >
            <Heart
              className={`w-[17px] h-[17px] transition-all duration-200 ${liked ? "fill-primary text-primary scale-110" : "text-white drop-shadow"}`}
              strokeWidth={2}
            />
          </button>
        </div>

        <div className="px-0.5 space-y-0.5">
          <div className="flex items-start justify-between gap-2">
            <span className="text-[13px] font-extrabold text-gray-900 leading-snug line-clamp-1 tracking-tight">{product.name}</span>
            <div className="flex items-center gap-0.5 shrink-0 mt-px">
              <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
              <span className="text-[12.5px] font-semibold text-gray-900">{product.rating}</span>
            </div>
          </div>
          <div className="text-[12.5px] text-gray-400 leading-relaxed">{product.type} · {product.category}</div>
          <div className="text-[12.5px] text-gray-400">{product.sizes}</div>
          <div className="text-[13px] text-gray-900 pt-0.5">
            <span className="font-extrabold">{product.price}</span>
            <span className="text-gray-400 font-normal"> per pack</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */
export default function Home() {
  const [activeTab, setActiveTab] = useState<"CROP" | "CONCERN" | "REGION">("CROP");

  const tabConfig = {
    CROP: { Icon: Sprout, placeholder: "Tomato, grape, cotton…" },
    CONCERN: { Icon: AlertCircle, placeholder: "Growth, pest, deficiency…" },
    REGION: { Icon: MapPin, placeholder: "Anywhere in India" },
  };

  return (
    <div className="w-full bg-white">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="px-4 md:px-6 pt-7 pb-10">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.995 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[24px] overflow-hidden min-h-[660px] md:min-h-[560px]"
          >
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&h=800&fit=crop&q=90"
              alt="Farmland aerial view"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 55%" }}
            />
            {/* cinematic layered gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            <div
              className="relative z-10 flex flex-col justify-between h-full px-6 md:px-14 py-10 md:py-14 min-h-[660px] md:min-h-[560px]"
            >
              {/* Text block */}
              <div className="max-w-[540px]">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3.5 py-1 mb-5"
                >
                  <span className="text-[9.5px] md:text-[10.5px] font-bold text-gray-600 tracking-[0.08em] uppercase">
                    Manufactured in Pune · Trusted across India
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-extrabold text-white leading-[1.08] tracking-tight mb-4"
                  style={{ fontSize: "clamp(30px, 4.2vw, 58px)" }}
                >
                  Fertilizers &amp; micronutrients that boost your plant growth.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.55 }}
                  className="text-[14.5px] md:text-[16px] text-white/80 leading-relaxed max-w-[420px]"
                >
                  The complete crop-care catalogue from Agrishield Industries — biostimulants, NPKs, chelated micronutrients and plant protection, engineered for every crop.
                </motion.p>
              </div>

              {/* Search pill */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52, duration: 0.55 }}
                className="mt-8 w-full max-w-lg"
              >
                <div className="flex flex-col md:flex-row items-stretch md:items-center bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10 divide-y md:divide-y-0 md:divide-x divide-gray-100 w-full">
                  {(["CROP", "CONCERN", "REGION"] as const).map((tab) => {
                    const { Icon, placeholder } = tabConfig[tab];
                    return (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        data-testid={`tab-hero-${tab.toLowerCase()}`}
                        className={`flex flex-col items-start px-5 py-3 md:py-3.5 transition-colors group w-full md:min-w-[130px] ${
                          activeTab === tab ? "bg-white" : "bg-white/95 hover:bg-white"
                        }`}
                      >
                        <span className="text-[9px] font-bold uppercase tracking-[0.09em] text-gray-500 mb-0.5">{tab}</span>
                        <div className="flex items-center gap-1.5 w-full">
                          <Icon className="w-3.5 h-3.5 text-gray-400 shrink-0" strokeWidth={2} />
                          <span className="text-[13px] text-gray-550 truncate">{placeholder}</span>
                        </div>
                      </button>
                    );
                  })}
                  <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 transition-colors px-5 py-4 md:py-3.5 w-full md:w-auto shrink-0">
                    <Search className="w-4 h-4 text-white" strokeWidth={2.5} />
                    <span className="text-[13px] font-bold text-white">Search</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT GRID ──────────────────────────────────────── */}
      <section className="px-4 md:px-6 py-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between mb-9">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary mb-2">Featured products</p>
              <h2 className="text-[26px] md:text-[32px] font-extrabold text-gray-900 tracking-tight leading-tight">
                Inspiration for your next season
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-1 text-[14px] font-semibold text-gray-900 hover:underline underline-offset-2"
              data-testid="link-view-all-products"
            >
              View all products <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link href="/products" className="text-[14px] font-semibold text-gray-900 underline underline-offset-2">
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS CARD ────────────────────────────────────────── */}
      <section className="px-4 md:px-6 py-6">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#f5f5f5] rounded-[24px] px-8 md:px-16 py-14"
          >
            <p className="text-[18px] md:text-[22px] font-semibold text-gray-800 leading-snug mb-12 max-w-lg">
              Trusted by farmers and dealers across India's most productive fields.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                { value: "15+", label: "Years of experience" },
                { value: "120+", label: "Products in catalogue" },
                { value: "2,400+", label: "Dealers & retailers" },
                { value: "180k+", label: "Farmers served" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  data-testid={`stat-${stat.label.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <div className="text-[44px] md:text-[56px] font-extrabold text-primary leading-none tracking-tight mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[13px] text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CROP COVERAGE GRID ────────────────────────────────── */}
      <section className="px-4 md:px-6 py-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-10">
            <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary mb-2">Coverage</p>
            <h2 className="text-[26px] md:text-[32px] font-extrabold text-gray-900 tracking-tight">
              We understand every crop's need
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-5">
            {STATES.map((s, i) => (
              <motion.div
                key={s.state}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                data-testid={`state-${s.state.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div className="text-[14px] font-bold text-gray-900 leading-snug">{s.state}</div>
                <div className="text-[12.5px] text-gray-400 mt-1 leading-relaxed">{s.crops}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS STRIP ───────────────────────────────────── */}
      <section className="px-4 md:px-6 py-14 bg-[#fafafa]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-primary mb-2">Solutions</p>
              <h2 className="text-[26px] md:text-[32px] font-extrabold text-gray-900 tracking-tight">
                Solutions for every challenge
              </h2>
            </div>
            <Link
              href="/solutions"
              className="hidden md:flex items-center gap-1 text-[14px] font-semibold text-gray-900 hover:underline underline-offset-2"
            >
              View all solutions <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SOLUTIONS.map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer"
                data-testid={`card-solution-${i}`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={sol.img}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[16px] text-gray-900 mb-2.5 tracking-tight">{sol.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-[1.65]">{sol.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA BANNER ────────────────────────────────── */}
      <section className="px-4 md:px-6 py-8 pb-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[24px]"
            style={{ background: "linear-gradient(135deg, #0d4a24 0%, #1f7a3a 60%, #2a9d52 100%)" }}
          >
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #ffffff 0%, transparent 60%)" }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-10 md:px-16 py-14">
              <div className="max-w-xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/60 mb-3">Get in touch</p>
                <h2 className="text-[28px] md:text-[38px] font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                  Enquiries, dealerships, agronomy — we're a call away.
                </h2>
                <p className="text-[15px] text-white/65 leading-relaxed">
                  Tell us about your crop, your region and what you're trying to solve. Our field officers respond within one working day.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 flex items-center gap-2.5 bg-white hover:bg-gray-50 text-gray-900 font-bold text-[15px] px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] duration-200"
                data-testid="btn-contact-cta"
              >
                Get in touch <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
