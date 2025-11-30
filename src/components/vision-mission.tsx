import { Target, Lightbulb } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Vision */}
          <div className={`text-center lg:text-left p-8 bg-muted/30 rounded-3xl border border-border/50 transition-all duration-700 hover:shadow-elegant ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mr-4 shadow-glow">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-primary">Vision</h3>
            </div>
            <p className="text-xl text-foreground leading-relaxed">
              <span className="font-semibold text-primary">Decent work & smart services</span> for every worker in Egypt and Africa.
            </p>
          </div>
          
          {/* Mission */}
          <div className={`text-center lg:text-left p-8 bg-muted/30 rounded-3xl border border-border/50 transition-all duration-700 hover:shadow-elegant ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mr-4 shadow-glow">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-primary">Mission</h3>
            </div>
            <p className="text-xl text-foreground leading-relaxed">
              Digitize ministries, unions, and chambers with 
              <span className="font-semibold text-secondary"> secure, scalable AI</span> solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
