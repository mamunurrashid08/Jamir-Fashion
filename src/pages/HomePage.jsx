import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { CartContext } from '../App.jsx';
import products from '../products.json';

const HomePage = () => {
  const { addToCart } = useContext(CartContext);
  
  // Get featured products (first 8 products)
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Elegant Abayas for the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  Modern Woman
                </span>
              </h1>
              <p className="text-xl text-purple-100 leading-relaxed">
                Discover our premium collection of abayas that blend traditional elegance 
                with contemporary style. Each piece is carefully crafted for the confident, 
                modern Muslim woman.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                  <Link to="/products">
                    Shop Collection
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                  <Link to="/custom-design">
                    Custom Design
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="public/abaya_001.jpg"
                  alt="Featured Abaya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-purple-900 p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">1000+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-gray-600">Free worldwide shipping on orders over $100</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-600">Premium materials and craftsmanship guaranteed</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">24/7 Support</h3>
              <p className="text-gray-600">Dedicated customer support whenever you need</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular abayas, loved by customers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {product.description}
                    </p>
                    <p className="text-xl font-bold text-purple-600">
                      AED {product.price}
                    </p>
                  </div>
                </Link>
                <div className="mt-3">
                  <Button 
                    onClick={() => addToCart(product, 'M')}
                    className="w-full"
                    size="sm"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated with Latest Collections
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Subscribe to our newsletter and be the first to know about new arrivals and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <Button className="bg-white text-purple-900 hover:bg-purple-50">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

