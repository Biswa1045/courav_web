import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
        <img src={logo} alt="logo" width={100} height={100} />
          <p className="text-lg mt-4">
            Bhubaneswar, Odisha  
            <br />
            <a href="mailto:courav.india@gmail.com" className="hover:underline">
            gamiktechnologies@gmail.com
            </a>
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-primary transition">
              <FaFacebookSquare size={30} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaInstagram size={30} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaTwitterSquare size={30} />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaYoutubeSquare size={30} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-2">
          {/* Solutions */}
          <div>
            <h6 className="text-lg font-semibold text-gray-400 mb-2">Solutions</h6>
            <ul className="space-y-2">
              <li className="hover:text-primary cursor-pointer transition">Analytics</li>
              <li className="hover:text-primary cursor-pointer transition">Logistics</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h6 className="text-lg font-semibold text-gray-400 mb-2">Support</h6>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="hover:text-primary transition">Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-primary transition">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary transition">Terms</a>
              </li>
              <li>
                <a href="/driver-terms" className="hover:text-primary transition">Driver Terms</a>
              </li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h6 className="text-lg font-semibold text-gray-400 mb-2">Cities</h6>
            <ul className="space-y-2">
              <li className="hover:text-primary cursor-pointer transition">Bhubaneswar</li>
              <li className="hover:text-primary cursor-pointer transition">Cuttack</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-gray-300">Registered Office:</span><br />
            © 2025 Gamik Technologies Pvt. Ltd.
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
