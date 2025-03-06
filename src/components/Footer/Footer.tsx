import { useLocation } from "react-router-dom";
import { Briefcase, Mail, MapPin, Phone } from "tabler-icons-react";
import {
  BrandFacebook,
  BrandInstagram,
  BrandTwitter,
} from "tabler-icons-react";

const Footer = () => {
  const location = useLocation();
  if (location.pathname === "/signup" || location.pathname === "/login")
    return null; // Avoid rendering Header on signup page
  return (
    <div className="pt-20 pb-5  text-mine-shaft-100 bg-mine-shaft-950 font-['poppins']">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div className="flex flex-col gap-4 mt-3">
          <div className="flex gap-2 items-center text-bright-sun-400">
            <Briefcase className="h-6 w-6" />
            <div className="text-3xl font-semibold">Naukari</div>
          </div>
          <p className="text-sm text-mine-shaft-300 leading-relaxed text-left">
            Job portal with user profiles, skills updates, certifications, work
            experience, and admin job postings.
          </p>
          <div className="flex gap-3 text-bright-sun-400">
            <div className="bg-mine-shaft-900 p-2 rounded-full hover:bg-mine-shaft-700 cursor-pointer">
              <BrandFacebook />
            </div>
            <div className="bg-mine-shaft-900 p-2 rounded-full hover:bg-mine-shaft-700 cursor-pointer">
              <BrandInstagram />
            </div>
            <div className="bg-mine-shaft-900 p-2 rounded-full hover:bg-mine-shaft-700 cursor-pointer">
              <BrandTwitter />
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-3">
          <h3 className="text-lg font-semibold mb-3 text-bright-sun-400">
            Quick Links
          </h3>
          <ul className="text-sm text-mine-shaft-300 space-y-2">
            <li className="hover:text-bright-sun-300 cursor-pointer">Home</li>
            <li className="hover:text-bright-sun-300 cursor-pointer">Jobs</li>
            <li className="hover:text-bright-sun-300 cursor-pointer">
              Profile
            </li>
            <li className="hover:text-bright-sun-300 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-3">
          <h3 className="text-lg font-semibold mb-3 text-bright-sun-400">
            Contact Us
          </h3>
          <div className="text-sm text-mine-shaft-300 space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>support@naukari.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>123 Job Street, Tech City, CA</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center text-xs text-mine-shaft-500">
        © 2025 Naukari. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
