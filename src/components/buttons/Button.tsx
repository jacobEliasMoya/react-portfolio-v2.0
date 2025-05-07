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
      className={`${props.additionalClasses} p-4 md:p-6 transition-all ease-in-out hover:bg-blue-500 hover:-translate-y-1 active:scale-105 text-white bg-blue-600 w-full md:w-max rounded-full flex items-center justify-center text-lg  md:cursor-none cancel-me-now`}
    >
      {props.buttonText}
    </a>
  );
};

export default ButtonWhite;
