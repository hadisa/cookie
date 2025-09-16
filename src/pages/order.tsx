import Breadcrumbs from "../components/breadcrumb";
import FAQOrder from "../components/faq-order";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import OrderProcess from "../components/order-process";
import PagesHero from "../components/pages-hero";
import WhyOrderFromUs from "../components/promotional";
import { HeroData } from "../dummyData/data";

const OrderPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Breadcrumbs />
      <PagesHero
        title={HeroData.Order.title}
        subtitle={HeroData.Order.subtitle}
      />
      <OrderProcess />
      <WhyOrderFromUs />
      <FAQOrder />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default OrderPage;
