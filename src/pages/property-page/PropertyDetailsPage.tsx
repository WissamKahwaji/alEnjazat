import { motion } from "framer-motion";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { LiaAngleDoubleRightSolid } from "react-icons/lia";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeaderSection from "../../components/pages/property-page/HeaderSection";
import { useGetPropertiesInfoByIdQuery } from "../../apis/properties/query";
import { useParams } from "react-router-dom";
import { IdParams } from "./type";

const PropertyDetailsPage = () => {
  const { id } = useParams<IdParams>();
  const {
    data: property,
    isError,
    isLoading,
  } = useGetPropertiesInfoByIdQuery(id);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const PROPERTY_TYPE_CAROUSAL_RESPONSIVE = {
    xxl: {
      breakpoint: { max: 5000, min: 1536 },
      items: 1,
    },
    xl: {
      breakpoint: { max: 1536, min: 1280 },
      items: 1,
    },
    lg: {
      breakpoint: { max: 1280, min: 1024 },
      items: 1,
    },
    md: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    sm: {
      breakpoint: { max: 768, min: 640 },
      items: 1,
    },
    xs: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  if (isError) return <div>Error !!!</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderSection
        img={property?.coverImg ?? ""}
        title={property?.name ?? ""}
        description={property?.bio ?? ""}
        bottom="bottom-0"
        top="top-40"
      />
      <div className="bg-primary py-8">
        <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row lg:justify-center space-y-6 md:space-y-0 md:space-x-16">
          {property?.breifDetails.map((item, index) => (
            <div
              key={index}
              className="lg:border-r-2 border-layout flex flex-col py-6 md:pr-16 justify-center items-center"
            >
              <p className="text-seconBackground font-bold font-header text-lg mb-2">
                {item.title}
              </p>
              <p className="text-hoverColor font-body text-lg text-center md:text-left">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-seconBackground py-10 px-6 md:px-12 lg:px-32">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl text-hoverColor font-header uppercase mb-6 md:mb-10">
            about this property
          </h1>
          <p className="text-subTitle text-start font-header text-lg md:text-xl lg:text-2xl whitespace-pre-wrap">
            {property?.description}
          </p>
        </div>
      </div>
      {property?.paymentPlan && (
        <div className="bg-primary py-6 md:py-10 px-6 md:px-12 lg:px-32">
          <div className="text-center mb-6 md:mb-12">
            <h1 className="text-3xl md:text-5xl text-hoverColor  font-header uppercase mb-6 md:mb-10">
              payment plan
            </h1>
            <p className="text-subTitle font-header text-start text-lg md:text-xl lg:text-2xl whitespace-pre-wrap">
              {property.paymentPlan}
            </p>
          </div>
        </div>
      )}
      {property?.floorPlan && (
        <div className="bg-background py-6 md:py-10 px-6 md:px-12 lg:px-32">
          <div className="text-center mb-6 md:mb-12">
            <h1 className="text-3xl md:text-5xl text-hoverColor  font-header uppercase mb-6 md:mb-10">
              floor plan
            </h1>
            <p className="text-primary font-header text-start text-lg md:text-xl lg:text-2xl whitespace-pre-wrap">
              {property.floorPlan}
            </p>
          </div>
        </div>
      )}
      {property?.masterPlan && (
        <div className="bg-gray-300 py-6 md:py-10 px-6 md:px-12 lg:px-32">
          <div className="text-center mb-6 md:mb-12">
            <h1 className="text-3xl md:text-5xl text-hoverColor  font-header uppercase mb-6 md:mb-10">
              master plan
            </h1>
            <p className="text-subTitle font-header text-start text-lg md:text-xl lg:text-2xl whitespace-pre-wrap">
              {property.masterPlan}
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-flow-row md:grid-cols-2 mx-4 md:mx-20 mb-48 md:mb-20 ">
        <div className="flex flex-col justify-start md:p-14 py-14">
          <p className="capitalize font-header text-3xl text-hoverColor font-semibold  md:mb-0">
            Location Details
          </p>
          <div className="bg-gray-100 p-1 mt-7">
            <p className="text-subTitle font-body mt-3">
              {property?.locationDetails}
            </p>
          </div>
        </div>
        {property?.connectivity && (
          <div className="flex flex-col justify-start md:p-14">
            <p className="capitalize font-header text-3xl text-hoverColor font-semibold  md:mb-0">
              connectivity
            </p>
            <div className="mt-7 space-y-4 md:space-y-0 md:flex md:flex-col">
              {property?.connectivity.map((location, index) => (
                <div
                  key={index}
                  className="flex flex-row space-x-2 md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center"
                >
                  <div className="bg-gray-100 p-3 py-3 my-1 flex items-center">
                    <p className="text-hoverColor text-sm md:text-base font-body font-semibold">
                      {location.value}
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 py-3 my-1 flex items-center w-3/5">
                    <p className="text-subTitle font-body text-sm md:text-base font-semibold">
                      {location.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-full h-auto md:h-[540px] lg:h-[540px] xl:h-[640px]   mb-12 ">
        <Slider {...settings} className="w-full h-full">
          {property?.gallery &&
            property.gallery.map((img, index) => (
              <img
                src={img}
                alt={`Slider ${index + 1}`}
                className="w-full h-auto md:h-[540px] lg:h-[540px] xl:h-[640px] object-contain"
              />
            ))}
        </Slider>
      </div>
      <div className="w-full py-10">
        {property?.propertyContent &&
          property?.propertyContent.map((content, index) => (
            <div key={index} className="flex flex-col items-center mb-20">
              <h1 className="text-3xl md:text-3xl text-hoverColor font-header mb-8">
                {"Features & Amenities"}
              </h1>
              <h1 className="text-base md:text-lg whitespace-pre-wrap text-subTitle font-body mb-8 w-3/4">
                {content.description}
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mx-4 md:mx-20">
                {/* Carousel */}
                <Carousel
                  infinite
                  autoPlay
                  removeArrowOnDeviceType={"xs"}
                  responsive={PROPERTY_TYPE_CAROUSAL_RESPONSIVE}
                  className="w-full h-64 md:h-auto"
                >
                  {content.imgs.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`  ${imgIndex}`}
                      className="object-cover w-full h-full"
                    />
                  ))}
                </Carousel>
                {/* Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10">
                  {content.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center h-fit p-3 my-2 border border-gray-400 rounded transform hover:scale-105 duration-300 ease-in-out"
                    >
                      {/* <img
                        src={detail.icon}
                        alt={`Icon ${detailIndex}`}
                        className="w-9 h-9 mr-3"
                      /> */}
                      <LiaAngleDoubleRightSolid className="w-6 h-6 mr-3 text-hoverColor" />
                      <p className="text-sm font-body font-thin">
                        {detail.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </motion.div>
  );
};

export default PropertyDetailsPage;
