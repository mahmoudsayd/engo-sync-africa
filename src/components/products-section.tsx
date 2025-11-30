import { ArrowRight, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import neqabtyLogo from "@/assets/neqabty-logo.png";
import workbookLogo from "@/assets/workbook-logo.jpg";
import { useEffect, useRef, useState } from "react";

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-primary mb-4">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for institutions and individual professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Neqabty B2B */}
          <div className={`bg-card rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-border/50 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center mb-6">
              <div className="w-18 h-18 rounded-2xl overflow-hidden mr-4 flex-shrink-0 shadow-md">
                <img src={neqabtyLogo} alt="Neqabty" className="w-16 h-16 object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-primary">Neqabty</h3>
                <span className="text-sm font-medium text-accent-foreground bg-accent px-3 py-1 rounded-full">B2B Platform</span>
              </div>
            </div>
            
            <p className="text-lg text-foreground mb-6">
              Comprehensive digital transformation platform for ministries, unions, federations, and chambers.
            </p>
            
            <ul className="space-y-3 mb-8">
              {["Membership Management", "Healthcare & Pensions", "Payment Processing & APIs", "Compliance & Reporting"].map((item, i) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex gap-3">
              <Button variant="default" size="lg" className="flex-1" asChild>
                <a href="https://apps.apple.com/eg/app/neqabty/id6443921118" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Apple className="w-5 h-5" />
                  App Store
                </a>
              </Button>
              <Button variant="default" size="lg" className="flex-1" asChild>
                <a href="https://play.google.com/store/search?q=neqabty&c=apps&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Play Store
                </a>
              </Button>
            </div>
          </div>
          
          {/* Workbook B2C */}
          <div className={`bg-card rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-border/50 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center mb-6">
              <div className="w-18 h-18 rounded-2xl overflow-hidden mr-4 flex-shrink-0 shadow-md">
                <img src={workbookLogo} alt="Workbook" className="w-16 h-16 object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-primary">Workbook</h3>
                <span className="text-sm font-medium text-secondary-foreground bg-secondary px-3 py-1 rounded-full">B2C Platform</span>
              </div>
            </div>
            
            <p className="text-lg text-foreground mb-6">
              Empowering individual workers with AI-driven career development and financial services.
            </p>
            
            <ul className="space-y-3 mb-8">
              {["Verified Digital Profiles", "Career Coach AI", "Training Paths & Certification", "Digital Wallets & Cards"].map((item, i) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex gap-3">
              <Button variant="secondary" size="lg" className="flex-1" asChild>
                <a href="https://apps.apple.com/us/app/work-book/id6749538595" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Apple className="w-5 h-5" />
                  App Store
                </a>
              </Button>
              <Button variant="secondary" size="lg" className="flex-1" asChild>
                <a href="https://play.google.com/store/apps/details?id=com.neqabty.work_book" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Play Store
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Synergy Highlight */}
        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <div className="max-w-3xl mx-auto bg-gradient-hero text-white p-10 rounded-3xl shadow-glow animate-pulse-glow">
            <h3 className="text-2xl font-bold font-display mb-4">Perfect Synergy</h3>
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
