import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Globe, Menu, User, X, ShoppingBag, Award, Home, Play, Leaf, Info } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const tabs = [
    { href: "/", label: "Home", Icon: Home, isNew: false },
    { href: "/products", label: "Products", Icon: ShoppingBag, isNew: false },
    { href: "/solutions", label: "Solutions", Icon: Leaf, isNew: true },
    { href: "/awards", label: "Awards & Certs", Icon: Award, isNew: false },
    { href: "/social", label: "Community", Icon: Play, isNew: false },
    { href: "/about", label: "About Us", Icon: Info, isNew: false },
  ];

  const isActive = (href: string) => location === href;

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 h-[80px] flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0" data-testid="link-home-logo">
            <img
              src="/logo.png"
              alt="Agrishield Industries"
              className="w-auto object-contain"
              style={{ height: 96, maxWidth: 210 }}
            />
          </Link>

          <nav className="hidden md:flex items-end pb-0" aria-label="Main navigation">
            {tabs.map(({ href, label, Icon, isNew }) => (
              <Link
                key={href}
                href={href}
                data-testid={`tab-nav-${label.toLowerCase()}`}
                className={`flex flex-col items-center px-5 pt-4 pb-3 gap-1.5 relative transition-colors group ${
                  isActive(href) ? "text-gray-900" : "text-gray-400 hover:text-gray-700"
                }`}
              >
                <div className="relative">
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                  {isNew && (
                    <span className="absolute -top-2.5 -right-3.5 bg-[#1f7a3a] text-white text-[9px] font-bold px-1.5 py-[2px] rounded-full leading-none tracking-wide">
                      NEW
                    </span>
                  )}
                </div>
                <span className={`text-[14px] tracking-tight ${isActive(href) ? "font-bold" : "font-semibold"}`}>
                  {label}
                </span>
                {isActive(href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-gray-900 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-[14px] font-medium text-gray-700 hover:underline whitespace-nowrap"
              data-testid="link-become-dealer"
            >
              Contact Us
            </Link>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600"
              aria-label="Language selector"
              data-testid="btn-language"
            >
              <Globe className="w-[18px] h-[18px]" />
            </button>
            <button
              className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2 hover:shadow-md transition-all duration-200"
              data-testid="btn-account-menu"
            >
              <Menu className="w-[14px] h-[14px] text-gray-600" />
              <div className="w-[30px] h-[30px] rounded-full bg-gray-700 flex items-center justify-center">
                <User className="w-[15px] h-[15px] text-white" />
              </div>
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-testid="btn-mobile-menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-[68px] overflow-y-auto md:hidden">
          <div className="px-6 py-4 space-y-1">
            {tabs.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 py-4 text-[16px] font-medium border-b border-gray-100 ${
                  isActive(href) ? "text-primary" : "text-gray-700"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-4 text-[16px] font-semibold text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
