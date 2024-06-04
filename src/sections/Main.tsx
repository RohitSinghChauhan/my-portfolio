import { ArrowDownToLine } from "lucide-react";
import BtnAnimate from "../components/BtnAnimate";
import "../utils/animations.css";
import DivAnimate from "../utils/DivAnimate";

const Main = () => {
  return (
    <DivAnimate
      className="themer flex flex-col justify-center flex-1
    sm:min-h-full md:min-h-full lg:min-h-screen xl:min-h-screen 2xl:min-h-screen
    sm:pt-[3rem] md:pt-[3rem] lg:pt-0 xl:pt-0 2xl:pt-0
    sm:pb-[4rem] md:pb-[4rem] lg:pb-0 xl:pb-0 2xl:pb-0
    sm:gap-3 md:gap-4 lg:gap-7 xl:gap-7 2xl:gap-7"
    >
      <div className="flex justify-start">
        <BtnAnimate
          onClick={() =>
            (window.location.href =
              "https://drive.google.com/u/0/uc?id=1FzHQpwXtJu0dbpY5eq5GKNO-yOY63q91&export=download")
          }
          className="border-2 border-gray-400 pt-[0.60rem] pb-[0.45rem]
         px-4 rounded-lg flex items-center justify-center gap-2"
        >
          <div>
            <ArrowDownToLine className="dark:text-white" size={18} />
          </div>
          <p className="mt-[0.17rem]">Resume</p>
        </BtnAnimate>
      </div>

      <div className="flex-wrap">
        <p
          className="font-bold
        sm:text-[4rem] md:text-[4rem] lg:text-[7rem] xl:text-[7rem] 2xl:text-[7rem]
        flex-wrap"
        >
          FRONT-END
        </p>
        <p
          className="font-bold
          sm:text-[4rem] md:text-[4rem] lg:text-[7rem] xl:text-[7rem] 2xl:text-[7rem] flex-wrap"
        >
          WEB DEVELOPER
        </p>
      </div>

      <div
        className="w-full flex mt-[1.8rem]
      sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row
      sm:gap-[2rem] md:gap-[3rem] lg:gap-[12rem] xl:gap-[12rem] 2xl:gap-[12rem]"
      >
        <div className="sm:w-[100%] md:w-[100%] lg:w-[35%] xl:w-[35%] 2xl:w-[35%]">
          <p className="little">Hi there,</p>
          <p className="little">
            My name is Rohit Singh and i am 23 years old ambitious front-end web
            developer now i'm looking for a new position and new challenges.
          </p>
        </div>

        <div className="sm:w-[100%] md:w-[100%] lg:w-[35%] xl:w-[35%] 2xl:w-[35%]">
          <p className="little">
            My goal is simple and straight, it is to learn something new every
            day, improve my skills and my performance. I can quickly analayze
            problems and solve them both independently and in a team.
          </p>
        </div>
      </div>
    </DivAnimate>
  );
};

export default Main;
