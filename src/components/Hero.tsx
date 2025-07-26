import { Button } from "@/components/ui/button";
import heroImage from "/lovable-uploads/4ea1beba-cc35-4b22-9f2e-994095809119.png";
import logoImage from "/lovable-uploads/712bcb8f-d4bb-448b-b767-9c5d878c07a0.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo centralizado */}
          <div className="mb-8">
            <img 
              src={logoImage} 
              alt="ScaleNet Logo" 
              className="h-32 md:h-48 w-auto mx-auto filter brightness-0 invert"
            />
          </div>
          <p className="text-xl md:text-2xl mb-4 font-medium">
            A rede credenciada que acelera o seu negócio no food service e delivery
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Credenciamos estabelecimentos com agilidade, escala e rentabilidade. 
            Tudo que você precisa para expandir sua rede com eficiência e sem burocracia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.open('https://wa.me/5511999999999?text=Quero%20credenciar%20minha%20rede', '_blank')}
            >
              Quero credenciar minha rede
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;