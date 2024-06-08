import React, { useState } from "react";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import IconWithText from "../../ui/IconWithText";
import { useGetContactUsInfo } from "../../../apis/contact-us/query";
import logo from "../../../assets/logo.png";

const ContactFooter = () => {
  const { data: contactUsInfo } = useGetContactUsInfo();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // try {
    //   const response = await fetch(`${baseUrl}/contact/send-email`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name: formData.firstName + " " + formData.lastName,
    //       email: formData.email,
    //       phone: formData.phone,
    //       message: formData.message,
    //     }),
    //   });

    //   if (response.ok) {
    //     console.log("Email sent successfully");
    //     alert("Your Enquery sent successfully!");
    //   } else {
    //     console.error("Failed to send email");
    //     alert("Failed to send request. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Error sending email:", error);
    //   alert("Failed to send request. Please try again.");
    // }
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "REGISTER YOUR INTEREST",
    });
  };
  return (
    <div className="relative w-full h-[500px] md:h-[500px]  overflow-hidden">
      {/* <img
        src="https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/OV7G27MUUVAJTPPBZNLL2Y3FXQ.jpg"
        alt="Background"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      /> */}

      <img
        src="https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/OV7G27MUUVAJTPPBZNLL2Y3FXQ.jpg"
        alt="Background"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-80 bg-gray-500  z-1"></div>
      <div className="absolute top-0 left-0 w-full h-full z-1 flex flex-col items-center justify-center">
        <a href="/">
          <img
            src={logo}
            alt=""
            className="h-auto w-20 sm:h-auto sm:w-64 md:h-auto md:w-64 lg:h-32 lg:w-32 object-cover mb-3 lg:mb-10 md:mb-14"
          />
          {/* <p className="h-auto text-4xl w-44 sm:h-auto sm:w-64 md:h-auto md:w-64 lg:h-auto lg:w-64 object-cover mb-3 lg:mb-10 md:mb-14">
            Logo
          </p> */}
        </a>
        <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start lg:items-start w-full max-w-6xl mx-auto  px-4 md:px-3">
          <div className="flex flex-col justify-between  h-full mb-8 md:mb-0 md:w-1/2 md:mr-2">
            <p className="font-header font-bold text-lg sm:text-lg md:text-4xl lg:text-5xl text-white mb-4 text-center md:text-left">
              REGISTER YOUR INTEREST
            </p>

            <div
              className="flex flex-row items-start cursor-pointer"
              onClick={() => {
                window.location.href = `mailto:${contactUsInfo?.content.email}`;
              }}
            >
              <FaEnvelope className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 mb-4 md:mb-8 text-primary" />
              <span className="ml-4 text-sm lg:text-lg font-body text-white">
                {contactUsInfo?.content.email}
              </span>
            </div>

            {/* <IconWithText
              icon={
                <FaPhoneAlt className="w-6 h-6 mb-4 md:mb-8 text-subTitle" />
              }
              phoneNumber={contactUsInfo?.content.mobileOne ?? ""}
            /> */}
            <div
              className="flex flex-row items-start cursor-pointer"
              onClick={() => {
                window.location.href = `tel:${contactUsInfo?.content.mobileOne}`;
              }}
            >
              <FaPhoneAlt className="w-4 h-4 md:w-6 md:h-6 lg:w-6 lg:h-6 mb-4 md:mb-8 text-primary" />
              <span className="ml-4 text-sm lg:text-lg font-body text-white">
                {contactUsInfo?.content.mobileOne}
              </span>
            </div>
            <IconWithText
              icon={
                <FaMapMarkerAlt className="w-6 h-6 mb-4 md:mb-8 text-primary" />
              }
              phoneNumber={contactUsInfo?.content.location ?? ""}
            />
          </div>

          <div className="flex flex-col md:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-flow-row grid-cols-2 justify-start items-start gap-3">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="text-gray-500 rounded-md w-full h-10 md:h-16 p-4 mb-2 focus:border-hoverColor"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="text-gray-500 rounded-md w-full h-10 md:h-16 p-4 mb-2 focus:border-hoverColor"
                  placeholder="Last Name"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="text-gray-500 rounded-md h-10 md:h-16 w-full p-4 mb-2 focus:border-hoverColor"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  className="text-gray-500 rounded-md h-10 md:h-16 w-full p-4 mb-2 focus:border-hoverColor"
                  placeholder="Phone Number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-center mt-4">
                <button className="p-2 w-1/2 rounded-md bg-hoverColor text-white hover:bg-white hover:text-hoverColor">
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
