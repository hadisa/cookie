
const Story = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4 font-heading">How It All Began</h2>
                    <p className="text-primary-700 max-w-2xl mx-auto">Our journey started with a simple family recipe and a dream to share our love for baking with the world.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="story-card bg-primary-50 rounded-2xl p-6">
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <span className="text-primary-700 text-2xl font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-4 font-heading">The Family Recipe</h3>
                        <p className="text-primary-600">It all began with Grandma Eleanor's secret chocolate chip cookie recipe, passed down through generations and perfected over time.</p>
                    </div>

                    <div className="story-card bg-primary-50 rounded-2xl p-6">
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <span className="text-primary-700 text-2xl font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-4 font-heading">First Bakery</h3>
                        <p className="text-primary-600">In 2010, we opened our first small bakery with just one oven and a dream. The community response was overwhelming from day one.</p>
                    </div>

                    <div className="story-card bg-primary-50 rounded-2xl p-6">
                        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <span className="text-primary-700 text-2xl font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-4 font-heading">Today & Beyond</h3>
                        <p className="text-primary-600">Today, we've grown to become a beloved local institution, but we still bake every cookie with the same love and care as we did on day one.</p>
                    </div>
                </div>

                <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6 font-heading">Our Philosophy</h2>
                        <p className="text-xl mb-6">"We believe that a great cookie can brighten anyone's day. That's why we never compromise on quality, always use the finest ingredients, and bake each batch with genuine care and attention."</p>
                        <div className="flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                                alt="Founder" className="w-16 h-16 rounded-full border-4 border-white mr-4" />
                            <div className="text-left">
                                <p className="font-semibold">Eleanor Baker</p>
                                <p className="text-secondary-200">Founder & Head Baker</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Story;
