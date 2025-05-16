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
              additionalClasses="md:mt-8 pt-8 text-white capitalize text-4xl lg:text-6xl flex flex-col items-start justify-start w-full"
              headerText="Full-Service "
              spanClasses=""
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
          <div className="w-full min-h-[25vh] md:min-h-[50vh] rounded-4xl bg-white backdrop-blur-sm p-6 py-8 md:p-10 gap-8 flex flex-col items-start justify-center text-blue-600">
            <H2element
              additionalClasses="text-orange-500 capitalize text-3xl md:text-4xl w-full"
              headerText="Creative  Branding & Design: "
              spanClasses=""
              spanText=""
            />

            <Paragraph
              text={
                "We make brands memorable. True Pixel combines storytelling and pixel-perfect design to craft logos, visuals, and websites that capture attention and communicate your value. (Industry leaders like Wieden+Kennedy succeed through a unique blend of storytelling, design, and strategic thinking – we bring that ethos to businesses of all sizes.)"
              }
              classes={"text-lg"}
            />

            <Button
              buttonText="Build Your Next Masterpiece"
              additionalClasses=""
              buttonLink={undefined}
              newWindow={false}
              clickHandle={undefined}
            />
          </div>

          <div className="w-full min-h-[25vh] md:min-h-[50vh] rounded-4xl bg-white backdrop-blur-sm p-6 py-8 md:p-10 gap-8 flex flex-col items-start justify-center text-blue-600">
            <H2element
              additionalClasses="text-orange-500 capitalize text-3xl md:text-4xl w-full"
              headerText="Data-Driven & Results-Focused:"
              spanClasses=""
              spanText=""
            />

            <Paragraph
              text={
                "Like the top agencies, we connect every marketing activity to your bottom line, using analytics and innovative tech to deliver measurable growth. We obsess over conversion rates, ROI, and tangible outcomes – not vanity metrics."
              }
              classes={"text-lg"}
            />

            <Button
              buttonText="Build Your Next Masterpiece"
              additionalClasses=""
              buttonLink={undefined}
              newWindow={false}
              clickHandle={undefined}
            />
          </div>

          <div className="w-full min-h-[25vh] md:min-h-[50vh] rounded-4xl bg-white backdrop-blur-sm p-6 py-8 md:p-10 gap-8 flex flex-col items-start justify-center text-blue-600">
            <H2element
              additionalClasses="text-orange-500 capitalize text-3xl md:text-4xl w-full"
              headerText="Developer-Led Innovation:"
              spanClasses=""
              spanText=""
            />

            <Paragraph
              text={
                "Unlike typical agencies, True Pixel’s development expertise means we can customize solutions to fit your exact needs. From clean, efficient code to marketing automation, our technical edge translates to faster, more reliable, and scalable marketing systems for you"
              }
              classes={"text-lg"}
            />

            <Button
              buttonText="Build Your Next Masterpiece"
              additionalClasses=""
              buttonLink={undefined}
              newWindow={false}
              clickHandle={undefined}
            />
          </div>
          <div className="w-full min-h-[25vh] md:min-h-[50vh] rounded-4xl bg-white backdrop-blur-sm p-6 py-8 md:p-10 gap-8 flex flex-col items-start justify-center text-blue-600">
            <H2element
              additionalClasses="text-orange-500 capitalize text-3xl md:text-4xl w-full"
              headerText="Exceptional Service & Transparency:"
              spanClasses=""
              spanText=""
            />

            <Paragraph
              text={
                "We pride ourselves on clear communication, timeliness, and top-notch service – qualities our industry’s leading firms are praised for  . You’ll always know what we’re doing, why we’re doing it, and how it’s impacting your business growth."
              }
              classes={"text-lg"}
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
      </div>
    </section>
  );
};

export default ServiceSection;
