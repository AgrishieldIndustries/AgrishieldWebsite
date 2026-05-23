import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. Our team will contact you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="w-full bg-white pb-24">
      {/* Header */}
      <div className="bg-gray-50 py-16 border-b border-gray-200 mb-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Have questions about our products or need a custom quote? Reach out to our agricultural experts.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div>
          <div className="bg-white border border-gray-200 rounded-[14px] p-8 shadow-sm">
            <h2 className="text-[24px] font-bold text-gray-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">First Name</label>
                  <Input required placeholder="Rajesh" className="h-12 bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Last Name</label>
                  <Input required placeholder="Kumar" className="h-12 bg-gray-50" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Email Address</label>
                <Input required type="email" placeholder="rajesh@example.com" className="h-12 bg-gray-50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Phone Number</label>
                <Input required type="tel" placeholder="+91 98765 43210" className="h-12 bg-gray-50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Message / Inquiry</label>
                <Textarea 
                  required 
                  placeholder="Tell us about the products you are interested in..." 
                  className="min-h-[150px] bg-gray-50 resize-y" 
                />
              </div>
              <Button type="submit" disabled={loading} className="w-full h-12 rounded-[8px] bg-primary hover:bg-primary/90 text-white font-medium text-[16px]">
                {loading ? "Sending..." : (
                  <>
                    Send Inquiry <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <h2 className="text-[24px] font-bold text-gray-900 mb-8">Corporate Office</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    Agrishield Industries Ltd.<br/>
                    Plot 42, Industrial Area Phase II<br/>
                    Pune, Maharashtra 411026<br/>
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 text-[15px]">Toll-Free: 1-800-AGRI-SHLD</p>
                  <p className="text-gray-600 text-[15px]">Sales: +91 20 2345 6789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 text-[15px]">sales@agrishield.in</p>
                  <p className="text-gray-600 text-[15px]">support@agrishield.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-600 text-[15px]">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600 text-[15px]">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-[14px] w-full h-[300px] flex items-center justify-center border border-gray-200">
            <div className="text-center text-gray-500">
              <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="font-medium">Interactive Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
