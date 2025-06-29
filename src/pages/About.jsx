import React , {Suspense} from "react";
const Gallary = React.lazy(() => import("./Gallary"));

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white px-4 sm:px-6 md:px-10"
    >
      <div className="max-w-[1420px] mx-auto flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-2/5 space-y-6 font-body text-[#333]">
          <h2 className="text-3xl sm:text-4xl font-title text-[#2d5c52] text-center md:text-left lg:mb-15 lg:ml-30 ">
            About Us
          </h2>

          <div>
            <h3 className="text-lg font-semibold">
              Your Perfect Escape Begins Here
            </h3>
            <p className="text-sm mt-4 leading-relaxed">
              At Kingsukh Guest House, we welcome you to a peaceful sanctuary
              nestled among the scenic wonders of Biharinath Hill, Baranti Hill,
              Susunia Hill, Joychandi Hill, Garhpanchkot, and the serene waters
              of Baranti Dam, Maithon Dam, and Panchat Dam. Surrounded by the
              timeless beauty of nature, our guest house offers the perfect
              blend of rustic charm and modern comfort.
              <br />
              <br />
              Here, you can indulge in heartfelt hospitality, savor flavorful
              home-style cuisine, and unwind in our tranquil garden retreat.
              Whether you're seeking quiet solitude or the joy of exploring
              Purulia’s hidden gems, every moment at Kingsukh is crafted to
              leave a lasting impression.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mt-6">Contact Us</h3>
            <p className="text-sm mt-4">
              We look forward to welcoming you with warmth, comfort, and
              unforgettable experiences.
            </p>
            <p className="mt-2 text-sm">
              📍 <span className="font-semibold">Address:</span> Beside Barshal
              Water Tank, Manpur, Barhanti, West Bengal 723156
              <br />
              📞 <span className="font-semibold">Phone:</span> +91 9007062180
            </p>
          </div>
        </div>

        <div className="w-full md:w-3/5">
          <Suspense fallback={<div>Loading...</div>}>
            <Gallary />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default About;
