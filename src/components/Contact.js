import React, { Fragment } from 'react';

import '../styles/sidenav.css';

import Map from '../util/Map';

const Contact = () => {
    function handleMarkerClick(){
      console.log('Clicked on marker');
    }
    return (
        <section id="contact" className="section scrollspy">
        <h3 className="page-title white-text theme-bkg">Contact</h3>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
          <p><a aria-label="Email Harsh" href="mailto:gandhiharsh3@gmail.com" data-position="top" data-tooltip="Email Harsh" className="btn-floating btn-large waves-effect waves-light tooltipped"><i className="fa fa-envelope"></i></a><a alt="" href="mailto:gandhiharsh3@gmail.com" target="_blank">gandhiharsh3@gmail.com</a></p>
          <p><a aria-label="View Harsh on GitHub" href="https://github.com/Harsh062" target="_blank" data-position="top" data-tooltip="View Harsh on GitHub" className="btn-floating btn-large waves-effect waves-light tooltipped"><i className="fa fa-github"></i></a><a alt="My github profile" href="https://github.com/Harsh062" target="_blank">https://github.com/Harsh062</a></p>
          <p><a aria-label="View Harsh on LinkedIn" href="https://www.linkedin.com/in/harsh-gandhi-435b0624/" target="_blank" data-position="top" data-tooltip="View Harsh on LinkedIn" className="btn-floating btn-large waves-effect waves-light tooltipped"><i className="fa fa-linkedin"></i></a><a alt="My linkedIn profile" href="https://www.linkedin.com/in/harsh-gandhi-435b0624/" target="_blank">https://www.linkedin.com/in/harsh-gandhi-435b0624/</a></p>
          <p><a aria-label="View Harsh on Skype" target="_blank" data-position="top" data-tooltip="View Harsh on Skype" className="btn-floating btn-large waves-effect waves-light tooltipped"><i className="fa fa-skype"></i></a><a alt="Skype Username">harsh.gandhi98</a></p>
          <p><a aria-label="View Harsh on Facebook" href="https://www.facebook.com/harsh.gandhi.714" target="_blank" data-position="top" data-tooltip="View Harsh on Facebook" className="btn-floating btn-large waves-effect waves-light tooltipped"><i className="fa fa-facebook"></i></a><a alt="My facebook Profile" href="https://www.facebook.com/harsh.gandhi.714" target="_blank">https://www.facebook.com/harsh.gandhi.714</a></p>
          <p><a aria-label="View Harsh on Phone" target="_blank" data-position="top" data-tooltip="View Harsh on Phone" className="btn-floating btn-large waves-effect waves-light tooltipped"><i className="fa fa-phone"></i></a><a alt="(+91)8197825862">(+91)8197825862</a></p>
          <p><a aria-label="View Harsh on WhatsApp" target="_blank" data-position="top" data-tooltip="View Harsh on Phone" className="btn-floating btn-large waves-effect waves-light tooltipped"><i className="fa fa-whatsapp"></i></a><a alt="(+91)9403581862">(+91)9403581862</a></p>
          </div>
          <div className="col s12 m6">
        <Map
        isMarkerShown={true}
        onMarkerClick={handleMarkerClick}
      />
      </div>
      </div>
      </div>
      </section>
    )
}

export default Contact;