import { Brain, Shield, CreditCard, Heart, GraduationCap, BarChart3 } from "lucide-react";

const InnovationSection = () => {
  const innovations = [
    {
      icon: Brain,
      title: "Career Coach AI",
      description: "Local dialects understanding with intelligent job matching"
    },
    {
      icon: Shield,
      title: "Verified Digital ID & KYC",
      description: "Secure identity verification and compliance solutions"
    },
    {
      icon: CreditCard,
      title: "FinTech Rails",
      description: "Collections, payouts, wallets, and payment processing"
    },
    {
      icon: Heart,
      title: "InsureTech Workflows",
      description: "Streamlined claims processing and audit automation"
    },
    {
      icon: GraduationCap,
      title: "EduTech Engine",
      description: "Certified learning paths and skills development"
    },
    {
      icon: BarChart3,
      title: "Governance Dashboards",
      description: "Real-time SDG reporting and performance analytics"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Innovation at the Core
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AI-powered solutions driving digital transformation across the workforce ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((item, index) => (
            <div 
              key={index} 
              className="group p-6 bg-gradient-subtle rounded-2xl border border-border hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;