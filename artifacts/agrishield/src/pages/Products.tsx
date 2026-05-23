import { useState } from "react";
import { Link } from "wouter";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "ShieldMax Pro 500",
    category: "Herbicides",
    desc: "Industrial grade broad-spectrum herbicide for pre-emergent weed control.",
    img: "/product-chemical.png",
    price: "Request Quote"
  },
  {
    id: 2,
    name: "AeroSpray Titan",
    category: "Sprayers",
    desc: "Heavy-duty tractor mounted boom sprayer with 1000L capacity and precision nozzles.",
    img: "/product-sprayer.png",
    price: "Request Quote"
  },
  {
    id: 3,
    name: "FungiGuard Plus",
    category: "Fungicides",
    desc: "Systemic fungicide providing long-lasting protection against rust and blight.",
    img: "/product-chemical.png",
    price: "Request Quote"
  },
  {
    id: 4,
    name: "CropNet Advance",
    category: "Accessories",
    desc: "UV-stabilized protective netting for extreme weather and pest exclusion.",
    img: "/product-sprayer.png",
    price: "Request Quote"
  },
  {
    id: 5,
    name: "WeedStop 360",
    category: "Herbicides",
    desc: "Targeted post-emergent herbicide safe for major cereal crops.",
    img: "/product-chemical.png",
    price: "Request Quote"
  },
  {
    id: 6,
    name: "InsectaClear X",
    category: "Insecticides",
    desc: "Fast-acting contact insecticide for broad control of chewing and sucking pests.",
    img: "/product-chemical.png",
    price: "Request Quote"
  },
  {
    id: 7,
    name: "HandSprayer 15L",
    category: "Sprayers",
    desc: "Ergonomic knapsack sprayer with durable brass lance.",
    img: "/product-sprayer.png",
    price: "Request Quote"
  },
  {
    id: 8,
    name: "RootBoost Granules",
    category: "Soil Treatments",
    desc: "Advanced soil conditioner promoting vigorous root development.",
    img: "/product-chemical.png",
    price: "Request Quote"
  }
];

const CATEGORIES = ["All", "Herbicides", "Fungicides", "Insecticides", "Sprayers", "Soil Treatments", "Accessories"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    const matchesCat = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-white pb-24">
      {/* Header */}
      <div className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Browse our comprehensive catalog of industrial-grade agricultural protection products and equipment.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-[100px]">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search products..." 
                className="pl-9 bg-gray-50 border-gray-200 rounded-lg h-12"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-4 h-4 text-gray-900" />
                <h3 className="font-semibold text-gray-900 text-[16px]">Categories</h3>
              </div>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left px-3 py-2 rounded-md text-[15px] transition-colors ${
                      activeCategory === cat 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              {activeCategory === "All" ? "All Products" : activeCategory}
            </h2>
            <span className="text-sm text-gray-500">{filteredProducts.length} results</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <p className="text-gray-500">No products found matching your criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-[14px] border border-gray-200 overflow-hidden hover-float group flex flex-col">
                  <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden p-6 flex items-center justify-center">
                    <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-white/90 backdrop-blur text-xs font-semibold rounded-full text-gray-800 shadow-sm border border-gray-100">
                      {product.category}
                    </div>
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-6 flex-1">{product.desc}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm font-medium text-gray-500">{product.price}</span>
                      <Link href={`/contact`}>
                        <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-white">
                          Inquire
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
