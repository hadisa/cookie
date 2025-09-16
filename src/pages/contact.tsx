import Breadcrumbs from "../components/breadcrumb";
import ContactForm from "../components/contact-form";
import ContactMap from "../components/contact-map";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import PagesHero from "../components/pages-hero";
import { HeroData } from "../dummyData/data";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Breadcrumbs />
      <PagesHero title={HeroData.Contact.title} subtitle={HeroData.Contact.subtitle} />
      <ContactForm />
      <ContactMap />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contact;
