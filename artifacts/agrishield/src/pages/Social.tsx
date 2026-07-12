import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, X, Heart, Share2, MessageCircle, Youtube, Instagram, Users, Eye, TrendingUp, Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

/* ─── DATA ────────────────────────────────────────────────────── */

const VIDEOS = [
  {
    id: "v1",
    ytId: "pc6YmIrMDjU",
    thumb: "https://img.youtube.com/vi/pc6YmIrMDjU/mqdefault.jpg",
    title: "Agrishield HumiGrowth Field Demonstration",
    caption: "See the rapid results of HumiGrowth on crops",
    views: "1.5L",
    date: "Recent",
  },
  {
    id: "v2",
    ytId: "cO3DETnnaS8",
    thumb: "https://img.youtube.com/vi/cO3DETnnaS8/mqdefault.jpg",
    title: "Agrishield Crop Nutrition Insights",
    caption: "Maximizing yield with balanced water-soluble fertilizers",
    views: "98K",
    date: "Recent",
  },
  {
    id: "v3",
    ytId: "MSn-fOccThI",
    thumb: "https://img.youtube.com/vi/MSn-fOccThI/mqdefault.jpg",
    title: "Agrishield Fertilizers Performance Nashik",
    caption: "Pomegranate and grape farm field success story",
    views: "2.1L",
    date: "Recent",
  },
  {
    id: "v4",
    ytId: "7MMaeAn54RY",
    thumb: "https://img.youtube.com/vi/7MMaeAn54RY/mqdefault.jpg",
    title: "Agrishield Soil Conditioner Application",
    caption: "Best practice guide for microenergy and soil conditioning",
    views: "64K",
    date: "Recent",
  },
];

const REELS = [
  {
    id: "r1",
    code: "DXCSYW6DEFi",
    thumb: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=700&fit=crop&q=80",
    likes: "4.2K",
    caption: "Grape vineyard nutrition update 🍇",
  },
  {
    id: "r2",
    code: "C8kL0SftS7t",
    thumb: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=560&fit=crop&q=80",
    likes: "8.1K",
    caption: "Pomegranate size boost check-in 🔴",
  },
  {
    id: "r3",
    code: "DS7pLYoDOz9",
    thumb: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=400&h=640&fit=crop&q=80",
    likes: "6.7K",
    caption: "Sugarcane field growth success 🌱",
  },
  {
    id: "r4",
    code: "DT5f9CLj1M6",
    thumb: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=520&fit=crop&q=80",
    likes: "3.9K",
    caption: "HumiGrowth root enhancement results 🌾",
  },
  {
    id: "r5",
    code: "DFnjnTLNgOb",
    thumb: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=680&fit=crop&q=80",
    likes: "5.3K",
    caption: "Balanced WSF NPK foliar spray guide 💦",
  },
  {
    id: "r6",
    code: "C8kIui-v3xg",
    thumb: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=600&fit=crop&q=80",
    likes: "11.2K",
    caption: "Field tour with our farming community 🚜",
  },
];

const FIELD_TRIALS = [
  { id: 1, src: "/community-photos/trial_1.jpeg", caption: "Direct root inspection during biostimulant trials." },
  { id: 2, src: "/community-photos/trial_2.jpeg", caption: "Foliar spray evaluation on leafy vegetables." },
  { id: 3, src: "/community-photos/trial_3.jpeg", caption: "Soil conditioner assessment on sugarcane." },
  { id: 4, src: "/community-photos/trial_4.jpeg", caption: "Grape vineyard health and cluster size monitoring." },
  { id: 5, src: "/community-photos/trial_5.jpeg", caption: "Precision drip nutrition trial in pomegranate fields." },
  { id: 6, src: "/community-photos/trial_6.jpeg", caption: "Field training program with local crop advisors." },
  { id: 7, src: "/community-photos/trial_7.jpeg", caption: "Efficacy monitoring of protective bio-inputs." },
  { id: 8, src: "/community-photos/trial_8.jpeg", caption: "Yield improvement comparison on onion crops." },
  { id: 9, src: "/community-photos/trial_9.jpeg", caption: "On-site soil health testing for nutrient deficiency." },
  { id: 10, src: "/community-photos/trial_10.jpeg", caption: "Dealer demonstration meeting on premium NPK application." },
  { id: 11, src: "/community-photos/trial_11.jpeg", caption: "Pomegranate size and color development monitoring." }
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

/* ─── REEL MODAL ─────────────────────────────────────────────── */
function ReelModal({ reel, onClose }: { reel: typeof REELS[0] | null; onClose: () => void }) {
  if (!reel) return null;
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
          className="bg-white rounded-2xl overflow-hidden w-full max-w-[360px] shadow-2xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white z-10 transition-colors shadow"
            aria-label="Close preview"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="aspect-[9/16] w-full bg-black">
            <iframe
              src={`https://www.instagram.com/reel/${reel.code}/embed/`}
              title={reel.caption}
              allowFullScreen
              className="w-full h-full border-0"
              scrolling="no"
            />
          </div>
          <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
            <p className="text-[13px] font-bold text-gray-900 truncate pr-4">{reel.caption}</p>
            <a
              href={`https://www.instagram.com/reel/${reel.code}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-semibold text-primary hover:underline shrink-0"
            >
              Instagram
            </a>
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
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
                href="https://www.instagram.com/agrishield.india/"
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
              href="https://www.youtube.com/@agrishield_2020/featured"
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
                href="https://www.instagram.com/agrishield.india/"
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

      {/* ── ON FIELD TRIALS CAROUSEL ────────────────────────── */}
      <section className="max-w-[1280px] mx-auto px-6 py-20 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[13px] font-semibold text-primary uppercase tracking-widest">Research &amp; trials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">On Field Trials</h2>
              <p className="text-gray-500 mt-2">Active testing, dosage optimization, and crop responses captured directly by our agronomists.</p>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const el = document.getElementById("trial-carousel-container");
                  if (el) el.scrollBy({ left: -340, behavior: "smooth" });
                }}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-55 hover:border-gray-300 active:scale-95 transition-all text-gray-700 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("trial-carousel-container");
                  if (el) el.scrollBy({ left: 340, behavior: "smooth" });
                }}
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-55 hover:border-gray-300 active:scale-95 transition-all text-gray-700 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            id="trial-carousel-container"
            className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth hide-scrollbar"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {FIELD_TRIALS.map((trial) => (
              <div
                key={trial.id}
                className="w-[280px] md:w-[320px] shrink-0 snap-start group"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-sm bg-gray-50 border border-gray-100">
                  <img
                    src={trial.src}
                    alt={trial.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="px-1">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Trial #{trial.id}</span>
                  <p className="text-[13.5px] text-gray-600 mt-1 leading-snug font-medium line-clamp-2">{trial.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
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
              href="https://wa.me/919021342901?text=Hello%20Agrishield%20Industries%20Pvt.%20Ltd.%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20products.%20Please%20assist%20me."
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
      {activeReel && <ReelModal reel={activeReel} onClose={() => setActiveReel(null)} />}
    </div>
  );
}
