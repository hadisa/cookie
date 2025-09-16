import { ArrowRight, ChevronDown } from 'lucide-react';
import React from 'react';

const FAQ = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary-900 mb-4 font-heading dark:text-white">Frequently Asked Questions</h2>
                    <p className="text-primary-700 max-w-2xl mx-auto dark:text-gray-300">Find quick answers to common questions about our cookies, ordering process, and more.</p>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="bg-white rounded-xl shadow-md p-6 dark:bg-gray-800">
                        <button className="flex justify-between items-center w-full text-left">
                            <h3 className="text-lg font-semibold text-primary-900 dark:text-white">Do you offer gluten-free or vegan options?</h3>
                            <ChevronDown className="text-primary-600" />
                        </button>
                        <div className="mt-4 text-primary-600 dark:text-gray-300">
                            <p>Yes! We have a dedicated selection of gluten-free and vegan cookies. All are prepared in separate areas to avoid cross-contamination. Look for the special labels on our menu or ask our staff for recommendations.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 dark:bg-gray-800">
                        <button className="flex justify-between items-center w-full text-left">
                            <h3 className="text-lg font-semibold text-primary-900 dark:text-white">How far in advance should I place a large order?</h3>
                            <ChevronDown className="text-primary-600" />

                        </button>
                        <div className="mt-4 text-primary-600 hidden dark:text-gray-300">
                            <p>For orders of 5 dozen cookies or more, we recommend placing your order at least 48 hours in advance. For very large orders (20+ dozen) or custom designs, please give us at least one week's notice to ensure we can accommodate your request.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 dark:bg-gray-800">
                        <button className="flex justify-between items-center w-full text-left">
                            <h3 className="text-lg font-semibold text-primary-900 dark:text-white">Do you ship cookies nationwide?</h3>
                            <ChevronDown className="text-primary-600" />
                        </button>
                        <div className="mt-4 text-primary-600 hidden dark:text-gray-300">
                            <p>Yes, we ship across the United States! Our cookies are carefully packaged in special boxes to ensure they arrive fresh and intact. Shipping typically takes 2-3 business days. Unfortunately, we do not currently offer international shipping.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 dark:bg-gray-800">
                        <button className="flex justify-between items-center w-full text-left">
                            <h3 className="text-lg font-semibold text-primary-900 dark:text-white">Can I customize a cookie assortment for a special event?</h3>
                            <ChevronDown className="text-primary-600" />
                        </button>
                        <div className="mt-4 text-primary-600 hidden dark:text-gray-300">
                            <p>Absolutely! We love helping customers create custom assortments for weddings, corporate events, birthdays, and other special occasions. Contact us with your event details, and we'll work with you to create the perfect cookie selection.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12 dark:text-gray-300">
                    <a href="faq.html" className="inline-flex items-center text-secondary hover:text-primary-800 font-medium">
                        View All FAQs
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
