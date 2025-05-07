import bluBg from '../assets/blue-bg.png'

type Props = {
  opacityStart: number;
  id: string;
};
const SkillsSection = (props: Props) => {
  return (
    <section
      id={props.id}
      className="z-10 relative origin-left w-full flex justify-start flex-wrap flex-col overflow-hidden mx-auto transition-all ease-out duration-300 p-8 py-16 rounded-4xl rounded-b-none min-h-screen bg-sky-950 backdrop-blur-lg bg-cover bg-center bg-fixed"

      style={{ backgroundImage: `url(${bluBg})` }} 

    >

    <div className="w-full mx-auto rounded-4xl p-8">
        <img src="" alt="" />
    </div>

    </section>
  );
};

export default SkillsSection;
