


import React from 'react'
//import hotels data 
import { hotelsData } from "../../Data/Data"
import { HotelCard } from '../hotelCard/HotelCard';
//import sass file
import "./HotelsContainer.scss"
export const HotelsContainer = () => {
    return (
        <>
            <div className="hotelsContainer-wrapper main-container">
                <div className="header">
                    <h2>our Hotels</h2>
                </div>
                <div className="allHotels-wrapper">

                    {hotelsData.map((hotel, i) =>
                        <div className="hotel " key={i}>
                            <HotelCard hotel={hotel} />
                        </div>
                    )}

                </div>
            </div>




        </>
    )
}
