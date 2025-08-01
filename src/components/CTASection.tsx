import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para escalar sua rede credenciada?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Fale com nosso time e veja como podemos impulsionar sua presença no food service & delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://wa.me/5511952158479?text=Quero%20falar%20com%20a%20ScaleNet', '_blank')}
            >
              Fale com a ScaleNet
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => window.open('mailto:contato@scalenet.com.br?subject=Quero receber uma apresentação', '_blank')}
            >
              Quero receber uma apresentação
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;