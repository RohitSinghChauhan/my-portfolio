import { useState } from "react";
import userImage from "../assets/rohit2.jpg";
import ButtonView from "../components/ButtonView";

const text = `
From a young age, I was captivated by the endless possibilities that technology could offer. This curiosity led me to explore the world of web development, where I discovered my passion for creating dynamic and interactive user experiences. My journey began with HTML and CSS, but it was when I encountered JavaScript that I truly fell in love with coding.
My first significant foray into web development was building small, interactive websites. As I honed my skills, I was introduced to React.js, a powerful library that revolutionized the way I approached frontend development. React's component-based architecture and its ability to efficiently update and render just the right components in real-time fascinated me. It wasn’t long before I became proficient in React, leveraging its strengths to build responsive and user-friendly interfaces.
However, I didn't stop there. I understood that to be a versatile developer, I needed to grasp the backend as well. This led me to dive into Node.js, Express, and MongoDB. With Node.js, I learned how to build scalable server-side applications. Express became my go-to framework for structuring these applications, and MongoDB provided me with a flexible, document-oriented database solution. Together, these technologies empowered me to create robust full-stack applications.
One of my most memorable projects was developing an e-commerce application. Using React.js, I created a seamless and intuitive user interface. On the backend, I utilized Node.js and Express to build a RESTful API, managing data with MongoDB. This project not only reinforced my technical skills but also taught me the importance of considering user experience, performance, and scalability.
Collaboration and continuous learning have been key aspects of my journey. Working on various projects, both individually and in teams, has equipped me with the ability to adapt to different roles and responsibilities. I thrive in environments where I can contribute to the entire development lifecycle, from conceptualizing ideas to deploying finished products.
Thank you for taking the time to learn about my journey. I am excited about the future and look forward to creating more amazing web experiences!
`;

const content = [
  "From a young age, I was captivated by the endless possibilities that technology could offer. This curiosity led me to explore the world of web development, where I discovered my passion for creating dynamic and interactive user experiences. My journey began with HTML and CSS, but it was when I encountered JavaScript that I truly fell in love with coding.",
  "My first significant foray into web development was building small, interactive websites. As I honed my skills, I was introduced to React.js, a powerful library that revolutionized the way I approached frontend development. React's component-based architecture and its ability to efficiently update and render just the right components in real-time fascinated me. It wasn’t long before I became proficient in React, leveraging its strengths to build responsive and user-friendly interfaces.",
  "However, I didn't stop there. I understood that to be a versatile developer, I needed to grasp the backend as well. This led me to dive into Node.js, Express, and MongoDB. With Node.js, I learned how to build scalable server-side applications. Express became my go-to framework for structuring these applications, and MongoDB provided me with a flexible, document-oriented database solution. Together, these technologies empowered me to create robust full-stack applications.",
  "One of my most memorable projects was developing an e-commerce application. Using React.js, I created a seamless and intuitive user interface. On the backend, I utilized Node.js and Express to build a RESTful API, managing data with MongoDB. This project not only reinforced my technical skills but also taught me the importance of considering user experience, performance, and scalability.",
  "Collaboration and continuous learning have been key aspects of my journey. Working on various projects, both individually and in teams, has equipped me with the ability to adapt to different roles and responsibilities. I thrive in environments where I can contribute to the entire development lifecycle, from conceptualizing ideas to deploying finished products.",
  "Thank you for taking the time to learn about my journey. I am excited about the future and look forward to creating more amazing web experiences!",
];

const About = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const previewText = text.substring(0, 1000);

  return (
    <div
      id="about"
      className="themer-alt w-full flex
      sm:py-[2.8rem] md:py-[2.8rem] lg:py-[5rem] xl:py-[5rem] 2xl:py-[5rem]
    sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row"
    >
      <div
        className="flex flex-col gap-5 pl-[2rem]
        sm:justify-center md:justify-center lg:justify-start xl:justify-start 2xl:justify-start
        sm:items-center md:items-center lg:items-start xl:items-start 2xl:items-start
      sm:pl-0 md:pl-0 lg:pl-[2rem] xl:pl-[2rem] 2xl:pl-[2rem]
      sm:w-[100%] md:w-[100%] lg:w-[50%]  xl:w-[50%] 2xl:w-[50%]"
      >
        <p
          className="text-gray-300 dark:text-gray-700 text-[1.7rem]
        sm:pr-0 md:pr-0 lg:pr-[8rem] xl:pr-[8rem] 2xl:pr-[8rem]"
        >
          "I'm writing my story so that others might see fragments of
          themeselves."
        </p>
        <img
          src={userImage}
          className="w-[28rem] sm:rounded-lg md:rounded-lg lg:rounded-2xl xl:rounded-2xl 2xl:rounded-2xl"
          alt="someimagehere"
        />
      </div>

      <div
        className="flex flex-col gap-5
        sm:pl-2 md:pl-2 lg:pl-8 xl:pl-8 2xl:pl-8
        sm:pr-0 md:pr-0 lg:pr-[3rem] xl:pr-[3rem] 2xl:pr-[3rem]
        sm:pt-[2rem] md:pt-[2rem] lg:pt-0 xl:pt-0 2xl:pt-0 
        sm:w-[100%] md:w-[100%] lg:w-[50%]  xl:w-[50%] 2xl:w-[50%]"
      >
        <p className="text-gray-300 dark:text-gray-700 text-[1.7rem]">
          My Journey as a Developer
        </p>

        <div
          className="text-gray-300 dark:text-gray-700 text-sm flex-col justify-between h-[80%] gap-3
        sm:hidden md:hidden lg:flex xl:flex 2xl:flex"
        >
          {content.map((e, i) => (
            <div key={i}>{e}</div>
          ))}
        </div>

        {/*FOR SMALLER SCREENS*/}
        <div
          className="text-gray-300 dark:text-gray-700 text-sm flex-col justify-between h-[80%] gap-3
        sm:flex md:flex lg:hidden xl:hidden 2xl:hidden"
        >
          <div>
            {isReadMore ? text : `${previewText}...`}
            <button
              onClick={toggleReadMore}
              className="text-blue-500 hover:underline ml-2"
            >
              {isReadMore ? "Show less" : "Read more"}
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center flex-1">
          <ButtonView
            label="Connect via Email"
            onClick={() => window.open("mailto:rohitsinghmadan@gmail.com")}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
