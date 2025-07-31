import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import contactBg from "@/assets/contact.jpg";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enviar mensagem via WhatsApp
    const message = `🍔 *Contato Prime Burguer*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Mensagem:* ${formData.message}`;
    const phoneNumber = "5512999999999";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Limpar formulário
    setFormData({ name: '', email: '', message: '' });
    
    toast({
      title: "Mensagem enviada!",
      description: "Redirecionando para o WhatsApp...",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="relative py-20">
  {/* Imagem de fundo com overlay */}
  <div className="absolute inset-0 ">
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${contactBg})` }}
    />
    <div className="absolute inset-0 bg-black opacity-70" />
  </div>
      <div className="relative  container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Entre em Contato</h2>
          <p className="text-xl text-neutral-100 max-w-2xl mx-auto">
            Tem alguma dúvida, sugestão ou quer fazer um pedido especial? Fale conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <Card className="shadow-burger">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6">
            <Card className="shadow-burger">
              <CardHeader>
                <CardTitle className="text-xl">
                  Redes Sociais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Instagram className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">Instagram</p>
                      <p className="text-muted-foreground">@primeburguer_sjc</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Facebook className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">Facebook</p>
                      <p className="text-muted-foreground">Prime Burguer São José</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-muted-foreground">(12) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-muted-foreground">contato@primeburguer.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-burger">
              <CardHeader>
                <CardTitle className="text-xl">
                  Pedidos Especiais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Precisando de algo especial? Fazemos:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Pedidos para eventos e festas</li>
                  <li>• Hambúrgueres personalizados</li>
                  <li>• Adaptações para dietas especiais</li>
                  <li>• Combos familiares</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Entre em contato com pelo menos 24h de antecedência
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;