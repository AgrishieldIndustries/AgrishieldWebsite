import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

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
            <div className="bg-gray-50 rounded-[16px] p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-[18px] h-[18px] text-primary" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-900 mb-2">Visit us</div>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Plot No. 55, Gat No. 679,<br />
                    Behind Maruti Suzuki Showroom,<br />
                    Pune Nashik Highway, Kuruli,<br />
                    Tal: Khed, Dist: Pune - 410501<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-[16px] p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-[18px] h-[18px] text-primary" />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-900 mb-2">Call us</div>
                  <p className="text-[14px] text-gray-600">+91 93596 87781</p>
                  <p className="text-[14px] text-gray-600">+91 79726 10839</p>
                  <p className="text-[14px] text-gray-600">+91 90213 42901</p>
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
