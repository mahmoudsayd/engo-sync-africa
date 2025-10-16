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
            <ul className="space-y-2 text-white/80 text-sm mb-4">
              <li>Location: <a href="https://maps.app.goo.gl/j5JQYMY1zT3uD41k6?g_st=awb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Egypt, Giza, Dokki, 54 Mohie eldin abo elezz</a></li>
              <li>Email: <a href="mailto:info@engomisr.com" className="hover:text-white transition-colors">info@engomisr.com</a></li>
              <li>Website: <a href="https://www.engomisr.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.engomisr.com</a></li>
              <li>Whatsapp: <a href="https://wa.me/201103759121" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">01103759121</a></li>
            </ul>
            <div className="rounded-lg overflow-hidden border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.2895247154234!2d31.212628!3d30.038611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841d4b3e3e3e3%3A0x1234567890abcdef!2s54%20Mohie%20eldin%20abo%20elezz%2C%20Dokki%2C%20Giza!5e0!3m2!1sen!2seg!4v1234567890123"
                width="100%"
                height="200"
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