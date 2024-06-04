import React, { ReactNode } from "react";

interface IconWithTextProps {
  phoneNumber: string;
  icon: ReactNode;
}

const IconWithText: React.FC<IconWithTextProps> = ({ phoneNumber, icon }) => {
  return (
    <div className="flex flex-row items-start ">
      {icon}
      <span className="ml-4 text-lg font-body text-white">{phoneNumber}</span>
    </div>
  );
};

export default IconWithText;
