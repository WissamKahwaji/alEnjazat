export type AboutUsInfo = {
  title: string;
  brief: {
    title: string;
    description: string;
  };
  content: AboutUsContent[];
};

export type AboutUsContent = {
  title: string;
  description: string;
  img: string;
};
