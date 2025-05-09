type Props = {
  buttonText: string;
  additionalClasses: string;
  buttonLink: string | undefined;
  newWindow: boolean;
  clickHandle: any | undefined;
};

const ButtonWhite = (props: Props) => {
  return (
    <a
      onClick={props.clickHandle}
      href={props.buttonLink}
      target={props.newWindow ? "_blank" : ""}
      className={`${props.additionalClasses} p-4 transition-all ease-in-out hover:bg-blue-600 hover:-translate-y-1 active:scale-105 text-white bg-blue-700 rounded-full flex items-center justify-center text-md lg:text-lg  md:cursor-none cancel-me-now`}
    >
      {props.buttonText}
    </a>
  );
};

export default ButtonWhite;
