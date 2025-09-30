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
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
          Business Model
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, index) => {
            const Icon = model.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-elegant border border-border/50 hover:shadow-glow transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-${model.color}/10`}>
                    <Icon className={`h-6 w-6 text-${model.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {model.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {model.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground flex items-start"
                    >
                      <span className="mr-2">•</span>
                      {item}
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