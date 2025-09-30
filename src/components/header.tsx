import engoLogo from "@/assets/engo-logo.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
          <img 
            src={engoLogo} 
            alt="ENGO Misr - AI-powered workforce technology platform" 
            className="h-24 md:h-28 lg:h-32 w-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;