import { Heart, Target, Users, Zap } from "lucide-react";
import teamPhoto from "/lovable-uploads/8b198d11-b4e2-4069-8d00-86b28a7564bb.png";

const About = () => {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Creativity",
      description: "Pushing boundaries and exploring new artistic horizons"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building connections through shared passion for entertainment"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Purpose",
      description: "Every performance and project has meaning and intention"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Driven by love for the arts and entertainment industry"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">727fam</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a collective of passionate creatives dedicated to bringing extraordinary entertainment experiences to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Born from a shared vision of creativity and excellence, 727fam Entertainment emerged as a powerhouse collective where talent meets opportunity. We started as a group of friends with big dreams and have evolved into a comprehensive entertainment hub.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey is fueled by the belief that entertainment should inspire, unite, and create lasting memories. From singing and dancing to promotional campaigns and creative content, we bring passion to every project.
            </p>
            
            <div className="glass-effect p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2 text-primary">Our Mission</h4>
              <p className="text-muted-foreground">
                To empower artists, entertain audiences, and create meaningful connections through innovative entertainment experiences that celebrate creativity and culture.
              </p>
            </div>
          </div>

          {/* Team Photo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl transform rotate-3" />
            <img
              src={teamPhoto}
              alt="727fam team collective"
              className="relative rounded-xl shadow-2xl hover-glow transition-all duration-500"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glass-effect p-6 rounded-xl text-center hover-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;