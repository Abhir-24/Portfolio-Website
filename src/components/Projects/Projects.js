import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './projects.scss';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import project4 from '../../images/project4.png';
import project5 from '../../images/project5.png';
import project6 from '../../images/project6.png';
import project7 from '../../images/project7.png';

export default function Projects() {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);

    return (
      <div className="projects">

          <h1 data-aos="fade-up" className="project-head">Projects</h1>

        <div data-aos="fade-up" className="project">
        <div className="pro effect">
            <div className="front">
                <img src={project1} alt="project" />        
            </div>
            <div className="back">
                <div className="back-content">
                    <h2 className="web-head">Foods Point Project</h2>
                    <p className="web-name">A website made using <br/> forkify api for searching <br/> ingredients of recipes.</p><br/>
                    <p className="web-name"><a href="https://github.com/Abhir-24/Foods-Point-Project">Click here</a>  to view project</p>
                </div>
            </div>
        </div>
        </div> 

         <div data-aos="fade-up" className="project">
        <div className="pro effect">
            <div className="front">
                <img src={project2} alt="project" />
            </div>
            <div className="back">
                <div className="back-content">
                    <h2 className="web-head">Cakes Mania Website</h2>
                    <p className="web-name">A responsive static website <br/> cake store website made <br/> using HTML, CSS and Javascript.</p><br/>
                    <p className="web-name"><a href="https://cakes-mania.netlify.app/">Click here</a>  to view project</p>
                </div>
            </div>
        </div>
        </div>       

        <div data-aos="fade-up" className="project">
        <div className="pro effect">
            <div className="front">
                <img src={project3} alt="project" />
            </div>
            <div className="back">
                <div className="back-content">
                    <h2 className="web-head">DSC Attendance Management System</h2>
                    <p className="web-name">A website made in React JS used <br/>to record attendance in DSC Workshop.</p><br/>
                    <p className="web-name"><a href="https://dsc-attendance-manager.netlify.app/t">Click here</a>  to view project</p>
                </div>
            </div>
        </div>
        </div>

        <div data-aos="fade-up" className="project">
        <div className="pro effect">
            <div className="front">
                <img src={project4} alt="project" />
            </div>
            <div className="back">
                <div className="back-content">
                    <h2 className="web-head">Weather App</h2>
                    <p className="web-name">A simple weather app made in React JS.</p><br/>
                    <p className="web-name"><a href="https://github.com/Abhir-24/Weather-App">Click here</a>  to view project</p>
                </div>
            </div>
        </div>
        </div>

        <div data-aos="fade-up" className="project">
        <div className="pro effect">
            <div className="front">
                <img src={project6} alt="project" />
            </div>
            <div className="back">
                <div className="back-content">
                    <h2 className="web-head">Sparks Bank</h2>
                    <p className="web-name">A basic bank management website <br /> made using EJS, Node Js, <br /> Mongodb and Express js.</p><br/>
                    <p className="web-name"><a href="https://sparks-banking-system.herokuapp.com/">Click here</a>  to view project</p>
                </div>
            </div>
        </div>
        </div>

        <div data-aos="fade-up" className="project">
        <div className="pro effect">
            <div className="front">
                <img src={project7} alt="project" />
            </div>
            <div className="back">
                <div className="back-content">
                    <h2 className="web-head">Payment Gateway System</h2>
                    <p className="web-name">A basic Payment Gateway website for <br />donations made using razorpay api.</p><br/>
                    <p className="web-name"><a href="https://sparks-donation-gateway.netlify.app/">Click here</a>  to view project</p>
                </div>
            </div>
        </div>
        </div>

        <div data-aos="fade-up" className="project">
        <div className="pro effect">
            <div className="front">
                <img src={project5} alt="project" />
            </div>
            <div className="back">
                <div className="back-content">
                    <h2 className="web-head">COVID - 19 Info App</h2>
                    <p className="web-name">A simple website telling information about <br/> COVID-19 made using <br/> HTML, CSS and Bootstrap.</p><br/>
                    <p className="web-name"><a href="https://abhir-24.github.io/COVID-19/">Click here</a> to view project</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    );
}
