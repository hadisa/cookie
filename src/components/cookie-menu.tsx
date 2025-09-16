import { useEffect, useState } from "react";
import { cookieData } from "../dummyData/data";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../hooks/useCart";

const CookieMenu = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [menuItems, setMenuItems] = useState([]);
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const { addToCart } = useCart();

  useEffect(() => {
    // Filter items based on active filter
    if (activeFilter === "all") {
      setMenuItems(cookieData);
    } else {
      setMenuItems(cookieData.filter((item) => item.category === activeFilter));
    }
  }, [activeFilter]);

  const handleAddToCart = (cookie) => {
    addToCart({
      id: cookie.id,
      name: cookie.name,
      price: cookie.price,
      image: cookie.image,
    });

    // Show feedback
    setAddedItems((prev) => ({ ...prev, [cookie.id]: true }));

    // Reset after delay
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [cookie.id]: false }));
    }, 2000);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        fill={i < Math.floor(rating) ? "#fbbf24" : "none"}
        size={16}
        className="text-yellow-400"
      />
    ));
  };

  return (
    <>
      {/* Menu Filter Section */}
      <section className="py-8 bg-white sticky top-16 z-40 shadow-sm dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold text-primary-900 mb-4 md:mb-0 font-heading dark:text-white">
              Filter Cookies
            </h2>
            <div className="flex flex-wrap gap-2">
              <button
                className={`filter-btn px-4 py-2 rounded-full border border-primary-200 text-primary-700 hover:bg-secondary hover:text-white transition-colors ${
                  activeFilter === "all" ? "active bg-secondary text-white" : ""
                }`}
                onClick={() => setActiveFilter("all")}
              >
                All Cookies
              </button>
              <button
                className={`filter-btn px-4 py-2 rounded-full border border-primary-200 text-primary-700 hover:bg-secondary hover:text-white transition-colors ${
                  activeFilter === "chocolate"
                    ? "active bg-secondary text-white"
                    : ""
                }`}
                onClick={() => setActiveFilter("chocolate")}
              >
                Chocolate
              </button>
              <button
                className={`filter-btn px-4 py-2 rounded-full border border-primary-200 text-primary-700 hover:bg-secondary hover:text-white transition-colors ${
                  activeFilter === "fruit"
                    ? "active bg-secondary text-white"
                    : ""
                }`}
                onClick={() => setActiveFilter("fruit")}
              >
                Fruity
              </button>
              <button
                className={`filter-btn px-4 py-2 rounded-full border border-primary-200 text-primary-700 hover:bg-secondary hover:text-white transition-colors ${
                  activeFilter === "nut" ? "active bg-secondary text-white" : ""
                }`}
                onClick={() => setActiveFilter("nut")}
              >
                Nutty
              </button>
              <button
                className={`filter-btn px-4 py-2 rounded-full border border-primary-200 text-primary-700 hover:bg-secondary hover:text-white transition-colors ${
                  activeFilter === "specialty"
                    ? "active bg-secondary text-white"
                    : ""
                }`}
                onClick={() => setActiveFilter("specialty")}
              >
                Specialty
              </button>
              <button
                className={`filter-btn px-4 py-2 rounded-full border border-primary-200 text-primary-700 hover:bg-secondary hover:text-white transition-colors ${
                  activeFilter === "vegan"
                    ? "active bg-secondary text-white"
                    : ""
                }`}
                onClick={() => setActiveFilter("vegan")}
              >
                Vegan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="py-16 bg-primary-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          {/* Group items by category */}
          {["chocolate", "fruit", "specialty"].map((category) => {
            const categoryItems = menuItems.filter(
              (item) => item.category === category
            );

            if (categoryItems.length === 0) return null;

            return (
              <div key={category} className="mb-16" id={`${category}-section`}>
                <div className="flex items-center mb-10">
                  <div className="h-0.5 bg-primary-200 flex-grow"></div>
                  <h2 className="text-3xl font-bold text-primary-900 mx-4 dark:text-white font-heading">
                    {category === "chocolate"
                      ? "Chocolate Cookies"
                      : category === "fruit"
                      ? "Fruity Cookies"
                      : "Specialty Cookies"}
                  </h2>
                  <div className="h-0.5 bg-primary-200 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryItems.map((item) => (
                    <div
                      key={item.id}
                      className="menu-item bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden"
                      data-category={item.category}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        {item.badge && (
                          <div
                            className={`absolute top-4 left-4 ${
                              item.badge === "BESTSELLER"
                                ? "bg-secondary"
                                : "bg-accent"
                            } text-white text-sm px-3 py-1 rounded-full`}
                          >
                            {item.badge}
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-primary-900 font-heading dark:text-gray-100">
                            {item.name}
                          </h3>
                          <span className="text-xl font-bold text-secondary dark:text-gray-300">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                        <p className="text-primary-600 mb-4 dark:text-gray-300">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex">{renderStars(item.rating)}</div>
                          <span className="text-sm text-primary-600 dark:text-gray-300">
                            {item.rating} ({item.reviews} reviews)
                          </span>
                        </div>
                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <label className="text-primary-700 dark:text-gray-300">
                              Qty:
                            </label>
                            <select className="border border-primary-200 rounded-lg px-2 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-700">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <button
                            className="bg-secondary hover:bg-primary-800 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors"
                            onClick={() => handleAddToCart(item)}
                          >
                            <ShoppingCart className="mr-2" size={16} />
                            {addedItems[item.id] ? "Added!" : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CookieMenu;
