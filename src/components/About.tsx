import Image from "next/image";
import { CheckCircle } from "lucide-react";

const features = [
  "Hand-breaded daily with our secret recipe",
  "Premium chicken sourced from local farms",
  "11 herbs and spices blend perfected over decades",
  "Cooked to order for maximum freshness",
  "Family recipes passed down through generations",
  "Zero artificial preservatives or additives",
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Crafted with Passion,
                <span className="text-primary"> Served with Love</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Since 1985, Crispy Delight has been serving the community with the finest fried
                chicken. Our commitment to quality and authentic flavors has made us a beloved local
                institution.
              </p>
              <p className="text-muted-foreground">
                Every piece of chicken is carefully selected, hand-battered with our signature blend
                of herbs and spices, and cooked to golden perfection. We believe that great food
                brings people together, and we&apos;re honored to be part of your special moments.
              </p>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">35+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Fresh Daily</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=400&fit=crop"
                  alt="Chef preparing fried chicken"
                  width={300}
                  height={256}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=300&h=200&fit=crop"
                  alt="Restaurant interior"
                  width={300}
                  height={160}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&h=300&fit=crop"
                  alt="Fresh ingredients"
                  width={300}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1627662168223-7df99068099a?w=300&h=250&fit=crop"
                  alt="Golden fried chicken"
                  width={300}
                  height={208}
                  className="w-full h-52 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
