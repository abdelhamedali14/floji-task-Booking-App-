// import sass
import "./rating.scss"

//import icons
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
export const Rating = ({ rating }) => {

    let isGood = "";
    if (rating >= 4.8) {
        isGood = "Excellent"
     
    } else if (rating >= 4) {
        isGood = "v.good"
    }
    else if (rating >= 3) {
        isGood = "good"
    }



    //function to convert rating as a number to stars
    const drawRating = (rating) => {
        return Math.round(rating * 2) / 2;
    };
    return (
        <>
            <div className="rating-wrapper">
                <div className="stars">
                    {Array(5)
                        .fill(0)
                        .map((_, i) => {
                            if (drawRating(rating) >= i + 1) {
                                return <BsStarFill className='gold' size={17} key={i} />;
                            } else if (drawRating(rating) - i === 0.5) {
                                return <BsStarHalf className='gold' size={17} key={i} />;
                            } else {
                                return <BsStar className='gold' size={17} key={i} />;
                            }
                        })}

                </div>
                <div className="rating-text"> <span className="rate-number">{isGood}</span> {rating} </div>
            </div>

        </>
    )
}
