import { Heart, Leaf, Star, User } from "lucide-react";

const OurValues = () => {
  return (
    <section className="py-16 bg-primary-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary-900 mb-4 font-heading dark:text-white">
            Our Core Values
          </h2>
          <p className="text-primary-700 max-w-2xl mx-auto dark:text-gray-300">
            These principles guide everything we do, from selecting ingredients
            to serving our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="value-card bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
            <div className="value-icon bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-primary-700">
              <Star className="text-primary-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-4 font-heading dark:text-white">
              Quality
            </h3>
            <p className="text-primary-600 dark:text-gray-300">
              We never compromise on ingredients or craftsmanship. Every cookie
              must meet our high standards.
            </p>
          </div>

          <div className="value-card bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
            <div className="value-icon bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-primary-700">
              <Heart className="text-primary-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-4 font-heading dark:text-white">
              Passion
            </h3>
            <p className="text-primary-600 dark:text-gray-300">
              We genuinely love what we do, and we believe that passion is the
              secret ingredient in every cookie.
            </p>
          </div>

          <div className="value-card bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
            <div className="value-icon bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-primary-700">
              <Leaf className="text-primary-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-4 font-heading dark:text-white">
              Sustainability
            </h3>
            <p className="text-primary-600 dark:text-gray-300">
              We source locally when possible and use eco-friendly packaging to
              minimize our environmental impact.
            </p>
          </div>

          <div className="value-card bg-white dark:bg-gray-800 rounded-2xl p-6 text-center">
            <div className="value-icon bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl text-primary-700">
              <User className="text-primary-700 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-4 font-heading dark:text-white">
              Community
            </h3>
            <p className="text-primary-600 dark:text-gray-300">
              We're proud to be part of the local community and support various
              initiatives and events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
