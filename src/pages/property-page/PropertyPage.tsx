import { motion } from "framer-motion";
import HeaderSection from "../../components/pages/property-page/HeaderSection";
import PropertyCard from "./PropertyCard";
import { useGetPropertiesInfoQuery } from "../../apis/properties/query";
const PropertyPage = () => {
  const {
    data: propertyInfo,
    isError,
    isLoading,
  } = useGetPropertiesInfoQuery();

  if (isError) return <div></div>;
  if (isLoading) return <div>Loading........</div>;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderSection
        img="https://eternallycreative.com/wp-content/uploads/2016/01/Dubai-from-the-Sky.jpg"
        title="OUR PROPERTIES"
        description="Discover a haven of luxury and community at Al Azm Real Estate Properties, where
  meticulous design and lush greenery redefine urban living."
        bottom="bottom-0"
        top="top-0"
      />
      <div className="  mt-10  flex flex-col items-center justify-center">
        <p className="text-lg md:text-3xl lg:text-3xl text-hoverColor font-header mb-8">
          DISCOVER A PREMIUM LIFESTYLE
        </p>
        {/* <FilterBox /> */}
      </div>
      <div className="bg-background">
        <div className="mx-8 md:mx-16 lg:mx-24 flex flex-col ">
          {/* <p className="mb-10 mt-10 font-header font-semibold text-hoverColor text-3xl">
            UAE Properties
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8  my-10 ">
            {propertyInfo &&
              propertyInfo.map(property => (
                <PropertyCard
                  key={property._id}
                  id={property._id}
                  name={property.name}
                  image={property.img}
                  location={property.location}
                  description={property.description}
                  price={property.price}
                  linkTo={`/property-details/${property._id}`}
                />
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyPage;
