import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Menu Hambúrguer */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-white/10"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {/* Logo/Nome */}
          <div className="text-white font-bold text-lg">
            ScaleNet
          </div>

          {/* Contato rápido */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open('https://wa.me/5511952158479?text=Olá,%20quero%20saber%20mais%20sobre%20a%20ScaleNet', '_blank')}
            className="text-white hover:bg-white/10 text-sm"
          >
            Contato
          </Button>
        </div>

        {/* Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10">
            <nav className="container mx-auto px-4 py-6">
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="text-white hover:text-primary transition-colors text-lg font-medium w-full text-left"
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-white hover:text-primary transition-colors text-lg font-medium w-full text-left"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('differentials')}
                    className="text-white hover:text-primary transition-colors text-lg font-medium w-full text-left"
                  >
                    Diferenciais
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('process')}
                    className="text-white hover:text-primary transition-colors text-lg font-medium w-full text-left"
                  >
                    Como Funciona
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => window.open('https://wa.me/5511952158479?text=Quero%20falar%20com%20a%20ScaleNet', '_blank')}
                    className="text-primary hover:text-primary/80 transition-colors text-lg font-medium w-full text-left"
                  >
                    Fale Conosco
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;