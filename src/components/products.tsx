import { ShoppingCart, Star, Info } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import { Cookie } from "../contexts/types";

// Product Card Component
const ProductCard = ({ product, isReversed = false }) => {
  const {
    name,
    description,
    price,
    tag,
    tagColor,
    rating,
    reviews,
    details,
    website,
    image,
    nutrition,
  } = product;
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
  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between mb-20 ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="lg:w-1/2 mb-10 lg:mb-0">
        <div className="cookie-card bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <span
            className={`inline-block ${tagColor} text-white text-xs px-3 py-1 rounded-full mb-4`}
          >
            {tag}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-white mb-4 font-heading">
            {name}
          </h3>
          <p className="text-primary-700 dark:text-gray-300 mb-4">
            {description}
          </p>
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.floor(rating) ? "currentColor" : "none"}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-primary-600 dark:text-gray-400">
              {rating} ({reviews} reviews)
            </span>
          </div>
          <div className="mb-6">
            <p className="text-sm text-primary-600 dark:text-gray-400 mb-2">
              {details}
            </p>
            <p className="text-primary-800 dark:text-white font-semibold">
              {website}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary-900 dark:text-white">
              ${price}
            </span>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-primary-700 hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
            >
              <ShoppingCart size={18} className="mr-2" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:w-1/2 ${
          isReversed ? "lg:pr-12" : "lg:pl-12"
        } flex justify-center`}
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
          <div
            className={`absolute -bottom-4 ${
              isReversed ? "-right-4" : "-left-4"
            } bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 w-40`}
          >
            <p className="text-xs text-primary-600 dark:text-gray-400">
              Nutrition per serving
            </p>
            <p className="text-sm font-medium text-primary-900 dark:text-white">
              {nutrition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Information Section Component
const InfoSection = () => (
  <div className="bg-primary-50 dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-md text-center mb-20">
    <h3 className="text-xl md:text-2xl font-semibold text-primary-900 dark:text-white mb-4">
      Please Send Down Far More Information
    </h3>
    <p className="text-primary-700 dark:text-gray-300 italic mb-2">
      Lorem Ipsum Dolor Sit Venerdiam.
    </p>
    <p className="text-primary-700 dark:text-gray-300 italic">
      Western Quam Tiraculante Prestum.
    </p>
    <div className="mt-8 flex justify-center">
      <button className="bg-white dark:bg-gray-700 text-primary-800 dark:text-white hover:bg-primary-100 dark:hover:bg-gray-600 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
        <Info size={18} className="mr-2" /> Learn More
      </button>
    </div>
  </div>
);

// Main Products Component
const Products = () => {
  const products = [
    {
      name: "Chocolate Cookie",
      description:
        "Indulge in rich, fudgy perfection with our signature chocolate cookies. Made with premium cocoa and chocolate chunks.",
      price: 4.99,
      tag: "BESTSELLER",
      tagColor: "bg-secondary",
      rating: 4.7,
      reviews: 238,
      details: "Brick Art And Paste Wine",
      website: "www.chocolate.co.uk",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
      nutrition: "Calories: 210 • Carbs: 28g",
    },
    {
      name: "Butter Cookie",
      description:
        "Experience the melt-in-your-mouth goodness of our butter cookies, made with premium butter and a hint of vanilla.",
      price: 3.99,
      tag: "NEW",
      tagColor: "bg-accent",
      rating: 4.9,
      reviews: 156,
      details: "Ugly C-Plus Available in Water",
      website: "J.E.Will is forever good!",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
      nutrition: "Calories: 180 • Carbs: 22g",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4 font-heading">
            Our Signature Cookies
          </h2>
          <p className="text-primary-700 dark:text-gray-400 max-w-2xl mx-auto">
            Crafted with passion and the finest ingredients, our cookies are
            baked fresh daily to bring you moments of pure delight.
          </p>
        </div>

        <ProductCard product={products[0]} />
        <InfoSection />
        <ProductCard product={products[1]} isReversed={true} />
      </div>
    </section>
  );
};

export default Products;
