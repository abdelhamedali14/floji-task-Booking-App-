
import { useContext, useState } from 'react'
import { BsPerson } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { ControllerContext } from '../../contexts/ControllerContext';

import "./navbar.scss"

export const NavBar = () => {

  const { setbookingListView } = useContext(ControllerContext)
  const[ dropDown,setDropDown] =useState(false)

  return (
    <>
      <nav className='nav-bar'>
        <div className="nav-bar-wrapper main-container">
          <div className="logo">
            <a href="">Booking App</a>
          </div>
          <div className="user-info">
            <div className="user-option">
              <BsPerson></BsPerson>
              <h4>user</h4>
              <BsChevronDown className='drop-arrow' onClick={() => {
                setDropDown(prev =>!prev);
  
              }}></BsChevronDown>

            </div>
            <div className={` reservation-list${dropDown ? " isDropDpwn" : ""}`}>
              <h5 onClick={() =>{
                setbookingListView(true)
              }}>Reservation List</h5>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
