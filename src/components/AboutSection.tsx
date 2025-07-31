import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Sobre Nós</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça a história por trás dos melhores burguers da cidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Tradição e Sabor desde 2020
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              A Prime Burguer nasceu do sonho de criar os melhores hambúrgueres artesanais 
              da região. Utilizamos apenas ingredientes frescos e de alta qualidade, 
              preparados com muito amor e dedicação.
            </p>
            <p className="text-lg text-muted-foreground">
              Nossa missão é proporcionar uma experiência gastronômica única, 
              combinando sabores tradicionais com receitas inovadoras que conquistam 
              o paladar de toda a família.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center p-6 shadow-burger">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Clientes Satisfeitos</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-burger">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Variedades no Menu</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-burger">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Ingredientes Frescos</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 shadow-burger">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-muted-foreground">Avaliação Média</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;