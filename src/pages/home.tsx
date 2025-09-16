import FeaturedProducts from "../components/featured-products";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import Newsletter from "../components/newsletter";
import Products from "../components/products";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
