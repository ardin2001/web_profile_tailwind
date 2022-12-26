import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  const HandlerToggle = () => {
    console.log(toggle);
    setToggle((prev) => {
      return prev === false ? true : false;
    });
  };
  return (
    <header className={`${!toggle ? "bg-primary" : "bg-white"} shadow shadow-gray-400 fixed left-0 right-0 top-0`}>
      <div className="container py-4 flex justify-between">
        <div className={`${!toggle ? "text-white" : "text-primary"} font-bold text-2xl lg:w-2/3 `}onClick={HandlerToggle}>
          Ardin Nugraha
        </div>
        <div className="text-2xl font-bold text-white z-50 lg:hidden">
          <button onClick={HandlerToggle}>
            {!toggle ? <FaBars className="text-2xl" /> : 'X'}
          </button>
        </div>
        <nav
          className={`${toggle ? " fixed text-center text-xl right-0 w-2/3 top-0 bottom-0 bg-primary shadow-lg shadow-secondary" : "hidden"}  lg:w-1/3 lg:bg-inherit lg:block lg:static`}
        >
          <ul className="py-2 text-white lg:text-white lg:flex lg:justify-between">
            <h1 className={`${toggle ? "block" : "hidden"} text-4xl font-semibold`}>Portofolio</h1>
            <li className="hover:font-bold py-6 text-4xl lg:py-0 lg:text-base">
              <a href="/" onClick={HandlerToggle}>
                Home
              </a>
            </li>
            <li className="hover:font-bold py-6 text-4xl lg:py-0 lg:text-base">
              <a href="#about" onClick={HandlerToggle}>
                About
              </a>
            </li>
            <li className="hover:font-bold py-6 text-4xl lg:py-0 lg:text-base">
              <a href="#portofolio" onClick={HandlerToggle}>
                Portofolio
              </a>
            </li>
            <li className="hover:font-bold py-6 text-4xl lg:py-0 lg:text-base">
              <a href="#footer" onClick={HandlerToggle}>
                Footer
              </a>
            </li>
            
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
