import AboutHero from "../components/about-hero";
import Breadcrumbs from "../components/breadcrumb";
import Footer from "../components/footer";
import OurProcess from "../components/our-process";
import OurValues from "../components/our-values";
import Story from "../components/story";
import Team from "../components/team";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Breadcrumbs />
      <AboutHero />
      <Story />
      <OurValues />
      <OurProcess />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
