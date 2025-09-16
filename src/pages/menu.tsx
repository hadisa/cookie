import Breadcrumbs from "../components/breadcrumb";
import CookieBoxBuilder from "../components/cookie-box-builder";
import CookieMenu from "../components/cookie-menu";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import PagesHero from "../components/pages-hero";
import { HeroData } from "../dummyData/data";

const MenuPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Breadcrumbs />
      <PagesHero title={HeroData.Menu.title} subtitle={HeroData.Menu.subtitle} />
      <CookieMenu />
      <CookieBoxBuilder />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default MenuPage;
