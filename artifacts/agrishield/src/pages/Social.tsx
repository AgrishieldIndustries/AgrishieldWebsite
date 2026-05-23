import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, X, Heart, Share2, MessageCircle, Youtube, Instagram, Users, Eye, TrendingUp, Star, ChevronRight, ExternalLink } from "lucide-react";

/* ─── DATA ────────────────────────────────────────────────────── */

const VIDEOS = [
  {
    id: "v1",
    ytId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=450&fit=crop&q=80",
    title: "How WSF 19:19:19 Doubles Grape Yield",
    caption: "Field demonstration from Nashik vineyards",
    views: "1.2L",
    date: "3 days ago",
  },
  {
    id: "v2",
    ytId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=450&fit=crop&q=80",
    title: "Chelated Micronutrients Explained",
    caption: "Why EDTA chelation matters for absorption",
    views: "87K",
    date: "1 week ago",
  },
  {
    id: "v3",
    ytId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=800&h=450&fit=crop&q=80",
    title: "Drip Fertigation with NPK 13:40:13",
    caption: "Step-by-step guide for sugarcane farmers",
    views: "2.4L",
    date: "2 weeks ago",
  },
  {
    id: "v4",
    ytId: "dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=450&fit=crop&q=80",
    title: "HumiGrowth Root Activation Study",
    caption: "Lab results + field comparison trial",
    views: "43K",
    date: "3 weeks ago",
  },
];

const REELS = [
  {
    id: "r1",
    thumb: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=700&fit=crop&q=80",
    likes: "4.2K",
    caption: "Morning drip fertigation 🌱",
  },
  {
    id: "r2",
    thumb: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=560&fit=crop&q=80",
    likes: "8.1K",
    caption: "Before vs After Chelamin Plus",
  },
  {
    id: "r3",
    thumb: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=400&h=640&fit=crop&q=80",
    likes: "6.7K",
    caption: "Vineyard transformation 🍇",
  },
  {
    id: "r4",
    thumb: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=520&fit=crop&q=80",
    likes: "3.9K",
    caption: "Golden harvest season",
  },
  {
    id: "r5",
    thumb: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=680&fit=crop&q=80",
    likes: "5.3K",
    caption: "Seedling care routine 💚",
  },
  {
    id: "r6",
    thumb: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=600&fit=crop&q=80",
    likes: "11.2K",
    caption: "100 acres, one spray day",
  },
];

const PRODUCTS = [
  {
    name: "WSF 13:40:13",
    tag: "High Phosphorus",
    accent: "#6B21A8",
    desc: "Ideal for flowering & fruit set",
    img: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=500&h=500&fit=crop&q=80",
  },
  {
    name: "WSF 19:19:19",
    tag: "Balanced NPK",
    accent: "#15803D",
    desc: "All-stage crop nutrition",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop&q=80",
  },
  {
    name: "WSF 12:61:00",
    tag: "Mono Ammonium",
    accent: "#B45309",
    desc: "Precision phosphorus loading",
    img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&h=500&fit=crop&q=80",
  },
];

const TESTIMONIALS = [
  {
    name: "Rajendra Patil",
    location: "Nashik, Maharashtra",
    crop: "Grapes",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
    quote: "Agrishield WSF 19:19:19 वापरल्यानंतर माझ्या द्राक्षांचा आकार आणि रंग दोन्ही सुधारले.",
    quoteen: "After using WSF 19:19:19, both the size and color of my grapes improved significantly.",
    rating: 5,
  },
  {
    name: "Sunita Deshmukh",
    location: "Pune, Maharashtra",
    crop: "Pomegranate",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    quote: "HumiGrowth मुळे मातीची गुणवत्ता खूप सुधारली. झाडं जास्त निरोगी दिसतात.",
    quoteen: "HumiGrowth has greatly improved soil quality. Plants look much healthier now.",
    rating: 5,
  },
  {
    name: "Vikas Shinde",
    location: "Solapur, Maharashtra",
    crop: "Sugarcane",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=80",
    quote: "Chelamin Plus ने माझ्या ऊसाचे उत्पादन 30% वाढले. डीलरने योग्य सल्ला दिला.",
    quoteen: "Chelamin Plus increased my sugarcane yield by 30%. The dealer gave the right advice.",
    rating: 5,
  },
];

