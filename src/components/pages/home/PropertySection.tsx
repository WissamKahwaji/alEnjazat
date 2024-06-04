import { useGetPropertiesInfoQuery } from "../../../apis/properties/query";
import PropertyCard from "../../../pages/property-page/PropertyCard";

const PropertySection = () => {
  const {
    data: propertyInfo,
    isError,
    isLoading,
  } = useGetPropertiesInfoQuery();

  if (isError) return <div>Error !!!!!</div>;
  if (isLoading) return <div>Loading........</div>;
  return (
    <div className="bg-background py-5">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-primary font-header mb-3">
          NEW DEVELOPMENTS
        </h1>
        <p className="text-hoverColor font-mono mb-8 text-lg md:text-lg lg:text-xl">
          COLLECTION OF BEST PROJECTS IN DUBAI
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24">
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
  );
};

export default PropertySection;
