import bluBg from "../assets/blue-bg.png";
import Button from "../components/buttons/Button";
import H2element from "../components/headers/H2element";
import Paragraph from "../components/Paragraph";

type Props = {
  opacityStart: number;
  id: string;
};
const ServiceSection = (props: Props) => {
  return (
    <section
      id={props.id}
      className="z-10 relative origin-left w-full flex justify-start mx-auto transition-all ease-out duration-300 rounded-4xl rounded-b-none min-h-screen bg-sky-950 backdrop-blur-lg bg-cover bg-center md:bg-fixed"
      style={{ backgroundImage: `url(${bluBg})` }}
    >
      <div className="p-16 grid grid-cols-4">
        
        <div className=" flex flex-col gap-4  col-span-2">
          <H2element
            additionalClasses={
              "capitalize text-3xl md:text-6xl lg:text-7xl flex flex-col text-left text-white"
            }
            headerText={"Full-Service "}
            spanClasses={"text-blue-400"}
            spanText={"Convenience"}
          />

          <Paragraph
            text={
              "Web, branding, SEO, content – we do it all under one roof. You no longer need to juggle multiple agencies for your marketing needs. Our multidisciplinary team of strategists, designers, writers, and developers works holistically to ensure every piece of your marketing plan works in harmony."
            }
            classes={"text-white text-lg"}
          />

          <Button
            buttonText={"Build Your Next Masterpiece"}
            additionalClasses={"mt-4"}
            buttonLink={undefined}
            newWindow={false}
            clickHandle={undefined}
          />
        </div>

        <div className="col-span-2 grid grid-cols-1 gap-8">
          <div className="w-full h-[50vh] rounded-4xl bg-orange-400"></div>
          <div className="w-full h-[50vh] rounded-4xl bg-orange-400"></div>
          <div className="w-full h-[50vh] rounded-4xl bg-orange-400"></div>
          <div className="w-full h-[50vh] rounded-4xl bg-orange-400"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
