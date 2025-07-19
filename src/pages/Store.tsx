import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Share2, Star, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import tshirtImage from "@/assets/tshirt-product.jpg";

const Store = () => {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    {
      id: 1,
      name: "727fam Signature T-Shirt - Black",
      price: "R 299.99",
      originalPrice: "R 399.99",
      rating: 4.9,
      reviews: 127,
      image: tshirtImage,
      colors: ["Black", "White", "Purple"],
      description: "Premium black tee with vibrant 727fam logo design",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "727fam Creative Crew Tee",
      price: "R 249.99",
      originalPrice: "R 329.99",
      rating: 4.8,
      reviews: 89,
      image: tshirtImage,
      colors: ["White", "Gray", "Navy"],
      description: "Comfortable fit for the creative minds",
      badge: "New"
    },
    {
      id: 3,
      name: "727fam Performance Shirt",
      price: "R 349.99",
      originalPrice: "R 449.99",
      rating: 5.0,
      reviews: 156,
      image: tshirtImage,
      colors: ["Black", "Red", "Purple"],
      description: "Perfect for performances and events",
      badge: "Premium"
    },
    {
      id: 4,
      name: "727fam Retro Collection",
      price: "R 279.99",
      originalPrice: "R 359.99",
      rating: 4.7,
      reviews: 73,
      image: tshirtImage,
      colors: ["Vintage Black", "Cream", "Burgundy"],
      description: "Throwback style with modern comfort",
      badge: "Limited"
    },
    {
      id: 5,
      name: "727fam Neon Dreams Tee",
      price: "R 329.99",
      originalPrice: "R 429.99",
      rating: 4.9,
      reviews: 104,
      image: tshirtImage,
      colors: ["Black", "Electric Blue", "Hot Pink"],
      description: "Glow-in-the-dark logo for night events",
      badge: "Special"
    },
    {
      id: 6,
      name: "727fam Unity Collection",
      price: "R 259.99",
      originalPrice: "R 339.99",
      rating: 4.6,
      reviews: 67,
      image: tshirtImage,
      colors: ["White", "Black", "Gold"],
      description: "Celebrating unity through creativity",
      badge: "Charity"
    }
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const features = [
    "Premium 100% Cotton",
    "Vibrant Screen Print",
    "Comfortable Fit",
    "Machine Washable",
    "Unisex Design"
  ];

  const currentProduct = products[selectedProduct];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="pt-20 pb-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              727fam <span className="gradient-text">Store</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Represent the 727fam spirit with our exclusive merchandise collection
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group relative overflow-hidden rounded-2xl glass-effect hover-glow transition-all duration-500 cursor-pointer ${
                  selectedProduct === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedProduct(index)}
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.badge === "Best Seller" ? "bg-primary text-white" :
                      product.badge === "New" ? "bg-green-500 text-white" :
                      product.badge === "Premium" ? "bg-gold text-black" :
                      product.badge === "Limited" ? "bg-red-500 text-white" :
                      product.badge === "Special" ? "bg-purple-500 text-white" :
                      "bg-blue-500 text-white"
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold gradient-text">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="ghost" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Heart size={16} />
                  </Button>
                  <Button size="icon" variant="ghost" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Share2 size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Product Details */}
          <div className="glass-effect rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl transform -rotate-3" />
                <div className="relative group">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full rounded-2xl shadow-2xl hover-glow transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {currentProduct.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        currentProduct.badge === "Best Seller" ? "bg-primary text-white" :
                        currentProduct.badge === "New" ? "bg-green-500 text-white" :
                        currentProduct.badge === "Premium" ? "bg-gold text-black" :
                        currentProduct.badge === "Limited" ? "bg-red-500 text-white" :
                        currentProduct.badge === "Special" ? "bg-purple-500 text-white" :
                        "bg-blue-500 text-white"
                      }`}>
                        {currentProduct.badge}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-2">{currentProduct.name}</h3>
                  <p className="text-muted-foreground mb-4">{currentProduct.description}</p>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${i < Math.floor(currentProduct.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        {currentProduct.rating} ({currentProduct.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl font-bold gradient-text">{currentProduct.price}</span>
                    <span className="text-xl text-muted-foreground line-through">{currentProduct.originalPrice}</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                      Save {Math.round(((parseFloat(currentProduct.originalPrice.replace("R ", "")) - parseFloat(currentProduct.price.replace("R ", ""))) / parseFloat(currentProduct.originalPrice.replace("R ", ""))) * 100)}%
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="glass-effect p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4 text-foreground">Product Features</h4>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
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
                    {sizes.map((size) => (
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
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Available Colors</h4>
                  <div className="flex gap-3">
                    {currentProduct.colors.map((color) => (
                      <div
                        key={color}
                        className={`w-8 h-8 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform ${
                          color.includes("Black") ? "bg-black" : 
                          color.includes("White") ? "bg-white" : 
                          color.includes("Purple") || color.includes("Hot Pink") ? "bg-purple-600" :
                          color.includes("Gray") ? "bg-gray-500" :
                          color.includes("Navy") ? "bg-navy-800" :
                          color.includes("Red") ? "bg-red-600" :
                          color.includes("Blue") ? "bg-blue-600" :
                          color.includes("Cream") ? "bg-yellow-100" :
                          color.includes("Burgundy") ? "bg-red-900" :
                          color.includes("Gold") ? "bg-yellow-400" :
                          "bg-gray-400"
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
                    💬 For custom orders, bulk purchases, or international shipping, contact us directly via WhatsApp or Instagram DM. Free delivery within Johannesburg for orders over R500.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Store;