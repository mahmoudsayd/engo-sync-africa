import engoLogo from "@/assets/engo-logo.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          <img 
            src={engoLogo} 
            alt="ENGO Misr - AI-powered workforce technology platform" 
            className="h-8 md:h-10 lg:h-12 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;