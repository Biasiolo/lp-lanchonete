import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Minus, ShoppingCart, Trash2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import menuImage from "@/assets/1.jpg";

import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpg";



interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  popular?: boolean;
  image: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

const MenuSection = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { toast } = useToast();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Prime Classic",
      description: "Hambúrguer artesanal 150g, queijo cheddar, alface, tomate, cebola roxa e molho especial",
      price: 28.90,
      category: "Burguers",
      popular: true,
      image: img2
    },
    {
      id: 2,
      name: "Prime Bacon",
      description: "Hambúrguer artesanal 150g, bacon crocante, queijo cheddar, alface e molho barbecue",
      price: 32.90,
      category: "Burguers",
      popular: true,
      image: img3
    },
    {
      id: 3,
      name: "Prime Veggie",
      description: "Hambúrguer de quinoa e grão de bico, queijo vegano, alface, tomate e molho tahine",
      price: 26.90,
      category: "Burguers",
      image: img4
    },
    {
      id: 13,
      name: "Prime Veggie",
      description: "Hambúrguer de quinoa e grão de bico, queijo vegano, alface, tomate e molho tahine",
      price: 26.90,
      category: "Burguers",
      image: img4
    },
    {
      id: 23,
      name: "Prime Veggie",
      description: "Hambúrguer de quinoa e grão de bico, queijo vegano, alface, tomate e molho tahine",
      price: 26.90,
      category: "Burguers",
      image: img4
    },
    {
      id: 4,
      name: "Prime Double",
      description: "Dois hambúrgueres artesanais 150g cada, queijo cheddar duplo, bacon e molho especial",
      price: 42.90,
      category: "Burguers",
      image: img5
    },
    {
      id: 5,
      name: "Batata Frita Prime",
      description: "Batatas rústicas temperadas com ervas finas e parmesão",
      price: 14.90,
      category: "Acompanhamentos",
      image: img6
    },
    {
      id: 6,
      name: "Onion Rings",
      description: "Anéis de cebola empanados e crocantes servidos com molho ranch",
      price: 16.90,
      category: "Acompanhamentos",
      image: img7
    },
    {
      id: 16,
      name: "Onion Rings",
      description: "Anéis de cebola empanados e crocantes servidos com molho ranch",
      price: 16.90,
      category: "Acompanhamentos",
      image: img7
    },
    {
      id: 7,
      name: "Refrigerante Lata",
      description: "Coca-Cola, Pepsi, Guaraná ou Sprite",
      price: 5.90,
      category: "Bebidas",
      image: img8
    },
    {
      id: 8,
      name: "Suco Natural",
      description: "Laranja, limão, maracujá ou açaí",
      price: 8.90,
      category: "Bebidas",
      image: img9
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
      duration: 3000,
      className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] w-fit max-w-sm bg-background border rounded-md shadow-lg p-4"
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
        variant: "destructive",
        duration: 2000,
        className: "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] w-fit max-w-sm bg-background border rounded-md shadow-lg p-4"
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

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <section id="cardapio" className="relative py-20">
      {/* Background com overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${menuImage})` }}
        />
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 ">
          <h2 className="text-5xl font-bold text-white mb-4">Nosso Cardápio</h2>
          <p className="text-xl text-neutral-100 max-w-2xl mx-auto">
            Sabores únicos preparados com ingredientes frescos e muito amor
          </p>
        </div>

        {categories.map(category => (
          <div key={category} className="mb-12 ">
            <h3 className="text-3xl font-bold text-white mb-6 text-center bg-red-500/80 rounded-t-3xl p-4">
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
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-md mb-4"
                      />
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
          <>
            {/* Botão flutuante */}
            {!isCartOpen && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="fixed bottom-4 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-accent transition-all"
                title="Abrir carrinho"
              >
                <div className="relative">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                </div>
              </button>
            )}

            {/* Carrinho expandido */}
            {isCartOpen && (
              <>
                {/* Overlay: ao clicar fora do carrinho, fecha */}
                <div
                  onClick={closeCart}
                  className="fixed inset-0 bg-black/40 z-40"
                ></div>

                {/* Carrinho expandido */}
                <div className="fixed bottom-4 right-4 z-50 w-80 max-h-[80vh] bg-background border rounded-xl shadow-xl flex flex-col transition-all animate-slide-up">
                  <div className="flex justify-between items-center px-4 py-3 border-b">
                    <div className="flex items-center gap-2 font-semibold">
                      <ShoppingCart className="w-5 h-5" />
                      Carrinho ({cart.reduce((total, item) => total + item.quantity, 0)} itens)
                    </div>
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setCart([])}
                        title="Limpar carrinho"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={closeCart}
                        title="Fechar carrinho"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="overflow-y-auto px-4 py-2 flex-1 space-y-2">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name}</span>
                        <span>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t px-4 py-3">
                    <div className="flex justify-between font-bold mb-3">
                      <span>Total:</span>
                      <span>R$ {getTotalPrice().toFixed(2).replace('.', ',')}</span>
                    </div>
                    <Button
                      onClick={sendToWhatsApp}
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      Enviar pelo WhatsApp
                    </Button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );

};

export default MenuSection;