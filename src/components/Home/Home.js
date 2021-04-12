import React from 'react';
import './home.scss';

import pic from '../../images/myname.jpeg';

export default function Home() {

  return (
    <div className="home">
      <div className="contain animated animatedFadeInUp fadeInUp">
      <img className="mypic" src={pic} alt="my pic"/>
      <h1 className="intro">Hi ,<br /><br /> I am Abhir Raj Shrivastava</h1><br /><br />
      <p className="info">A Second year student pursuing B.tech in Computer Science
        and Engineering from Jaypee Institute of Information Technology , Noida .</p><br />

        <p className="info bottom">I am a Web developer skilled at MERN Stack and apart from designing beautiful and creative websites, I like to spend my time in Open Source Contribution and Competitive Programming.</p>
      </div>
    </div>
      
  );
}
