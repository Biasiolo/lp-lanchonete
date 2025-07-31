import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-burger.jpg";

const HeroSection = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('cardapio');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Prime Burguer
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
          Os melhores burguers da cidade!<br />
          Sabor autêntico que você nunca esquece.
        </p>
        <Button 
          size="lg" 
          onClick={scrollToMenu}
          className="bg-primary hover:bg-accent text-white px-8 py-6 text-lg font-semibold shadow-burger transition-smooth transform hover:scale-105"
        >
          Ver Cardápio
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;