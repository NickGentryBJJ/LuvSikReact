import React, { useEffect } from "react";
import './Media.css';

function Media(): JSX.Element {
    const firstRowImgs: string[] = [require("../../images/galleryPhotos/IMG_5429.jpg"), require("../../images/galleryPhotos/IMG_5416.jpg"), require("../../images/galleryPhotos/IMG_5442.jpg"), require("../../images/galleryPhotos/guitar.jpg")]
    const mainGalleryImgs: string[] = [require("../../images/galleryPhotos/IMG_0162.jpg"), require("../../images/galleryPhotos/IMG_0163.jpg"), require("../../images/galleryPhotos/IMG_5414.jpg"), require("../../images/galleryPhotos/IMG_5415.jpg"), require("../../images/galleryPhotos/IMG_5418.jpg"), require("../../images/galleryPhotos/IMG_5426.jpg"), require("../../images/galleryPhotos/IMG_5430.jpg"), require("../../images/galleryPhotos/IMG_5431.jpg"), require("../../images/galleryPhotos/IMG_5433.jpg"), require("../../images/galleryPhotos/IMG_5434.jpg"), require("../../images/galleryPhotos/IMG_5435.jpg"), require("../../images/galleryPhotos/IMG_5436.jpg"), require("../../images/galleryPhotos/IMG_5437.jpg"), require("../../images/galleryPhotos/IMG_5439.jpg"), require("../../images/galleryPhotos/IMG_5440.jpg"), require("../../images/galleryPhotos/IMG_5441.jpg"), require("../../images/galleryPhotos/IMG_5443.jpg"), require("../../images/galleryPhotos/IMG_0162.jpg")]        
    
    useEffect(() => {
        const images = document.querySelectorAll('.gill');
        const imagen = document.querySelectorAll('.gallery-image');
        const cont = document.querySelector('.second-row');
        const fadeInImage = (image: Element, index: number) => {
            setTimeout(() => {
                image.classList.add('fade-in');
            }, index * 900);
        };
        const dos = (image: Element, index: number) => {
            setTimeout(() => {
                image.classList.add('fade-in');
            }, index * 300);
        };
        const handleScroll = () => {
            imagen.forEach((image: Element, index: number) => {
                if (cont){
                    const imageTop = cont.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    if (imageTop < windowHeight) {
                        setTimeout(() => {
                            dos(image, index);
                        })
                    }
                }
            });
            images.forEach((image: Element, index: number) => {
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
                        {firstRowImgs.map((imgSrc: string, index: number) => (
                            <img
                                key={index}
                                className="gill"
                                src={imgSrc}
                                alt="LuvSikAngel"
                            />
                        ))}
                    </div>
                    <div className="second-row">
                        {mainGalleryImgs.map((imgSrc: string, index: number) => (
                            <img
                                key={index}
                                className="gallery-image"
                                src={imgSrc}
                                alt="LuvSikAngel"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Media;