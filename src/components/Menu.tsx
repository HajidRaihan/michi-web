import { Card, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  image: string;
  popular?: boolean; // <--- opsional
};

type MenuCategory = {
  title: string;
  items: MenuItem[];
};

const menuCategories: Record<string, MenuCategory> = {
  crispy: {
    title: "CHICKEN CRISPY",
    items: [
      {
        id: "paket1",
        name: "PAKET 1",
        description: "Chicken Crispy Small + Nasi + Es Teh",
        price: "15K",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
        popular: true,
      },
      {
        id: "paket2",
        name: "PAKET 2",
        description: "Chicken Crispy Big + Nasi + Es Teh",
        price: "18K",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
        popular: false,
      },
      {
        id: "paket-sambal",
        name: "PAKET SAMBAL",
        description: "Chicken Crispy Big + Nasi + Es Teh + Sambal (Ijo/Matah)",
        price: "20K/23K",
        priceNote: "Small/Big",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop",
        popular: true,
      },
      {
        id: "peanut-sauce",
        name: "PEANUT SAUCE",
        description: "Chicken Crispy Big + Nasi + Es Teh (Bbq sauce, Hot Lava, Cheese)",
        price: "22K/25K",
        priceNote: "Small/Big",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
        popular: false,
      },
    ],
  },
  pop: {
    title: "CHICKEN POP",
    items: [
      {
        id: "pop-sambal-geprek",
        name: "CHICKEN POP SAMBAL GEPREK",
        description: "Chicken pop dengan sambal geprek pedas",
        price: "18K",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop",
      },
      {
        id: "pop-sambal-ijo",
        name: "CHICKEN POP SAMBAL IJO",
        description: "Chicken pop dengan sambal ijo segar",
        price: "18K",
        image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=400&h=300&fit=crop",
      },
      {
        id: "pop-sambal-matah",
        name: "CHICKEN POP SAMBAL MATAH",
        description: "Chicken pop dengan sambal matah khas Bali",
        price: "18K",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      },
      {
        id: "pop-saos-mayo",
        name: "CHICKEN POP SAOS MAYO",
        description: "Chicken pop dengan saus mayo creamy",
        price: "18K",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
      },
      {
        id: "pop-bbq",
        name: "CHICKEN POP BBQ SAUCE",
        description: "Chicken pop dengan saus BBQ manis gurih",
        price: "18K",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop",
      },
      {
        id: "pop-hot-lava",
        name: "CHICKEN POP HOT LAVA SAUCE",
        description: "Chicken pop dengan saus hot lava super pedas",
        price: "18K",
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop",
      },
      {
        id: "pop-cheese",
        name: "CHICKEN POP CHEESE SAUCE",
        description: "Chicken pop dengan saus keju yang lezat",
        price: "20K",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop",
        popular: true,
      },
      {
        id: "pop-mentai",
        name: "CHICKEN POP MENTAI SAUCE",
        description: "Chicken pop dengan saus mentai premium",
        price: "20K",
        image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop",
        popular: true,
      },
    ],
  },
  katsu: {
    title: "CHICKEN KATSU",
    items: [
      {
        id: "katsu-bbq",
        name: "CHICKEN KATSU BBQ SAUCE",
        description: "Chicken katsu crispy dengan saus BBQ",
        price: "20K",
        image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=400&h=300&fit=crop",
        popular: true,
      },
      {
        id: "katsu-hot-lava",
        name: "CHICKEN KATSU HOT LAVA SAUCE",
        description: "Chicken katsu dengan saus hot lava pedas",
        price: "20K",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      },
      {
        id: "katsu-mentai",
        name: "CHICKEN KATSU MENTAI SAUCE",
        description: "Chicken katsu dengan saus mentai premium",
        price: "22K",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
        popular: true,
      },
    ],
  },
  miecian: {
    title: "MIE CIAN",
    items: [
      {
        id: "mie-ori",
        name: "MIE CIAN ORI",
        description: "Mie cian original dengan level kepedasan 0-5",
        price: "10K",
        image: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop",
      },
      {
        id: "mie-crispy",
        name: "MIE CIAN + CHICKEN CRISPY",
        description: "Mie cian dengan chicken crispy, level 0-5",
        price: "20K",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        popular: true,
      },
      {
        id: "mie-pop",
        name: "MIE CIAN + CHICKEN POP",
        description: "Mie cian dengan chicken pop, level 0-5",
        price: "20K",
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",
      },
      {
        id: "mie-katsu",
        name: "MIE CIAN + CHICKEN KATSU",
        description: "Mie cian dengan chicken katsu, level 0-5",
        price: "23K",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        popular: true,
      },
    ],
  },
  drinks: {
    title: "MINUMAN",
    items: [
      {
        id: "ice-tea",
        name: "ICE TEA",
        description: "Es teh manis segar",
        price: "5K",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
      },
      {
        id: "lemon-tea",
        name: "LEMON TEA",
        description: "Es teh lemon segar dan menyegarkan",
        price: "10K",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      },
      {
        id: "squash-drink",
        name: "SQUASH DRINK",
        description: "Minuman squash (Mango, Melon, Coco Pandan)",
        price: "10K",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
      },
      {
        id: "creamy-fruit",
        name: "CREAMY FRUIT",
        description: "Minuman creamy (Mango, Melon, Coco Pandan)",
        price: "10K",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
      },
    ],
  },
};

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 px-8 py-3 rounded-full mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">MENU MICHI</h2>
            <p className="text-sm text-white/90">MINI CHICKEN</p>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilihan menu ayam crispy terbaik dengan berbagai varian saus dan topping yang menggugah
            selera
          </p>
        </div>

        {/* Menu Tabs */}
        <Tabs defaultValue="crispy" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12 bg-card/80 backdrop-blur-sm p-1 rounded-xl shadow-md h-12">
            <TabsTrigger
              value="crispy"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              Crispy
            </TabsTrigger>
            <TabsTrigger
              value="pop"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              Pop
            </TabsTrigger>
            <TabsTrigger
              value="katsu"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              Katsu
            </TabsTrigger>
            <TabsTrigger
              value="miecian"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              Mie Cian
            </TabsTrigger>
            <TabsTrigger
              value="drinks"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              Minuman
            </TabsTrigger>
          </TabsList>

          {Object.entries(menuCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((item) => (
                  <Card
                    key={item.id}
                    className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-card/90 backdrop-blur-sm border border-border/50 hover:border-primary/30"
                  >
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {item.popular && (
                        <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground border-0 shadow-sm">
                          POPULAR
                        </Badge>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-sm font-bold text-foreground leading-tight pr-2 flex-1">
                          {item.name}
                        </CardTitle>
                        <div className="text-right flex-shrink-0">
                          <div className="text-lg font-bold text-primary">{item.price}</div>
                          {item.priceNote && (
                            <div className="text-xs text-muted-foreground">{item.priceNote}</div>
                          )}
                        </div>
                      </div>

                      {item.description && (
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Info Section */}
        <div className="mt-16 bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Informasi Menu</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🌶️</span>
                </div>
                <h4 className="font-semibold text-foreground">Level Pedas</h4>
                <p className="text-muted-foreground">
                  Mie Cian tersedia dengan level kepedasan 0-5 sesuai selera Anda
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🥄</span>
                </div>
                <h4 className="font-semibold text-foreground">Varian Saus</h4>
                <p className="text-muted-foreground">
                  Pilihan saus: Sambal Geprek, Ijo, Matah, BBQ, Hot Lava, Cheese, Mentai
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✨</span>
                </div>
                <h4 className="font-semibold text-foreground">Segar & Halal</h4>
                <p className="text-muted-foreground">
                  Semua menu dibuat fresh dengan bahan berkualitas dan tentunya halal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
