import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom'
import Logo from '../assets/logo.webp'
import './Navbar.css'

const Navbar = () => {

     // check for which path you are on
     const isActive = useLocation().pathname

     const [navShow, setnavShow] = useState(false);
     
     
    const handleToggle = () =>{
        setnavShow(navShow ? false : true);
        switch(navShow){
            case false:
                document.body.classList.add('body-hidden');
            break;
            case true:
                document.body.classList.remove('body-hidden');
                break;
            default:
                break;
        }
    }

    return (  
        <>
        <header>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt="logo" width="100" />
                    </div>
                    <nav className={ navShow ? "open" : "" }>
                        <ul className="mainNav">
                            <li className="navLink">
                                <Link to="/"
                                className={isActive === "/" ? 'active' : ''}
                                >Home</Link>
                            </li>
                            <li className="navLink">
                                <Link
                                 className={isActive === "/faq" ? 'active' : ''}
                                 to="/">Locations</Link>
                            </li>
                            <li className="navLink">
                                <Link 
                                 className={isActive === "/contact" ? 'active' : ''}
                                to="/">Contact Us</Link>
                            </li>
                            <li className="navLink">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="navLink">
                                <Link to="/signup">SignUp</Link>
                            </li>
                           
                          
                        </ul>
                    </nav>

                    {/* navicon - hamburger */}
                    <div className="navicon" onClick={handleToggle}>
                        <div className={ navShow ? "nav-toggle active" : "nav-toggle" }>
                            <span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </header>

        </>
    );
}
 
export default Navbar;