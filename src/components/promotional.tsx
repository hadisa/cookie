import React from 'react';
import { Truck, Award, Cookie, LucideIcon } from 'lucide-react';
import { defaultFeatures } from '../dummyData/data';
import { Feature, FeatureCardProps, WhyOrderFromUsProps } from '../contexts/types';

// Type definitions



// Animation variants for framer-motion (optional)
const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const WhyOrderFromUs: React.FC<WhyOrderFromUsProps> = ({
    className = '',
    features = defaultFeatures
}) => {
    return (
        <section className={`py-16 bg-primary-50 dark:bg-gray-900 ${className}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary-900 dark:text-white mb-4 font-heading">
                        Why Order From Us?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                            index={index}

                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Separate FeatureCard component for better reusability


const FeatureCard: React.FC<FeatureCardProps> = ({
    feature,
    index,
    variants,
    initial,
    whileInView,
    viewport
}) => {
    const IconComponent = feature.icon;

    return (
        <div
            className="group bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"

        >
            <div className={`${feature.bgColor} dark:bg-primary-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className={`${feature.iconColor} dark:text-primary-300 text-2xl`} size={24} />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-4 font-heading">
                {feature.title}
            </h3>
            <p className="text-primary-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
            </p>
        </div>
    );
};



export default WhyOrderFromUs;