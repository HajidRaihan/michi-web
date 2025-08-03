import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xl">🍗</span>
              </div>
              <span className="text-xl font-bold text-primary">Crispy Delight</span>
            </div>
            <p className="text-muted-foreground">
              Serving the community with the finest fried chicken since 1985. Made with love, served
              with pride.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@crispydelight.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-muted-foreground">
                  123 Main Street
                  <br />
                  Downtown District
                  <br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Thursday</span>
                <span className="text-foreground">11am - 9pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Friday - Saturday</span>
                <span className="text-foreground">11am - 10pm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sunday</span>
                <span className="text-foreground">12pm - 8pm</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#menu"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Our Menu
              </a>
              <a
                href="#about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Online Ordering
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Catering
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Gift Cards
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Crispy Delight. All rights reserved. Made with ❤️ for chicken lovers.</p>
        </div>
      </div>
    </footer>
  );
}
