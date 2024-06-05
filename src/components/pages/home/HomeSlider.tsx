import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeSlider = () => {
  const sliderImages = [
    {
      id: "65bca4dd1256fdab99f69627",
      img: "https://i.imgur.com/iBs8FuO.jpeg",
      name: "Sobha One",
      location: "Dubai – Ras Al Khor Road",
      description:
        "Sobha One spreads its tapestry over five interlinked towers. Rising from 30 stories tall and hitting a crescendo of 65 stories, it’s one note after another that sings in chorus with the skyline.",
      price: "AED 20M",
    },
    {
      id: "65d0589f3cd97fbec9767f97",
      img: "https://i.imgur.com/VzbsU73.jpeg",
      name: "Sobha SeaHaven",
      location: "Dubai – Palm Jumeirah",
      description:
        "The limited-edition units, by invitation only, are a masterpiece of design with breathtaking ocean views that will take your breath away. Come home to your private haven. Indulge in the ultimate luxury of waterfront living.",
      price: "AED 21,000,000",
    },
    {
      id: "65d06c083cd97fbec9767f98",
      img: "https://i.imgur.com/YPbyFNs.jpeg",
      name: "Verde by Sobha",
      location: "Dubai Harbour",
      description:
        "Head home to Dubai’s most prestigious island, which is situated inside Dubai Harbour, the UAE’s newest marine hub. Emaar Beachfront is a beautifully constructed waterfront retreat that combines luxury coastal living with cosmopolitan living and a prominent location",
      price: "AED 2.97 M",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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

  const sliderRef = React.createRef<Slider>();

  const handlePrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  function SamplePrevArrow() {
    return (
      <div
        className="hidden lg:absolute lg:top-1/2 lg:left-10 lg:transform lg:-translate-y-1/2 lg:cursor-pointer"
        onClick={handlePrevSlide}
      >
        <span className="text-5xl text-white">&lt;</span>
      </div>
    );
  }

  function SampleNextArrow() {
    return (
      <div
        className="hidden lg:absolute lg:top-1/2 lg:right-10 lg:transform lg:-translate-y-1/2 lg:cursor-pointer"
        onClick={handleNextSlide}
      >
        <span className="text-5xl font-bold text-white">&gt;</span>
      </div>
    );
  }
  const navigate = useNavigate();
  return (
    <div className="w-full h-[540px] md:h-[740px] lg:h-[740px] xl:h-[740px] relative">
      <Slider {...settings} ref={sliderRef} className="w-full">
        {sliderImages.map((item, index) => (
          <div key={index} className="relative">
            <img
              src={item.img}
              alt={`Slider ${index + 1}`}
              className="w-full h-[540px] md:h-[740px] lg:h-[740px] xl:h-[740px] object-cover"
            />
            <div className=" h-auto w-full md:h-auto md:w-3/4   lg:h-auto lg:w-2/3 xl:h-auto xl:w-2/3 absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-layout/85 shadow-sm shadow-hoverColor bg-opacity-60 text-white py-8 px-5 ">
              <div className="h-full flex flex-col justify-between ">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl text-white font-header ">
                    {item.name}
                  </div>
                  <div className="md:ml-4 text-base md:text-xl lg:text-xl font-body text-white md:w-3/5">
                    {item.description}
                  </div>
                </div>
                <div className="flex flex-row items-center mt-4 md:mt-2">
                  <div className="w-full md:w-1/3 flex flex-row items-center">
                    <FaMapMarkerAlt className="text-2xl text-hoverColor " />
                    <p className="ml-2 text-xl lg:text-2xl text-white font-header ">
                      {item.location}
                    </p>
                  </div>
                  <div className="w-full md:w-2/3 flex flex-row ml-1 md:justify-end mt-2 md:mt-0 pr-4">
                    <button
                      className="px-2 sm:px-1 md:px-3 lg:px-5 py-1  bg-hoverColor border border-white rounded-lg hover:bg-white hover:text-hoverColor transition duration-300"
                      onClick={() => {
                        navigate(`/property-details/${item.id}`);
                      }}
                    >
                      <p className=" text-sm md:text-lg lg:text-2xl font-serif">
                        {item.price}
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
