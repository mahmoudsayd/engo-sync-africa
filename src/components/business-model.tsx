import { Building, Users, Handshake } from "lucide-react";
const BusinessModel = () => {
  const models = [{
    icon: Building,
    title: "B2B (Neqabty)",
    items: ["SaaS Subscriptions", "Implementation & Setup", "Transaction Processing Fees", "Custom Integration Services"],
    color: "primary"
  }, {
    icon: Users,
    title: "B2C (Workbook)",
    items: ["Premium Subscriptions", "Recruitment Services", "Training & Certification", "Financial Services"],
    color: "secondary"
  }, {
    icon: Handshake,
    title: "Impact Funding",
    items: ["Worker Formalization Programs", "Digital Transformation Initiatives", "Skills Development Projects", "Financial Inclusion Programs"],
    color: "accent"
  }];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Business Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Multi-stream revenue model driving sustainable growth and impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div 
              key={index} 
              className="p-8 bg-gradient-subtle rounded-2xl border border-border hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-6">
                <model.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {model.title}
              </h3>
              <ul className="space-y-2">
                {model.items.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex items-start">
                    <span className="mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BusinessModel;