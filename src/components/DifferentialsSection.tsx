import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import foodServiceIcon from "@/assets/food-service-icon.png";
import scaleIcon from "@/assets/scale-icon.png";
import expansionIcon from "@/assets/expansion-icon.png";
import techIcon from "@/assets/tech-icon.png";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: foodServiceIcon,
      emoji: "🧠",
      title: "Especialização em Food Service e Delivery",
      description: "Know-how focado em bares, restaurantes, lanchonetes, padarias e demais estabelecimentos do setor alimenticio."
    },
    {
      icon: scaleIcon,
      emoji: "⚙️",
      title: "Credenciamento em Alta Escala",
      description: "Modelo pensado para conversão rápida e rede rentável desde o início."
    },
    {
      icon: expansionIcon,
      emoji: "🌍",
      title: "Expansão Geográfica Inteligente",
      description: "Atuamos por região conforme a prioridade de crescimento dos nossos parceiros."
    },
    {
      icon: techIcon,
      emoji: "🚀",
      title: "Tecnologia e Desburocratização",
      description: "Integrações com diversas fontes de dados, tombamento automatizado de cardápios e redução de todas barreiras possíveis de implementação."
    }
  ];

  return (
    <section id="differentials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Por que a ScaleNet é diferente?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <Card key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-4xl shadow-glow group-hover:shadow-lg transition-shadow duration-300">
                    {item.emoji}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;