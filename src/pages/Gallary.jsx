import React from 'react';
import Gallary1 from "../assets/palash.webp";
import Gallary2 from "../assets/gallary-3.webp";
import Gallary3 from "../assets/gallary-5.webp";
import Gallary4 from "../assets/home.webp";
import Gallary5 from "../assets/large.jpg";
import Gallary6 from "../assets/forest-1.webp";

const Gallary = () => {
  return (
    <div className="w-full space-y-3">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <img src={Gallary1} alt="Gallery 1" className="w-full  h-64 object-cover" loading="lazy" />
        <img src={Gallary2} alt="Gallery 2"   className="w-full h-64 object-cover "  loading="lazy"/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <img src={Gallary3} alt="Gallery 3" className="w-full h-40 object-cover" loading="lazy"/>
          <div className="grid grid-cols-2 gap-3">
            <img src={Gallary4} alt="Gallery 4" className="w-full  h-32 object-cover " loading="lazy" />
            <img src={Gallary5} alt="Gallery 5" className="w-full h-32 object-cover"  loading="lazy"/>
          </div>
        </div>

        <div>
          <img
            src={Gallary6}
            alt="Gallery 6"
            className="w-full h-full max-h-[300px] object-cover "
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