const STATS = [
  { icon: Youtube, label: "YouTube Subscribers", value: 48000, suffix: "+", color: "#E53935" },
  { icon: Eye, label: "Monthly Reel Views", value: 2400000, suffix: "+", color: "#6B21A8" },
  { icon: Users, label: "Farmer Community", value: 180000, suffix: "+", color: "#15803D" },
  { icon: TrendingUp, label: "Dealer Network", value: 1200, suffix: "+", color: "#B45309" },
];

/* ─── ANIMATED COUNTER ───────────────────────────────────────── */
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  const fmt = (n: number) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(0) + "K";
    return n.toString();
  };

  return (
    <span ref={ref}>
      {fmt(count)}
      {suffix}
    </span>
  );
}

/* ─── VIDEO CARD ─────────────────────────────────────────────── */
function VideoCard({ video, onClick }: { video: typeof VIDEOS[0]; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumb}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Play className="w-5 h-5 text-gray-900 fill-gray-900 ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-medium px-2 py-0.5 rounded-md">
          {video.views} views
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-[15px] font-bold text-gray-900 leading-snug mb-1 line-clamp-2">{video.title}</h3>
        <p className="text-[13px] text-gray-500">{video.caption}</p>
        <p className="text-[12px] text-gray-400 mt-2">{video.date}</p>
      </div>
    </motion.div>
  );
}

