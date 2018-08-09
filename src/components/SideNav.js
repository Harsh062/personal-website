import React, { Fragment } from 'react';

import '../styles/sidenav.css';

const SideNav = () => {
    return (
        <Fragment>
        <nav className="hide-on-small-only">
      <ul className="side-nav fixed section table-of-contents">
        <li className="logo"><a id="logo-container" aria-label="Navigate to the beginning of the page" href="#home" className="brand-logo teal-text active">
            <h1>Harsh Gandhi<span className="brown-text light">Full Stack Developer</span></h1></a></li>
        <li className="bold"><a aria-label="Navigate to the About section" href="#about" className="waves-effect waves-dark teal-text"><i className="mdi-social-person small"></i><span>About</span></a></li>
        <li className="bold"><a aria-label="Navigate to the Experience section" href="#experience" className="waves-effect waves-dark cyan-text"><i className="mdi-action-trending-up small"></i><span>Experience</span></a></li>
        <li className="bold"><a aria-label="Navigate to the Skills section" href="#skills" className="waves-effect waves-dark purple-text"><i className="mdi-av-equalizer small"></i><span>Skills</span></a></li>
        <li className="bold"><a aria-label="Navigate to the Education section" href="#education" className="waves-effect waves-dark orange-text"><i className="mdi-social-school small"></i><span>Education</span></a></li>
        <li className="bold"><a aria-label="Navigate to the Contact section" href="#contact" className="waves-effect waves-dark brown-text"><i className="mdi-content-mail small"></i><span>Contact</span></a></li>
        <li className="bold"><a aria-label="Open Harsh's resume in a new tab" href="https://docs.google.com/document/d/1xBBCylEki6hR-6dRKhHxdofrXIP9jgnJKCrl2nmFrGs/edit?usp=sharing" target="_blank" className="waves-effect waves-dark grey-text text-darken-3"><i className="mdi-action-description small"></i><span>Resume</span></a></li>
      </ul>
    </nav>
      <nav className="hide-on-large only trigger z-depth-1"><a aria-label="Toggle visibility of the mobile navbar" href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
        <div className="name-title"><a id="name" aria-label="Navigate to the beginning of the page" href="#main" className="teal-text">Harsh Gandhi</a><span className="brown-text light">Full Stack Developer</span></div>
      </nav>
      <nav className="hide-on-large only">
        <ul id="slide-out" className="side-nav" style={{width: 190, left: -200}}>
          <li className="bold"><a aria-label="Navigate to the About section" href="#about" className="waves-effect waves-dark teal-text"><i className="mdi-social-person small"></i><span>About</span></a></li>
          <li className="bold"><a aria-label="Navigate to the Experience section" href="#experience" className="waves-effect waves-dark cyan-text"><i className="mdi-action-trending-up small"></i><span>Experience</span></a></li>
          <li className="bold"><a aria-label="Navigate to the Skills section" href="#skills" className="waves-effect waves-dark purple-text"><i className="mdi-av-equalizer small"></i><span>Skills</span></a></li>
          <li className="bold"><a aria-label="Navigate to the Education section" href="#education" className="waves-effect waves-dark orange-text"><i className="mdi-social-school small"></i><span>Education</span></a></li>
          <li className="bold"><a aria-label="Navigate to the Contact section" href="#contact" className="waves-effect waves-dark brown-text"><i className="mdi-content-mail small"></i><span>Contact</span></a></li>
          <li className="bold"><a aria-label="Open Harsh's Resume in a new tab" href="https://docs.google.com/document/d/1xBBCylEki6hR-6dRKhHxdofrXIP9jgnJKCrl2nmFrGs/edit?usp=sharing" target="_blank" className="waves-effect waves-dark grey-text text-darken-3"><i className="mdi-action-description small"></i><span>Resume</span></a></li>
        </ul>
      </nav>
      </Fragment>
    )
}

export default SideNav;