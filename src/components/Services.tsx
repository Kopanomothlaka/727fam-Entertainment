import { Mic, Rocket, Music, Video, Store, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Mic className="w-12 h-12" />,
      title: "Singing",
      description: "Immerse yourself in the enchanting world of melody with our exceptional singing services",
      gradient: "from-neon-pink to-neon-purple"
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "Promotion",
      description: "Make waves in the digital space with our strategic promotion solutions",
      gradient: "from-neon-purple to-neon-blue"
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: "Dancing",
      description: "Feel the rhythm of life through our dynamic dance crew",
      gradient: "from-neon-blue to-neon-yellow"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Music Video",
      description: "Turn your sound into a cinematic masterpiece",
      gradient: "from-neon-yellow to-neon-pink"
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: "Store Development",
      description: "We build and design online stores for your brand",
      gradient: "from-neon-pink to-neon-blue"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Creative Content",
      description: "Social media posts, short films, promotional material, reels",
      gradient: "from-neon-purple to-neon-yellow"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive entertainment solutions tailored to bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl glass-effect hover-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <Button
                  variant="neon"
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                >
                  Learn More
                </Button>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10 blur-xl animate-pulse-slow" />
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-accent/10 blur-xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 gradient-text">Ready to Get Started?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Let's collaborate and create something extraordinary together
            </p>
            <Button variant="hero" size="lg" className="hover-glow">
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;