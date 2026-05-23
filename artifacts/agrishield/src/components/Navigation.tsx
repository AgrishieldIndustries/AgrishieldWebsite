import { Link, useLocation } from "wouter";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" data-testid="link-home-logo">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
            <Shield className="w-5 h-5" />
          </div>
          <span className="font-bold text-[20px] tracking-tight group-hover:text-primary transition-colors">
            Agrishield Industries
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                className={`text-[16px] font-medium transition-colors relative ${
                  isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-primary rounded-t-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center">
          <Link href="/contact" data-testid="link-nav-cta">
            <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-medium shadow-none">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
