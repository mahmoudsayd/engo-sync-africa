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
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Business Model
          </h2>
          <p className="text-lg text-muted-foreground">
            Multiple revenue streams driving sustainable growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="mb-4">
                <model.icon className="w-12 h-12 mx-auto text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{model.title}</h3>
              <ul className="space-y-2">
                {model.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground">{item}</li>
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