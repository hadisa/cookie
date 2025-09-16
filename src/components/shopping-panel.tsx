import { Cookie, Trash, X } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { CartItem } from "../contexts/types";

const ShoppingPanel = () => {
  const { 
    cartItems, 
    cartOpen, 
    toggleCart, 
    clearCart, 
    removeFromCart,
    cartTotal
  } = useCart();
    return (
        <div className={`cart-panel fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg transform ${cartOpen ? 'translate-x-0' : 'translate-x-full'} z-50 overflow-y-auto transition-transform duration-400`}>
            <div className="p-5 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary-800 dark:text-white">Your Cart</h3>
                <button
                    onClick={toggleCart}
                    className="text-gray-500 dark:text-gray-300 hover:text-primary-800 dark:hover:text-white"
                >
                    <X />
                </button>
            </div>
            <div className="p-5">
                <div className="mb-6">
              {cartItems.length > 0 ? (
                <>
                    <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600 dark:text-gray-300">
                      {cartItems.reduce((total: number, item: CartItem) => total + item.quantity, 0)} {cartItems.length === 1 ? 'item' : 'items'}
                    </span>
                    {cartItems.length > 0 && (
                      <button 
                        onClick={clearCart}
                        className="text-sm text-secondary hover:underline"
                      >
                        Clear all
                      </button>
                    )}
                  </div>

                  <div className="space-y-4 ">
                    {cartItems.map((item: CartItem) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-16 h-16 bg-primary-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                            <Cookie className="text-primary-700" />
                          </div>
                          <div className="ml-4">
                            <h4 className="text-sm font-medium text-primary-900 dark:text-white">
                              {item.name}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {item.quantity} x ${item.price.toFixed(2)}
                              <span className="ml-2 font-medium">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </p>
                          </div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                </div>
              )}
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 p-8">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                        <span className="text-primary-900 dark:text-white font-medium">
                          ${cartTotal.toFixed(2)}
                        </span>
                    </div>
                    <button className="w-full bg-secondary hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition-colors">
                        Checkout
                    </button>
                </div>
            </div>
    );
}

export default ShoppingPanel;
