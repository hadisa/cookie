
const Team = () => {
    return (
        <section className="py-16 bg-primary-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4 font-heading dark:text-white">Meet Our Team</h2>
                    <p className="text-primary-700 max-w-2xl mx-auto dark:text-gray-300">The talented bakers and staff who make Cookie Delights special.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="team-member bg-white rounded-2xl overflow-hidden shadow-md text-center">
                        <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Head Baker" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary-900 mb-2 font-heading">Eleanor Baker</h3>
                            <p className="text-secondary mb-4">Founder & Head Baker</p>
                            <p className="text-primary-600 text-sm">With over 30 years of baking experience, Eleanor ensures every cookie meets her exacting standards.</p>
                        </div>
                    </div>

                    <div className="team-member bg-white rounded-2xl overflow-hidden shadow-md text-center">
                        <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Pastry Chef" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary-900 mb-2 font-heading">Michael Roberts</h3>
                            <p className="text-secondary mb-4">Pastry Chef</p>
                            <p className="text-primary-600 text-sm">Michael brings innovation to our recipes while respecting traditional baking techniques.</p>
                        </div>
                    </div>

                    <div className="team-member bg-white rounded-2xl overflow-hidden shadow-md text-center">
                        <img src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            alt="Head of Operations" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary-900 mb-2 font-heading">Sarah Johnson</h3>
                            <p className="text-secondary mb-4">Head of Operations</p>
                            <p className="text-primary-600 text-sm">Sarah keeps our bakery running smoothly and ensures every customer has a wonderful experience.</p>
                        </div>
                    </div>

                    <div className="team-member bg-white rounded-2xl overflow-hidden shadow-md text-center">
                        <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                            alt="Marketing Manager" className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary-900 mb-2 font-heading">Jessica Lee</h3>
                            <p className="text-secondary mb-4">Marketing Manager</p>
                            <p className="text-primary-600 text-sm">Jessica spreads the word about our cookies and manages our community outreach programs.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href="contact.html" className="inline-flex items-center text-secondary hover:text-primary-800 font-medium">
                        Join Our Team
                        <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Team;
