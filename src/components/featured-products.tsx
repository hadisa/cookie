import { ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { cookies } from "../data/data";
import { Cookie } from "../contexts/types";

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleAddToCart = (cookie: Cookie) => {
    addToCart({
      id: cookie.id,
      name: cookie.name,
      price: cookie.price,
      image: "", // Add image URL if available
    });

    // Show feedback
    setAddedItems((prev) => ({ ...prev, [cookie.id]: true }));

    // Reset after delay
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [cookie.id]: false }));
    }, 2000);
  };

  // Sample cookie data

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4 font-heading">
            Our Signature Cookies
          </h2>
          <p className="text-primary-700 dark:text-gray-400 max-w-2xl mx-auto">
            Crafted with passion and the finest ingredients, our cookies are
            baked fresh daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cookies.map((cookie) => (
            <div
              key={cookie.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6">
                {cookie.isBestseller && (
                  <span className="inline-block bg-secondary text-white text-xs px-3 py-1 rounded-full mb-4">
                    BESTSELLER
                  </span>
                )}
                <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-3">
                  {cookie.name}
                </h3>
                <p className="text-primary-700 dark:text-gray-300 text-sm mb-4 h-16 line-clamp-3">
                  {cookie.description}
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        fill={
                          i < Math.floor(cookie.rating) ? "#fbbf24" : "none"
                        }
                        size={16}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-primary-600 dark:text-gray-400">
                    {cookie.rating} ({cookie.reviewCount} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-xl font-bold text-primary-900 dark:text-white">
                    ${cookie.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAddToCart(cookie)}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-colors"
                  >
                    <ShoppingCart className="mr-2" size={16} />
                    {addedItems[cookie.id] ? "Added!" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
