import { Heart, Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
    { icon: <Youtube size={20} />, href: "#", name: "YouTube" },
    { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
    { icon: <MessageCircle size={20} />, href: "#", name: "WhatsApp" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Store", href: "#store" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-4">727fam Entertainment</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Where Creativity, Talent, and Culture Collide. We are a collective of passionate creatives 
              bringing extraordinary entertainment experiences to life.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-3 rounded-xl glass-effect hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Singing</li>
              <li>Dancing</li>
              <li>Music Videos</li>
              <li>Promotion</li>
              <li>Creative Content</li>
              <li>Store Development</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {currentYear} 727fam Entertainment. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current animate-pulse" />
            <span>by 727fam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;