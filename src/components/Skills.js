import React, { Fragment } from 'react';

import '../styles/sidenav.css';

const Skills = () => {
    return (
        <section id="skills" className="section scrollspy">
        <h3 className="page-title white-text theme-bkg">Skills</h3>
        <div className="container">
          <div className="card">
            <div className="card-content">
              <h4 className="link-color light">HTML/CSS</h4>
              <div className="row text-center">
                <div className="col s4 m2 theme-color"><img alt="HTML5" src="./assets/html5.png" className="responsive-img" />HTML5</div>
                <div className="col s4 m2 theme-color"><img alt="JSX" src="./assets/react.png" className="responsive-img" />JSX</div>
                <div className="col s4 m2 theme-color"><img alt="CSS3" src="./assets/css3.png" className="responsive-img" />CSS3</div>
                <div className="col s4 m2 theme-color"><img alt="Bootstrap" src="./assets/bootstrap.png" className="responsive-img" />Bootstrap</div>
                <div className="col s4 m2 theme-color"><img alt="Material Design" src="./assets/materialize.png" className="responsive-img" />Material Design</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4 className="link-color light">Javascript</h4>
              <div className="row text-center">
                <div className="col s4 m2 theme-color"><img alt="Javascript" src="./assets/javascript.png" className="responsive-img" />Javascript</div>
                <div className="col s4 m2 theme-color"><img alt="React" src="./assets/react.png" className="responsive-img" />React</div>
                <div className="col s4 m2 theme-color"><img alt="Angular 1.x" src="./assets/angular.png" className="responsive-img" />Angular 1.x</div>
                <div className="col s4 m2 theme-color"><img alt="Angular 4" src="./assets/angular.png" className="responsive-img" />Angular 4</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4 className="link-color light">Back-End</h4>
              <div className="row text-center">
                <div className="col s4 m2 theme-color"><img alt="NodeJs" src="./assets/nodejs.png" className="responsive-img" />NodeJs</div>
                <div className="col s4 m2 theme-color"><img alt="MongoDB" src="./assets/mongodb.png" className="responsive-img" />MongoDB</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4 className="link-color light">Build Tools</h4>
              <div className="row text-center">
                <div className="col s4 m2 theme-color"><img alt="Webpack" src="./assets/webpack.png" className="responsive-img" />Webpack</div>
                <div className="col s4 m2 theme-color"><img alt="Gulp" src="./assets/gulp.png" className="responsive-img" />Gulp</div>
                <div className="col s4 m2 theme-color"><img alt="Grunt" src="./assets/grunt.png" className="responsive-img" />Grunt</div>
                <div className="col s4 m2 theme-color"><img alt="Bower" src="./assets/bower.png" className="responsive-img" />Bower</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h4 className="link-color light">Other</h4>
              <div className="row text-center">
                <div className="col s4 m2 theme-color"><img alt="Github" src="./assets/github.png" className="responsive-img" />Github</div>
                <div className="col s4 m2 theme-color"><img alt="Heroku" src="./assets/heroku.png" className="responsive-img" />Heroku</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Skills;