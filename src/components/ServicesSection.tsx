import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Clock, Star, Phone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-primary mb-4" />,
      title: "Delivery Rápido",
      description: "Entregamos em até 30 minutos na região de São José dos Campos"
    },
    {
      icon: <Clock className="w-12 h-12 text-primary mb-4" />,
      title: "Funcionamento Flexível",
      description: "Aberto de terça a domingo, das 18h às 23h para melhor atendê-lo"
    },
    {
      icon: <Star className="w-12 h-12 text-primary mb-4" />,
      title: "Qualidade Premium",
      description: "Ingredientes selecionados e preparo artesanal para garantir o melhor sabor"
    },
    {
      icon: <Phone className="w-12 h-12 text-primary mb-4" />,
      title: "Atendimento Personalizado",
      description: "Nossa equipe está sempre pronta para atender suas necessidades especiais"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nossos Serviços</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprometidos em oferecer a melhor experiência gastronômica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-burger transition-smooth hover:scale-105">
              <CardHeader>
                <div className="flex justify-center">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;