import React, { useEffect } from "react";
import './Media.css';
import angel from "../../images/galleryPhotos/IMG_5429.jpg";
import rick from "../../images/galleryPhotos/IMG_5416.jpg";
import drums from "../../images/galleryPhotos/IMG_5442.jpg";
import guitar from "../../images/galleryPhotos/guitar.jpg";
import aang from "../../images/galleryPhotos/IMG_0162.jpg";
import kitara from "../../images/galleryPhotos/IMG_0163.jpg";
import sokka from "../../images/galleryPhotos/IMG_5414.jpg";
import suki from "../../images/galleryPhotos/IMG_5415.jpg";
import momo from "../../images/galleryPhotos/IMG_5418.jpg";
import bumi from "../../images/galleryPhotos/IMG_5426.jpg";
import zuko from "../../images/galleryPhotos/IMG_5430.jpg";
import ozai from "../../images/galleryPhotos/IMG_5431.jpg";
import mai from "../../images/galleryPhotos/IMG_5433.jpg";
import azula from "../../images/galleryPhotos/IMG_5434.jpg";
import tylee from "../../images/galleryPhotos/IMG_5435.jpg";
import toph from "../../images/galleryPhotos/IMG_5436.jpg";
import jhao from "../../images/galleryPhotos/IMG_5437.jpg";
import iroh from "../../images/galleryPhotos/IMG_5439.jpg";
import ursa from "../../images/galleryPhotos/IMG_5440.jpg";
import appa from "../../images/galleryPhotos/IMG_5441.jpg";
import kyoshi from "../../images/galleryPhotos/IMG_5443.jpg";
import roku from "../../images/galleryPhotos/IMG_0162.jpg";

function Media(): JSX.Element {
    const firstRowImgs: string[] = [angel, rick, drums, guitar];
    const mainGalleryImgs: string[] = [aang, kitara, sokka, suki, momo, bumi, zuko, ozai, mai, azula, tylee, toph, jhao, iroh, ursa, appa, kyoshi, roku];        
    
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
                <h1 className="gallery-title">
                    We Are LuvSikAngel
                </h1>
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