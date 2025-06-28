import React from 'react';
import Gallary1 from "../assets/gallary-1.webp";
import Gallary2 from "../assets/gallary-2.jpg";
import Gallary3 from "../assets/gallary-3.jpg";
import Gallary4 from "../assets/home.jpg";
import Gallary5 from "../assets/gallary-5.jpg";
import Gallary6 from "../assets/gallary-6.webp";

const Gallary = () => {
  return (
    <div className="w-full space-y-3">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <img src={Gallary1} alt="Gallery 1" className="w-full h-64 object-cover" />
        <img src={Gallary2} alt="Gallery 2" className="w-full h-64 object-cover " />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-3">
          <img src={Gallary3} alt="Gallery 3" className="w-full h-40 object-cover" />
          <div className="grid grid-cols-2 gap-3">
            <img src={Gallary4} alt="Gallery 4" className="w-full  h-32 object-cover " />
            <img src={Gallary5} alt="Gallery 5" className="w-full h-32 object-cover" />
          </div>
        </div>

        <div>
          <img
            src={Gallary6}
            alt="Gallery 6"
            className="w-full h-full max-h-[300px] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
