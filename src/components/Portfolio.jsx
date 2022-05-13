import React from 'react';




// Import Swiper styles
import 'swiper/css';
import PortfolioSingleItem from './PortfolioSingleItem';

const Portfolio = () => {

  return (
    <React.Fragment>
        <section id="portfolio" className="container section">
            <div className="row">
            <div className="col-md-12">
                <h2 id="portfolio_header" className="section__title">My projects_</h2>
            </div>
            </div>
            <div className="portfolio-cards">

            <PortfolioSingleItem
                key = 'one'
                id='portfolio1'
                title='The NotesApp'
                description="A simple, efficient, free note taking software developed with reactjs and expressjs"
                images = {["notes-app/Screenshot1.png", "notes-app/Screenshot2.png", "notes-app/Screenshot3.png", "notes-app/Screenshot4.png", "notes-app/Screenshot5.png", "notes-app/Screenshot6.png","notes-app/Screenshot7.png", "notes-app/Screenshot8.png", "notes-app/Screenshot9.png"]}
                usedStacks = {['Reactjs', 'Reduxjs/toolkit', 'Nodejs', 'Expressjs', 'MongoDB' ]}
                projectURL = "https://the-notesapp.netlify.app"
                githubURL = 'https://github.com/johnkdunyo/The-NotesApp'
            />

            <PortfolioSingleItem
                key = 'two'
                id='portfolio2'
                title='React Quiz App'
                description="A simple, quiz app developed in react"
                images = {["notes-app/Screenshot1.png", "notes-app/Screenshot2.png", "notes-app/Screenshot3.png", "notes-app/Screenshot4.png", "notes-app/Screenshot5.png", "notes-app/Screenshot6.png","notes-app/Screenshot7.png", "notes-app/Screenshot8.png", "notes-app/Screenshot9.png"]}
                usedStacks = {['Reactjs', 'Reduxjs/toolkit', 'Axios' ]}
                projectURL = "https://jondexter-react-quizapp.netlify.app/"
                githubURL = 'https://github.com/johnkdunyo/React-Quiz-App'
            />
          


            </div>
        </section>




        
    </React.Fragment>
  )
}

export default Portfolio