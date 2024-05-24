    import { useState, useEffect } from "react";
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';    
       
    import img0 from "../images/slider/baner1.jpg";
    // import img1 from "../images/slider/img-1.jpg";
    // import img2 from "../images/slider/img-2.jpg";

    const imgSlider = [
        { img: img0 },
        { img: img0 },
        { img: img0 }
    ];

    function Slider() {
        const [currentSlide, setCurrentSlide] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentSlide(prevSlide => (prevSlide + 1) % imgSlider.length);
            }, 30000); // Change slide every 10 seconds

            return () => clearInterval(interval); // Clean up interval on component unmount
        }, []);
        const nextSlide = () => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % imgSlider.length);
        };
    
        const prevSlide = () => {
            setCurrentSlide(prevSlide => (prevSlide - 1 + imgSlider.length) % imgSlider.length);
        };
        return (
            <div className="Slider">
            
                <div className="Slider-Content">
                    <img src={imgSlider[currentSlide].img} alt={`Slide${currentSlide + 1}`} />
                </div>
                <span className="PrevButton" onClick={prevSlide}><FontAwesomeIcon icon={faChevronLeft} /></span>
                <span className="NextButton" onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></span>
            </div>
        );
    }

    export default Slider;
