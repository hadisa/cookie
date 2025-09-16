import Breadcrumbs from "../components/breadcrumb";
import ContactForm from "../components/contact-form";
import ContactHero from "../components/contact-hero";
import ContactMap from "../components/contact-map";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Breadcrumbs />
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contact;
