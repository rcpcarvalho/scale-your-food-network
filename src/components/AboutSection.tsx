const AboutSection = () => {
  return <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Uma nova forma de criar redes credenciadas no setor de food service & delivery
          </h2>
          
          <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
            <p>
              A ScaleNet nasceu para resolver um desafio real: credenciar e integrar estabelecimentos 
              no ecossistema de food service com velocidade, inteligência e retorno.
            </p>
            <p>Atuamos como parceiro estratégico na construção de redes credenciadas para marcas, fintechs, startups e soluções food service & delivery.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;