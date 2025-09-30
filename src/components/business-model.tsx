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
  return;
};
export default BusinessModel;