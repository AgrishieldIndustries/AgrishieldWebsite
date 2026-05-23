import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Sprout, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const categories = ["Herbicides", "Pesticides", "Fungicides", "Insecticides", "Sprayers", "Accessories"];

  const products = [
    {
      id: 1,
      name: "ShieldMax Pro 500",
      category: "Herbicides",
      desc: "Industrial grade broad-spectrum herbicide for pre-emergent weed control.",
      img: "/product-chemical.png",
    },
    {
      id: 2,
      name: "AeroSpray Titan",
      category: "Sprayers",
      desc: "Heavy-duty tractor mounted boom sprayer with 1000L capacity and precision nozzles.",
      img: "/product-sprayer.png",
    },
    {
      id: 3,
      name: "FungiGuard Plus",
      category: "Fungicides",
      desc: "Systemic fungicide providing long-lasting protection against rust and blight.",
      img: "/product-chemical.png",
    },
    {
      id: 4,
      name: "CropNet Advance",
      category: "Accessories",
      desc: "UV-stabilized protective netting for extreme weather and pest exclusion.",
      img: "/product-sprayer.png",
    }
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative h-[600px] md:h-[700px] w-full flex items-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        
        <div className="max-w-[1280px] mx-auto w-full px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.1] mb-6 tracking-tight">
              Protecting What Grows
            </h1>
            <p className="text-[18px] md:text-[22px] text-gray-200 mb-10 leading-relaxed font-normal">
              Industrial precision meets the land. We manufacture the high-grade protection products, chemicals, and equipment that serious farmers trust.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/products">
                <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold text-[16px]">
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="rounded-full px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white hover:text-black font-semibold text-[16px] backdrop-blur-sm">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORY STRIP */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 py-6 overflow-x-auto whitespace-nowrap hide-scrollbar flex items-center gap-3">
          {categories.map((cat, i) => (
            <Link key={i} href={`/products?category=${cat.toLowerCase()}`}>
              <div className="inline-flex px-5 py-2.5 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors text-sm font-medium cursor-pointer text-gray-700">
                {cat}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
          <div className="text-center md:pt-0 pb-6 md:pb-0">
            <div className="text-[32px] md:text-[48px] font-bold mb-2">25+</div>
            <div className="text-sm font-medium text-white/80 uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center pt-6 md:pt-0 pb-6 md:pb-0">
            <div className="text-[32px] md:text-[48px] font-bold mb-2">500+</div>
            <div className="text-sm font-medium text-white/80 uppercase tracking-wider">Products</div>
          </div>
          <div className="text-center pt-6 md:pt-0 pb-6 md:pb-0">
            <div className="text-[32px] md:text-[48px] font-bold mb-2">10k+</div>
            <div className="text-sm font-medium text-white/80 uppercase tracking-wider">Farmers Served</div>
          </div>
          <div className="text-center pt-6 md:pt-0">
            <div className="text-[32px] md:text-[48px] font-bold mb-2">50+</div>
            <div className="text-sm font-medium text-white/80 uppercase tracking-wider">States Covered</div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-4">Featured Solutions</h2>
              <p className="text-gray-600 text-lg">Top-grade equipment and chemicals for maximum yield.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={product.id} 
                className="bg-white rounded-[14px] border border-gray-100 overflow-hidden hover-float group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-white/90 backdrop-blur text-xs font-semibold rounded-full text-gray-800 shadow-sm">
                    {product.category}
                  </div>
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.desc}</p>
                  <Link href={`/products`} className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                    View Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/products">
              <Button variant="outline" className="rounded-full">View all products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-4">Why Farmers Trust Us</h2>
            <p className="text-gray-600 text-lg">We don't just sell products; we engineer solutions that protect your livelihood.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">ISO Certified Manufacturing</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Our state-of-the-art facilities ensure every batch meets rigorous international quality and safety standards.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Effectiveness</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Backed by dedicated R&D, our formulas are tested in real-world extreme conditions to guarantee crop safety.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Solutions</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">We balance powerful protection with environmental responsibility, offering low-residue and targeted treatments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-12 text-center">Words from the Field</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Rajesh Kumar",
                location: "Punjab",
                quote: "Switching to Agrishield's FungiGuard saved our entire tomato yield this season. The quality is unmatched and their support team knows exactly what they're talking about."
              },
              {
                name: "Suresh Patel",
                location: "Gujarat",
                quote: "The AeroSpray Titan is built like a tank. We've run it for hundreds of hours across difficult terrain without a single breakdown. Worth every rupee."
              },
              {
                name: "Amit Singh",
                location: "Haryana",
                quote: "I've been using their herbicides for five years. Consistent results, no residue issues, and delivery is always on time. They are true professionals."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-[14px] shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-gray-700 text-[16px] leading-relaxed mb-8">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="bg-primary rounded-[24px] p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            
            <h2 className="text-[32px] md:text-[40px] font-bold mb-6 relative z-10">Ready to secure your yield?</h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
              Speak with our agricultural experts today to find the perfect protection strategy for your crops.
            </p>
            <Link href="/contact" className="relative z-10">
              <Button className="rounded-full px-8 py-6 bg-white text-primary hover:bg-gray-100 font-bold text-[16px] shadow-lg">
                Get a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
