const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ENGO Misr</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Digitizing the work ecosystem with AI-native platforms across Egypt & Africa. 
              Empowering ministries, unions, and professionals for a better future of work.
            </p>
            <div className="text-white/60 text-sm">
              © 2025 ENGO Misr. All rights reserved.
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Email: <a href="mailto:info@engomisr.com" className="hover:text-white transition-colors">info@engomisr.com</a></li>
              <li>Website: <a href="https://www.engomisr.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.engomisr.com</a></li>
              <li>Whatsapp: <a href="https://wa.me/201103759121" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">01103759121</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;