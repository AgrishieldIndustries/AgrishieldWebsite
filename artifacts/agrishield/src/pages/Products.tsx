import { useState } from "react";
import { Heart, Star, Search } from "lucide-react";
import { motion } from "framer-motion";

const ALL_PRODUCTS = [
  {
    id: 1, name: "AGRISHIELD WSF 19:19:19", type: "Water Soluble Fertilizer", category: "NPK",
    sizes: "1 kg · 5 kg", price: "₹420", rating: 4.92, badge: true,
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 2, name: "AGRISHIELD HUMIGROWTH", type: "Organic Biostimulant", category: "Humic",
    sizes: "500 ml · 1 L", price: "₹360", rating: 4.88, badge: true,
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 3, name: "AGRISHIELD WASHOUT 41", type: "Systemic Herbicide", category: "Herbicide",
    sizes: "1 L · 5 L", price: "₹540", rating: 4.81, badge: true,
    img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 4, name: "AGRISHIELD CALCIUM NITRATE", type: "Calcium Fertilizer", category: "NPK",
    sizes: "25 kg sack", price: "₹1,890", rating: 4.76, badge: true,
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 5, name: "AGRISHIELD CHELAMIN PLUS", type: "Chelated Micronutrient", category: "Micronutrient",
    sizes: "250 g · 500 g", price: "₹280", rating: 4.85, badge: false,
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 6, name: "AGRISHIELD MANCOZEB 75", type: "Contact Fungicide", category: "Fungicide",
    sizes: "500 g · 1 kg", price: "₹195", rating: 4.79, badge: true,
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 7, name: "AGRISHIELD BORON 20%", type: "Boron Micronutrient", category: "Micronutrient",
    sizes: "500 g · 1 kg", price: "₹240", rating: 4.91, badge: false,
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 8, name: "AGRISHIELD NPK 13:40:13", type: "Water Soluble Fertilizer", category: "NPK",
    sizes: "1 kg · 5 kg", price: "₹460", rating: 4.83, badge: true,
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 9, name: "AGRISHIELD IMIDACLOPRID 17.8", type: "Systemic Insecticide", category: "Insecticide",
    sizes: "100 ml · 250 ml · 1 L", price: "₹320", rating: 4.87, badge: true,
    img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 10, name: "AGRISHIELD POTASSIUM HUMATE", type: "Soil Conditioner", category: "Humic",
    sizes: "1 kg · 5 kg", price: "₹180", rating: 4.74, badge: false,
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 11, name: "AGRISHIELD TRICHODERMA", type: "Biofungicide", category: "Fungicide",
    sizes: "250 g · 500 g · 1 kg", price: "₹150", rating: 4.68, badge: false,
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=600&fit=crop&q=80",
  },
  {
    id: 12, name: "AGRISHIELD ZINC SULPHATE", type: "Zinc Micronutrient", category: "Micronutrient",
    sizes: "1 kg · 5 kg · 25 kg", price: "₹110", rating: 4.77, badge: false,
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=600&fit=crop&q=80",
  },
];

const CATEGORIES = ["All", "NPK", "Humic", "Herbicide", "Fungicide", "Insecticide", "Micronutrient"];

function ProductCard({ product, index }: { product: typeof ALL_PRODUCTS[0]; index: number }) {
  const [liked, setLiked] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.06 }}
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
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
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
          <span className="text-[13px] font-extrabold text-gray-900 leading-tight line-clamp-1 tracking-tight">{product.name}</span>
          <div className="flex items-center gap-1 shrink-0">
            <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
            <span className="text-[13px] font-semibold text-gray-900">{product.rating}</span>
          </div>
        </div>
        <div className="text-[13px] text-gray-500">{product.type} · {product.category}</div>
        <div className="text-[13px] text-gray-500">{product.sizes}</div>
        <div className="text-[13px] text-gray-900 mt-1">
          <span className="font-extrabold">{product.price}</span>{" "}
          <span className="font-normal">per pack</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = ALL_PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.type.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-10 pb-6">
        <h1 className="text-[28px] md:text-[36px] font-bold text-gray-900 mb-2">Our product catalogue</h1>
        <p className="text-[15px] text-gray-500 max-w-xl">
          Biostimulants, NPKs, chelated micronutrients, herbicides and plant protection — engineered for every Indian crop.
        </p>
      </div>

      {/* Search + Category Strip */}
      <div className="border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by product name or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-[400px] pl-10 pr-4 h-11 rounded-full border border-gray-200 text-[14px] bg-gray-50 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition"
              data-testid="input-product-search"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-0 hide-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`btn-category-${cat.toLowerCase()}`}
                className={`shrink-0 px-5 py-2.5 text-[13px] font-medium rounded-full border transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-200 text-gray-700 hover:border-gray-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[14px] text-gray-500">{filtered.length} products</span>
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-gray-400 text-[15px] mb-4">No products match your search.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("All"); }}
              className="text-[14px] font-semibold text-primary underline"
              data-testid="btn-clear-filters"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
