import React, { useEffect } from "react";
import './Media.css';

function Media() {
    useEffect(() => {
        const images = document.querySelectorAll('.gill');
        const imagen = document.querySelectorAll('.gallery-image');
        const cont = document.querySelector('.second-row');

        const fadeInImage = (image, index) => {
            setTimeout(() => {
                image.classList.add('fade-in');
            }, index * 900);
        };
        const dos = (image, index) => {
            setTimeout(() => {
                image.classList.add('fade-in');
            }, index * 300);
        };
        const handleScroll = () => {
            imagen.forEach((image, index) => {
                const imageTop = cont.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (imageTop < windowHeight) {
                    setTimeout(() => {
                        dos(image, index);
                    })
                }
            });
            images.forEach((image, index) => {
                const imageTop = image.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (imageTop < windowHeight) {
                    fadeInImage(image, index);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="media-section" className="media-wrap">
            <div className="media-cont">
                <h1 className="gallery-title">We Are LuvSikAngel</h1>
                <div className="gallery-container">
                    <div className="first-row">
                        <img 
                            className="gill" 
                            src={require("../../images/galleryPhotos/IMG_5429.jpg")}
                            alt="LuvSikAngel" />
                        <img 
                            className="gill" 
                            src={require("../../images/galleryPhotos/IMG_5416.jpg")}
                            alt="LuvSikAngel" />
                        <img 
                            className="gill" 
                            src={require("../../images/galleryPhotos/IMG_5442.jpg")}
                            alt="LuvSikAngel" />
                        <img 
                            className="gill" 
                            src={require("../../images/galleryPhotos/guitar.jpg")} 
                            alt="LuvSikAngel" />
                    </div>
                    <div className="second-row">
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_0162.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_0163.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5414.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5415.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5418.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5426.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5430.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5431.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5433.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5434.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5435.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5436.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5437.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5439.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5440.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5441.jpg")} 
                            alt="LuvSikAngel" />
                        <img 
                            className="gallery-image" 
                            src={require("../../images/galleryPhotos/IMG_5443.jpg")} 
                            alt="LuvSikAngel" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Media;