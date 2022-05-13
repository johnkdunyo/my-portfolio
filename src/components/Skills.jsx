import React from 'react';
import Icon from '@mdi/react'
import { mdiXml,mdiDatabase, mdiDatabaseSearch, mdiLanguageHtml5, mdiLanguageCss3, mdiLanguageJavascript, mdiLanguagePhp, mdiLanguagePython, mdiNodejs, mdiReact, mdiAws, mdiFirebase } from '@mdi/js';

const Skills = () => {
  return (
    <React.Fragment>
        <section id="skills" className="container section">
            <div className="row">
                <div className="col-md-12">
                <h2 id="skills_header" className="section__title">Skills_</h2>
                <div className="row">
                    <div className="col-lg-6 mb-3">
                    <h2 className="section__subheader">Code <span><Icon path={mdiXml} size={1} color='#6d56c1' /></span> </h2>
                    <div className="row">
                        <div className="col">
                        <ul className="skills__tags">
                            <li className='row ml-1'> 
                                <div className='col-2'>
                                    <Icon path={mdiLanguageHtml5} title="html" size={1} className="skills__tags-icon" />
                                </div>
                                <div className='col-8 skills__tags-text'>HTML(5)</div>
                            </li>
                            <li className='row ml-1'> 
                                <div className='col-2'>
                                    <Icon path={mdiLanguageCss3} title="html" size={1} className="skills__tags-icon" />
                                </div>
                                <div className='col-8 skills__tags-text'>CSS(3)</div>
                            </li>
                            <li className='row ml-1'> 
                                <div className='col-2'>
                                    <Icon path={mdiLanguageJavascript} title="html" size={1} className="skills__tags-icon" />
                                </div>
                                <div className='col-8 skills__tags-text'>JavaScript</div>
                            </li>
                            <li className='row ml-1'> 
                                <div className='col-2'>
                                    <Icon path={mdiLanguagePhp} title="html" size={1} className="skills__tags-icon" />
                                </div>
                                <div className='col-8 skills__tags-text'>PHP</div>
                            </li>
                            <li className='row ml-1'> 
                                <div className='col-2'>
                                    <Icon path={mdiLanguagePython} title="html" size={1} className="skills__tags-icon" />
                                </div>
                                <div className='col-8 skills__tags-text'>Python</div>
                            </li>
                            
                        </ul>
                        </div>

                        <div className="col">
                        <ul className="skills__tags">
                            <li className='row ml-1'> 
                                <div className='col-2'>
                                    <Icon path={mdiReact} title="html" size={1} className="skills__tags-icon" />
                                </div>
                                <div className='col-8 skills__tags-text'>Reactjs</div>
                            </li>
                            <li className='row ml-1'> 
                                <div className='col-2'>
                                    <Icon path={mdiNodejs} title="html" size={1} className="skills__tags-icon" />
                                </div>
                                <div className='col-8 skills__tags-text'>Nodejs</div>
                            </li>
                            <li className='row ml-1'> 
                                <div className='col-2'>
                                    <Icon path={mdiNodejs} title="html" size={1} className="skills__tags-icon" />
                                </div>
                                <div className='col-8 skills__tags-text'> Expressjs</div>
                            </li>
                        </ul>
                        </div>

                    
                    </div>
                </div>
                {/* <div className="vertical"></div>  */}
                <div className="col-lg-6 mb-3">
                    <h2 className="section__subheader">Database <span><Icon path={mdiDatabase} size={1} color='#6d56c1' /></span> </h2>
                    <div className="row">
                    <div className="col">
                        <ul className="skills__tags">
                        <li className='row ml-1'> 
                            <div className='col-2'>
                                <Icon path={mdiDatabaseSearch} title="html" size={1} className="skills__tags-icon" />
                            </div>
                            <div className='col-8 skills__tags-text'> SQL</div>
                        </li>
                        <li className='row ml-1'> 
                            <div className='col-2'>
                                <Icon path={mdiDatabaseSearch} title="html" size={1} className="skills__tags-icon" />
                            </div>
                            <div className='col-8 skills__tags-text'> MongoDB</div>
                        </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="skills__tags">
                        <li className='row ml-1'> 
                            <div className='col-2'>
                                <Icon path={mdiAws} title="html" size={1} className="skills__tags-icon" />
                            </div>
                            <div className='col-10 skills__tags-text'> Amazon Web Services</div>
                        </li>
                        <li className='row ml-1'> 
                            <div className='col-2'>
                                <Icon path={mdiFirebase} title="html" size={1} className="skills__tags-icon" />
                            </div>
                            <div className='col-10 skills__tags-text'> Firebase</div>
                        </li>
                        </ul>
                    </div>
                    </div>
                
                </div>
                </div>
            </div>
            </div>
            </section>
            <hr></hr>
    </React.Fragment>
  )
}

export default Skills