import React from 'react';




// Import Swiper styles
import 'swiper/css';
import PortfolioSingleItem from './PortfolioSingleItem';
import PortfolioSingleItem2 from './PortfolioSingleItem2';

const Portfolio = () => {

  return (
    <React.Fragment>
        <section id="portfolio" className="container section">
            <div className="row">
            <div className="col-md-12">
                <h2 id="portfolio_header" className="section__title">Key projects_</h2>
            </div>
            </div>
            <div className="portfolio-cards">

            <PortfolioSingleItem
                key = 'one'
                id='portfolio1'
                title='The NotesApp'
                description="
                A simple, efficient, free note taking software developed with reactjs and expressjs.
                It also allows you to save pictures, links and formatted texts"
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
                images = {["quiz-app/Screenshot2.png", "quiz-app/Screenshot1.png", "quiz-app/Screenshot3.png", "quiz-app/Screenshot4.png"]}
                usedStacks = {['Reactjs', 'Reduxjs', 'Axios', 'html-entities' ]}
                projectURL = "https://jondexter-react-quizapp.netlify.app/"
                githubURL = 'https://github.com/johnkdunyo/React-Quiz-App'
            />

            <PortfolioSingleItem
                key = 'three'
                id='portfolio3'
                title='React Youtube Clone'
                description="A simple youtube clone built with react using the youtube api"
                images = {["youtube-clone/Screenshot2.png", "youtube-clone/Screenshot1.png", "youtube-clone/Screenshot3.png", "youtube-clone/Screenshot4.png"]}
                usedStacks = {['Reactjs', 'Reduxjs', 'Axios', 'html-entities', 'Youtube API' ]}
                projectURL = "https://johnkdunyo-youtube-clone.netlify.app/"
                githubURL = 'https://github.com/johnkdunyo/React-Youtube-Clone'
            />

            <PortfolioSingleItem2
                key = 'four'
                id='portfolio4'
                title='Room Occupancy Detection Model'
                description="A ML model to detect and locate room occupancy implemented using openCV, HOG and SVM. The model is higly optimized to run on resource constrained computing devices, such as a rapsberry pi"
                images = {["occupancy/Screenshot2.png", "occupancy/Screenshot1.png", "occupancy/Screenshot3.png", "occupancy/Screenshot4.png"]}
                usedStacks = {['Python', 'Flask', 'Machine learning', 'OpenCV', 'SVM']}
                projectURL = "https://johnkdunyo-youtube-clone.netlify.app/"
                githubURL = 'https://github.com/johnkdunyo/Room-Based-Occupancy-Detection'
            />
          


            </div>
        </section>




        
    </React.Fragment>
  )
}

export default Portfolio