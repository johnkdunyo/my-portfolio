import React from 'react'
import Icon from '@mdi/react'
import {  mdiGithub, mdiLinkedin, mdiTwitter, mdiSchool } from '@mdi/js'


const Hero = () => {
  return (
    <React.Fragment>
        <header className="main-header" style={{backgroundImage: "url(assets/img/hero-banner2.jpg"}}>
            <div className="container">
            <div className="row personal-profile">
                <div className="col-md-4 personal-profile__avatar">
                <img className="" src="assets/img/jon_pp.jpg" alt="avatar" />
                </div>
                <div className="col-md-8">
                <p className="personal-profile__name">John Kwame Dunyo_</p>
                <p className="personal-profile__work">Software Developer | Research Engineer | Data Analyst</p>
                <div className="personal-profile__contacts">
                    <dl className="contact-list contact-list__opacity-titles">
                    <dt>Phone:</dt>
                    <dd><a href="tel:+233(0)543460633">+233-(0)54-346-0633</a></dd>
                    <dt>Email:</dt>
                    <dd><a href="mailto:johnkdunyo@gmail.com">johnkdunyo@gmail.com</a></dd>
                    </dl>
                </div>
                <p className="personal-profile__social">

                    <a href="https://www.linkedin.com/in/johnkdunyo/" target="_blank" rel='noreferrer'>
                        <Icon path={mdiLinkedin}
                            title="LinkedIn @johnkdunyo"
                            size={1.5}
                            color="white"
                        />
                    </a>

                    <a href="https://github.com/johnkdunyo" target="_blank" rel='noreferrer'>
                        <Icon path={mdiGithub}
                            title="Github @johnkdunyo"
                            size={1.5}
                            color="white"
                        />
                    </a>


                    <a href="https://twitter.com/johnkdunyo" target="_blank" rel='noreferrer'>
                        <Icon path={mdiTwitter}
                            title="Twitter @johnkdunyo"
                            size={1.5}
                            color="white"
                        />
                    </a>

                    <a href="https://scholar.google.com/citations?user=PZfAUoUAAAAJ&hl=en" target="_blank" rel='noreferrer'>
                        <Icon path={mdiSchool}
                            title="Google Scholar @johnkdunyo"
                            size={1.5}
                            color="white"
                        />
                    </a>

                </p>
                </div>
            </div>
            </div>
        </header>
    </React.Fragment>
  )
}

export default Hero