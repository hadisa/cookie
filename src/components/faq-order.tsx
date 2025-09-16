import React, { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { FAQSectionProps } from "../contexts/types";
import { defaultFAQs } from "../dummyData/data";

const FAQOrder: React.FC<FAQSectionProps> = ({
  className = "",
  title = "Ordering Questions",
  description = "Common questions about placing an order with Cookie Delights.",
  faqs = defaultFAQs,
  contactLink = "/contact",
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section
      className={`py-12 md:py-16 bg-white dark:bg-gray-900 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-white mb-3 md:mb-4 font-heading">
            {title}
          </h2>
          <p className="text-primary-700 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            {description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
          {faqs.map((faq) => {
            const isOpen = openItems.has(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-primary-50 dark:bg-gray-800 rounded-xl p-4 md:p-6 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="flex justify-between items-center w-full text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                >
                  <h3 className="text-base md:text-lg font-semibold text-primary-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <ChevronUp
                      className="text-primary-600 dark:text-gray-400 flex-shrink-0"
                      size={20}
                    />
                  ) : (
                    <ChevronDown
                      className="text-primary-600 dark:text-gray-400 flex-shrink-0"
                      size={20}
                    />
                  )}
                </button>
                <div
                  id={`faq-content-${faq.id}`}
                  className={`mt-3 md:mt-4 text-primary-600 dark:text-gray-300 transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "opacity-100 max-h-96"
                      : "opacity-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a
            href={contactLink}
            className="inline-flex items-center text-secondary hover:text-primary-800 dark:hover:text-primary-400 font-medium transition-colors duration-200 text-sm md:text-base"
          >
            More Questions? Contact Us
            <ArrowRight className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQOrder;
