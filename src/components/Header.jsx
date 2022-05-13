import React from 'react'
import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js';

const Header = () => {
  return (
    <React.Fragment>
        <div className="menu">
            <div className="container">
            <div className="row">
                <div className="menu__wrapper d-none d-lg-block col-md-12">
                <nav className="">
                    <ul>
                    <li><a href="#hello">Hello</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">testimonials</a></li>
                    <li><a href="#blog">blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                </div>
                <div className="menu__wrapper col-md-12 d-lg-none">
                <button type="button" className="menu__mobile-button">
                    <span>
                        <Icon path={mdiMenu}
                            title="mobile menu"
                            size={1.5}
                            // color="white"
                        />
                    </span>
                </button>
                </div>
            </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Header