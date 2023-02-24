//import sass file
import "./hotelcard.scss"
//import icons 
import { HiLocationMarker } from 'react-icons/hi';
//slider component
import { ImageSlider } from "../imageSilder/ImageSlider";
//rating component
import { Rating } from "../rating/Rating";
//button component
import { ControllerContext } from "../../contexts/ControllerContext";
import { UserContext } from "../../contexts/userContext";
//hooks
import { useContext, useEffect, useState } from "react";

export const HotelCard = ({ hotel }) => {

    const [alreadyBooked, setAlreadyBooked] = useState(false);
    const { setCurrentSelectedHotel, setModalView } = useContext(ControllerContext);
    const { currentUser, handleCancelBooking } = useContext(UserContext)
    useEffect(() => {

        // check if the current hotel is booked already by user or not
        if (currentUser.bookings) {
            if (currentUser.bookings.some((book) => book.bookInfo.name === hotel.name)) {
                setAlreadyBooked(true);
            }
        }else return

    }, [currentUser.bookings, hotel.name]);
    return (
        <>
            <div className="hotelCard-wrapper">
                <div className="image-wrapper">
                    <ImageSlider slides={hotel.images} arrowsExist={true} isAnimate={false} />
                </div>
                <div className="hotel-info">
                    <h5 className="custom-text">{hotel.name}</h5>
                    <div className="rating">
                        <Rating rating={hotel.rating} />
                    </div>
                    <p className="custom-text"><HiLocationMarker className="location" />
                        {hotel.adress}</p>
                    <div className="hotel-footer">
                        <h4 >EGP{hotel.price}/night</h4>
                        {alreadyBooked ? (<button className="button  cancel"
                            onClick={() => {
                                setAlreadyBooked(false)
                                handleCancelBooking(hotel);
                            }}
                        >cancel</button>) :
                            <button className="button book"
                                onClick={() => {
                                    setModalView(true)
                                    setCurrentSelectedHotel(hotel)
                                }}
                            >Book Now</button>}

                    </div>

                </div>
            </div>

        </>
    )
}
