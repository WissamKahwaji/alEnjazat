type HeaderSectionProps = {
  img: string;
  title: string;
  description: string;
  top?: string;
  bottom?: string;
};

const HeaderSection = (props: HeaderSectionProps) => {
  return (
    <div className="relative w-full">
      <div className="relative">
        <img
          className="object-cover w-full h-96 md:h-3/4 lg:h-screen"
          src={props.img}
          alt=""
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div
        className={`absolute ${props.top} ${props.bottom} left-0 right-0 flex flex-col items-center justify-center`}
      >
        <p className="text-3xl md:text-5xl text-white font-header mb-8 text-center px-4">
          {props.title}
        </p>
        <p className="max-w-3xl overflow-y-auto lg:overflow-y-hidden text-center text-white font-body mb-3 text-sm md:text-lg lg:text-xl px-4">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default HeaderSection;
