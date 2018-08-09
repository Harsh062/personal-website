import React, { Fragment } from 'react';

import '../styles/experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section scrollspy">
        <h3 className="page-title white-text theme-bkg">Experience</h3>
        <div className="container">
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col s12 m2"><a href="https://altisource.com/" target="_blank"><img alt="Altisource logo" src="./assets/altisource-logo.png" className="responsive-img center-block" /></a></div>
                <div className="col s12 m10">
                  <p><span className="card-title"><a href="https://altisource.com/" target="_blank" className="card-text-color">Altisource Business Solutions</a></span></p>
                </div>
              </div>
              <div className="role theme-color">Front-End Developer</div>
              <p><em className="project-txt">An integrated suite of SaaS products that helps the management of documents in order to bring efficiency and automation to the mortgage origination and mortgage servicing markets
</em></p>
              <ul>
                <li>Worked as Front End developer taking responsibility of Javascript code structuring, resolving issues and converting wireframes into responsive web pages.
Worked in an agile environment with continuous build and deployment to Bamboo.
</li>
                <li>Worked as Front End developer taking responsibility of Javascript code structuring, resolving issues and converting wireframes into responsive web pages.
</li>
              </ul>
            </div>
            <div className="card-action"><span>Sept 2017 - August 2018  |  Bengaluru, India</span></div>
          </div>
          <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col s12 m2"><a href="https://www.above-inc.com/" target="_blank"><img alt="Above logo" src="./assets/above-logo.jpeg" className="responsive-img center-block" /></a></div>
                <div className="col s12 m10">
                  <p><span className="card-title"><a href="https://www.above-inc.com/" target="_blank" className="card-text-color">Above Solutions</a></span></p>
                </div>
              </div>
              <div className="role theme-color">Front-End Developer</div>
              <p><div className="project-txt">Built ​​an ​​LMS ​​portal​ ​for ​​the ​​California ​​Charter​ ​Preparatory​ ​Schools​​ in​ ​the ​​US.
</div></p>
              <ul>
                <li>Technologies​ Used:​ HTML5,​​ CSS3,​​ Javascript,​​ AngularJS​​ 1.5,​​ Angular​ ​Material</li>
              </ul>
              <p><div className="project-txt">Built a website that lets flyers across the world help other flyers who seek    
           assistance <a href="https://www.flyero.com" target="_blank">www.flyero.com</a>
</div></p>
              <ul>
                <li>Technologies​ Used:​ HTML5, ​​CSS3, ​​Javascript,​​ Angular​​4,​​ Bootstrap</li>
              </ul>
            </div>
            <div className="card-action"><span>July 2016 - Sept 2017  |  Bengaluru, India</span></div>
          </div>
        </div>
      </section>
    )
}

export default Experience;