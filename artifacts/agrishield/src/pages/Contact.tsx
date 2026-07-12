import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Enquiry sent", description: "Our field officer will respond within one working day." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="w-full bg-white pb-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-14">
        <h1 className="text-[36px] md:text-[52px] font-bold text-gray-900 leading-[1.1] mb-4 max-w-2xl">
          Enquiries, dealerships, agronomy — we're a call away.
        </h1>
        <p className="text-[15px] text-gray-500 mb-12 max-w-xl leading-relaxed">
          Tell us about your crop, your region and what you're trying to solve. Our field officers respond within one working day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Form Card */}
          <div className="bg-white border border-gray-200 rounded-[16px] p-6 md:p-8 shadow-sm">
            <h2 className="text-[18px] font-semibold text-gray-900 mb-6">Send an enquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Full name</label>
                  <input
                    required
                    placeholder="Your name"
                    className="w-full h-11 px-4 rounded-[8px] border border-gray-200 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 bg-white transition"
                    data-testid="input-full-name"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Phone</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91"
                    className="w-full h-11 px-4 rounded-[8px] border border-gray-200 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 bg-white transition"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  required
                  type="email"
                  placeholder="you@farm.in"
                  className="w-full h-11 px-4 rounded-[8px] border border-gray-200 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 bg-white transition"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Crop &amp; region</label>
                <input
                  placeholder="e.g. Grapes, Nashik"
                  className="w-full h-11 px-4 rounded-[8px] border border-gray-200 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 bg-white transition"
                  data-testid="input-crop-region"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your crop challenge or what you're looking for..."
                  className="w-full px-4 py-3 rounded-[8px] border border-gray-200 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 bg-white transition resize-none"
                  data-testid="textarea-message"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-[15px] rounded-[8px] transition-colors disabled:opacity-60"
                data-testid="btn-submit-enquiry"
              >
                {loading ? "Sending..." : "Send enquiry"}
              </button>
            </form>
          </div>

          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            {/* Visit Us Card with interactive map toggler */}
            <div 
              className="bg-gray-50 hover:bg-gray-100/70 border border-transparent hover:border-gray-200 rounded-[16px] p-6 cursor-pointer transition-all duration-300 shadow-sm"
              onClick={() => setShowMap(!showMap)}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  {/* Custom Map SVG logo */}
                  <svg className="w-[18px] h-[18px] text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                    <line x1="9" y1="3" x2="9" y2="18" />
                    <line x1="15" y1="6" x2="15" y2="21" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-[13px] font-semibold text-gray-900 mb-2">Visit us</div>
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                      {showMap ? "Hide Map ▲" : "Click to view map ▼"}
                    </span>
                  </div>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Plot No. 55, Gat No. 679,<br />
                    Behind Maruti Suzuki Showroom,<br />
                    Pune Nashik Highway, Kuruli,<br />
                    Tal: Khed, Dist: Pune - 410501<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {showMap && (
                <div 
                  className="mt-5 rounded-2xl overflow-hidden h-[300px] border border-gray-200/80 shadow-inner relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=Agrishield%20Industries%20Pvt%20Ltd%20-%20Agrochemicals%20Manufacturer&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a 
                    href="https://share.google/Z6Wlvy3RKSSUsoqHf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-gray-800 text-[11px] font-bold px-3 py-1.5 rounded-lg shadow border border-gray-150 transition-colors flex items-center gap-1"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              )}
            </div>

            {/* Call Us Card with custom phone SVG */}
            <div className="bg-gray-50 rounded-[16px] p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  {/* Custom Phone SVG logo */}
                  <svg className="w-[18px] h-[18px] text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-900 mb-2">Call us</div>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    <a href="tel:+919359687781" className="hover:underline hover:text-primary transition-colors">+91 93596 87781</a><br />
                    <a href="tel:+917972610839" className="hover:underline hover:text-primary transition-colors">+91 79726 10839</a><br />
                    <a href="tel:+919021342901" className="hover:underline hover:text-primary transition-colors">+91 90213 42901</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[16px] p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-[18px] h-[18px] text-primary" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-900 mb-2">Email us</div>
                  <p className="text-[14px] text-gray-600">
                    <a href="mailto:shantishwar.patil@agrishieldindustries.com" className="hover:underline">shantishwar.patil@agrishieldindustries.com</a>
                  </p>
                  <p className="text-[14px] text-gray-600">
                    <a href="mailto:info.agrishield@gmail.com" className="hover:underline">info.agrishield@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[16px] p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-[18px] h-[18px] text-primary" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-900 mb-2">Business hours</div>
                  <p className="text-[14px] text-gray-600">Mon – Sat: 9:00 AM – 6:00 PM</p>
                  <p className="text-[14px] text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
