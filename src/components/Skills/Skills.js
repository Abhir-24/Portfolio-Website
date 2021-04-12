import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './skills.scss';

export default function Skills() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className="skills">

    <div className="tech">
    <div data-aos="fade-up" className="skill-head">Skills</div>
    <div data-aos="fade-up" className="skill"><div className="inner">react js</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">node js</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">express js</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">mongo db</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">mongoose</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">firebase</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">javascript</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">html</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">css</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">bootstrap</div></div> 
    <div data-aos="fade-up" className="skill"><div className="inner">c++</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">c</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">git</div></div>
    <div data-aos="fade-up" className="skill"><div className="inner">python</div></div>
    <div data-aos="fade-up" className="skill bottom"><div className="inner">mysql</div></div>
    </div>
    </div>
  );
}
