import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Localização</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venha nos visitar ou peça delivery na região
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-burger">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 mr-3 text-primary" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  Rua Síria, 25<br />
                  São José dos Campos - SP
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-burger">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="w-6 h-6 mr-3 text-primary" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Terça a Domingo:</span>
                    <span className="font-semibold">18h às 23h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda-feira:</span>
                    <span className="font-semibold text-destructive">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-burger">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Phone className="w-6 h-6 mr-3 text-primary" />
                  Contato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  (12) 99999-9999<br />
                  <span className="text-sm">WhatsApp para pedidos</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Área de Delivery
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Entregamos em toda a região central de São José dos Campos
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-foreground">Centro</p>
                <p className="text-muted-foreground">Taxa: Grátis</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-foreground">Jardim Aquarius</p>
                <p className="text-muted-foreground">Taxa: R$ 3,00</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-foreground">Vila Adyana</p>
                <p className="text-muted-foreground">Taxa: R$ 4,00</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <p className="font-semibold text-foreground">Outras regiões</p>
                <p className="text-muted-foreground">Consultar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;