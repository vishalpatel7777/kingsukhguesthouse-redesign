import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5017351225647!2d86.85721547510981!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1705088034844!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kingsukh Guest House Location"
        ></iframe>
      </div>

      <footer className="bg-[#24574C] text-white py-10 px-6 sm:px-10 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="text-center mt-10 sm:text-left">
            <a href="#home" className="font-logo leading-tight">
              <div className="text-3xl tracking-wide  leading-none">
                KING&nbsp;SUKH
              </div>
              <div className="text-sm tracking-widest mt-0.5">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Guest&nbsp;&nbsp;House
              </div>
            </a>
          </div>

          <div className="font-body text-center sm:text-left">
            <h4 className="text-xl font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">Browse Destinations</a>
              </li>
              <li>
                <a href="#">Special Offers & Packages</a>
              </li>
              <li>
                <a href="#">Room Types & Amenities</a>
              </li>
              <li>
                <a href="#">Customer Reviews & Ratings</a>
              </li>
              <li>
                <a href="#">Travel Tips & Guides</a>
              </li>
            </ul>
          </div>

          <div className="font-body text-center sm:text-left">
            <h4 className="text-xl font-semibold mb-4">CONTACT US</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Address: Beside Barshal Water Tank, Manpur, Barhanti, West
                  Bengal 723156
                </a>
              </li>
              <li>
                <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a>
              </li>
              <li>
                <a href="tel:+919007062180">+91 9007062180</a>
              </li>
            </ul>

            <div className="flex justify-center sm:justify-start gap-4 mt-4 text-lg">
              <a href="#" className="hover:text-blue-500" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/kingsukhguesthouse/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
