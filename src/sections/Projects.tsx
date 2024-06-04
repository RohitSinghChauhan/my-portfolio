import { MoveRight } from "lucide-react";
import ButtonAlt from "../components/ButtonAlt";
import { projects_data } from "../data";

const Projects = () => {
  return (
    <div
      id="projects"
      className="themer bg-white overflow-x-hidden w-full flex flex-col items-center justify-center
    sm:py-[2.8rem] md:py-[2.8rem] lg:py-[5rem] xl:py-[5rem] 2xl:py-[5rem]
    sm:gap-[2rem] md:gap-[2rem] lg:gap-[5rem] xl:gap-[5rem] 2xl:gap-[5rem]"
    >
      <p className="text-heading">MY PROJECTS</p>

      <div className="flex flex-col gap-[2rem] items-center justify-center">
        {projects_data.map((e) => (
          <Card
            key={e.id}
            title={e.title}
            desc={e.desc}
            icon={e.icon}
            tech={e.tech}
            github={e.github}
            website={e.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

const Card = ({
  title,
  icon,
  desc,
  tech,
  github,
  website,
}: {
  title: string;
  icon: string;
  desc: string;
  tech: string;
  github: string;
  website: string;
}) => {
  return (
    <div
      className="bg-primary dark:bg-default flex rounded-3xl
    sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row
    sm:w-full md:w-full lg:w-[80vw] xl:w-[80vw] 2xl:w-[80vw]
    sm:py-[2rem] md:py-[2rem] lg:py-[3rem] xl:py-[3rem] 2xl:py-[3rem]"
    >
      <div
        className="rounded-tl-3xl rounded-bl-3xl flex items-center justify-center
      sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]"
      >
        <img
          src={icon}
          alt=""
          className="w-[86%] h-[80%] rounded-lg object-cover"
        />
      </div>

      <div
        className="h-full flex flex-col gap-[0.9rem] rounded-tr-3xl rounded-br-3xl
        sm:w-[100%] md:w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]
        sm:pt-6 md:pt-6 lg:pt-[3.5rem] xl:pt-[3.5rem] 2xl:pt-[3.5rem]
        sm:pl-[1rem] md:pl-[1rem] lg:pl-[3rem] xl:pl-[3rem] 2xl:pl-[3rem]"
      >
        <p className="text-heading text-gray-200 dark:text-[#262626]">
          {title}
        </p>

        <div className="flex gap-2 items-center text-gray-200 dark:text-[#262626] flex-wrap">
          <p>Tech-</p>
          <p>{tech}</p>
        </div>

        <p
          className="text-[0.9rem] text-gray-300 dark:text-[#262626] 
        sm:pr-0 md:pr-0 lg:pr-[5rem] xl:pr-[5rem] 2xl:pr-[5rem]
        sm:leading-normal md:leading-normal lg:leading-loose xl:leading-loose 2xl:leading-loose"
        >
          {desc}
        </p>

        <div className="flex w-full justify-between items-center pt-[0.9rem] pr-[6rem]">
          <ButtonAlt
            label="Github"
            onClick={() => window.open(github)}
            icon={<MoveRight className="text-gray-200 dark:text-gray-600" />}
          />
          <ButtonAlt
            label="Website"
            onClick={() => window.open(website)}
            icon={<MoveRight className="text-gray-200 dark:text-gray-600" />}
          />
        </div>
      </div>
    </div>
  );
};
