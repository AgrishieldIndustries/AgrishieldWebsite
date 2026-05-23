import { Link } from "wouter";
import { Shield, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6 inline-flex">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
              <Shield className="w-5 h-5" />
            </div>
            <span className="font-bold text-[20px] tracking-tight text-white">
              Agrishield
            </span>
          </Link>
          <p className="text-[#a0a0a0] text-sm leading-relaxed mb-6 pr-4">
            Protecting what grows. We manufacture industrial-grade agricultural protection products, crop shields, and farm chemicals for serious farmers.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[16px] mb-4 text-white">Products</h3>
          <ul className="space-y-3">
            <li><Link href="/products" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Crop Protection</Link></li>
            <li><Link href="/products" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Herbicides & Pesticides</Link></li>
            <li><Link href="/products" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Agricultural Sprayers</Link></li>
            <li><Link href="/products" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Farm Accessories</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[16px] mb-4 text-white">Company</h3>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">About Us</Link></li>
            <li><Link href="/about" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Manufacturing Facility</Link></li>
            <li><Link href="/about" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Quality Standards</Link></li>
            <li><Link href="/contact" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[16px] mb-4 text-white">Contact</h3>
          <ul className="space-y-3">
            <li className="text-[#a0a0a0] text-sm">1-800-AGRI-SHLD</li>
            <li className="text-[#a0a0a0] text-sm">sales@agrishield.in</li>
            <li className="text-[#a0a0a0] text-sm">Plot 42, Industrial Area Phase II<br/>Pune, Maharashtra 411026</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 pt-8 border-t border-[#333333] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#6a6a6a] text-[13px]">
          © 2025 Agrishield Industries. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-[#6a6a6a] hover:text-white transition-colors" aria-label="Facebook">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="text-[#6a6a6a] hover:text-white transition-colors" aria-label="Twitter">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="text-[#6a6a6a] hover:text-white transition-colors" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="text-[#6a6a6a] hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
