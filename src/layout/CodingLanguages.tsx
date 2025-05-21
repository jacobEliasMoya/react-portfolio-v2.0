import orangeBg from '../assets/orange-bg.png'
type Props = {
  opacityStart: number;
  id: string;
};

const CodingLanguages = (props: Props) => {

  return (
    <section
      id={props.id}
      className="z-10 relative origin-left w-full transition-all ease-out duration-300 rounded-4xl min-h-screen bg-sky-950 backdrop-blur-lg bg-cover bg-center md:bg-fixed text-left"
      style={{ backgroundImage: `url(${orangeBg})` }}
    >
      <div className="grid md:grid-cols-4 gap-10 p-8 md:p-10">
        
      </div>
    </section>
  );
};

export default CodingLanguages;
