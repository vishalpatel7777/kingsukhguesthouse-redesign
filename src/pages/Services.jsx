import React from "react";
import {
  FaShieldAlt,
  FaConciergeBell,
  FaUtensils,
  FaUserFriends,
} from "react-icons/fa";
import { motion } from "framer-motion";


const services = [
  {
    title: "Comprehensive Security",
    icon: <FaShieldAlt size={40} />,
  },
  {
    title: "24-Hour Room Service",
    icon: <FaConciergeBell size={40} />,
  },
  {
    title: "On-Site Dining",
    icon: <FaUtensils size={40} />,
  },
  {
    title: "Tourist Assistance & Guide Services",
    icon: <FaUserFriends size={40} />,
  },
];

const stats = [
  { value: "100+", label: "Bookings Completed" },
  { value: "150+", label: "Happy Customers" },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white px-4 sm:px-6 md:px-20">
      <div className="max-w-[1420px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-title text-[#2d5c52] mb-4">
          Our Services
        </h2>
        <p className="text-[#2d5c52] font-nav mb-10 sm:mb-14">
          Excellent Amenities to enhance Your Experience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 font-body text-[#555555]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f7f4f0] rounded-3xl px-6 py-10 flex flex-col items-center text-center shadow-sm"
            >
              <div className="text-[#2d5c52] mb-4">{service.icon}</div>
              <h3 className="text-sm font-medium leading-relaxed text-[#333]">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <div className="bg-[#f7f4f0] rounded-xl p-6 flex flex-col sm:flex-row justify-around items-center gap-6 text-[#333] text-sm font-nav">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              <p className="text-lg font-bold">{item.value}</p>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
