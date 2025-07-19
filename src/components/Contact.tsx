import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Instagram, Youtube, Facebook, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "WhatsApp",
      handle: "Chat with us",
      gradient: "from-green-400 to-green-600",
      href: "#"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      handle: "@727fam",
      gradient: "from-pink-400 to-purple-600",
      href: "#"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: "YouTube",
      handle: "727fam Entertainment",
      gradient: "from-red-400 to-red-600",
      href: "#"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      handle: "727fam",
      gradient: "from-blue-400 to-blue-600",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate? Let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-secondary/50 border-border focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full bg-secondary/50 border-border focus:border-primary transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or how we can help you..."
                  rows={5}
                  className="w-full bg-secondary/50 border-border focus:border-primary transition-colors resize-none"
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full hover-glow">
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Connect With Us</h3>
              <p className="text-muted-foreground mb-6">
                Follow us on social media for the latest updates, behind-the-scenes content, and upcoming events.
              </p>

              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex items-center gap-4 p-4 rounded-xl glass-effect hover-glow group transition-all duration-300"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${social.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{social.name}</h4>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Quick Contact</h3>
              <p className="text-muted-foreground mb-6">
                For immediate assistance or urgent inquiries, reach out to us directly.
              </p>
              <Button variant="neon" size="lg" className="w-full">
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Direct
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;