/* ─── REEL CARD ──────────────────────────────────────────────── */
function ReelCard({ reel, onClick }: { reel: typeof REELS[0]; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="group cursor-pointer rounded-2xl overflow-hidden relative"
    >
      <img
        src={reel.thumb}
        alt={reel.caption}
        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
          <Play className="w-4 h-4 text-gray-900 fill-gray-900 ml-0.5" />
        </div>
      </div>
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-white text-[12px] font-medium line-clamp-1">{reel.caption}</p>
        <div className="flex items-center gap-1 mt-1">
          <Heart className="w-3 h-3 text-white/80 fill-white/80" />
          <span className="text-white/80 text-[11px]">{reel.likes}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── VIDEO MODAL ────────────────────────────────────────────── */
function VideoModal({ video, onClose }: { video: typeof VIDEOS[0] | null; onClose: () => void }) {
  if (!video) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl overflow-hidden w-full max-w-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${video.ytId}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="p-5 flex items-start justify-between">
            <div>
              <h3 className="font-bold text-gray-900 text-[16px] leading-snug">{video.title}</h3>
              <p className="text-gray-500 text-[13px] mt-1">{video.caption} · {video.date}</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors ml-4 shrink-0">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── MAIN PAGE ──────────────────────────────────────────────── */
export default function Social() {
  const [activeVideo, setActiveVideo] = useState<typeof VIDEOS[0] | null>(null);
  const [activeReel, setActiveReel] = useState<typeof REELS[0] | null>(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="bg-white">
      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative h-[92vh] min-h-[540px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&h=1000&fit=crop&q=90"
          alt="Agriculture"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[13px] font-medium px-4 py-1.5 rounded-full mb-6 tracking-wide">
              AGRISHIELD INDUSTRIES · PUNE
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight max-w-4xl mb-6">
              Modern Crop Nutrition<br />for Future Farming
            </h1>
            <p className="text-white/75 text-[17px] md:text-[19px] max-w-xl mx-auto mb-10 leading-relaxed">
              Follow Agrishield across social platforms for farming insights,
              product education, and field success stories.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setActiveVideo(VIDEOS[0])}
                className="flex items-center gap-2.5 bg-white text-gray-900 font-semibold px-7 py-3.5 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Play className="w-4 h-4 fill-gray-900" />
                Watch Videos
              </button>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 border-2 border-white/50 text-white font-semibold px-7 py-3.5 rounded-full hover:border-white hover:bg-white/10 transition-all"
              >
                <Instagram className="w-4 h-4" />
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── FEATURED VIDEOS ─────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Youtube className="w-5 h-5 text-[#E53935]" />
                <span className="text-[13px] font-semibold text-[#E53935] uppercase tracking-widest">YouTube</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Featured field videos</h2>
              <p className="text-gray-500 mt-2">Real demonstrations. Real results.</p>
            </div>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-[14px] font-semibold text-gray-900 hover:underline"
            >
              View all <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VIDEOS.map((v) => (
              <VideoCard key={v.id} video={v} onClick={() => setActiveVideo(v)} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── INSTAGRAM REELS ─────────────────────────────────── */}
      <section className="bg-[#fafafa] py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center justify-between mb-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Instagram className="w-5 h-5 text-[#E1306C]" />
                  <span className="text-[13px] font-semibold text-[#E1306C] uppercase tracking-widest">Instagram</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Reels & stories</h2>
                <p className="text-gray-500 mt-2">Behind the scenes from farms across India.</p>
              </div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 text-[14px] font-semibold text-gray-900 hover:underline"
              >
                @agrishieldindia <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {REELS.map((r) => (
                <div key={r.id} className="break-inside-avoid">
                  <ReelCard reel={r} onClick={() => setActiveReel(r)} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT HIGHLIGHTS ──────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              Flagship WSF range
            </h2>
            <p className="text-gray-500 text-[16px] max-w-md mx-auto">
              Water-soluble fertilizers engineered for drip and foliar application.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-400 cursor-pointer"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{ background: `linear-gradient(135deg, ${p.accent}55, transparent 60%)` }}
                  />
                  <span
                    className="absolute top-4 left-4 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{ background: p.accent }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-extrabold text-gray-900 tracking-tight mb-1">{p.name}</h3>
                  <p className="text-[14px] text-gray-500 mb-4">{p.desc}</p>
                  <button className="flex items-center gap-1.5 text-[13px] font-semibold text-gray-900 hover:gap-2.5 transition-all">
                    View product <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                Farmer success stories
              </h2>
              <p className="text-gray-500">Directly from the fields of Maharashtra.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#0B5D3B] text-[#0B5D3B]" />
                    ))}
                  </div>
                  <blockquote className="text-[15px] text-gray-700 leading-relaxed italic mb-3">
                    "{t.quote}"
                  </blockquote>
                  <p className="text-[13px] text-gray-500 mb-5">"{t.quoteen}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-[14px] font-bold text-gray-900">{t.name}</p>
                      <p className="text-[12px] text-gray-500">{t.location} · {t.crop}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DEALER CTA ──────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1800&h=600&fit=crop&q=80"
            alt="Farmland"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0B5D3B]/90" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative max-w-[1280px] mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Become an Agrishield dealer
          </h2>
          <p className="text-white/75 text-[17px] max-w-lg mx-auto mb-10">
            Join 1,200+ dealers across Maharashtra & Karnataka. High margin, trusted brand, full support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919876543210?text=I%20want%20to%20become%20an%20Agrishield%20dealer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#20bb5a] transition-colors shadow-lg text-[15px]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all text-[15px]"
            >
              Enquire now <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── SOCIAL STATS ────────────────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
              Growing across platforms
            </h2>
            <p className="text-gray-500">Agrishield's farming community in numbers.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {STATS.map((s) => (
              <div key={s.label} className="bg-[#f5f5f5] rounded-2xl p-6 text-center">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${s.color}18` }}
                >
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
                <div
                  className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1"
                  style={{ color: s.color }}
                >
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-[13px] text-gray-500 font-medium leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── VIDEO MODAL ─────────────────────────────────────── */}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}

      {/* ── REEL MODAL ──────────────────────────────────────── */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveReel(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative max-w-[360px] w-full rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activeReel.thumb} alt={activeReel.caption} className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              <button
                onClick={() => setActiveReel(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="absolute bottom-6 left-4 right-4">
                <p className="text-white font-semibold text-[15px] mb-2">{activeReel.caption}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-white/80 text-[13px]">
                    <Heart className="w-4 h-4 fill-white/80" />
                    {activeReel.likes}
                  </div>
                  <div className="flex items-center gap-1.5 text-white/80 text-[13px]">
                    <Share2 className="w-4 h-4" />
                    Share
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
