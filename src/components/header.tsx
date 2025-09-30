import engoLogo from "@/assets/engo-logo.png";
const Header = () => {
  return <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="inline-flex bg-background/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
          <img src={engoLogo} alt="ENGO Misr - AI-powered workforce technology platform" className="h-20 md:right-24 lg:right-28 row-auto object-contain" />
        </div>
      </div>
    </header>;
};
export default Header;