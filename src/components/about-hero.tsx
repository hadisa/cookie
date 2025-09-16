
const AboutHero = () => {
    return (
        <section className="hero-pattern py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 font-heading dark:text-white">Our Story of Passion & Pastry</h1>
                        <p className="text-lg text-primary-700 mb-8 dark:text-gray-300">Since 2010, we've been crafting exceptional cookies that bring joy to every bite. What started as a small family bakery has grown into a beloved community institution, but our commitment to quality and craftsmanship remains unchanged.</p>
                        <div className="flex space-x-4">
                            <div className="bg-white rounded-lg p-4 text-center shadow-md">
                                <span className="block text-3xl font-bold text-secondary">13+</span>
                                <span className="text-primary-600 dark:text-gray-300">Years of Experience</span>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-md">
                                <span className="block text-3xl font-bold text-secondary">50+</span>
                                <span className="text-primary-600 dark:text-gray-300">Cookie Varieties</span>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-md">
                                <span className="block text-3xl font-bold text-secondary">10k+</span>
                                <span className="text-primary-600 dark:text-gray-300">Happy Customers</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1599785209793-81ef42c37e40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Baker preparing cookies" className="rounded-2xl shadow-xl w-full max-w-md" />
                            <div className="absolute -bottom-4 -right-4 bg-secondary text-white p-4 rounded-lg shadow-lg">
                                <p className="text-sm">Family owned & operated since</p>
                                <p className="text-2xl font-bold dark:text-gray-300">2010</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHero;
