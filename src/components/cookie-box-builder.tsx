import { useState } from 'react';

const CookieBoxBuilder = () => {
  const [selectedBox, setSelectedBox] = useState('12-cookie'); // Default selection

  const boxOptions = [
    { id: '6-cookie', label: '6-Cookie Box', price: 24.99 },
    { id: '12-cookie', label: '12-Cookie Box', price: 44.99 },
    { id: '24-cookie', label: '24-Cookie Box', price: 79.99 }
  ];

  const handleBoxChange = (boxId) => {
    setSelectedBox(boxId);
  };

  const handleCustomizeClick = () => {
    // Handle customize box functionality
    console.log(`Customizing ${selectedBox} box`);
    // You can redirect to a customization page or open a modal here
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-900 mb-4 font-heading dark:text-white">Build Your Own Cookie Box</h2>
          <p className="text-primary-700 max-w-2xl mx-auto dark:text-gray-300">
            Create a custom assortment of your favorite cookies. Perfect for gifts or treating yourself!
          </p>
        </div>
        
        <div className="bg-primary-50 rounded-2xl p-8 md:p-12 dark:bg-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-6 font-heading dark:text-white">Select Your Cookies</h3>
              <p className="text-primary-600 mb-6 dark:text-gray-300">
                Choose 6, 12, or 24 cookies from our menu. Mix and match to create your perfect box.
              </p>
              
              <div className="space-y-4 mb-8">
                {boxOptions.map((box) => (
                  <div key={box.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="cookie-box"
                        id={box.id}
                        checked={selectedBox === box.id}
                        onChange={() => handleBoxChange(box.id)}
                        className="h-5 w-5 text-secondary rounded focus:ring-secondary"
                      />
                      <label htmlFor={box.id} className="ml-3 text-primary-800 cursor-pointer">
                        {box.label}
                      </label>
                    </div>
                    <span className="text-lg font-bold text-secondary">${box.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleCustomizeClick}
                className="w-full bg-secondary hover:bg-primary-800 text-white py-4 rounded-lg font-semibold transition-colors shadow-lg"
              >
                Customize Your Box
              </button>
            </div>
            
            <div className="flex justify-center items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1599785209796-3e81ef3c1c87?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                  alt="Cookie Box"
                  className="rounded-2xl shadow-xl w-full max-w-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-secondary text-white p-4 rounded-lg shadow-lg">
                  <p className="text-sm">Perfect for</p>
                  <p className="text-xl font-bold">Gifting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookieBoxBuilder;