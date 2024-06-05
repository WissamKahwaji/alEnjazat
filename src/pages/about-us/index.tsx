import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// import BackgroundImage from "../../components/pages/about-us/BackgroundImage";
import AboutContentItem from "../../components/pages/about-us/AboutContentItem";
import FirstSection from "../../components/pages/about-us/FirstSection";
import { useGetAboutUsInfoQuery } from "../../apis/about-us/query";
const AboutUs = () => {
  const navigate = useNavigate();
  const { data: aboutUsInfo, isLoading, isError } = useGetAboutUsInfoQuery();

  if (isError) return <div>Error Fetching data</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="flex w-full h-20 md:h-32 lg:h-32 bg-primary">
          <h1 className="text-2xl lg:text-5xl font-header text-white text-center  my-auto mx-auto">
            About Us
          </h1>
        </div>
        <FirstSection
          subTitle={aboutUsInfo?.brief.title ?? ""}
          title="WHO WE ARE ?"
          description={aboutUsInfo?.brief.description ?? ""}
          buttonOnClick={() => {
            navigate("/contacts");
          }}
        />

        <div>
          {aboutUsInfo?.content.map((content, index) => (
            <AboutContentItem
              key={index}
              title={content.title}
              // subtitle="SETTING NEW INDUSTRY STANDARDS"
              description={content.description}
              img={content.img}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>

        <div
          className={`hidden md:flex w-full bg-no-repeat bg-cover  bg-fixed min-h-[300px] md:min-h-[700px]`}
          style={{
            backgroundImage: `url(https://fnst.axflare.com/blog/img/WEBP/pqzMaDQlhw.webp)`,
          }}
        ></div>

        {/* <BackgroundImage
          minHeight={"min-h-[300px] md:min-h-[700px]"}
          url="https://fnst.axflare.com/blog/img/WEBP/pqzMaDQlhw.webp"
        /> */}
      </div>
    </motion.div>
  );
};

export default AboutUs;
