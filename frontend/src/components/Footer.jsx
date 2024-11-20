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
                  href="mailto:info@pistisgroup.com"
                  className="hover:text-green-500"
                >
                  info@pistisgroup.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-2xl" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-2xl" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-2xl" />
                <span>123 Healthcare St, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-2xl" />
                <span>123 Healthcare St, City, Country</span>
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
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center items-center mt-8 mb-0 sm:mt-0">
            <p>
              &copy; {new Date().getFullYear()} Pistis Group. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
