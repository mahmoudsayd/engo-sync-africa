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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-10 py-4">
              <Calendar className="w-5 h-5 mr-2" />
              Book a Demo
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-10 py-4">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">1.3M+</div>
              <div className="opacity-80">Users Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">3.4M+</div>
              <div className="opacity-80">Transactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">1.5B</div>
              <div className="opacity-80">EGP GMV</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;