import { Link } from "wouter";
import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-14 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-primary" strokeWidth={2.5} />
              <span className="font-semibold text-[18px] text-primary">agrishield</span>
            </Link>
            <p className="text-[13px] text-gray-500 leading-relaxed max-w-[220px]">
              Manufactured in Pune. Trusted across India. Fertilizers, micronutrients, and crop protection engineered for Indian farmers.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold text-gray-900 mb-4 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {["Fertilizers & NPKs", "Crop Protection", "Biostimulants", "Micronutrients", "Herbicides"].map((item) => (
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
                { label: "Innovation & R&D", href: "/innovation" },
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
              <li className="text-[13px] text-gray-500 leading-relaxed">
                Kuruli Industrial Area,<br />
                Tal-Khed, near Chakan,<br />
                Pune, Maharashtra 410501
              </li>
              <li className="text-[13px] text-gray-500">+91 90000 00000</li>
              <li className="text-[13px] text-gray-500">sales@agrishield.in</li>
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
