import { Instagram, Facebook, MessageCircle, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">Prime Burguer</h3>
            <p className="text-sm text-muted mb-4">
              Os melhores hambúrgueres artesanais de São José dos Campos. 
              Sabor autêntico que você nunca esquece.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-primary hover:text-accent cursor-pointer transition-smooth" />
              <Facebook className="w-5 h-5 text-primary hover:text-accent cursor-pointer transition-smooth" />
              <MessageCircle className="w-5 h-5 text-primary hover:text-accent cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-muted hover:text-primary transition-smooth"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-muted hover:text-primary transition-smooth"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cardapio')}
                  className="text-muted hover:text-primary transition-smooth"
                >
                  Cardápio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-muted hover:text-primary transition-smooth"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted">Rua Síria, 25 - São José dos Campos</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-muted">(12) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted">Ter-Dom: 18h às 23h</span>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Funcionamento</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Terça a Quinta:</span>
                <span className="text-background">18h - 23h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Sexta a Domingo:</span>
                <span className="text-background">18h - 23h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Segunda:</span>
                <span className="text-destructive">Fechado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-sm text-muted">
            © {currentYear} Prime Burguer. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted mt-2">
            Desenvolvido com ❤️ para os amantes de hambúrguer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;