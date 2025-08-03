import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Clock, Car, Utensils } from "lucide-react";

const outlets = [
  {
    id: 1,
    name: "Downtown District",
    address: "123 Main Street, Downtown District, City 12345",
    phone: "(555) 123-4567",
    hours: "Mon-Thu: 11am-9pm, Fri-Sat: 11am-10pm, Sun: 12pm-8pm",
    services: ["Dine-in", "Takeout", "Delivery", "Drive-thru"],
    coordinates: { lat: 40.7128, lng: -74.006 },
    isNew: false,
  },
  {
    id: 2,
    name: "Westside Mall",
    address: "456 Shopping Center Blvd, Westside Mall, City 12346",
    phone: "(555) 234-5678",
    hours: "Mon-Sun: 10am-9pm",
    services: ["Dine-in", "Takeout", "Food Court"],
    coordinates: { lat: 40.758, lng: -73.9855 },
    isNew: true,
  },
  {
    id: 3,
    name: "Airport Terminal",
    address: "789 Airport Way, Terminal B, City 12347",
    phone: "(555) 345-6789",
    hours: "Daily: 5am-11pm",
    services: ["Takeout", "Quick Service"],
    coordinates: { lat: 40.6892, lng: -74.1745 },
    isNew: false,
  },
  {
    id: 4,
    name: "University Campus",
    address: "321 College Ave, University District, City 12348",
    phone: "(555) 456-7890",
    hours: "Mon-Thu: 11am-11pm, Fri-Sat: 11am-12am, Sun: 12pm-10pm",
    services: ["Dine-in", "Takeout", "Delivery", "Late Night"],
    coordinates: { lat: 40.7282, lng: -73.9942 },
    isNew: false,
  },
  {
    id: 5,
    name: "Suburban Plaza",
    address: "654 Suburban Road, Plaza Square, City 12349",
    phone: "(555) 567-8901",
    hours: "Mon-Sun: 11am-9pm",
    services: ["Dine-in", "Takeout", "Delivery", "Drive-thru", "Catering"],
    coordinates: { lat: 40.7505, lng: -73.9934 },
    isNew: true,
  },
];

const serviceIcons = {
  "Dine-in": Utensils,
  Takeout: Car,
  Delivery: Car,
  "Drive-thru": Car,
  "Food Court": Utensils,
  "Quick Service": Utensils,
  "Late Night": Clock,
  Catering: Utensils,
};

export function Location() {
  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Find Your Nearest
            <span className="text-primary"> Crispy Delight</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With multiple locations across the city, there's always a Crispy Delight nearby. Find
            your closest outlet and enjoy our signature fried chicken.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-24">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg border">
                <div className="h-96 relative">
                  {/* Embedded Google Maps */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1632150885564!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-4 bg-muted/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      📍 {outlets.length} locations found
                    </span>
                    <span className="text-sm text-primary">View all on map</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Outlets List */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {outlets.map((outlet) => (
                <Card key={outlet.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {outlet.name}
                          {outlet.isNew && (
                            <Badge className="bg-primary text-primary-foreground text-xs">
                              NEW
                            </Badge>
                          )}
                        </CardTitle>
                        <div className="flex items-start gap-2 mt-2">
                          <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{outlet.address}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Contact Info */}
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{outlet.phone}</span>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{outlet.hours}</span>
                    </div>

                    {/* Services */}
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">
                        Available Services:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {outlet.services.map((service) => {
                          const IconComponent = serviceIcons[service] || Utensils;
                          return (
                            <Badge
                              key={service}
                              variant="outline"
                              className="flex items-center gap-1 text-xs border-primary/20 text-primary bg-primary/5"
                            >
                              <IconComponent className="w-3 h-3" />
                              {service}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <button className="flex-1 px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                        Get Directions
                      </button>
                      <button className="flex-1 px-3 py-2 text-sm border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors">
                        Call Store
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Store Locator CTA */}
            <div className="mt-8 p-6 bg-secondary/20 rounded-lg border border-primary/10">
              <div className="text-center space-y-3">
                <h3 className="font-semibold text-foreground">Can't find a location near you?</h3>
                <p className="text-sm text-muted-foreground">
                  We're constantly expanding! Enter your zip code to see if we're coming to your
                  area soon.
                </p>
                <div className="flex gap-2 max-w-sm mx-auto">
                  <input
                    type="text"
                    placeholder="Enter zip code"
                    className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
