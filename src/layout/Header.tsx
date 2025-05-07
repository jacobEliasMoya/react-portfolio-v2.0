import { useEffect, useState, ReactElement } from "react";
import { TiThMenu } from "react-icons/ti";
import jakeCartoon from "../assets/truepixel.png";
import H1element from "../components/headers/H1element";
import { PiPhoneFill } from "react-icons/pi";

interface Nav {
  id: number;
  name: string;
  url: string;
  title: string;
  icon: ReactElement | null;
  target: string | undefined;
  additionalClasses: string;
}

const Header = () => {
  const initialNav: Array<Nav> = [
    {
      id: 0,
      name: "Home",
      url: "/#home",
      title: "test",
      icon: null,
      target: undefined,
      additionalClasses: "",
    },
    {
      name: "Tech",
      url: "/#coding",
      title: "Technology I use",
      icon: null,
      target: undefined,
      additionalClasses: "",
      id: 1,
    },
    {
      name: "Spotlight",
      url: "/#outer-scroll",
      title: "Spotlight Work",
      icon: null,
      target: undefined,
      additionalClasses: "",
      id: 2,
    },
    {
      name: "About",
      url: "/#about",
      title: "About My Work",
      icon: null,
      target: undefined,
      additionalClasses: "",
      id: 3,
    },
    {
      name: "Contact",
      url: "/#contact",
      title: "Contact Me Today",
      icon: null,
      target: undefined,
      additionalClasses: "",
      id: 4,
    },
    {
      name: "Call Now",
      url: "tel:+19096446073",
      title: "Call Now",
      icon: <PiPhoneFill />,
      target: undefined,
      additionalClasses: "",
      id: 4,
    },
  ];

  const [navigationElms, setNavigationElms] = useState<Nav[]>();
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    initialNav ? setNavigationElms(initialNav) : "";
    !isActive ? setTimeout(() => setIsActive(true), 550) : null;
  }, []);

  return (
    <header
      className={` min-h-10 h-max text-white w-[95%] md:w-full flex items-center justify-between bg-blue-800/85 backdrop-blur-lg  mx-auto fixed top-[1.5%] md:top-0 md:left-0 left-[2.5%] md:rounded-t-none rounded-4xl z-40 flex-row transition-all ease-out duration-300 overflow-hidden md:overflow-visible mb-2 md:mb-0 p-2`}
      style={{
        bottom: `${isActive ? 0 : -200}px`,
        opacity: isActive ? 1 : 0,
      }}
    >
      <a
        aria-label="mobile-navigation-toggle"
        className=" md:hidden z-10"
        href="tel:+19096446073"
      >
        <PiPhoneFill
          className={`w-9 h-9 rounded-full text-white p-1 border-4 border-white bg-orange-500 active:scale-110 transition-all`}
        />
      </a>

      <div className="flex flex-row gap-2 md:gap-4 align-items-center justify-center md:justify-start w-1/3">
        <div className="transition-all ease  bg-white  rounded-full  min-w-10 min-h-10  md:min-w-18 md:min-h-18 relative md:hover:-translate-y-[15px] flex justify-center items-center z-10 group">
          <div className=" rounded-full w-10 h-10 md:w-16 md:h-16 flex items-center justify-center  relative group ">
            <img
              src={jakeCartoon}
              alt="jake"
              width="150"
              height="150"
              className=" pointer-events-none select-none"
            />
          </div>
        </div>

        <H1element
          additionalClasses={
            "text-2xl md:text-5xl flex flex-row gap-2 items-center justify-center text-white "
          }
          headerText={"TruePixel"}
          spanClasses={""}
          spanText={""}
        />
      </div>

      <button
        aria-label="mobile-navigation-toggle"
        className=" md:hidden z-10"
      >
        <TiThMenu
          className={`w-9 h-9 rounded-full text-white p-1 border-4 border-white bg-orange-500 active:scale-110 transition-all`}
        />
      </button>

      <ul className="hidden md:flex gap-2 justify-end items-center w-2/3">
        {navigationElms?.map((item) => (
          <li
            key={`nav-${item.id}`}
            className="first:bg-orange-500 first:hover:bg-orange-600  group cursor-none text-xl rounded-full overflow-hidden bg-blue-900 hover:bg-blue-950 "
          >
            <a
              aria-label={item.title}
              href={item.url}
              target={item.target ? item.target : ""}
              className={` flex text-lg flex-row items-center justify-center p-2 px-3 min-w-30 relative cursor-none transition-all ease-out duration-300 gap-2  text-white ${item.additionalClasses}`}
            >
              {item.icon ? (
                <p className="bg-orange-500 p-1 rounded-full">{item.icon}</p>
              ) : null}
              <span className="transition-all ease-out duration-300">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
