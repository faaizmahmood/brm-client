/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './header.module.scss'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

import logo from '../../../../public/images/big-tools-logo.png'

const Header = () => {
  const { profile } = useSelector((state) => state.user)
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const navigate = useNavigate()
  const authToken = Cookies.get("authToken");
  const isLoggedIn = authToken ? true : false;

  // Function to handle logout
  const handleLogout = () => {
    // Delete the auth token cookie (assuming it's named "authToken")
    Cookies.remove('authToken')
    window.location.reload()
    navigate("/auth/signin")
  }

  return (
    <header className={`${styles.header}`}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-4'>
            
            {/* <NavLink to="/"><img src={logo}/></NavLink> */}
            <h3>CU Analysis</h3>
          </div>
          <div className='col-4'>
            {/* <nav>
              <ul>
                <a href='#'><li>Dashboard</li></a>
                <a href='#'><li>About</li></a>
                <a href='#'><li>Contact</li></a>
              </ul>
            </nav> */}
          </div>
          <div className='col-4 text-end d-flex align-items-center justify-content-end position-relative'>
            {
              isLoggedIn ? (
                <>
                  <h5
                    style={{ textTransform: 'capitalize', cursor: 'pointer' }}
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                  >
                    {profile?.user?.name} <i className="fa-sharp fa-solid fa-caret-down"></i>
                  </h5>

                  {/* Dropdown Menu */}
                  {dropdownVisible && (
                    <div className={`${styles.dropdownMenu}`}>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className={`${styles.btn_group}`}>

                  <NavLink to='/auth/signin'><button>SignIn</button></NavLink>
                  <NavLink to='/auth/signup'><button className={`${styles.child_2}`}>SignUp</button></NavLink>

                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
