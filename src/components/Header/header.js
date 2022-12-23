import {FaBars} from 'react-icons/fa'

const Header = () =>{
    return(
        <header className="drop-shadow-md bg-primary">
            <div className="container py-4 flex justify-between">
                <div className="text-2xl text-white lg:w-2/3">Ardin Nugraha</div>
                <div className="text-2xl text-white lg:hidden"><button><FaBars /></button></div>
                <nav className='w-1/3 hidden lg:block'>
                    <ul className='flex justify-between text-white'>
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