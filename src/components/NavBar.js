import React from 'react'
import { useEffect } from 'react'
import hamburger from '../assets/hamburger.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
    function setNavSpaceHeight () {
    
        const navBar = document.getElementsByClassName("navBar")
        const navBarHeight = window.getComputedStyle(navBar[0]).getPropertyValue("height")
    
        const root = document.documentElement
        root.style.setProperty("--nav-height", `${navBarHeight}`)

        hideMenu()
    }

    function hideMenu () {
        const ham = document.getElementsByClassName("hidden_ham")
        const dispHam = window.getComputedStyle(ham[0]).getPropertyValue("display")
        
        const navlist = document.getElementsByClassName("navlist")
        if (dispHam !== "none") {
            navlist[0].style.left = "100%";
        }
    }

    function onClickMenu() {
        const navlist = document.getElementsByClassName("navlist")

        if (navlist[0].style.left === "0%") {
            navlist[0].style.left = "100%";
            const body = document.getElementsByTagName("body");
            body[0].style.overflowY = "auto";
        }
        else {
            navlist[0].style.left = "0%";
            const body = document.getElementsByTagName("body");
            body[0].style.overflowY = "hidden";          
        }
    }

    useEffect(() => {
        setNavSpaceHeight()
        window.addEventListener("resize", setNavSpaceHeight)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <nav className="navBar">
                <Link className="logo" to="/">Face Recognition</Link>
                <ul className="navlist">
                    <li><Link to="/welcome">Get Started</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/user"><button className="login-button" style={{color: "#ffa805", textShadow: "none"}}>Login/SignUp</button></Link></li>
                </ul>

                <button onClick={onClickMenu} className="hamburger hidden_ham">
                    <img className="ham_image" src={hamburger} alt=""/>
                </button>
            </nav>
        </>
    )
}

export default NavBar