const PartnersSection = () => {
  const partners = [
    {
      name: "Microsoft",
      description: "Technology Partnership",
      logo: "🏢"
    },
    {
      name: "NVIDIA Inception",
      description: "AI Innovation Program",
      logo: "🚀"
    },
    {
      name: "500 Global",
      description: "Venture Capital",
      logo: "💼"
    },
    {
      name: "Sanabel/PIF",
      description: "Strategic Investment",
      logo: "🤝"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Trusted Partners & Investors
          </h2>
          <p className="text-lg text-muted-foreground">
            Backed by leading global technology and investment partners
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-card transition-all duration-300"
            >
              <div className="text-4xl mb-3">{partner.logo}</div>
              <h3 className="font-semibold text-primary mb-1">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </div>
          ))}
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