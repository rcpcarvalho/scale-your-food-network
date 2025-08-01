import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Entendimento da sua estratégia",
      description: "Alinhamos metas e regiões de crescimento."
    },
    {
      number: "02", 
      title: "Implementação do modelo de credenciamento",
      description: "Personalizamos o processo de onboarding."
    },
    {
      number: "03",
      title: "Automação e integração",
      description: "O enriquecimento de diversas fontes de dados e integrações tecnológicas aceleram a qualificação e conversão do estabelecimento."
    },
    {
      number: "04",
      title: "Escala e monitoramento contínuo",
      description: "Você acompanha a evolução da rede em tempo real."
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Simples, ágil e sob medida para o seu negócio
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full group hover:shadow-elegant transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-elegant">
                      {step.number}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;