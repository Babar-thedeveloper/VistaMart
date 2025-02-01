import React, { useState } from 'react'
import './Navbar.css'
import logo from '..//Assets//logo.png'
import cart_icon from '..//Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("home");


    return (
        <div className='navbar'>
            <div className='nav_logo'>
                <img src={logo} alt="" />
                <p>VistaMart</p>
            </div>
            <ul className='nav_menu'>
                <li onClick={() => { setMenu("home") }}> <Link style={{ textDecoration: 'none' , color:'rgb(57, 56, 56)'}} to={"/"}>Home</Link>{menu === "home" ? <hr></hr> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}> <Link style={{ textDecoration: 'none' , color:'rgb(57, 56, 56)'}} to={"/mens"}>Men</Link>{menu === "mens" ? <hr></hr> : <></>}</li>
                <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none' , color:'rgb(57, 56, 56)'}} to={"/womens"}>Women</Link>{menu === "women" ? <hr></hr> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}> <Link style={{ textDecoration: 'none' , color:'rgb(57, 56, 56)'}} to={"/kids"}>Kids</Link>{menu === "kids" ? <hr></hr> : <></>}</li>
            </ul>
            <div className="nav_login_cart">
                <Link to={"/LoginSignup"}><button>Login</button></Link>
                <Link to={"/LoginSignup"}><img src={cart_icon} alt="" /></Link>
                <div className="cart_count">0</div>
            </div>
        </div>
    )
}

export default Navbar
