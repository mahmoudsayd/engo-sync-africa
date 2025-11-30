import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-workforce.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI-powered workforce technology in Egypt and Africa" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight opacity-0 animate-fade-in">
            Digitizing the Work Ecosystem 
            <span className="text-accent block mt-2">with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-0 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            ENGO Misr powers ministries, unions, federations, and professionals with AI-native platforms, 
            already serving <span className="text-accent font-semibold">1.3M+ users</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
              <a href="#products">Explore Products</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator - outside main content div */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a href="#stats" className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
