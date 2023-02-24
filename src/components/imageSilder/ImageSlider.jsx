import { useState, useEffect } from 'react'
import "./imagesSlider.scss"
//icons import
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

export const ImageSlider = ({ slides, arrowsExist, isAnimate ,text}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let timeoutId = 0

    const resetSliderTimer = () => {
        if (timeoutId) {
            window.clearTimeout(timeoutId);
        }
        timeoutId = window.setTimeout(() => goToNext(), 5000);
    }
    //get the next-slide
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);

    };

    // get the previous-slide
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

        setCurrentIndex(newIndex);

    };



    useEffect(() => {
        // chck if the slider requeird to be animated or not
        if (isAnimate) {
            resetSliderTimer()
        }

        return () => {

        }
    }, [currentIndex])

    return (
        <>

            <div className='slider-wrapper'>
                <div className={`arrows-wrappper ${arrowsExist ? "showArrows" : "removeArrows"}`}>
                    <div onClick={goToPrevious} className="arrow left"  >
                        <BsChevronLeft />
                    </div>
                    <div onClick={goToNext} className="arrow right" >
                        <BsChevronRight />
                    </div>
                </div>
                <div className='slides' style={{ backgroundImage: `url(${slides[currentIndex]})` }}>
                    <div className="slides-content">
                        <h2>{text}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
