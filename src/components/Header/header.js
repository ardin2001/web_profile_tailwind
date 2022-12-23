import React from 'react';
import {FaBars} from 'react-icons/fa'

const Header = () =>{
    const [toggle,setToggle] = React.useState(true)
    const HandlerToggle = () => {
        console.log(toggle)
        setToggle((prev) => {
          return prev === false ? true : false;
        });
      };
    return(
        <header className="drop-shadow-md bg-primary">
            <div className="container py-4 flex justify-between">
                <div className="text-2xl text-white lg:w-2/3" onClick={HandlerToggle}>MyPortofolio</div>
                <div className={"text-2xl text-white lg:hidden"}><button onClick={HandlerToggle}><FaBars /></button></div>
                <nav className={'w-1/3 fixed lg:bg-inherit lg:block lg:static '+toggle}>
                    <ul className='text-primary lg:text-white lg:flex lg:justify-between'>
                        <li className='hover:font-bold'><a href="/">Home</a></li>
                        <li className='hover:font-bold'><a href="#about">About</a></li>
                        <li className='hover:font-bold'><a href="#portofolio">Portofolio</a></li>
                        <li className='hover:font-bold'><a href="#footer">Footer</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;