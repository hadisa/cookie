import { ArrowRight } from "lucide-react";

const SpecialOffers = () => {
    return (
        <section className="py-16 bg-primary-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4 font-heading">Special Offers</h2>
                    <p className="text-primary-700 max-w-2xl mx-auto">Take advantage of our current promotions and limited-time offers on select cookie categories.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 md:w-1/3">
                                <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                                    alt="Cookie Bundle" className="h-48 w-full object-cover md:h-full" />
                            </div>
                            <div className="p-6">
                                <div className="text-sm font-semibold text-secondary mb-1">LIMITED TIME</div>
                                <h3 className="text-xl font-bold text-primary-900 mb-2 font-heading">Cookie Lover's Bundle</h3>
                                <p className="text-primary-600 mb-4">Get 20% off when you purchase any 3 dozen cookies from our specialty collection.</p>
                                <a href="#" className="text-secondary hover:text-primary-800 font-medium flex items-center">
                                    Shop Now
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 md:w-1/3">
                                <img src="https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                                    alt="Monthly Subscription" className="h-48 w-full object-cover md:h-full" />
                            </div>
                            <div className="p-6">
                                <div className="text-sm font-semibold text-secondary mb-1">SUBSCRIBE & SAVE</div>
                                <h3 className="text-xl font-bold text-primary-900 mb-2 font-heading">Monthly Cookie Club</h3>
                                <p className="text-primary-600 mb-4">Join our subscription service and get 15% off plus free shipping on every order.</p>
                                <a href="#" className="text-secondary hover:text-primary-800 font-medium flex items-center">
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SpecialOffers;
