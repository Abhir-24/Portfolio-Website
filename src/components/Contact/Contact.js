import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './contact.scss';

export default function Skills() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className="contact">

    <div className="tech">
    <div data-aos="fade-up" className="contact-head">Contact Me</div>
    <a className="lin f" href="https://www.facebook.com/profile.php?id=100012264122185"><div data-aos="fade-up" className="ways f"><div className="inner"><i className="fab fa-facebook-square" />Facebook</div></div></a>
    <a className="lin in" href="https://www.linkedin.com/in/abhir-raj-shrivastava-4a57711a0"><div data-aos="fade-up" className="ways in"><div className="inner"><i className="fab fa-linkedin" />Linkedin</div></div></a>
    <a className="lin i" href="https://instagram.com/abhir_24"><div data-aos="fade-up" className="ways i"><div className="inner"><i className="fab fa-instagram" />Instagram</div></div></a>
    <a className="lin g" href="https://github.com/Abhir-24"><div data-aos="fade-up" className="ways g"><div className="inner"><i className="fab fa-github" />Github</div></div></a>
    <a className="lin m" href="mailto:abhir.raj2410@gmail.com"><div data-aos="fade-up" className="ways m bottom"><div className="inner"><i className="fas fa-envelope" />Email</div></div></a>

    </div>
    </div>
  );
}
