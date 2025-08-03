import { Button } from "./ui/button";
import Image from "next/image";
import HeroImage from "@/assets/hero-image.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-r from-primary/10 to-secondary/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">Mini Chicken</span>
                <br />
                Big Flavor. Pop Your Cravings!
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Sensasi ayam krispi ukuran mini yang bikin nagih. Disajikan dengan saus favoritmu.
                Pilih level pedas, padu padan dengan Mie Cian, dan rasakan ledakan rasa di setiap
                suapan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="https://wa.me/6281903405004?text=Halo,%20saya%20tertarik%20dengan%20produk%20Anda">
                  Pesan sekarang
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Menu
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Fresh Daily</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>30min Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Premium Quality</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 ">
              <Image
                src={HeroImage}
                alt="Delicious crispy fried chicken"
                width={600}
                height={500}
                priority
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
              />
            </div>
            {/* Decorative background */}
            {/* <div className="absolute -top-4 -right-4 w-full h-full bg-primary/20 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-secondary/30 rounded-2xl -z-20"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
