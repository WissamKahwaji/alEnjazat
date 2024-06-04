import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils";

type PropertyProps = {
  id: string;
  image: string;
  name: string;
  price: number;
  location: string;
  description: string;

  linkTo: string;
};

const PropertyCard = (props: PropertyProps) => {
  return (
    <Link to={props.linkTo}>
      <div
        key={props.id}
        className="h-[430px] md:h-[615px] lg:h-[580px] bg-white shadow-md rounded-lg overflow-hidden   duration-300 ease-in-out transform hover:scale-105"
      >
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-40 lg:h-64 object-cover"
        />
        <div className="bg-primary  py-2 px-4 text-white font-body font-bold text-xl">
          {props.price > 0 ? `${formatPrice(props.price)} AED` : "Call Us"}
        </div>
        <div className="p-4 h-14  text-center">
          <h2 className="text-lg md:text-lg  md:h-28 lg:h-14 font-semibold font-header mb-1">
            {props.name}
          </h2>
          <div className="flex flex-row md:h-14 justify-center">
            <FaMapMarkerAlt className="text-lg md:text-lg text-hoverColor mr-2" />
            <p className="text-base md:text-base font-body text-subTitle mb-3">
              {props.location}
            </p>
          </div>
          <p className="h-14  overflow-hidden line-clamp-3 text-sm font-serif text-gray-600 mb-4 lg:mb-6">
            {props.description}
          </p>
          <div className="flex flex-col justify-between items-center">
            <hr className="w-full border-t border-gray-300 mb-3" />
            <button className="bg-subTitle w-full border border-white hover:border-subTitle hover:bg-primary text-white px-4 py-2 rounded-md text-sm transition-colors duration-300 ease-in-out">
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
