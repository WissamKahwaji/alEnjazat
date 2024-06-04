import React, { useState } from "react";
// import baseUrl from "../../../constants/domain";

const ContactForm = () => {
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
    // try {
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
    // } catch (error) {
    //   console.error("Error sending email:", error);
    //   alert("Failed to send request. Please try again.");
    // }
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className="flex flex-col gap-8 bg-gray-background px-3 lg:px-20 py-14 w-full bg-seconBackground">
      <div className="border border-primary p-4 md:p-6 lg:p-8 rounded-lg">
        <h2 className="text-4xl font-semibold mb-4 font-header">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="font-serif mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-b border-primary  p-2"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="font-serif mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b border-primary  p-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="phone" className="font-serif mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent border-b border-primary  p-2"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="flex flex-col mb-8">
            <label htmlFor="message" className="font-serif mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-b border-primary  p-2 h-32"
              placeholder="Enter your message"
              required
            />
          </div>
          <div className="w-full items-center  flex">
            <button
              type="submit"
              className="bg-hoverColor w-1/2 mx-auto text-white font-semibold py-2 px-4 rounded-md transition duration-300 hover:bg-primary/80 focus:outline-none focus:ring focus:ring-gray-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
