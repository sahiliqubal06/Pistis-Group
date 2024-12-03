import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="footer footer-center rounded p-10 bg-blue-950 text-white justify-items-stretch">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="link link-hover">
                  Products
                </a>
              </li>
              <li>
                <a href="/aboutus" className="link link-hover">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contactus" className="link link-hover">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 ">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-2xl" />
                <a
                  href="mailto:pistisgroups@gmail.com"
                  className="hover:text-green-500"
                >
                  pistisgroups@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-2xl" />
                <span>+977 9840108594</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-2xl" />
                <span>+977 9840108594</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-2xl" />
                <span>Birgunj,Nepal</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-2xl" />
                <span>Kathmandu,Nepal</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 mt-0">Follow Us</h3>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-green-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Copyright Information */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Pistis Groups Pvt. Ltd. All Rights
              Reserved.
            </p>
            <span className="hidden sm:inline-block">|</span>
            <p className="text-center">
              Designed and developed by{" "}
              <a
                href="https://github.com/sahiliqubal06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Sahil Iqubal
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
