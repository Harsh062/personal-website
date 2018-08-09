import React, { Fragment } from 'react';

import '../styles/home.css';

const Home = () => {
    return (
        <section id="home" className="section scrollspy full-height">
        <div className="banner-text-wrapper">
			<div className="title">Harsh <span>Gandhi</span></div>
			<div className="sub-title">FULL-STACK WEB DEVELOPER</div>
			<div className="skills">HTML5 - CSS3 - JavaScript - Angular - ReactJs - NodeJs</div>
		</div>
        </section>
    )
}

export default Home;