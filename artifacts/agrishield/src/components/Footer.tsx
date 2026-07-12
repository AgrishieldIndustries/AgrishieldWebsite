import { useState } from "react";
import { Link } from "wouter";
import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const [showMap, setShowMap] = useState(false);

  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Agrishield Industries"
                className="w-auto object-contain"
                style={{ height: 72, maxWidth: 160 }}
              />
            </Link>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px]">
              Manufactured in Pune. Trusted across India. Fertilizers, micronutrients, and crop protection engineered for Indian farmers.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-gray-900 mb-4 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {["Fertilizers & NPKs", "Crop Protection", "Biostimulants", "Micronutrients"].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-gray-900 mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "Solutions", href: "/solutions" },
                { label: "Awards & Certificates", href: "/awards" },
                { label: "About Us", href: "/about" },
                { label: "Become a Dealer", href: "/contact" },
                { label: "Careers", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-gray-900 mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li 
                className="text-[13px] text-gray-500 leading-relaxed cursor-pointer hover:text-gray-900 transition-colors group"
                onClick={() => setShowMap(!showMap)}
              >
                Plot No. 55, Gat No. 679,<br />
                Behind Maruti Suzuki Showroom,<br />
                Pune Nashik Highway, Kuruli,<br />
                Tal: Khed, Dist: Pune - 410501
                <span className="block mt-1.5 text-[10px] font-bold text-primary uppercase tracking-wider group-hover:underline">
                  {showMap ? "Hide Map ▲" : "Click to view map ▼"}
                </span>
              </li>
              {showMap && (
                <li className="mt-2 rounded-xl overflow-hidden h-[150px] border border-gray-250/80 shadow-sm relative">
                  <iframe
                    src="https://maps.google.com/maps?q=Agrishield%20Industries%20Pvt%20Ltd%20-%20Agrochemicals%20Manufacturer&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
                    className="absolute bottom-1 right-1 bg-white/95 text-gray-800 text-[9px] font-bold px-1.5 py-0.5 rounded shadow border border-gray-150 transition-colors"
                  >
                    Open ↗
                  </a>
                </li>
              )}
              <li className="text-[13px] text-gray-500 leading-relaxed">
                +91 93596 87781<br />
                +91 79726 10839<br />
                +91 90213 42901
              </li>
              <li className="text-[13px] text-gray-500 leading-relaxed">
                <a href="mailto:shantishwar.patil@agrishieldindustries.com" className="hover:underline">shantishwar.patil@agrishieldindustries.com</a><br />
                <a href="mailto:info.agrishield@gmail.com" className="hover:underline">info.agrishield@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-gray-400">
            © 2025 Agrishield Industries Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
            ].map(({ Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="text-gray-400 hover:text-gray-600 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
