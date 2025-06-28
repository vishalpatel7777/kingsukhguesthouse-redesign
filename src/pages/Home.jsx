import React from "react";
import BgIMG from "../assets/home.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] bg-cover bg-center flex items-center justify-center text-white text-center px-4 sm:px-6 md:px-20"
      style={{
        backgroundImage: `url(${BgIMG})`,
      }}
    >
      <div className=" p-6 sm:p-10 rounded-lg">
        <h3 className="text-xs sm:text-sm tracking-widest font-nav mb-3 uppercase">
          Welcome to
        </h3>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-title font-bold leading-tight">
          KING SUKH <br className="hidden sm:block" /> GUEST HOUSE
        </h1>
      </div>
    </section>
  );
};

export default Home;
