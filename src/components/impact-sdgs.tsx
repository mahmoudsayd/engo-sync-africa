import { TrendingUp, Users, Clock, DollarSign } from "lucide-react";
import sdg3 from "@/assets/sdg-3.jpg";
import sdg4 from "@/assets/sdg-4.jpg";
import sdg5 from "@/assets/sdg-5.jpg";
import sdg8 from "@/assets/sdg-8.jpg";
import sdg9 from "@/assets/sdg-9.jpg";
import sdg16 from "@/assets/sdg-16.jpg";
import sdg17 from "@/assets/sdg-17.jpg";

const ImpactSDGs = () => {
  const supportingSDGs = [
    { name: "Good Health & Well-being", image: sdg3 },
    { name: "Quality Education", image: sdg4 },
    { name: "Gender Equality", image: sdg5 },
    { name: "Industry, Innovation & Infrastructure", image: sdg9 },
    { name: "Peace, Justice & Strong Institutions", image: sdg16 },
    { name: "Partnerships for the Goals", image: sdg17 }
  ];
  const kpis = [{
    icon: Users,
    title: "Jobs Created",
    description: "Connecting talent with opportunities across sectors"
  }, {
    icon: TrendingUp,
    title: "Workers Formalized",
    description: "Bringing informal workers into the formal economy"
  }, {
    icon: Clock,
    title: "Training Hours",
    description: "Certified skill development and career advancement"
  }, {
    icon: DollarSign,
    title: "Digital Payments",
    description: "Secure, transparent financial transactions"
  }];
  return <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Driving Sustainable Impact
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Aligned with the UN Sustainable Development Goals to create meaningful change across Egypt and Africa
          </p>
        </div>
        
        {/* SDG Anchor */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="flex items-center justify-center gap-6 mb-4">
              <img src={sdg8} alt="SDG 8" className="w-20 h-20 rounded-xl" />
              <div className="text-left">
                <h3 className="text-3xl font-bold text-accent mb-2">
                  Primary Focus: SDG 8
                </h3>
                <p className="text-lg opacity-90">
                  Decent Work & Economic Growth
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Other SDGs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Supporting SDGs</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {supportingSDGs.map((sdg, index) => (
              <div key={index} className="text-center group">
                <div className="mb-3 transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={sdg.image} 
                    alt={sdg.name}
                    className="w-20 h-20 rounded-xl mx-auto shadow-lg"
                  />
                </div>
                <p className="text-sm font-medium opacity-90 text-slate-50">
                  {sdg.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* KPIs */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Key Performance Indicators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <kpi.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{kpi.title}</h4>
                <p className="text-sm opacity-80">{kpi.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ImpactSDGs;