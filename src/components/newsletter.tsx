

const Newsletter = () => {
  return (
    <section className="py-16 bg-primary-900 dark:bg-gray-800">
    <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-heading">Join Our Cookie Club</h2>
            <p className="text-primary-200 dark:text-gray-300 mb-8">Subscribe to our newsletter and get 10% off your first order, plus exclusive offers and new flavor updates!</p>
            <form className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Your email address" className="flex-grow px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
                <button type="submit" className="bg-secondary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
                    Subscribe
                </button>
            </form>
        </div>
    </div>
</section>
  );
};

export default Newsletter;