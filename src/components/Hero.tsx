import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-slide-in-left">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">727fam</span>
            <br />
            <span className="text-foreground">Entertainment</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-muted-foreground font-light">
            Where Creativity, Talent, and Culture Collide
          </p>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Creativity in Motion. Talent with Purpose.
          </p>
        </div>

        <div className="animate-slide-in-right flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="lg"
            onClick={scrollToServices}
            className="text-lg px-8 py-4 hover-glow"
          >
            Explore Services
            <ArrowDown className="ml-2" size={20} />
          </Button>
          
          <Button
            variant="neon"
            size="lg"
            className="text-lg px-8 py-4"
          >
            <Play className="mr-2" size={20} />
            Watch Reel
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-20 h-20 rounded-full bg-primary/20 blur-xl animate-pulse-slow" />
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-16 h-16 rounded-full bg-accent/20 blur-xl animate-pulse-slow" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;