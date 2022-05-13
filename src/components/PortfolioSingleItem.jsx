import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode, Thumbs } from 'swiper';



// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const PortfolioSingleItem = ({id, title, description, images, usedStacks, projectURL, githubURL }) => {

    const [thumbsSwiper, ] = useState(null);

    // const title = "The NotesApp";
    // const description = "A simple, efficient, free note taking software developed with reactjs and expressjs"
    // const images = ["notes-app/Screenshot1.png", "notes-app/Screenshot2.png", "notes-app/Screenshot3.png", "notes-app/Screenshot4.png", "notes-app/Screenshot5.png", "notes-app/Screenshot6.png","notes-app/Screenshot7.png", "notes-app/Screenshot8.png", "notes-app/Screenshot9.png"]
    // const usedStacks = ['Reactjs', 'Reduxjs/toolkit', 'Nodejs', 'Expressjs', 'MongoDB' ]
    // const projectURL = "https://the-notesapp.netlify.app"
    // const githubURL = 'https://github.com/johnkdunyo/The-NotesApp'
    // const key = '1'


  return (
    <React.Fragment>
        <div className="row project-card" data-toggle="modal" data-target={`#portfolioModal${id}`} data-portfolio-tag="web-sites">
                <div className="col-md-7 col-lg-7 project-card__img">
                    <Swiper
                        style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                        }}
                            loop={true}
                            autoplay={true}
                            spaceBetween={10}
                            navigation={true}
                            pagination={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs, Pagination]}
                            className="mySwiper2"
                        >
                        {images.map((image=>(
                            <SwiperSlide key={image}><img src={`assets/img/Projects/${image}`} alt={image} /></SwiperSlide>
                        )))}
                    </Swiper>
                </div>

                <div className="col-md-5 col-lg-5 project-card__info">
                <h3 className="project-card__title"> {title} </h3>
                <p className="project-card__description">
                    {description}
                </p>
                <p className="project-card__stack">Used stack:</p>
                <ul className="tags">
                    {usedStacks.map(stack=>(
                        <li key={stack}>{stack}</li>
                    ))}
                    
                </ul>
                <button onClick={()=>window.open(`${projectURL }`, '_blank') } className="btn btn-primary project-card__link-right"> Demo</button>
                <button onClick={()=>window.open(`${githubURL }`, '_blank') } className="btn btn-success project-card__link-left">Source Code</button>
                </div>
            </div>




            {/* modal */}
            <div className="modal fade portfolio-modal" id={`portfolioModal${id}`} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body col-md-11 col-lg-9 ml-auto mr-auto">
                    <p className="portfolio-modal__title">{title}</p>
                    <div className='portfolio-modal__swiper'>
                    <Swiper
                        style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                        }}
                            loop={true}
                            autoplay={true}
                            spaceBetween={10}
                            navigation={true}
                            pagination={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs, Pagination]}
                            className="mySwiper2"
                        >
                        {images.map((image=>(
                            <SwiperSlide key={image}><img src={`assets/img/Projects/${image}`} alt={image} /></SwiperSlide>
                        )))}
                    </Swiper>
                    </div>
                    <p className="portfolio-modal__description">
                    {description}
                    </p>
                    
                    <div  className="portfolio-modal__stack">
                    <ul className="tags">
                        {usedStacks.map(stack=>(
                            <li key={stack}>{stack}</li>
                        ))}
                    </ul>
                    </div>

                    <div className="portfolio-modal__link">
                    <button onClick={()=>window.open(`${projectURL }`, '_blank') } className="btn btn-primary portfolio-modal__link-right"> Demo</button>
                    <button onClick={()=>window.open(`${githubURL }`, '_blank') } className="btn btn-success portfolio-modal__link-left">Source Code</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default PortfolioSingleItem