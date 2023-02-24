
//hooks
import { createContext, useState } from 'react'


export const ControllerContext = createContext();

export const ControllerContextProvider = ({ children }) => {
    //state to handel booking list vieweing
    const [bookingListView, setbookingListView] = useState(false)
    //state to handel the modal
    const [modalView,setModalView]=useState(false)

    //state to detect the booked hotels
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
    //state to  detect if the hotel is selectedd by user or not
    const [currentSelectedHotel, setCurrentSelectedHotel] = useState({});


    return (
        <ControllerContext.Provider
            value={{
                bookingListView,
                setbookingListView,
                modalView,
                setModalView,
                currentSelectedHotel,
                setCurrentSelectedHotel,
                bookingConfirmed,
                setBookingConfirmed

            }}>

            {children}
        </ControllerContext.Provider>
    )
}
