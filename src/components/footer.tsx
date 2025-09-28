const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ENGO Misr</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Digitizing the work ecosystem with AI-native platforms across Egypt & Africa. 
              Empowering ministries, unions, and professionals for a better future of work.
            </p>
            <div className="text-white/60 text-sm">
              © 2024 ENGO Misr. All rights reserved.
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Neqabty (B2B)</li>
              <li>Workbook (B2C)</li>
              <li>Career Coach AI</li>
              <li>Digital Payments</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>Egypt & Africa</li>
              <li>1.3M+ Users</li>
              <li>SDG 8 Focused</li>
              <li>AI-Native Platform</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;