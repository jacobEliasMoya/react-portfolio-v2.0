import { useEffect, useState } from "react";
import Paragraph from "../components/Paragraph";
import organicBG from "../assets/goodone.png";
import Button from "../components/buttons/Button";
import H1element from "../components/headers/H1element";

type Props = {
  animationStart: number;
  opacityStart: number;
  id: string;
};

const MainBB = (props: Props) => {
  const [jakeMessage, setJakeMessage] = useState<string>();

  useEffect(() => {
    setJakeMessage("Hi, I am Jake, a Frontend Web Designer and Developer. ");
  }, [jakeMessage]);

  return (
    <section
      id={props.id}
      className="z-10 origin-bottom transition-all ease-out duration-300 w-full min-h-[600px] h-screen bg-bottom bg-cover flex items-center lg:items-end justify-center p-4 md:p-8 lg:p-12 flex-wrap flex-col rounded-b-3xl md:rounded-b-[3rem] relative gap-12 -mb-15 bg-blue-950 md:bg-fixed"
      style={{ backgroundImage: `url(${organicBG})` }}
    >
      <div className="w-full md:2/3 lg:w-1/2 flex items-center justify-start flex-col gap-8 rounded-4xl  ">
        <H1element
          additionalClasses={
            " !text-balance text-3xl md:text-4xl  lg:text-6xl text-white leading-none text-center lg:text-left "
          }
          headerText={"Designed as Artists"}
          spanClasses={"text-orange-400"}
          spanText={"Built Like Engineers"}
        />

        <Paragraph
          text="At TruePixel, we merge visual storytelling with engineered precision. As a full-service marketing agency, we blend creative design, data-driven strategy, and modern web development to craft digital experiences that don’t just look stunning — they function flawlessly and scale effortlessly.
"
          classes="text-lg md:text-xl text-white leading-tight w-full text-center lg:text-left w-11/12 "
        />

        <div className="w-full flex items-center flex-wrap flex-col md:flex-row justify-center lg:justify-start gap-4 md:gap-8">
          <Button
            buttonText={"Build Your Next Masterpiece"}
            additionalClasses={" min-w-10/12 md:min-w-max order-2 md:order-1"}
            buttonLink={undefined}
            newWindow={false}
            clickHandle={undefined}
          />

          <Button
            buttonText={"Let’s Talk Strategy Today"}
            additionalClasses={"min-w-10/12 md:min-w-max order-1 md:order-2"}
            buttonLink={undefined}
            newWindow={false}
            clickHandle={undefined}
          />
        </div>
      </div>
    </section>
  );
};

export default MainBB;
