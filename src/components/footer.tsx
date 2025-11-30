import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold font-display mb-4">ENGO Misr</h3>
            <p className="text-white/80 mb-6 max-w-md text-lg leading-relaxed">
              Digitizing the work ecosystem with AI-native platforms across Egypt & Africa. 
              Empowering ministries, unions, and professionals for a better future of work.
            </p>
            <div className="text-white/60 text-sm">
              © 2025 ENGO Misr. All rights reserved.
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/80">
              <li>
                <a 
                  href="https://maps.app.goo.gl/j5JQYMY1zT3uD41k6?g_st=awb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 hover:text-white transition-colors group"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-accent transition-colors" />
                  <span>Egypt, Giza, Dokki, 54 Mohie eldin abo elezz</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@engomisr.com" 
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 group-hover:text-accent transition-colors" />
                  <span>info@engomisr.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.engomisr.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Globe className="w-5 h-5 flex-shrink-0 group-hover:text-accent transition-colors" />
                  <span>www.engomisr.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/201103759121" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 group-hover:text-accent transition-colors" />
                  <span>01103759121 (WhatsApp)</span>
                </a>
              </li>
            </ul>
            
            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-white/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.7!2d31.2091!3d30.0384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzE4LjIiTiAzMcKwMTInMzIuOCJF!5e0!3m2!1sen!2seg!4v1234567890123!5m2!1sen!2seg&markers=color:red%7C30.0384,31.2091"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
