import React from 'react'

const Contact = () => {
  return (
    <React.Fragment>
        <div className="background" style={{backgroundImage: "url(assets/img/img_bg_main.jpg)"}}>
            <div id="contact" className="container section">
            <div className="row">
                <div className="col-md-12">
                <p id="contacts_header" className="section__title">Get in touch_</p>
                </div>
            </div>
            <div className="row contacts">
                <div className="col-md-5 col-lg-4">
                <div className="contacts__list">
                    <dl className="contact-list">
                    <dt>Phone:</dt>
                    <dd><a href="tel:+233543460633">+233 (0)54 346 0633</a></dd>
                    <dt>Email:</dt>
                    <dd><a href="mailto:johnkdunyo@gmail.com">johnkdunyo@gmail.com</a></dd>
                    </dl>
                </div>
                <div className="contacts__social">
                    <ul>
                    <li><a href="https://www.linkedin.com/in/johnkdunyo/" target='_blank' rel='noreferrer'>Linkedin</a></li>
                    <li><a href="https://github.com/johnkdunyo" target='_blank' rel='noreferrer'>GitHub</a></li>
                    <li><a href="https://twitter.com/johnkdunyo" target='_blank' rel='noreferrer'>Twitter</a></li>
                    </ul>
                </div>
                </div>
                <div className="col-md-7 col-lg-5">
                <div className="contacts__form">
                    <p className="contacts__form-title">Or just write me a message here_</p>
                    <form className="js-form">
                    <div className="form-group">
                        <input 
                            className="form-field js-field-name" 
                            type="text" 
                            placeholder="Your name" 
                            required 
                        />
                        <span className="form-validation"></span>
                        <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span>
                    </div>
                    <div className="form-group">
                        <input 
                            className="form-field js-field-email" 
                            type="email"  
                            placeholder="Your e-mail" 
                            required
                        />
                        <span className="form-validation"></span>
                        <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span>
                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-field js-field-message" 
                            placeholder="Type your message here" 
                            required
                        >    
                        </textarea>
                        <span className="form-validation"></span>
                        <span className="form-invalid-icon"><i className="mdi mdi-close" aria-hidden="true"></i></span>
                    </div>
                    <button className="site-btn site-btn--form" type="submit" value="Send">Send</button>
                    </form>
                </div>
                <div className="footer">
                    <p>© 2022 johnkdunyo. All Rights Reserved</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Contact