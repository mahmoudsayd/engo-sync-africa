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
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Sustainable Business Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Multiple revenue streams ensuring long-term sustainability and continuous innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div key={index} className="p-8 bg-white rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mb-6">
                <model.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {model.title}
              </h3>
              <ul className="space-y-3">
                {model.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
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