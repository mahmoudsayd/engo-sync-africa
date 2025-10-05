import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workforce.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="AI-powered workforce technology in Egypt and Africa" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
            Digitizing the Work Ecosystem 
            <span className="text-accent block mt-2">with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto">
            ENGO Misr powers ministries, unions, federations, and professionals with AI-native platforms, 
            already serving <span className="text-accent font-semibold">1.3M+ users</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="mailto:info@engomisr.com">Get in Touch</a>
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4" asChild>
              <a href="#products">Explore Products</a>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default HeroSection;