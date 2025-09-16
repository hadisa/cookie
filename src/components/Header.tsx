import { Cookie, Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
}
const Header = ({
  darkMode, toggleTheme }: HeaderProps) => {
  const { toggleCart, itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center text-white mr-3">
            <Cookie />
          </div>
          <div className="text-2xl font-bold text-primary-800 dark:text-white font-heading">Cookie Delights</div>
        </div>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-primary-800 dark:text-white hover:text-secondary transition-colors font-medium">HOME</Link>
          <Link to="/categories" className="text-primary-800 dark:text-white hover:text-secondary transition-colors font-medium">CATEGORIES</Link>
          <Link to="/about" className="text-primary-800 dark:text-white hover:text-secondary transition-colors font-medium">ABOUT US</Link>
          <Link to="/contact" className="text-primary-800 dark:text-white hover:text-secondary transition-colors font-medium">CONTACT US</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary-100 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? (
              <Moon className="text-primary-800 dark:text-white" />
            ) :
              (
                <Sun className="text-primary-800 dark:text-white" />
              )
            }
          </button>

          <button
            onClick={toggleCart}
            className="relative p-2 rounded-full hover:bg-primary-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ShoppingBag className="text-primary-800 dark:text-white" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-xl text-primary-800 dark:text-white"
          >
            {mobileMenuOpen ? (<X />) : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-800 py-4 px-4 border-t border-gray-200 dark:border-gray-700`}>
        <div className="flex flex-col space-y-3">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-primary-800 dark:text-white hover:text-secondary transition-colors font-medium">HOME</Link>
          <Link to="/categories" onClick={() => setMobileMenuOpen(false)} className="text-primary-800 dark:text-white hover:text-secondary transition-colors font-medium">CATEGORIES</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-primary-800 dark:text-white hover:text-secondary transition-colors font-medium">ABOUT US</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-primary-800 dark:text-white hover:text-secondary transition-colors font-medium">CONTACT US</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;