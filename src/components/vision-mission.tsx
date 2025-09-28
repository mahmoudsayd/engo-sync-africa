import { Target, Lightbulb } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Vision */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary">Vision</h3>
            </div>
            <p className="text-xl text-foreground leading-relaxed">
              <span className="font-semibold text-primary">Decent work & smart services</span> for every worker in Egypt and Africa.
            </p>
          </div>
          
          {/* Mission */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-primary">Mission</h3>
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