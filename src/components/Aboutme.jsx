import React from 'react'
import { Link } from 'react-router-dom'

const Aboutme = () => {
  return (
    <React.Fragment>
        <section id="hello" className="container section">
            <div className="row">
            <div className="col-md-12">
                <h2 id="hello_header" className="section__title">About me_</h2>
                <p className="section__description">
                I am Junior Fullstack Developer able to build a Web presence from the ground up - from concept, navigation,
                layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using
                current best practices in Web development. I am a fast learner, hard worker and team player who is proficient in
                an array of scripting languages and multimedia Web tools.
                </p>
                <p className="section__description">
                I am currently a software developer at <Link to="https://broadspectrumltd.com/" target = "_blank" rel = "noopener noreferrer" >Broadspectrum Ghana</Link>, where I help build payment gateways. 
                Before joining Broadspectrum, I obtained a first-class bachelor’s degree in Computer Engineering from Kwame Nkrumah University of Science and Technology (KNUST), Ghana.
                </p>

                <p className="section__description">
                My primary research interests include Computer Vision, Machine Learning, Big Data Analytics, Embedded Systems, Robotics and Internet of Things (IoT). 
                I am very interested in working at the intersection of Systems and Artificial Intelligence (AI) / Machine Learning (ML) to build the next generation intelligent computer systems that would allow us to fully harness the power of AI/ML to solve problems. 
                I am very open to exploring new fields and learning about new things.
                </p>
                <Link to="okay" className="section_btn site-btn"><img src="assets/img/img_btn_icon.png" alt="" />Download CV</Link>
            </div>
            </div>
        </section>
        <hr></hr>
    </React.Fragment>
  )
}

export default Aboutme