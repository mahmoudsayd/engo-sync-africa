const StatsSection = () => {
  const stats = [
    { number: "1.3M+", label: "Active Users", description: "Professionals across Egypt & Africa" },
    { number: "3.4M+", label: "Transactions", description: "Digital payments processed" },
    { number: "1.5B", label: "EGP GMV", description: "Gross merchandise value" }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Empowering the Work Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We empower the entire work ecosystem—from Labor Ministries and unions to SMEs and workers—through 
            <span className="text-primary font-semibold"> Neqabty (B2B)</span> and 
            <span className="text-secondary font-semibold"> Workbook (B2C)</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-secondary mb-2">
                {stat.label}
              </div>
              <div className="text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;