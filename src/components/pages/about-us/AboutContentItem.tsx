type AboutContentProps = {
  title: string;
  subtitle?: string;
  description: string;
  img: string;
  reverse: boolean;
};

const AboutContentItem = (props: AboutContentProps) => {
  const reverseLayout = props.reverse ? "md:order-2 lg:order-2" : "";
  const bgColor = props.reverse ? "bg-background" : "bg-seconBackground";

  return (
    <div
      className={`grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full `}
    >
      <div
        className={`flex flex-col  ${bgColor} ${reverseLayout} py-3 md:py-0 lg:py-0`}
      >
        <div className="mx-2 md:mx-4 md:my-auto lg:mx-20  lg:my-auto">
          <div className="mb-2 lg:mb-10">
            {props.subtitle && (
              <h2 className="text-sm md:text-lg  mb-0 lg:mb-2 lg:text-2xl font-mono text-primary font-semibold">
                {props.subtitle}
              </h2>
            )}
            <h1 className="text-2xl lg:text-5xl text-subTitle font-header">
              {props.title}
            </h1>
          </div>
          <p className="text-sm lg:text-lg font-body whitespace-pre-wrap">
            {props.description}
          </p>
        </div>
      </div>
      <div>
        <img src={props.img} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default AboutContentItem;
