import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  popular?: boolean;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const MenuSection = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Prime Classic",
      description: "Hambúrguer artesanal 150g, queijo cheddar, alface, tomate, cebola roxa e molho especial",
      price: 28.90,
      category: "Burguers",
      popular: true
    },
    {
      id: 2,
      name: "Prime Bacon",
      description: "Hambúrguer artesanal 150g, bacon crocante, queijo cheddar, alface e molho barbecue",
      price: 32.90,
      category: "Burguers",
      popular: true
    },
    {
      id: 3,
      name: "Prime Veggie",
      description: "Hambúrguer de quinoa e grão de bico, queijo vegano, alface, tomate e molho tahine",
      price: 26.90,
      category: "Burguers"
    },
    {
      id: 4,
      name: "Prime Double",
      description: "Dois hambúrgueres artesanais 150g cada, queijo cheddar duplo, bacon e molho especial",
      price: 42.90,
      category: "Burguers"
    },
    {
      id: 5,
      name: "Batata Frita Prime",
      description: "Batatas rústicas temperadas com ervas finas e parmesão",
      price: 14.90,
      category: "Acompanhamentos"
    },
    {
      id: 6,
      name: "Onion Rings",
      description: "Anéis de cebola empanados e crocantes servidos com molho ranch",
      price: 16.90,
      category: "Acompanhamentos"
    },
    {
      id: 7,
      name: "Refrigerante Lata",
      description: "Coca-Cola, Pepsi, Guaraná ou Sprite",
      price: 5.90,
      category: "Bebidas"
    },
    {
      id: 8,
      name: "Suco Natural",
      description: "Laranja, limão, maracujá ou açaí",
      price: 8.90,
      category: "Bebidas"
    }
  ];

  const categories = Array.from(new Set(menuItems.map(item => item.category)));

  const addToCart = (item: MenuItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    
    toast({
      title: "Item adicionado!",
      description: `${item.name} foi adicionado ao carrinho.`,
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart(prevCart => {
      return prevCart.reduce((acc, cartItem) => {
        if (cartItem.id === itemId) {
          if (cartItem.quantity > 1) {
            acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
          }
        } else {
          acc.push(cartItem);
        }
        return acc;
      }, [] as CartItem[]);
    });
  };

  const getItemQuantity = (itemId: number) => {
    const item = cart.find(cartItem => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione alguns itens ao carrinho antes de fazer o pedido.",
        variant: "destructive"
      });
      return;
    }

    let message = "🍔 *Pedido Prime Burguer* 🍔\n\n";
    
    cart.forEach(item => {
      message += `${item.quantity}x ${item.name}\n`;
      message += `R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
    });
    
    message += `💰 *Total: R$ ${getTotalPrice().toFixed(2).replace('.', ',')}*\n\n`;
    message += "📍 *Endereço de entrega:*\n";
    message += "_Por favor, informe seu endereço completo_";

    const phoneNumber = "5512999999999"; // Substituir pelo número real
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cardapio" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Nosso Cardápio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sabores únicos preparados com ingredientes frescos e muito amor
          </p>
        </div>

        {categories.map(category => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              {category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter(item => item.category === category)
                .map(item => (
                  <Card key={item.id} className="hover:shadow-burger transition-smooth">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">
                          {item.name}
                          {item.popular && (
                            <Badge className="ml-2 bg-primary text-primary-foreground">
                              Popular
                            </Badge>
                          )}
                        </CardTitle>
                        <span className="text-xl font-bold text-primary">
                          R$ {item.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        {getItemQuantity(item.id) > 0 ? (
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="font-semibold">
                              {getItemQuantity(item.id)}
                            </span>
                            <Button
                              size="sm"
                              onClick={() => addToCart(item)}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <Button onClick={() => addToCart(item)}>
                            <Plus className="w-4 h-4 mr-2" />
                            Adicionar
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 z-50">
            <Card className="w-80 shadow-burger">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Carrinho ({cart.reduce((total, item) => total + item.quantity, 0)} itens)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.quantity}x {item.name}</span>
                      <span>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-2 mb-4">
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                  </div>
                </div>
                <Button 
                  onClick={sendToWhatsApp} 
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Enviar pelo WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;