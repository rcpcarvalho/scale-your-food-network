const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">ScaleNet</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            A rede credenciada que acelera o seu negócio no food service e delivery
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              WhatsApp: (11) 99999-9999
            </a>
            <span className="hidden sm:block text-white/40">|</span>
            <a 
              href="mailto:contato@scalenet.com.br"
              className="text-white/80 hover:text-white transition-colors"
            >
              contato@scalenet.com.br
            </a>
          </div>
          
          <div className="pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © 2024 ScaleNet. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;