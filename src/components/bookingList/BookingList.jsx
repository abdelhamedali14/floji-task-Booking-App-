import Modal from "../modal/Modal"
//ccontext
import { ControllerContext } from "../../contexts/ControllerContext"
import { UserContext } from "../../contexts/userContext"
//react hooks
import { useContext, useState, useEffect } from "react"
//sass file
import "./bookinglist.scss"
export const BookingList = () => {
    const { currentUser } = useContext(UserContext);
    const [userBookingsList, setUserBookingList] = useState([]);
    const { setbookingListView, bookingListView } = useContext(ControllerContext)

    useEffect(() => {

        setUserBookingList(currentUser.bookings);
    }, [currentUser.bookings]);
    console.log(userBookingsList);

       //function to handel date
    const FormatData = (bookedDate) => {
        const months = ['Jan.', 'Feb.', 'March', 'April',
         'May', 'June', 'July', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
        const reservationDate = new Date(bookedDate);
        return `${reservationDate?.getDate()}
         ${months[reservationDate.getMonth()]} ${reservationDate.getFullYear()}`;
    };
    return (
        <>
            <Modal header={"your booking List"} size={"large"} show={bookingListView} hide={setbookingListView}
                content={<div className="table-wrapper">
                    <table className="fl-table">
                        <thead>
                            <tr>
                                <th>Book No</th>
                                <th>Name</th>
                                <th>Hotel name</th>
                                <th>Booking Date</th>
                                <th>Booking id</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userBookingsList?.map((book, i) => {
                                return (<tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{book.bookedBy.userName}</td>
                                    <td>{book.bookInfo.name}</td>
                                    <td>{FormatData(book.bookedDate)}</td>
                                    <td>#{book.bookingId}</td>
                                </tr>)
                            })}
                            {userBookingsList?.length === 0 && <tr>
                                <td colspan="6">
                                    <h2 className="no-booking">there is no Booking !</h2>
                                </td>
                            </tr>}
                        </tbody>
                    </table>
                </div>} />
        </>
    )
}
