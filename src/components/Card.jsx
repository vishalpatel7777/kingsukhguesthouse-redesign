import React from "react";
import { motion } from "framer-motion";
import { FaBed, FaHotel } from "react-icons/fa";

const Card = ({ title, subtitle, features, price, iconType = "bed", delay = 0 }) => {
  const Icon = iconType === "suite" ? FaHotel : FaBed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-[#f7f4f0] rounded-2xl p-6 sm:p-7 text-left shadow-md w-full max-w-[550px] mx-auto"
    >
      <div className="space-y-4">
        <div className="text-4xl text-[#2d5c52] flex items-center justify-center">
          <Icon size={40} />
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-title text-center text-[#2d5c52]">
            {title}
          </h3>
          <p className="text-sm text-[#666666] text-center font-semibold">
            {subtitle}
          </p>
        </div>
      </div>

      <ul className="text-sm text-[#666666] list-disc pl-5 space-y-3 mt-8 sm:mt-10">
        {features.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <p className="text-sm font-semibold text-[#666666] mt-8 sm:mt-10">
        <span className="font-bold">Starting from {price}</span>
      </p>
    </motion.div>
  );
};

export default Card;
