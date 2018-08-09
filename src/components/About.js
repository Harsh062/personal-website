import React, { Fragment } from 'react';

import '../styles/about.css';

const About = () => {
    return (
      <Fragment>
        <section id="about" className="section scrollspy">
        <div className="page-title white-text theme-bkg">About</div>
        <div className="container">
          <blockquote>
            <div className="cursive">A self-driven, workoholic tech enthusiast with a passion for building great products & using technology to solve real-world problems.</div>
          </blockquote>
          <div className="desc">
          <div>Hello! My name is Harsh Gandhi, and I'm a freelance, full-stack web developer, experienced with all phases of the web development life cycle.</div>
          <div>I graduated with a B.E.(Hons.) in Electronics & Instrumentaion and M.Sc.(Hons.) in Chemistry in 2016. My encounter with coding started with my first job and I have been practicing it ever since :)</div>
          <div>In my free time, I enjoy continually building on my skills by studying advancements in industry trends. I strongly believe in the physics first principles approach to thinking and use it to make most of the decisions of my life.</div>
          <div>Lately, I've also been spending a lot of time focusing on my back-end skills. As much as I love the building beautiful user interfaces, I believe server is the place that brings us closer to the machines we both labor on and retrieve our information from. </div>
          <div>Well, now you know a little bit about me and what I can do. Have a look around. If you see something you like, please feel free to reach out! I'm always on the prowl for the next exciting web development project. Enjoy!</div>
          </div>
        </div>
      </section>
      </Fragment>
    )
}

export default About;