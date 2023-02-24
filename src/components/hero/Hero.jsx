//used components
import { heroSliderImages } from "../../Data/Data"
import { ImageSlider } from '../imageSilder/ImageSlider'
import { NavBar } from '../navBar/NavBar';
//sass
import "./hero.scss"
export const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <NavBar />
        <ImageSlider slides={heroSliderImages} arrowsExist={false} isAnimate={true} text={" Find exclusive Genius rewards in every corner of the world"} />
      </div>


    </>
  )
}
