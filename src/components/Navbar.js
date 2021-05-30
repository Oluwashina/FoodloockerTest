import React, {useState} from 'react';
import {useLocation} from 'react-router-dom'
import {HashLink as Link,} from 'react-router-hash-link'
import Logo from '../assets/logo.webp'
import './Navbar.css'
import {connect} from 'react-redux'
import { logOut } from '../store/actions/auth';

const Navbar = (props) => {

    const {cartCount, profileName, auth, logout} = props

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
                                to="/#download-app">Download App</Link>
                            </li>

                            {
                                !auth ? 
                                <li className="navLink">
                                <Link to="/login">Login</Link>
                            </li>
                            : 
                                <li className="navLink">
                                <span style={{fontSize: 14}}>
                                    Hi, {profileName.name}
                                    </span>
                            </li>

                            }
                            
                            {
                                !auth ? 
                                <li className="navLink">
                                <Link to="/signup">SignUp</Link>
                            </li>
                            :
                                <li className="navLink">
                                <Link to="/login"
                                 onClick={logout}
                                >Logout</Link>
                            </li>
                            }
                           
                           
                            <li className="headerbtn">
                                <Link to="/cart">
                                        <i className="mdi mdi-cart-outline" style={{fontSize: 25}} ></i>
                                        <div
                                            className={cartCount === 0 ? "emptyCartDiv" : "cartDiv"}>
                                           <span style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>{cartCount}</span>
                                        </div>
                                </Link>
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

const mapStateToProps = (state) =>{
    return{
        cartCount: state.cart.cartCount,
        profileName: state.auth.profileDetails,
        auth: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        logout: () => dispatch(logOut()),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);