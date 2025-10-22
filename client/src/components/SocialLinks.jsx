import React from "react";
import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const linkData = [
  { icon: <FaFacebook />, href: "https://www.facebook.com/people/Al-Aria-Perfume-Gallery/100069517291973" },
  { icon: <FaYoutube />, href: "https://www.youtube.com" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/en" },
  { icon: <FaInstagram />, href: "https://www.instagram.com" },
];

const SocialLinks = ({ className, iconStyle }) => {
  return (
    <div
      className={twMerge(
        "text-xl pt-2 text-white/50 flex items-center gap-x-2",
        className
      )}
    >
      {linkData?.map((item, index) => (
        <a
          key={index}
          href={item?.href}
          className={twMerge(
            "border border-white/50 inline-flex p-2 rounded-full hover:text-white hover:border-white duration-300 cursor-pointer",
            iconStyle
          )}
        >
          {item?.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;