import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from '../pages/Pages'
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to={PATH.LOGIN}> Login </NavLink>
            <NavLink to={PATH.REGISTRATION}> Registration </NavLink>
            <NavLink to={PATH.PROFILE}> Profile </NavLink>
            <NavLink to={'/sa'}> ERROR_404 </NavLink>
            <NavLink to={PATH.PASSWORD_RECOVERY}> Password recovery </NavLink>
            <NavLink to={PATH.CHANGE_RECOVERY}> Change password </NavLink>
            <NavLink to={PATH.TEST}> Test </NavLink>
        </header>
    )
}