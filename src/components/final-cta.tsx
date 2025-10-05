import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
            Partner with ENGO Misr to 
            <span className="text-accent block mt-2">digitize the workforce ecosystem</span>
          </h2>
          
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join us in transforming how Egypt and Africa work. From ministries to individual professionals, 
            we're building the future of work together.
          </p>
          
          <div className="flex justify-center">
            <Button variant="hero" size="lg" className="text-lg px-10 py-4" asChild>
              <a href="mailto:info@engomisr.com">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Demo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;