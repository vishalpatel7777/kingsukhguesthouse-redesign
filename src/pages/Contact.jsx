import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Flower from "../assets/contact-2.webp";
import Leaf from "../assets/contact-1.webp";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          reset();
        },
        (error) => {
          toast.error("Failed to send: " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white px-4 sm:px-6 md:px-20 font-body mb-10"
      data-aos="fade-up"
    >
      <Toaster />
      <div className="max-w-[1420px] mx-auto">
        <h2 className="text-3xl font-title text-center text-[#2d5c52] mb-10">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 relative text-[#666666]">
          <div className="md:col-span-4 space-y-8 text-sm">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-xl text-[#2d5c52] mt-1" />
              <div>
                <h3 className="font-semibold text-base">Address</h3>
                <p>
                  Beside Barshal Water Tank, <br /> Manpur, Barhanti,
                  <br /> West Bengal 723156
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-xl text-[#2d5c52] mt-1" />
              <div>
                <h3 className="font-semibold text-base">Email</h3>
                <a
                  href="mailto:kkghosh0099@gmail.com"
                  className="text-teal-700 underline"
                >
                  kkghosh0099@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-xl text-[#2d5c52] mt-1" />
              <div>
                <h3 className="font-semibold text-base">Contact Number</h3>
                <a href="tel:+919007062180" className="text-teal-700 underline">
                  +91 9007062180
                </a>
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:col-span-2 justify-center items-center lg:mr-20">
            <img src={Leaf} alt="Leaf Decoration" className="h-60" loading="lazy" />
          </div>

          <div className="md:col-span-5">
            <form
              onSubmit={handleSubmit(sendEmail)}
              className="space-y-5 text-sm"
            >
              <div className="flex flex-col">
                <label htmlFor="name">Name :</label>
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="bg-[#f7f4f0] p-3 rounded-md focus:outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email :</label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="bg-[#f7f4f0] p-3 rounded-md focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Mobile Number:</label>
                <input
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit phone number",
                    },
                  })}
                  className="bg-[#f7f4f0] p-3 rounded-md focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="message">Message :</label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className="bg-[#f7f4f0] p-3 rounded-md focus:outline-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-xs">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#2d5c52] lg:mx-50 text-white px-9 py-3 rounded-full mt-4 hover:bg-[#214941] transition w-full sm:w-auto"
              >
                Submit
              </button>
            </form>
          </div>

          <img
            src={Flower}
            alt="Flower"
            loading="lazy"
            className="absolute right-0 -bottom-20 hidden md:block h-32 "
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
