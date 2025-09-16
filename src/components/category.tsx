import { ArrowRight, List, Square } from "lucide-react";

const Category = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                {/* <!-- Filter Bar --> */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <h2 className="text-2xl font-bold text-primary-900 mb-4 md:mb-0 font-heading">Browse Our Collections</h2>
                    <div className="flex space-x-4">
                        <select className="border border-primary-200 rounded-lg px-4 py-2 text-primary-800 focus:outline-none focus:ring-2 focus:ring-secondary">
                            <option>Sort by Popularity</option>
                            <option>Sort by Price: Low to High</option>
                            <option>Sort by Price: High to Low</option>
                            <option>Sort by Newest</option>
                        </select>
                        <div className="flex border border-primary-200 rounded-lg overflow-hidden">
                            <button className="px-3 py-2 bg-white border-r border-primary-200">
                                <Square />
                            </button>
                            <button className="px-3 py-2 bg-primary-100">
                                <List />
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Categories Grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <!-- Chocolate Cookies --> */}
                    <div className="category-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                                alt="Chocolate Cookies" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-secondary text-white text-sm px-3 py-1 rounded-full">BESTSELLER</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary-900 mb-2 font-heading">Chocolate Cookies</h3>
                            <p className="text-primary-600 mb-4">Indulge in rich, fudgy perfection with our premium chocolate selection.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-primary-600">12 varieties</span>
                                <a href="chocolate-cookies.html" className="text-secondary hover:text-primary-800 font-medium flex items-center">
                                    Explore
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Butter Cookies --> */}
                    <div className="category-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                                alt="Butter Cookies" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-accent text-white text-sm px-3 py-1 rounded-full">NEW</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary-900 mb-2 font-heading">Butter Cookies</h3>
                            <p className="text-primary-600 mb-4">Melt-in-your-mouth goodness made with premium butter and vanilla.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-primary-600">8 varieties</span>
                                <a href="butter-cookies.html" className="text-secondary hover:text-primary-800 font-medium flex items-center">
                                    Explore
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Vegan Cookies --> */}
                    <div className="category-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                                alt="Vegan Cookies" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary-900 mb-2 font-heading">Vegan Cookies</h3>
                            <p className="text-primary-600 mb-4">Plant-based delights that don't compromise on taste or texture.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-primary-600">10 varieties</span>
                                <a href="vegan-cookies.html" className="text-secondary hover:text-primary-800 font-medium flex items-center">
                                    Explore
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Gluten-Free Cookies --> */}
                    <div className="category-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                                alt="Gluten-Free Cookies" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary-900 mb-2 font-heading">Gluten-Free Cookies</h3>
                            <p className="text-primary-600 mb-4">Delicious options for those with gluten sensitivities or preferences.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-primary-600">7 varieties</span>
                                <a href="gluten-free-cookies.html" className="text-secondary hover:text-primary-800 font-medium flex items-center">
                                    Explore
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Holiday Cookies --> */}
                    <div className="category-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                                alt="Holiday Cookies" className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">SEASONAL</div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary-900 mb-2 font-heading">Holiday Cookies</h3>
                            <p className="text-primary-600 mb-4">Festive treats for special occasions and celebrations.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-primary-600">15 varieties</span>
                                <a href="holiday-cookies.html" className="text-secondary hover:text-primary-800 font-medium flex items-center">
                                    Explore
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Specialty Cookies --> */}
                    <div className="category-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="relative h-48 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80"
                                alt="Specialty Cookies" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary-900 mb-2 font-heading">Specialty Cookies</h3>
                            <p className="text-primary-600 mb-4">Unique and innovative creations for the adventurous cookie lover.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-primary-600">9 varieties</span>
                                <a href="specialty-cookies.html" className="text-secondary hover:text-primary-800 font-medium flex items-center">
                                    Explore
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Pagination --> */}
                <div className="flex justify-center mt-12">
                    <nav className="flex items-center space-x-2">
                        <a href="#" className="px-3 py-1 rounded-lg bg-primary-100 text-primary-800 font-medium">1</a>
                        <a href="#" className="px-3 py-1 rounded-lg hover:bg-primary-100 text-primary-800 font-medium">2</a>
                        <a href="#" className="px-3 py-1 rounded-lg hover:bg-primary-100 text-primary-800 font-medium">3</a>
                        <a href="#" className="px-3 py-1 rounded-lg hover:bg-primary-100 text-primary-800 font-medium">4</a>
                        <a href="#" className="px-3 py-1 rounded-lg hover:bg-primary-100 text-primary-800 font-medium">
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Category;
