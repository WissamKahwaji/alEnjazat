import { motion } from "framer-motion";
import BackgroundImage from "../../components/pages/about-us/BackgroundImage";
import AboutContentItem from "../../components/pages/about-us/AboutContentItem";
import ContactFooter from "../../components/pages/home/ContactFooter";
import HomeSlider from "../../components/pages/home/HomeSlider";
import BreifSection from "../../components/pages/home/BreifSection";
import PropertySection from "../../components/pages/home/PropertySection";
import { useGetAboutUsInfoQuery } from "../../apis/about-us/query";
const Home = () => {
  const { data: aboutUsInfo, isError, isLoading } = useGetAboutUsInfoQuery();

  if (isError) return <div></div>;
  if (isLoading) return <div>Loading.....</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomeSlider />
      <BreifSection breif={aboutUsInfo?.brief} />
      <AboutContentItem
        key={1}
        title={aboutUsInfo?.content[1].title ?? ""}
        subtitle="PROVIDING EXCELLENCE & PROFESSIONALISM"
        description={aboutUsInfo?.content[1].description ?? ""}
        img={aboutUsInfo?.content[1].img ?? ""}
        reverse={true}
      />

      <PropertySection />
      {/* <BackgroundImage
        minHeight={"min-h-[300px] md:min-h-[700px]"}
        url="https://i.imgur.com/B3cgZWd.png"
      /> */}

      <BackgroundImage
        minHeight={"min-h-[300px] md:min-h-[700px]"}
        url="https://i.imgur.com/WoGd4uU.jpeg"
      />
      <ContactFooter />
    </motion.div>
  );
};

export default Home;
