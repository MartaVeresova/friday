import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.menu}>
            <div className={s.submenu}>
                <NavLink to="/login">login</NavLink>
                <NavLink to="/checkIn">check in</NavLink>
                <NavLink to="/profile">profile</NavLink>
                <NavLink to="/passwordRecovery">password recovery</NavLink>
                <NavLink to="/enteringNewPassword">entering a new password</NavLink>
                <img src="https://www.westonschools.org/wp-content/uploads/2018/01/homework-icon-1.png"
                     width="50px"/>
            </div>
        </div>
    )
}