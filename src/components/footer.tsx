import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Navigation Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">NAVIGATION</h4>
            <ul className="space-y-2">
              {['Home', 'Categories', 'About Us', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-primary-200 dark:text-gray-300 hover:text-white transition-colors duration-300 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">CONTACT INFO</h4>
            <address className="not-italic text-primary-200 dark:text-gray-300">
              <p className="mb-2 flex flex-col">
                <span>123 Cookie Lane</span>
                <span>Bakery Town, BT 12345</span>
              </p>
              <p className="mb-2">
                <a 
                  href="tel:1234567890" 
                  className="hover:text-white transition-colors duration-300"
                >
                  Phone: (123) 456-7890
                </a>
              </p>
              <p className="mb-2">
                <a 
                  href="mailto:info@cookiedelights.com" 
                  className="hover:text-white transition-colors duration-300"
                >
                  Email: info@cookiedelights.com
                </a>
              </p>
            </address>
          </div>
          
          {/* Hours Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">HOURS</h4>
            <div className="text-primary-200 dark:text-gray-300 space-y-1">
              <p className="flex justify-between max-w-xs">
                <span className="font-medium">Monday-Friday:</span>
                <span>8am - 6pm</span>
              </p>
              <p className="flex justify-between max-w-xs">
                <span className="font-medium">Saturday:</span>
                <span>9am - 5pm</span>
              </p>
              <p className="flex justify-between max-w-xs">
                <span className="font-medium">Sunday:</span>
                <span>10am - 4pm</span>
              </p>
            </div>
          </div>
          
          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">FOLLOW US</h4>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook", url: "#" },
                { icon: Instagram, label: "Instagram", url: "#" },
                { icon: Twitter, label: "Twitter", url: "#" }
              ].map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    className="w-10 h-10 bg-primary-700 dark:bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-secondary transition-colors duration-300 group"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <IconComponent size={20} />
                    <span className="sr-only">{social.label}</span>
                  </a>
                );
              })}
            </div>
            
            {/* Newsletter Signup (Optional Addition) */}
            <div className="mt-6">
              <h5 className="text-sm font-medium mb-2">NEWSLETTER SIGNUP</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-primary-700 dark:bg-gray-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-secondary w-full"
                />
                <button className="bg-secondary hover:bg-secondary/90 px-4 py-2 rounded-r transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="pt-8 border-t border-primary-700 dark:border-gray-700 text-center text-primary-300 dark:text-gray-400">
          <p>© {currentYear} Cookie Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;