type BackgroundImageProps = {
  url: string;
  minHeight: string;
};

const BackgroundImage = (props: BackgroundImageProps) => {
  return (
    <div
      className={`w-full bg-contain bg-no-repeat md:bg-cover  md:bg-fixed ${props.minHeight}`}
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    ></div>
  );
};

export default BackgroundImage;
