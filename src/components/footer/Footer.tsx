import { SocialIcon } from "react-social-icons/component";
import { social_links } from "../../data";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/email";
import "react-social-icons/telegram";
import BtnAnimate from "../BtnAnimate";
import { ArrowDownToLine } from "lucide-react";

const Footer = () => {
  return (
    <footer
      data-aos="fade-bottom"
      className="themer-alt w-full text-white py-10"
    >
      <div
        id="contact"
        className="container mx-auto px-4 sm:flex sm:flex-col sm:items-center md:flex-row md:justify-between lg:justify-between gap-8"
      >
        {/* Contact Information */}
        <div className="flex flex-col items-center text-center sm:text-left md:text-left">
          <p className="text-lg font-semibold text-center md:text-start text-green-500 mb-2">
            Feel free to contact me:
          </p>
          <p className="text-sm font-medium text-gray-400">
            rohitsinghmadan@gmail.com
          </p>
          <p className="text-sm font-medium text-gray-400">+91 8079086048</p>
        </div>
        {/* Social Icons */}
        <div className="flex gap-6 justify-center items-center">
          {social_links.map((e) => (
            <BtnAnimate
              key={e.id}
              onClick={() => window.open(`https://${e.url}`)}
            >
              <SocialIcon
                url={`https://www.${e.path}.com`}
                bgColor="#454545"
                fgColor="white"
                target="_blank"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                }}
                className="hover:scale-110 hover:bg-white"
              />
            </BtnAnimate>
          ))}
        </div>{" "}
      </div>

      {/* Resume Download Button */}
      <div>
        <a
          href="/resume.pdf"
          download="Rohit_Singh_Resume.pdf"
          className="flex justify-center gap-x-1 mt-8"
        >
          <div>
            <ArrowDownToLine className="dark:text-white" size={18} />
          </div>
          <p className="mt-[0.17rem]">View Resume</p>{" "}
        </a>
      </div>

      <div className="text-center mt-6">
        <p className="text-sm font-medium text-gray-500">
          &copy; {new Date().getFullYear()} Rohit Singh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
