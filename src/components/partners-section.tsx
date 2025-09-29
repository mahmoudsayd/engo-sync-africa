import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
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

const PartnersSection = () => {
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
    { name: "Seedstars", logo: seedstarsLogo }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
    containScroll: false
  });

  useEffect(() => {
    if (emblaApi) {
      const autoplay = () => {
        emblaApi.scrollNext();
      };
      const interval = setInterval(autoplay, 3000);
      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Accelerators & Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            Backed by leading global technology and investment partners
          </p>
        </div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {/* Create multiple copies for infinite scroll effect */}
            {[...Array(3)].map((_, setIndex) => (
              partners.map((partner, index) => (
                <div 
                  key={`${setIndex}-${index}`}
                  className="flex-none w-48 mx-4"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-card transition-all duration-300 h-32 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-hero text-white px-6 py-3 rounded-full">
            <span className="font-medium">🏆 Award-winning deployments & proven track record</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;