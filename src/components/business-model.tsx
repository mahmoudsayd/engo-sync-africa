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
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Business Model
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-6 text-center">
                  {model.title}
                </h3>
                <ul className="space-y-3">
                  {model.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BusinessModel;