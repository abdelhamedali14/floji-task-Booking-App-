import Modal from '../modal/Modal'
//context
import { UserContext } from '../../contexts/userContext';
import { ControllerContext } from '../../contexts/ControllerContext';
//hooks
import { useContext } from 'react';
//formic
import { useFormik } from 'formik';
import * as Yup from 'yup';
//sass
import "./reservForm.scss"


//tostify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ReservForm = () => {

    const { currentSelectedHotel, modalView, setModalView, setBookingConfirmed } = useContext(ControllerContext)

    const {  setuserBookings, userBookings } = useContext(UserContext);


    const handleConfirmBooking = (userData) => {
        const bookingId=Math.floor(Math.random() * (10001300))

        const currentBooking =
            { bookedBy: userData,bookingId: bookingId, bookedDate: new Date(), bookInfo: currentSelectedHotel };
        const currentBookedHotels = JSON.parse(JSON.stringify(userBookings)); 

        // Add The Current Book To User Bookings

        currentBookedHotels.push(currentBooking);
        setuserBookings(currentBookedHotels);
        // close modal and show the conformation message
        setModalView(false);
        setBookingConfirmed(true);
    };
    const notify = () => {toast.success(" thank you to booking with us ")};
    //validate form
    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            phoneNumber: '',
        },
        //validation schema from yup
        validationSchema: Yup.object({
            userName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            phoneNumber: Yup.number().min(11, 'must be 11 number')
                .required("Required")
                .typeError("you must enter a number not a string")

                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            handleConfirmBooking(values)
        },
    });
    return (
        <>
            <Modal show={modalView} hide={setModalView}  header={"please finish this fields"} className="modal"
            size={"medium"}
                content={<form onSubmit={formik.handleSubmit} className="form-wrapper">
                    <label htmlFor="userName">user name</label>
                    <input
                        id="userName"
                        name="userName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userName}
                    />
                    {formik.touched.userName && formik.errors.userName ? <div className='error-message'>{formik.errors.userName}</div> : null}

                    <label htmlFor="phoneNumber">phone number</label>
                    <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div className='error-message'>{formik.errors.phoneNumber}</div> : null}
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='error-message'>{formik.errors.email}</div> : null}
              
                  <button type="submit" className='submit-btn' onClick={notify}>confirm your Booking</button>
              
                </form>} />
                <ToastContainer
                  autoClose={2000}
                  theme="light"
                />
        </>
    )
}





