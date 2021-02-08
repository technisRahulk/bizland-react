import React,{Component} from "react";
import {Link} from 'react-scroll'
class Home extends React.Component{
    render(){
        return(
            <div className="app-new">
                 <section id="hero" className="d-flex align-items-center">
                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        <h1>Welcome to <span>BizLand</span>
                        </h1>
                        <h2>We are team of talented designers making websites with Bootstrap</h2>
                        <div className="d-flex">
                            <Link to="about" className="btn-get-started scrollto"  smooth={true}>Get Started</Link>
                        </div>
                    </div>
                </section>
                <main id="main"/>

                {/*  Featured Services Section  */}
                <section id="featured-services" className="featured-services">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="bx bxl-dribbble"></i></div>
                            <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><i className="bx bx-file"></i></div>
                            <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon"><i className="bx bx-tachometer"></i></div>
                            <h4 className="title"><a href="">Magni Dolores</a></h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                        <div className="icon"><i className="bx bx-world"></i></div>
                        <h4 className="title"><a href="">Nemo Enim</a></h4>
                        <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>

                    </div>

                </div>
                </section>
                {/*  ======= About Section ======= */}
                <section id="about" className="about section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>About</h2>
                            <h3>Find Out More <span>About Us</span></h3>
                            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
                                <img src={require("../img/about.jpg").default} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="font-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                <li>
                                    <i className="bx bx-store-alt"></i>
                                    <div>
                                        <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                        <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="bx bx-images"></i>
                                    <div>
                                        <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                                        <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi</p>
                                    </div>
                                </li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            
        );
    }
  }
export default Home