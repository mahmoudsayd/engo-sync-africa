import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Award } from "lucide-react";
import aastecLogo from "@/assets/partners/aastec.jpg";
import aucVentureLab from "@/assets/partners/auc-venture-lab.avif";
import changelabsLogo from "@/assets/partners/changelabs.webp";
import ebrdStarVenture from "@/assets/partners/ebrd-star-venture.png";
import itidaLogo from "@/assets/partners/itida.jpg";
import microsoftLogo from "@/assets/partners/microsoft.png";
import nilepreneursLogo from "@/assets/partners/nilepreneurs.png";
import nvidiaLogo from "@/assets/partners/nvidia.png";
import plugandplayLogo from "@/assets/partners/plugandplay.jpg";
import seedstarsLogo from "@/assets/partners/seedstars.png";
import fiveHundredGlobalLogo from "@/assets/partners/500-global.png";

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const partners = [
    { name: "Microsoft", logo: microsoftLogo },
    { name: "NVIDIA", logo: nvidiaLogo },
    { name: "AASTEC", logo: aastecLogo },
    { name: "AUC Venture Lab", logo: aucVentureLab },
    { name: "ChangeLabs", logo: changelabsLogo },
    { name: "EBRD Star Venture", logo: ebrdStarVenture },
    { name: "ITIDA", logo: itidaLogo },
    { name: "NilePreneurs", logo: nilepreneursLogo },
    { name: "Plug and Play", logo: plugandplayLogo },
    { name: "Seedstars", logo: seedstarsLogo },
    { name: "500 Global", logo: fiveHundredGlobalLogo }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: false
  });

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

  useEffect(() => {
    if (emblaApi) {
      const autoplay = () => emblaApi.scrollNext();
      const interval = setInterval(autoplay, 3000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section ref={sectionRef} className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-display text-primary mb-3">
            <span className="font-bold">Accelerators & Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Backed by leading global technology and investment partners
          </p>
        </div>
        
        <div className={`overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={emblaRef}>
          <div className="flex">
            {[...Array(3)].map((_, setIndex) => 
              partners.map((partner, index) => (
                <div key={`${setIndex}-${index}`} className="flex-none w-44 md:w-52 mx-3">
                  <div className="bg-card rounded-2xl p-5 shadow-card hover:shadow-elegant transition-all duration-300 h-28 flex items-center justify-center border border-border/30">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        
        <div className={`text-center mt-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
          <div className="inline-flex items-center gap-3 bg-gradient-hero text-white px-8 py-4 rounded-full shadow-glow">
            <Award className="w-6 h-6" />
            <span className="font-semibold text-lg">Award-Winning As a Global Digital Economy Solution 2025 by UNIDO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
