import { CheckCircle2, Award, FlaskConical, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Header */}
      <div className="relative h-[400px] w-full flex items-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('/factory.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
          <h1 className="text-[40px] md:text-[56px] font-bold text-white mb-4">Our Story</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            25 years of engineering protection for the soil, the crop, and the farmer.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-6">Built on Trust and Precision</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Agrishield Industries began in 1999 with a simple mission: to provide farmers with industrial-grade tools and chemicals that actually work. We saw a gap between laboratory promises and field realities, and we built our company to bridge it.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Today, we operate a 500,000 sq.ft state-of-the-art manufacturing facility in Pune, Maharashtra, distributing over 500 specialized products across the nation. Every product that leaves our factory floor is tested, verified, and certified for agricultural success.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-[15px] font-medium text-gray-900">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="text-[15px] font-medium text-gray-900">NABL Accredited Labs</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-[14px] aspect-square overflow-hidden relative">
            <img src="/factory.png" alt="Agrishield Manufacturing Facility" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-gray-50 p-8 rounded-[14px] border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Uncompromising Quality</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              We source raw materials globally but manufacture locally, ensuring every batch meets strict potency and safety guidelines before distribution.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-[14px] border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <FlaskConical className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">R&D Excellence</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Our in-house agronomy lab continuously develops new formulations to tackle evolving pest resistance and challenging climate conditions.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-[14px] border border-gray-100">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pan-India Network</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              With over 40 regional hubs, we ensure that critical crop protection arrives exactly when the farmer needs it, not a day late.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/10 rounded-[24px] p-12 text-center">
          <h2 className="text-[28px] font-bold text-gray-900 mb-4">Partner with Agrishield</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Whether you are a farmer looking for reliable products or a distributor wanting to join our network, we are ready to work with you.
          </p>
          <Link href="/contact">
            <Button className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 text-white font-semibold text-[16px]">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
