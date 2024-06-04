import { useNavigate } from "react-router-dom";
import InfoCard from "../../items/home/InfoCard";

type Props = {
  breif?: {
    title: string;
    description: string;
  };
};
const BreifSection = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-start bg-seconBackground pb-20 pt-10 min-h-[450px] md:h-auto lg:h-screen">
      <div className="relative flex items-center mx-2">
        <img
          src="https://cdn-imgix.headout.com/tour/27397/TOUR-IMAGE/e0afc13e-14ff-4919-8606-dfc19380f1e9-5alex-block-YaEfT8nJbDM-unsplash.jpg?auto=compress&fm=webp&w=1200&h=750&crop=faces&fit=min"
          alt=""
          className="  w-full  h-auto  md:w-3/4 md:h-auto lg:w-3/4 lg:h-auto object-cover"
        />
        <InfoCard
          title="WHO WE ARE ?"
          subtitle={props.breif?.title ?? ""}
          description={props.breif?.description ?? ""}
          buttonText="Get In Touch"
          buttonOnClick={() => {
            navigate("/contacts");
          }}
        />
      </div>
    </div>
  );
};

export default BreifSection;
