import { ShoppingBag, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-pattern py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 dark:text-white mb-6 font-heading animate-slide-up">FRESHLY BAKED GOODNESS IN EVERY BITE</h1>
            <p className="text-lg text-primary-700 dark:text-gray-300 mb-8 animate-slide-up">Handcrafted artisanal cookies made with the finest ingredients for the ultimate indulgence.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up">
              <Link to="/menu" className="bg-secondary hover:bg-primary-800 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg flex items-center justify-center">
                <Utensils className="mr-2" /> View Menu
              </Link>
              <button className="bg-white dark:bg-gray-800 text-primary-800 dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700 px-8 py-4 rounded-full font-semibold transition-colors shadow-lg flex items-center justify-center">
                <ShoppingBag className="mr-2" /> Order Now
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 bg-primary-200 dark:bg-primary-800 rounded-full flex items-center justify-center floating-cookie">
                <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                  alt="Delicious Cookie" className="w-64 h-64 object-cover rounded-full shadow-xl" />
              </div>
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                <div className="text-center">
                  <span className="text-2xl font-bold">$4.99</span>
                  <p className="text-xs">each</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Hero;