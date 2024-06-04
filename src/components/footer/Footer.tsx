import { SocialIcon } from "react-social-icons/component";
import { social_links } from "../../data";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/email";
import "react-social-icons/telegram";
import BtnAnimate from "../BtnAnimate";

const Footer = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden flex justify-evenly items-center
    sm:py-[1.8rem] md:py-[1.8rem] lg:py-[1.4rem] xl:py-[1.4rem] 2xl:py-[1.4rem]
    sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row
    sm:gap-[2rem] md:gap-[2rem] lg:gap-[8rem] xl:gap-[8rem] 2xl:gap-[8rem]
   "
    >
      <div
        className="inline-flex items-center flex-wrap
          sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row 
          sm:gap-5 md:gap-5 lg:gap-8 xl:gap-8 2xl:gap-8"
      >
        <p className="text-md font-bold text-green-700">
          Feel free to contact me-
        </p>
        <p className="text-sm font-bold">rohitsinghmadan@gmail.com</p>
        <p className="text-sm font-bold">+91 8079086048</p>
      </div>

      <div className="inline-flex text-black items-center gap-6">
        {social_links.map((e) => (
          <BtnAnimate
            key={e.id}
            onClick={() => window.open(`https://${e.url}`)}
          >
            <SocialIcon
              url={`www.${e.path}.com`}
              href={e.url}
              bgColor="#454545"
              fgColor="white"
              target="_blank"
              style={{ width: "2.2rem", height: "2.2rem" }}
            />
          </BtnAnimate>
        ))}
      </div>
    </div>
  );
};

export default Footer;
