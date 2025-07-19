import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Share2, Star } from "lucide-react";
import tshirtImage from "@/assets/tshirt-product.jpg";

const Store = () => {
  const product = {
    name: "727fam Signature T-Shirt",
    price: "$29.99",
    rating: 4.9,
    reviews: 127,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Purple"],
    features: [
      "Premium 100% Cotton",
      "Vibrant 727fam Logo Design",
      "Comfortable Fit",
      "Machine Washable",
      "Unisex Design"
    ]
  };

  return (
    <section id="store" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            727fam <span className="gradient-text">Store</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Represent the 727fam spirit with our exclusive merchandise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl transform -rotate-3" />
            <div className="relative group">
              <img
                src={tshirtImage}
                alt={product.name}
                className="w-full rounded-2xl shadow-2xl hover-glow transition-all duration-500 group-hover:scale-105"
              />
              
              {/* Floating Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="icon" variant="ghost" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                  <Heart size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                  <Share2 size={20} />
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">{product.name}</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < 4 ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-4xl font-bold gradient-text mb-6">{product.price}</p>
            </div>

            {/* Features */}
            <div className="glass-effect p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Product Features</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-foreground">Size</h4>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-foreground">Color</h4>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform ${
                      color === "Black" ? "bg-black" : color === "White" ? "bg-white" : "bg-purple-600"
                    }`}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="flex-1 hover-glow">
                <ShoppingCart className="mr-2" size={20} />
                Add to Cart
              </Button>
              <Button variant="neon" size="lg" className="flex-1">
                Order via WhatsApp
              </Button>
            </div>

            {/* Note */}
            <div className="glass-effect p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                💬 For custom orders or bulk purchases, contact us directly via WhatsApp or Instagram DM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;