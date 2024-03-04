import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/image/logo.png'
import search from '../../assets/svg/search.svg'

import './Header.css'

function Header() {
  return (
    <div>
        <section className='top-header'>
            <img className='logo' src={logo} alt='aa'/>
            <div className='pages'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/register">Sign Up</Link>
                    </li>
                </ul>
            </div>
            <div className='header-input'>
                <input type='search' placeholder='Что ищите?'/>
                <img className='search-svg' src={search} alt="aa" />
                <p className='logo-number'>1717</p>
            </div>
        </section>
    </div>
  )
}

export default Header