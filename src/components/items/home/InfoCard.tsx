import React from "react";

interface InfoCardProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonOnClick: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonOnClick,
}) => {
  return (
    <div className="absolute w-3/4 right-2 top-1/4 lg:w-1/2 md:w-1/2 z-10 lg:-right-1/4 lg:top-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 text-center text-white">
      <div className="bg-background px-2 py-2 lg:px-10 lg:py-10 shadow-md flex flex-col justify-start items-start transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold mb-2 text-subTitle text-gray-700">
          {title}
        </h2>
        <h3 className="font-header text-primary text-sm md:text-2xl lg:text-4xl mb-1 md:mb-3 lg:mb-4">
          {subtitle}
        </h3>
        <p className="text-gray-700 my-2 md:my-4 text-xs md:text-sm lg:text-base text-start">
          {description}
        </p>
        <button
          className="bg-subTitle text-white px-6 md:px-10 py-2 md:py-3 rounded-md text-xs md:text-sm lg:text-base transition-all duration-300 ease-in-out transform hover:bg-primary hover:scale-110"
          onClick={buttonOnClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
