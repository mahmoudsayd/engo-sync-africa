import { useEffect, useRef, useState } from "react";
import {
  Shield, Users, BarChart3, FileCheck, CreditCard, Building2,
  Lock, Eye, Layers, ChevronRight, CheckCircle2, Church,
  Landmark, Briefcase, Heart, GraduationCap, TrendingUp
} from "lucide-react";

const PensionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const modules = [
    { icon: Users, title: "Member Onboarding", desc: "Digital enrollment with KYC verification" },
    { icon: CreditCard, title: "Contribution Management", desc: "Automated tracking & reconciliation" },
    { icon: Shield, title: "Rules Engine", desc: "Configurable benefit & eligibility rules" },
    { icon: FileCheck, title: "Retirement Calculation", desc: "Precise entitlement computation" },
    { icon: Heart, title: "Beneficiary Management", desc: "Heirs, dependents & succession" },
    { icon: BarChart3, title: "Reporting & Dashboards", desc: "Real-time governance analytics" },
    { icon: Lock, title: "Audit Trails", desc: "Full operational transparency" },
    { icon: Layers, title: "API Integration", desc: "Banks, payroll & insurers ready" },
  ];

  const features = [
    "Digital member records",
    "Rules-based entitlement engine",
    "Contribution tracking & reconciliation",
    "Retirement benefit administration",
    "Lump-sum or periodic payout support",
    "Beneficiary & heirs management",
    "Document workflows",
    "Governance dashboards",
    "Role-based access control",
    "Transparent operational history",
    "Scalable for large institutions",
    "FRA compliance-ready architecture",
  ];

  const segments = [
    { icon: Building2, label: "Corporate Private Funds" },
    { icon: Landmark, label: "Government-Affiliated Entities" },
    { icon: Briefcase, label: "Professional Associations" },
    { icon: Users, label: "Labor Unions" },
    { icon: Church, label: "Churches & Faith-Based Orgs" },
    { icon: Heart, label: "Charities & Nonprofits" },
    { icon: GraduationCap, label: "Supplementary Pension Programs" },
    { icon: TrendingUp, label: "Employee Savings Schemes" },
  ];

  const problems = [
    "Manual, paper-heavy workflows",
    "Complex eligibility & entitlement rules",
    "Weak transparency & accountability",
    "Delayed settlements & approvals",
    "Fragmented member records",
    "Poor beneficiary management",
    "Limited reporting & auditability",
    "Difficulty scaling across large bases",
  ];

  const anim = (delay: number) =>
    `transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;

  return (
    <section ref={sectionRef} id="pension" className="relative overflow-hidden">
      {/* Hero Banner */}
      <div className="relative bg-[hsl(215,85%,12%)] text-white py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/30 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-light/20 blur-[100px]" />
        </div>
        <div className="absolute top-8 left-8 w-20 h-20 border border-gold/20 rounded-full" />
        <div className="absolute bottom-12 right-16 w-32 h-32 border border-gold/10 rounded-full" />

        <div className="container mx-auto px-6 relative z-10">
          <div className={`max-w-4xl mx-auto text-center ${anim(0)}`}>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-5 py-2 mb-8">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold-light tracking-wide">NEW PRODUCT</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight">
              ENGO <span className="text-gold">Pension</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Digital Infrastructure for Pension Savings, Retirement Benefits & Private Funds Administration
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/50">
              <span className="flex items-center gap-2"><Lock className="w-4 h-4 text-gold/60" /> Secure & Compliant</span>
              <span className="flex items-center gap-2"><Eye className="w-4 h-4 text-gold/60" /> Full Transparency</span>
              <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-gold/60" /> Scalable Platform</span>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Overview */}
      <div className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center ${anim(100)}`}>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Executive Overview</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              ENGO Pension is a modular digital platform designed to manage pension-related benefits, contributions,
              eligibility, retirement entitlements, beneficiaries, and operational workflows across Egypt's institutional landscape.
            </p>
            <blockquote className="border-l-4 border-gold pl-6 text-left italic text-primary/80 text-lg mb-10 max-w-2xl mx-auto">
              "To digitize how closed-group retirement and pension-related benefit systems are administered in Egypt"
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Proven Scale", desc: "Operational experience across 600K+ beneficiaries" },
                { title: "Enterprise Ready", desc: "Built for private funds & institutional deployment" },
                { title: "Regulatory Aligned", desc: "Designed for Egypt's regulated financial ecosystem" },
              ].map((item, i) => (
                <div key={i} className="bg-muted/50 rounded-2xl p-6 border border-border/50">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4 mx-auto">
                    <CheckCircle2 className="w-5 h-5 text-gold-dark" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="bg-[hsl(215,85%,12%)] py-20 text-white">
        <div className="container mx-auto px-6">
          <div className={`max-w-5xl mx-auto ${anim(200)}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">The Challenge</h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Current pension and retirement benefit administration in Egypt faces critical operational gaps
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {problems.map((p, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mb-3">
                    <span className="text-red-400 text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Platform Modules */}
      <div className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-14 ${anim(100)}`}>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">The Platform</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A modular, enterprise-grade digital infrastructure for pension administration
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {modules.map((mod, i) => (
              <div
                key={i}
                className={`group bg-card rounded-2xl p-6 border border-border/50 hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 ${anim(i * 80)}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(215,85%,12%)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <mod.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-bold text-primary mb-2">{mod.title}</h4>
                <p className="text-sm text-muted-foreground">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features + Traction */}
      <div className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div className={anim(100)}>
              <h3 className="text-3xl font-bold font-display text-primary mb-8">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-gold-dark mt-1 flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Traction */}
            <div className={anim(200)}>
              <h3 className="text-3xl font-bold font-display text-primary mb-8">Traction & Proof</h3>
              <div className="space-y-6">
                <div className="bg-[hsl(215,85%,12%)] rounded-2xl p-8 text-white">
                  <p className="text-5xl md:text-6xl font-bold font-display text-gold mb-2">600K+</p>
                  <p className="text-white/70 text-lg">Beneficiaries Served</p>
                </div>
                <div className="bg-[hsl(215,85%,12%)] rounded-2xl p-8 text-white">
                  <p className="text-5xl md:text-6xl font-bold font-display text-gold mb-2">EGP 3B+</p>
                  <p className="text-white/70 text-lg">Processed Value</p>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Built on real-world, large-scale benefit administration experience across Egypt's institutional landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Segments */}
      <div className="bg-background py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-14 ${anim(100)}`}>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-primary mb-4">Who It Serves</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for closed-group ecosystems that need governance, transparency, and digitization
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {segments.map((seg, i) => (
              <div
                key={i}
                className={`text-center p-6 rounded-2xl border border-border/50 bg-card hover:shadow-card hover:-translate-y-1 transition-all duration-300 ${anim(i * 60)}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <seg.icon className="w-7 h-7 text-gold-dark" />
                </div>
                <p className="text-sm font-medium text-primary">{seg.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FRA & Market Opportunity */}
      <div className="bg-[hsl(215,85%,12%)] py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Market */}
            <div className={anim(100)}>
              <h3 className="text-3xl font-bold font-display mb-6">Market Opportunity</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                Egypt's institutional landscape presents a massive opportunity for pension digitization, 
                driven by growing demand for governance, transparency, and formalized retirement administration.
              </p>
              <div className="space-y-3">
                {[
                  "Corporate special funds",
                  "Government-related institutional funds",
                  "Professional associations & unions",
                  "Community-based organized groups",
                  "Faith-based & nonprofit schemes",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-3 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FRA */}
            <div className={anim(200)}>
              <h3 className="text-3xl font-bold font-display mb-6">
                The Role of <span className="text-gold">FRA</span>
              </h3>
              <p className="text-white/60 mb-6 leading-relaxed">
                The Financial Regulatory Authority (FRA) serves as a key enabler of governance, 
                legitimacy, trust, and market structure for private funds in Egypt.
              </p>
              <div className="space-y-4">
                {[
                  "Operating within a regulated framework ensures trust & legitimacy",
                  "Private funds require structured governance & digital oversight",
                  "Digital systems enable transparency, compliance & real-time reporting",
                  "ENGO Pension is built to align with regulatory expectations",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 rounded-xl border border-gold/20 bg-gold/5">
                <div className="flex items-center gap-3 mb-2">
                  <Landmark className="w-5 h-5 text-gold" />
                  <span className="font-bold text-gold">Compliance-Ready</span>
                </div>
                <p className="text-white/50 text-sm">
                  Designed from the ground up to support FRA reporting requirements and regulatory frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-[hsl(215,85%,12%)] to-[hsl(215,85%,20%)] py-16 text-white text-center">
        <div className={`container mx-auto px-6 ${anim(0)}`}>
          <h3 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Ready to Digitize Pension Administration?
          </h3>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Partner with ENGO to build the future of retirement benefits infrastructure in Egypt
          </p>
          <a
            href="mailto:info@engomisr.com"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Book a Demo
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PensionSection;
