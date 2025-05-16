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
      className="z-10 relative origin-left w-full transition-all ease-out duration-300 rounded-4xl rounded-b-none min-h-screen bg-sky-950 backdrop-blur-lg bg-cover bg-center md:bg-fixed text-left"
      style={{ backgroundImage: `url(${bluBg})` }}
    >
      <div className="grid md:grid-cols-4 gap-10 p-8 md:p-10">
        <div className="col-span-2 relative">
          <div className="sticky top-0 flex flex-col items-start gap-8 p-4 sm:p-8 md:p-6 lg:p-8 md:pt-20">

 
            <H2element
              additionalClasses="mt-8 pt-8 text-white capitalize text-3xl md:text-4xl lg:text-6xl flex flex-col items-start justify-start w-full"
              headerText="Full-Service "
              spanClasses="text-orange-400"
              spanText="Convenience"
            />
            <Paragraph
              text="Web, branding, SEO, content – we do it all under one roof. You no longer need to juggle multiple agencies for your marketing -needs justify-start. Our multidisciplinary team of strategists, designers, writers, and developers works holistically to ensure every piece of your marketing plan works in harmony."
              classes="text-white text-lg"
            />
            <Button
              buttonText="Build Your Next Masterpiece"
              additionalClasses=""
              buttonLink={undefined}
              newWindow={false}
              clickHandle={undefined}
            />
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-8 md:p-4">
          <div className="w-full h-[25vh] md:h-[50vh] rounded-4xl bg-blue-400/50 backdrop-blur-sm"></div>
          <div className="w-full h-[25vh] md:h-[50vh] rounded-4xl bg-blue-400/50 backdrop-blur-sm"></div>
          <div className="w-full h-[25vh] md:h-[50vh] rounded-4xl bg-blue-400/50 backdrop-blur-sm"></div>
          <div className="w-full h-[25vh] md:h-[50vh] rounded-4xl bg-blue-400/50 backdrop-blur-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
