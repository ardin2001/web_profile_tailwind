import {FaBars} from 'react-icons/fa'

const Header = () =>{
    return(
        <header className="drop-shadow-md bg-primary">
            <div className="container py-3 flex justify-between">
                <div className="text-2xl text-white lg:w-2/3">Ardin Nugraha</div>
                <div className="text-2xl text-white lg:hidden"><button><FaBars /></button></div>
                <nav className='w-1/3 hidden lg:block'>
                    <ul className='flex justify-between text-white'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Project</li>
                        <li>Quotes</li>
                        <li>Footer</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;