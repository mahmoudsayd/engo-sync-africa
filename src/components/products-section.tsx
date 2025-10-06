import { ArrowRight, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import neqabtyLogo from "@/assets/neqabty-logo.png";
import workbookLogo from "@/assets/workbook-logo.jpg";

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for institutions and individual professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Neqabty B2B */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 flex-shrink-0">
                <img src={neqabtyLogo} alt="Neqabty" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Neqabty</h3>
                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">B2B Platform</span>
              </div>
            </div>
            
            <p className="text-lg text-foreground mb-6">
              Comprehensive digital transformation platform for ministries, unions, federations, and chambers.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-primary mr-3" />
                Membership Management
              </li>
              <li className="flex items-center text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-primary mr-3" />
                Healthcare & Pensions
              </li>
              <li className="flex items-center text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-primary mr-3" />
                Payment Processing & APIs
              </li>
              <li className="flex items-center text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-primary mr-3" />
                Compliance & Reporting
              </li>
            </ul>
            
            <div className="flex gap-3">
              <Button 
                variant="default" 
                size="lg" 
                className="flex-1"
                asChild
              >
                <a href="https://apps.apple.com/eg/app/neqabty/id6443921118" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Apple className="w-5 h-5" />
                  Download Now
                </a>
              </Button>
              <Button 
                variant="default" 
                size="lg" 
                className="flex-1"
                asChild
              >
                <a href="https://play.google.com/store/search?q=neqabty&c=apps&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Download Now
                </a>
              </Button>
            </div>
          </div>
          
          {/* Workbook B2C */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden mr-4 flex-shrink-0">
                <img src={workbookLogo} alt="Workbook" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Workbook</h3>
                <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">B2C Platform</span>
              </div>
            </div>
            
            <p className="text-lg text-foreground mb-6">
              Empowering individual workers with AI-driven career development and financial services.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-secondary mr-3" />
                Verified Digital Profiles
              </li>
              <li className="flex items-center text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-secondary mr-3" />
                Career Coach AI
              </li>
              <li className="flex items-center text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-secondary mr-3" />
                Training Paths & Certification
              </li>
              <li className="flex items-center text-muted-foreground">
                <ArrowRight className="w-4 h-4 text-secondary mr-3" />
                Digital Wallets & Cards
              </li>
            </ul>
            
            <Button variant="secondary" size="lg" className="w-full" disabled>
              Coming soon...
            </Button>
          </div>
        </div>
        
        {/* Synergy Highlight */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-hero text-white p-8 rounded-3xl shadow-glow">
            <h3 className="text-2xl font-bold mb-4">Perfect Synergy</h3>
            <p className="text-lg opacity-90">
              When institutions digitize with <span className="font-semibold">Neqabty</span>, 
              their workers are empowered through <span className="font-semibold">Workbook</span> - 
              creating a complete ecosystem of digital transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;