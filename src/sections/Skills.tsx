import Marquee from "react-fast-marquee";

const skills = [
  { title: "React", logo: "devicon-react-original" },
  { title: "Next Js", logo: "devicon-nextjs-plain" },
  { title: "Typescript", logo: "devicon-typescript-plain" },
  { title: "Javascript", logo: "devicon-javascript-plain" },
  { title: "Firebase", logo: "devicon-firebase-plain" },
  { title: "HTML", logo: "devicon-html5-plain" },
  { title: "Tailwind CSS", logo: "devicon-tailwindcss-original" },
  { title: "Node Js", logo: "devicon-nodejs-plain-wordmark" },
  { title: "Express Js", logo: "devicon-express-original" },
  { title: "CSS", logo: "devicon-css3-plain" },
  { title: "Github", logo: "devicon-git-plain" },
  { title: "NPM", logo: "devicon-npm-original-wordmark" },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="themer px-0 overflow-x-hidden w-full flex flex-col items-center justify-center
    sm:py-[2.8rem] md:py-[2.8rem] lg:py-[5rem] xl:py-[5rem] 2xl:py-[5rem]
    sm:gap-[2rem] md:gap-[2rem] lg:gap-[5rem] xl:gap-[5rem] 2xl:gap-[5rem]"
    >
      <p className="text-heading">MY SKILLS</p>

      <Marquee pauseOnClick speed={25}>
        {skills.map(({ title, logo }, i) => (
          <div
            key={i}
            className="flex gap-2 items-center
          sm:mr-[2rem] md:mr-[2rem] lg:mr-[8rem] xl:mr-[8rem] 2xl:mr-[8rem]"
          >
            <p className="sm:text-[4rem] md:text-[4rem] lg:text-[9rem] xl:text-[9rem] 2xl:text-[9rem]">
              <i className={logo}></i>
            </p>
            <p>{title}</p>
          </div>
        ))}
      </Marquee>

      <p data-aos="fade-up" className="quote px-3 text-center">
        "I'm writing my story so that others might see fragments of
        themeselves."
      </p>
    </div>
  );
};

export default Skills;
