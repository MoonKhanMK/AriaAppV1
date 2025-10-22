import { useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import { Button } from "./ui/button";
import { paymentCard } from "../assets/images";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-100">
      <Container className="py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-6">Al-Aria Perfume Gallery</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Discover Premium Quality Perfume Products With Exceptional Service. Your
              Trusted Shopping Destination For Modern Lifestyle Fragrance Essentials.
            </p>
            <SocialLinks
              className="text-gray-500"
              iconStyle="w-9 h-9 transition-colors duration-200"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Brands by MK */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Brands
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/shop?brand=Givaudan"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Givaudan
                </a>
              </li>
              <li>
                <a
                  href="/shop?brand=Keva"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Keva
                </a>
              </li>
              <li>
                <a
                  href="/shop?brand=HRF"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  HRF
                </a>
              </li>
              <li>
                <a
                  href="/shop?brand=Fars"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Fars
                </a>
              </li>
              <li>
                <a
                  href="/shop?brand=Eagle Wings"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Eagle Wings
                </a>
              </li>
                            <li>
                <a
                  href="/shop?brand=Aurora"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Aurora
                </a>
              </li>
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/shop?category=Parfum"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Parfum
                </a>
              </li>
              <li>
                <a
                  href="/shop?category=Eau de Parfum"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Eau de Parfum
                </a>
              </li>
              <li>
                <a
                  href="/shop?category=Eau de Toilette"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Eau de Toilette
                </a>
              </li>
              <li>
                <a
                  href="/shop?category=Eau de Cologne"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Eau de Cologne
                </a>
              </li>
              <li>
                <a
                  href="/shop?category=Eau Fraiche"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Eau Fraiche
                </a>
              </li>
                            <li>
                <a
                  href="/shop?category=Perfume Oils"
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  Perfume Oils
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Stay Updated
            </h4>
            <p className="text-gray-500 mb-4 text-sm leading-relaxed">
              Subscribe To Get Updates On New Products And Exclusive Offers From Us.
            </p>

            {subscription ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 border border-green-200 rounded-lg"
              >
                <p className="text-green-700 text-sm font-medium">
                  ✓ Successfully subscribed!
                </p>
              </motion.div>
            ) : (
              <div className="space-y-3">
                <div>
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200 text-sm"
                    type="email"
                    placeholder="Enter your email"
                  />
                  {errMsg && (
                    <p className="text-red-500 text-xs mt-2 animate-pulse">
                      {errMsg}
                    </p>
                  )}
                </div>
                <Button
                  onClick={handleSubscription}
                  className="w-full bg-gray-700 hover:bg-gray-500 text-white py-3 rounded-lg transition-colors duration-200"
                >
                  Subscribe
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2025 Al-Aria Perfume Gallery. All Rights Reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">We Accept:</span>
              <img
                src={paymentCard}
                alt="Payment methods"
                className="h-8 object-contain opacity-90"
              />
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              {["Privacy Policy", "Terms Of Service"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;