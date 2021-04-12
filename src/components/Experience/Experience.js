import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import pic from '../../images/school.jpg';
import pic1 from '../../images/college.jpg';
import pic4 from '../../images/pic4.png';
import pic5 from '../../images/pic5.png';
import pic8 from '../../images/pic8.png';
import pic9 from '../../images/pic9.png';
import pic10 from '../../images/pic10.jpg';
import './experience.scss';

export default function Achievements() {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);

    return (
        <div className="experience">
            <div className="exp">
                <h1 data-aos="fade-up" className="tag">Experience</h1>

                <div data-aos="fade-up" className="school">
                    <h2>Mount Carmel School <br/> (2005 - 2019)</h2><br/>
                    <div className="detail-info">
                    <img src={pic} alt="school" className="sch"/>
                    <div className="school-info">
                    <p> <b>→</b> Secured 10 CGPA in Class 10 along with Certificate of Merit from CBSE</p><br/>
                    <p> <b>→</b> Secured 94.4% in Class 12 ranking at Ninth position out of all students in my school</p><br/> 
                    <p> <b>→</b> Been a part of School Basketball Team at Zonal and Inter-Zonal Level</p><br/>
                    <p> <b>→</b> Been a part of National Cadet Corps (NCC)</p><br/>
                    <p> <b>→</b> Participated in various interschool competitions and olympiads</p><br/>
                    <p> <b>→</b> Participated in 5 MUNs and won Special Mention at FAPSMUN in 2019</p><br/>
                    <p> <b>→</b> Secured Silver Medal in Hindi Olympiad twice and a Bronze Medal in English Olympiad</p>
                        
                    </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="college">
                    <h2>Jaypee Institute of Information Technology, Sector - 128 <br/> (2019 - Present)</h2><br/>
                    <div className="detail-info">
                    <img src={pic1} alt="school" className="clg"/>
                    <div className="school-info">
                    <p> <b>→</b> Current CGPA : 8.8</p><br/>
                    <p> <b>→</b> Member of National Service Scheme (NSS) JIIT 128</p>
                        
                    </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="college">
                    <h2>Wikasta Business and Technical Solutions Pvt. Ltd. <br/> (March 2020 - April 2020)</h2><br/>
                    <div className="detail-info">
                    <img src={pic4} alt="school" className="intrn"/>
                    <div className="school-info">
                    <p> <b>→</b> Worked as a Technical Content Developer</p><br/>
                    <p> <b>→</b> Created questions for hosting on site and fixed layout issues in the site</p>
                        
                    </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="college">
                    <h2>Google Developer Students Clubs JIIT-128 <br/> (September 2020 - Present)</h2><br/>
                    <div className="detail-info">
                    <img src={pic8} alt="school" className="intrn"/>
                    <div className="school-info">
                    <p> <b>→</b> Technical Coordinator (Web Development) and Content Writer</p><br/>
                    <p> <b>→</b> Promote the importance of coding among freshers, conducting workshops and guide and teach them about Web Development</p>
                        
                    </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="college">
                    <h2>Prepbytes <br/> (April 2020 - October 2020)</h2><br/>
                    <div className="detail-info">
                    <img src={pic5} alt="school" className="prep"/>
                    <div className="school-info">
                    <p> <b>→</b> Worked as a Campus Business Manager</p><br/>
                    <p> <b>→</b> Popularize the importance of Coding among students and Promote <br/>
                                 about the various Coding Competitions and Courses offered by Prepbytes</p>
                        
                    </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="college">
                    <h2>Wikasta Business and Technical Solutions Pvt. Ltd. <br/> (September 2020 - October 2020)</h2><br/>
                    <div className="detail-info">
                    <img src={pic4} alt="school" className="intrn"/>
                    <div className="school-info">
                    <p> <b>→</b> Worked as a Technical Content Developer</p><br/>
                    <p> <b>→</b> Created questions for hosting on site</p>
                        
                    </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="college">
                    <h2>The Sparks Foundation <br/> (March 2021 - April 2021)</h2><br/>
                    <div className="detail-info">
                    <img src={pic9} alt="school" className="intrn"/>
                    <div className="school-info">
                    <p> <b>→</b> Worked as a Web Development and Designing Intern</p><br/>
                    <p> <b>→</b> Created two projects for the company - Sparks Banking System and Payment Gateway System</p>
                        
                    </div>
                    </div>
                </div>

                <div data-aos="fade-up" className="college bottom">
                    <h2>Yugam Navridhi Foundation <br/> (April 2021 - Present)</h2><br/>
                    <div className="detail-info">
                    <img src={pic10} alt="school" className="prep"/>
                    <div className="school-info">
                    <p> <b>→</b> Worked as a Web Development Intern</p><br/>
                    <p> <b>→</b> Fixing issues and developing new features in the company’s website in both Frontend and Backend.</p>
                        
                    </div>
                    </div>
                </div>
            </div>    
        </div>
    );
}
