import { Blend, Check, Clapperboard, Flame } from "lucide-react";

const OurProcess = () => {
    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4 font-heading dark:text-white">Our Baking Process</h2>
                    <p className="text-primary-700 max-w-2xl mx-auto dark:text-gray-300">Every cookie goes through a careful process to ensure perfection in every bite.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="process-step text-center">
                        <div className="bg-primary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Clapperboard className="text-primary-700 text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-4 font-heading dark:text-white">1. Select</h3>
                        <p className="text-primary-600 dark:text-gray-300">We carefully source the finest ingredients from trusted suppliers.</p>
                    </div>

                    <div className="process-step text-center">
                        <div className="bg-primary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Blend className="text-primary-700 text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-4 font-heading dark:text-white">2. Prepare</h3>
                        <p className="text-primary-600 dark:text-gray-300">Our bakers mix ingredients with precision, following time-tested recipes.</p>
                    </div>

                    <div className="process-step text-center">
                        <div className="bg-primary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Flame className="text-primary-700 text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-4 font-heading dark:text-white">3. Bake</h3>
                        <p className="text-primary-600 dark:text-gray-300">Each batch is baked at the perfect temperature for ideal texture and flavor.</p>
                    </div>

                    <div className="process-step text-center">
                        <div className="bg-primary-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="text-primary-700 text-3xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-4 font-heading dark:text-white">4. Quality Check</h3>
                        <p className="text-primary-600 dark:text-gray-300">Every cookie is inspected before packaging to ensure it meets our standards.</p>
                    </div>
                </div>

                <div className="mt-16 bg-primary-900 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4 font-heading dark:text-white">Freshly Baked Daily</h3>
                    <p className="mb-6 dark:text-gray-300">We bake in small batches throughout the day to ensure you always get cookies at their peak freshness.</p>
                    <a href="categories.html" className="inline-block bg-secondary hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Explore Our Cookies
                    </a>
                </div>
            </div>
        </section>
    );
}

export default OurProcess;
