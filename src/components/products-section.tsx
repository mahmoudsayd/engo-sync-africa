import { Building2, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
                <Building2 className="w-8 h-8 text-white" />
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
            
            <Button variant="default" size="lg" className="w-full">
              Learn More About Neqabty
            </Button>
          </div>
          
          {/* Workbook B2C */}
          <div className="bg-white rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mr-4">
                <User className="w-8 h-8 text-white" />
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
            
            <Button variant="secondary" size="lg" className="w-full">
              Explore Workbook
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