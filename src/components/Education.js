import React from 'react';

import '../styles/sidenav.css';

const Intro = () => {
    return (
      <section id="education" className="section scrollspy">
        <h3 className="page-title white-text theme-bkg">Education</h3>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card edu">
                <div className="card-content">
                  <div><span className="card-title"><a href="http://google.com/" target="_blank" className="link-color">Self Learning</a></span></div>
                  <p>Internet (2016 - Present)</p>
                  <ul>
                    <li>Web Technologies</li>
                    <li>Self Rating: 80% ;)</li>
                  </ul>
                </div>
              </div>
              </div>
            <div className="col s12 m6">
              <div className="card edu">
                <div className="card-content edu">
                  <div><span className="card-title"><a href="http://www.bits-pilani.ac.in/" target="_blank" className="link-color">BITS Pilani, K.K. Birla Goa Campus</a></span></div>
                  <p>Goa, India (2011 - 2016)</p>
                  <ul>
                    <li>B.E.(Hons.) in Electronics & Instrumentation</li>
                    <li>M.Sc.(Hons.) in Chemistry</li>
                    <li>GPA: 7.07</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="card edu">
                <div className="card-content edu">
                  <div><span className="card-title"><a className="link-color">J.V.Mehta Navyug Vidyalaya Khamgaon</a></span></div>
                  <p>Khamgaon, India (2008 - 2010)</p>
                  <ul>
                    <li>Higher Seconday School</li>
                    <li>Percentage: 82.83</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card edu">
                <div className="card-content">
                  <div><span className="card-title"><a className="link-color">S.S.D.V DNYANPEETH</a></span></div>
                  <p>Khamgaon, India (till 2008)</p>
                  <ul>
                    <li>Junior Seconday School</li>
                    <li>Percentage: 90.61</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Intro;