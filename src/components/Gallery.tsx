import { useState } from "react";
import { Button } from "@/components/ui/button";
import performanceImage from "@/assets/performance-gallery.jpg";
import behindScenesImage from "@/assets/behind-scenes.jpg";
import heroImage from "@/assets/hero-image.jpg";
import teamPhoto from "/lovable-uploads/8b198d11-b4e2-4069-8d00-86b28a7564bb.png";

const Gallery = ({ showSeeMore = false }: { showSeeMore?: boolean }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "performances", name: "Performances" },
    { id: "behind-scenes", name: "Behind the Scenes" },
    { id: "studio", name: "Studio Sessions" },
  ];

  const galleryItems = [
    {
      id: 1,
      image: teamPhoto,
      category: "behind-scenes",
      title: "727fam Collective",
      description: "The amazing team behind 727fam Entertainment"
    },
    {
      id: 2,
      image: performanceImage,
      category: "performances",
      title: "Live Performance",
      description: "727fam bringing energy to the stage"
    },
    {
      id: 3,
      image: behindScenesImage,
      category: "behind-scenes",
      title: "Creative Process",
      description: "Team collaboration in action"
    },
    {
      id: 4,
      image: heroImage,
      category: "studio",
      title: "Studio Session",
      description: "Recording and creating magic"
    },
    {
      id: 5,
      image: performanceImage,
      category: "performances",
      title: "Dance Showcase",
      description: "Dynamic choreography display"
    },
    {
      id: 6,
      image: heroImage,
      category: "studio",
      title: "Music Production",
      description: "Crafting the perfect sound"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Capturing moments of creativity, energy, and pure entertainment magic
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "hero" : "neon"}
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl hover-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>
        {showSeeMore && (
          <div className="text-center mt-8">
            <a href="/gallery">
              <Button variant="hero" size="lg">See more</Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;