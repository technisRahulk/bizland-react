import React,{Component} from "react";

class Gallery extends React.Component{
    render(){
        return(
            <div>
                <section id="portfolio" className="portfolio">
                    <div className="container" data-aos="fade-up">
  
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <h3>Check our <span>Portfolio</span></h3>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    </div>
  
                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-card">Card</li>
                            <li data-filter=".filter-web">Web</li>
                        </ul>
                        </div>
                    </div>
  
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
  
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src={require('../img/portfolio/portfolio-1.jpg').default} className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>App 1</h4>
                            <p>App</p>
                        </div>
                        </div>
  
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src={require("../img/portfolio/portfolio-2.jpg").default} className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Web 3</h4>
                            <p>Web</p>
                        </div>
                        </div>
  
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src={require("../img/portfolio/portfolio-3.jpg").default} className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>App 2</h4>
                            <p>App</p>
                        </div>
                        </div>
  
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src={require("../img/portfolio/portfolio-4.jpg").default} className="img-fluid" alt=""/>
                        <div className="portfolio-info">
                            <h4>Card 2</h4>
                            <p>Card</p>
                        </div>
                        </div>
  
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src={require("../img/portfolio/portfolio-5.jpg").default} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Web 2</h4>
                            <p>Web</p>
                        </div>
                        </div>
  
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <img src={require("../img/portfolio/portfolio-6.jpg").default} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>App 3</h4>
                            <p>App</p>
                        </div>
                        </div>
  
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src={require("../img/portfolio/portfolio-7.jpg").default} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Card 1</h4>
                            <p>Card</p>
                        </div>
                        </div>
  
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <img src={require("../img/portfolio/portfolio-8.jpg").default} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Card 3</h4>
                            <p>Card</p>
                        </div>
                        </div>
  
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <img src={require("../img/portfolio/portfolio-9.jpg").default} className="img-fluid" alt="" />
                        <div className="portfolio-info">
                            <h4>Web 3</h4>
                            <p>Web</p>
                        </div>
                        </div>
  
                    </div>
  
                    </div>
                </section>
            </div>
        );
    }
}
export default Gallery