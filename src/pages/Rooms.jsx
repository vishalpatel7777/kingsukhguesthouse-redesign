import React from "react";
import Card from "../components/Card";

const Rooms = () => {
  return (
    <section id="rooms" className="py-20 md:py-28 bg-white px-4 sm:px-6 md:px-20 font-body">
      <div className="max-w-[1420px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-title text-[#2d5c52] mb-12 sm:mb-20">
          Our Rooms
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-stretch">
          <Card
            title="Cozy Haven Room"
            subtitle="Your Personal Retreat of Peace"
            iconType="bed"
            delay={0.1}
            features={[
              "Step into our Cozy Haven Room — where soft textures and soothing tones create a warm, inviting space to unwind.",
              "Ideal for quiet escapes, wellness weekends, or business stopovers.",
            ]}
            price="₹1,000/night – comfort redefined, without compromise."
          />
          <Card
            title="Spacious Serenity Suite"
            subtitle="Luxury That Breaths With You"
            iconType="suite"
            delay={0.3}
            features={[
              "Experience mindful living in our Spacious Serenity Suite — an elegantly designed space offering room to relax, recharge, and reconnect.",
              "Perfect for long stays, romantic getaways, or moments that deserve more space.",
            ]}
            price="₹1,500/night – upgrade your stay, upgrade your story."
          />
        </div>
      </div>
    </section>
  );
};

export default Rooms;
