// React Hooks and Fn
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
	 //stete to mange the user
	const [currentUser, setCurrentUser] = useState({});

//state to hold the user bookings
	const [userBookings, setuserBookings] = useState([]);


	useEffect(() => {
		const loggedUser = { userName: '', email: '', phoneNumber: '', bookings: [] };
		setCurrentUser(loggedUser);
		return () => {
			setCurrentUser({});
		};
	}, []);

     //mange the user bookings by save it in an array
	useEffect(() => {
		setCurrentUser((prev) => {
			return { ...prev, bookings: userBookings };
		});
	}, [userBookings]);

	// cancel booking
	const handleCancelBooking = (cancledHotel) => {
		setuserBookings((prev) => {
			return prev.filter((booking) => booking
			.bookInfo.name !== cancledHotel.name);
		});
	};

	return <UserContext.Provider value=
    {{ currentUser, setuserBookings, userBookings, handleCancelBooking }}
    >{children}</UserContext.Provider>;
};
