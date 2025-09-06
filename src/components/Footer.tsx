import { Github, Twitter, Instagram, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t-4 border-primary/30 mt-16">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo />
            <p className="text-foreground/70 text-sm leading-relaxed">
              Enter the ultimate arcade gaming paradise. Discover futuristic toys that 
              blur the line between reality and digital worlds.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Check our GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label="Send us an email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 
              className="font-bold text-secondary mb-4"
              style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.9rem' }}
            >
              CATEGORIES
            </h3>
            <ul className="space-y-2">
              {['Robots', 'Gaming', 'Action Figures', 'Dioramas', 'Puzzles', 'Vehicles'].map((category) => (
                <li key={category}>
                  <a 
                    href="#"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 
              className="font-bold text-secondary mb-4"
              style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.9rem' }}
            >
              SUPPORT
            </h3>
            <ul className="space-y-2">
              {['Help Center', 'Shipping Info', 'Returns', 'Size Guide', 'Contact Us', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 
              className="font-bold text-secondary mb-4"
              style={{ fontFamily: 'var(--font-pixel)', fontSize: '0.9rem' }}
            >
              STAY CONNECTED
            </h3>
            <p className="text-foreground/70 text-sm mb-4">
              Get notified about new arrivals and exclusive cyberpunk collections.
            </p>
            
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-neon text-sm"
                aria-label="Email for newsletter"
              />
              <button className="btn-neon w-full py-2 text-xs">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-border-muted mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              © {currentYear} ToyVerse. All rights reserved. Enter the future of play.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-foreground/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;