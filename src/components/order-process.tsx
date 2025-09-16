import React, { useState } from "react";
import {
  CreditCard,
  Trash2,
  PlusCircle,
  Cookie,
  CookieIcon,
} from "lucide-react";

// Type definitions
interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: "cookie" | "box";
}

interface DeliveryOption {
  id: string;
  name: string;
  description: string;
  selected: boolean;
}

const OrderProcess: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [deliveryOption, setDeliveryOption] = useState<string>("delivery-home");
  const [deliveryDate, setDeliveryDate] = useState<string>("");
  const [deliveryTime, setDeliveryTime] =
    useState<string>("9:00 AM - 11:00 AM");
  const [deliveryNotes, setDeliveryNotes] = useState<string>("");

  // Sample order items
  const orderItems: OrderItem[] = [
    {
      id: "1",
      name: "Classic Chocolate Chip",
      price: 4.99,
      quantity: 2,
      type: "cookie",
    },
    {
      id: "2",
      name: "Salted Caramel",
      price: 5.99,
      quantity: 1,
      type: "cookie",
    },
    {
      id: "3",
      name: "Cookie Box",
      price: 24.99,
      quantity: 1,
      type: "box",
    },
  ];

  // Delivery options
  const deliveryOptions: DeliveryOption[] = [
    {
      id: "delivery-home",
      name: "Home Delivery",
      description: "Get your cookies delivered to your door",
      selected: true,
    },
    {
      id: "delivery-pickup",
      name: "Store Pickup",
      description: "Pick up your order at our bakery",
      selected: false,
    },
  ];

  // Calculate totals
  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 3.99;
  const tax = subtotal * 0.085; // 8.5% tax
  const total = subtotal + deliveryFee + tax;

  const handleDeliveryOptionChange = (optionId: string) => {
    setDeliveryOption(optionId);
  };

  const handleRemoveItem = (itemId: string) => {
    console.log("Remove item:", itemId);
    // Implement remove item functionality
  };

  const handleContinueToPayment = () => {
    console.log("Continue to payment");
    // Implement navigation to payment step
    setCurrentStep(2);
  };

  // Steps for the progress indicator
  const steps = [
    { number: 1, label: "Cart" },
    { number: 2, label: "Details" },
    { number: 3, label: "Payment" },
    { number: 4, label: "Confirmation" },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                      currentStep >= step.number
                        ? "bg-secondary text-white"
                        : "bg-primary-200 text-primary-600"
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium ${
                      currentStep >= step.number
                        ? "text-secondary"
                        : "text-primary-600"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-grow mx-2 ${
                      currentStep > step.number
                        ? "bg-secondary"
                        : "bg-primary-200"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-6 font-heading">
                Your Order
              </h2>

              <div className="space-y-6">
                {orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="order-summary-item flex justify-between items-center border-b border-primary-100 dark:border-gray-700 pb-6"
                  >
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                        {item.type === "cookie" ? (
                          <Cookie
                            className="text-primary-700 dark:text-gray-300"
                            size={24}
                          />
                        ) : (
                          <CookieIcon
                            className="text-primary-700 dark:text-gray-300"
                            size={24}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-sm text-primary-600 dark:text-gray-400">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary-900 dark:text-white">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        className="text-sm text-red-500 mt-1 flex items-center justify-end w-full"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 size={14} className="mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add More Items */}
              <div className="mt-8 pt-6 border-t border-primary-100 dark:border-gray-700">
                <a
                  href="/menu"
                  className="flex items-center text-secondary hover:text-primary-800 dark:hover:text-primary-400 font-medium"
                >
                  <PlusCircle className="mr-2" size={16} /> Add more items
                </a>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-6 font-heading">
                Delivery Options
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {deliveryOptions.map((option) => (
                  <div
                    key={option.id}
                    className={`border-2 rounded-lg p-4 flex items-center cursor-pointer transition-colors ${
                      deliveryOption === option.id
                        ? "border-secondary bg-secondary/5"
                        : "border-primary-200 dark:border-gray-700 hover:border-secondary/50"
                    }`}
                    onClick={() => handleDeliveryOptionChange(option.id)}
                  >
                    <div className="mr-4">
                      <input
                        type="radio"
                        name="delivery"
                        id={option.id}
                        checked={deliveryOption === option.id}
                        onChange={() => handleDeliveryOptionChange(option.id)}
                        className="h-4 w-4 text-secondary focus:ring-secondary"
                      />
                    </div>
                    <label htmlFor={option.id} className="cursor-pointer">
                      <h3 className="font-semibold text-primary-900 dark:text-white">
                        {option.name}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-gray-400">
                        {option.description}
                      </p>
                    </label>
                  </div>
                ))}
              </div>

              {/* Delivery Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="delivery-date"
                      className="block text-primary-700 dark:text-gray-300 mb-2"
                    >
                      Delivery Date
                    </label>
                    <input
                      type="date"
                      id="delivery-date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      className="w-full px-4 py-3 border border-primary-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="delivery-time"
                      className="block text-primary-700 dark:text-gray-300 mb-2"
                    >
                      Delivery Time
                    </label>
                    <select
                      id="delivery-time"
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                      className="w-full px-4 py-3 border border-primary-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option>9:00 AM - 11:00 AM</option>
                      <option>11:00 AM - 1:00 PM</option>
                      <option>1:00 PM - 3:00 PM</option>
                      <option>3:00 PM - 5:00 PM</option>
                      <option>5:00 PM - 7:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="delivery-notes"
                    className="block text-primary-700 dark:text-gray-300 mb-2"
                  >
                    Delivery Notes (Optional)
                  </label>
                  <textarea
                    id="delivery-notes"
                    rows={3}
                    value={deliveryNotes}
                    onChange={(e) => setDeliveryNotes(e.target.value)}
                    className="w-full px-4 py-3 border border-primary-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Special instructions for delivery"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-primary-900 dark:text-white mb-6 font-heading">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-primary-700 dark:text-gray-400">
                    Subtotal
                  </span>
                  <span className="text-primary-900 dark:text-white font-medium">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700 dark:text-gray-400">
                    Delivery Fee
                  </span>
                  <span className="text-primary-900 dark:text-white font-medium">
                    ${deliveryFee.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700 dark:text-gray-400">
                    Tax
                  </span>
                  <span className="text-primary-900 dark:text-white font-medium">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between pt-4 border-t border-primary-100 dark:border-gray-700">
                  <span className="text-lg font-semibold text-primary-900 dark:text-white">
                    Total
                  </span>
                  <span className="text-lg font-bold text-secondary">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-primary-900 dark:text-white mb-3">
                  Estimated Delivery
                </h3>
                <p className="text-primary-700 dark:text-gray-400">
                  Today, 3:00 PM - 5:00 PM
                </p>
              </div>

              <button
                className="w-full bg-secondary hover:bg-primary-800 text-white py-4 rounded-lg font-semibold transition-colors shadow-lg mb-4"
                onClick={handleContinueToPayment}
              >
                Continue to Payment
              </button>

              <div className="text-center">
                <p className="text-sm text-primary-600 dark:text-gray-400">
                  Or
                </p>
                <a
                  href="/menu"
                  className="inline-block mt-2 text-secondary hover:text-primary-800 dark:hover:text-primary-400 font-medium"
                >
                  Continue Shopping
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-primary-100 dark:border-gray-700">
                <h3 className="font-semibold text-primary-900 dark:text-white mb-3">
                  We Accept
                </h3>
                <div className="flex space-x-2">
                  <div className="w-12 h-8 bg-primary-100 dark:bg-gray-700 rounded flex items-center justify-center">
                    <CreditCard
                      className="text-primary-700 dark:text-gray-300"
                      size={16}
                    />
                  </div>
                  <div className="w-12 h-8 bg-primary-100 dark:bg-gray-700 rounded flex items-center justify-center">
                    <CreditCard
                      className="text-primary-700 dark:text-gray-300"
                      size={16}
                    />
                  </div>
                  <div className="w-12 h-8 bg-primary-100 dark:bg-gray-700 rounded flex items-center justify-center">
                    <CreditCard
                      className="text-primary-700 dark:text-gray-300"
                      size={16}
                    />
                  </div>
                  <div className="w-12 h-8 bg-primary-100 dark:bg-gray-700 rounded flex items-center justify-center">
                    <CreditCard
                      className="text-primary-700 dark:text-gray-300"
                      size={16}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderProcess;
