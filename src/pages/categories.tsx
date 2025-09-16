import Breadcrumbs from "../components/breadcrumb";
import Category from "../components/category";
import CategoryHero from "../components/category-hero";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import SpecialOffers from "../components/special-offers";

const Categories = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Breadcrumbs />
      <CategoryHero />
      <Category />
      <SpecialOffers />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Categories;
