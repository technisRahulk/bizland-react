import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
                <div className="container d-flex">
                    <div className="contact-info mr-auto">
                        <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                        <i className="icofont-phone"></i> +1 5589 55488 55
                    </div>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                        <a href="#" className="skype"><i className="icofont-skype"></i></a>
                        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                    </div>
                </div>
    </div>
    <header id="header" className="fixed-top">
        <div className="container ">
            <Navbar  light expand="md">
                <h1 className="logo mr-auto"><NavLink to='/' exact>BizLand<span>.</span></NavLink></h1>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto nav-menu align-items-center" navbar>
                        <NavItem>
                            <NavLink to="/" exact>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/Contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    </header>
      
    </div>
  );
}

export default Header;



















// import React,{Component} from "react";
// import {NavLink} from 'react-router-dom'

// class Header extends React.Component{
//   render(){
//       return(
//         <div className='tpb'>
//             {/* topbar */}
            // <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
            //     <div className="container d-flex">
            //         <div className="contact-info mr-auto">
            //             <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">contact@example.com</a>
            //             <i className="icofont-phone"></i> +1 5589 55488 55
            //         </div>
            //         <div className="social-links">
            //             <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
            //             <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
            //             <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
            //             <a href="#" className="skype"><i className="icofont-skype"></i></a>
            //             <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
            //         </div>
            //     </div>
            // </div>

//             {/* actual navbar */}
            // <header id="header" className="fixed-top">
            //     <div className="container d-flex align-items-center">
            //         <h1 className="logo mr-auto"><NavLink to='/' exact>BizLand<span>.</span></NavLink></h1>
                    // <nav className="nav-menu d-none d-lg-block">
                    //     <ul>
                    //         <li><NavLink to="/" exact>Home</NavLink></li>
                    //         {/* <li><Link to="about" spy={true} smooth={true}>About Us</Link></li>
                    //         <li><Link to="/Contact">Portfolio</Link></li> */}
                    //         <li><NavLink to="/Contact">Contact</NavLink></li>
                    //     </ul>
                    // </nav>

            //     </div>
            // </header>
//         </div>
//       );

//   }
// }