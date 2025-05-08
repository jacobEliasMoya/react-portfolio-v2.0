
import { useEffect, useState } from "react";
import Paragraph from "../components/Paragraph";
import organicBG from "../assets/goodone.png";
import Button from "../components/buttons/Button";

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
      className="z-10 origin-bottom transition-all ease-out duration-300 w-full h-dvh  bg-bottom bg-cover flex items-center justify-center  p-6 md:p-8 py-6 md:py-10 pt-20 md:!pt-35 flex-wrap flex-col rounded-b-3xl md:rounded-b-[3rem] relative gap-8 -mb-15 bg-blue-950 md:bg-fixed"
      style={{ backgroundImage: `url(${organicBG})` }} 
    >
      <Paragraph
        text="Designed Like an Artist. Built Like an Engineer."
        classes="!text-balance text-2xl md:text-4xl text-orange-500 leading-tight bg-white/80 backdrop-invert rounded-full px-8 py-4 text-center "
      />
      <Paragraph
        text="At TruePixel, we merge visual storytelling with engineered precision. As a full-service marketing agency, we blend creative design, data-driven strategy, and modern web development to craft digital experiences that don’t just look stunning — they function flawlessly and scale effortlessly.
"
        classes="text-md md:text-xl text-zinc-200 leading-tight w-full text-center "
      />

      <div className="w-full flex md:flex-row flex-col items-center justify-center gap-4 md:gap-8">
        <Button
          buttonText={"Build Your Next Masterpiece"}
          additionalClasses={""}
          buttonLink={undefined}
          newWindow={false}
          clickHandle={undefined}
        />

        <Button
          buttonText={"Let’s Talk Strategy Today"}
          additionalClasses={""}
          buttonLink={undefined}
          newWindow={false}
          clickHandle={undefined}
        />
      </div>
    </section>
  );
};

export default MainBB;
