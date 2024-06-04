import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// import baseUrl from "../../constants/domain";
import { useGetContactUsInfo } from "../../apis/contact-us/query";
import { useGetPropertiesInfoQuery } from "../../apis/properties/query";
import logo from "../../assets/logo.png";

const Footer = () => {
  const { data: contactUsInfo } = useGetContactUsInfo();
  const { data: propertyInfo } = useGetPropertiesInfoQuery();
  const [formData, setFormData] = useState({
    name: "",
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
    try {
      //   const response = await fetch(`${baseUrl}/contact/send-email`, {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(formData),
      //   });
      //   if (response.ok) {
      //     console.log("Email sent successfully");
      //     alert("Your Enquery sent successfully!");
      //   } else {
      //     console.error("Failed to send email");
      //     alert("Failed to send request. Please try again.");
      //   }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send request. Please try again.");
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <footer className="bg-hoverColor border-t-2 border-subTitle text-gray-200">
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 md:gap-2">
          <div className="mb-8 flex flex-col md:justify-start justify-center w-full items-start md:items-start ">
            <a href="/">
              <img
                src={logo}
                alt=""
                className="w-36 lg:w-32 mb-4 object-cover"
              />
            </a>
            {/* <h4 className="text-base md:text-xl lg:text-xl pb-3">
              VALOREM REAL ESTATE BROKERS
            </h4> */}
            <p className="text-gray-200 text-sm md:text-base">
              UAE, Dubai Business Bay
              <br />
              <div
                className="cursor-pointer mt-2"
                onClick={() => {
                  window.location.href = `tel:${contactUsInfo?.content.mobileOne}`;
                }}
              >
                <strong>Phone : </strong>
                {contactUsInfo?.content.phoneNumber}
              </div>
              {/* <br /> */}
              <div
                className="cursor-pointer mt-2"
                onClick={() => {
                  window.location.href = `mailto:${contactUsInfo?.content.email}`;
                }}
              >
                <strong>Email : </strong>
                {contactUsInfo?.content.email}
              </div>
            </p>
          </div>

          <div className="mb-8">
            <h4 className="pb-3 text-xl font-bold">Useful Links</h4>
            <ul>
              <li className="pb-3">
                <Link to="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/properties" className="hover:text-primary">
                  Properties
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li className="pb-3">
                <Link to="/about-us" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li className="pb-3">
                <Link
                  to="/contact-us"
                  className="hover:text-primary capitalize"
                >
                  contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <Link to="/properties">
              <h4 className="pb-3 text-xl font-bold">Properties</h4>
            </Link>
            <ul>
              {propertyInfo?.slice(0, 6)?.map((property, index) => (
                <li key={index} className="pb-3">
                  <Link
                    to={`/property-details/${property._id}`}
                    className="hover:text-primary font-body"
                  >
                    {property.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="pb-3 text-xl font-bold">Join Our Team</h4>
            <p className="text-gray-500 pb-2">
              Join Our Al-Hobob Team, send your message
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col items-start">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-gray-500 w-full p-2 mb-2 focus:border-hoverColor"
                placeholder="Enter your email"
                required
              />

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="text-gray-500 w-full p-2 mb-2 focus:border-hoverColor h-20"
                placeholder="Your message"
                required
              />
              <button className="p-2 w-full bg-subTitle text-white hover:bg-layout hover:text-black transform ease-in-out duration-300 rounded-md  ">
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-500 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-2 sm:mb-0">
            <div>
              Copyright{" "}
              <strong>
                <span>Al-Hobob</span>
              </strong>{" "}
              company. All Rights Reserved
            </div>
            <div className=" text-sm">
              Powered By
              <a href="/" className="text-black ml-1">
                Sii Media
              </a>
            </div>
          </div>
          <ul className="flex gap-2">
            <li>
              <Link
                to={`https://wa.me/${contactUsInfo?.content.whatsApp}`}
                target="_blank"
              >
                <FaWhatsappSquare className="h-8 w-8" />
              </Link>
            </li>
            <li>
              <Link
                to={contactUsInfo?.content.instagram ?? "/"}
                target="_blank"
              >
                <FaInstagramSquare className="h-8 w-8" />
              </Link>
            </li>
            <li>
              <Link to={contactUsInfo?.content.faceBook ?? "/"} target="_blank">
                <FaFacebookSquare className="h-8 w-8" />
              </Link>
            </li>

            <li>
              <Link to={contactUsInfo?.content.youtube ?? "/"} target="_blank">
                <FaYoutubeSquare className="h-8 w-8" />
              </Link>
            </li>
            <li>
              <Link to={contactUsInfo?.content.linkedIn ?? "/"} target="_blank">
                <FaLinkedin className="h-8 w-8" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
