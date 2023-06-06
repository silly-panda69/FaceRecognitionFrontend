import React from 'react'
import { useEffect } from 'react'
import hamburger from './hamburger.png'


const NavBar = () => {
    function setNavSpaceHeight () {
    
        const navbar = document.getElementsByClassName("navbar")
        const navbarHeight = window.getComputedStyle(navbar[0]).getPropertyValue("height")
    
        const root = document.documentElement
        root.style.setProperty("--nav-height", `${navbarHeight}`)

        hideMenu()
    }

    function hideMenu () {
        const ham = document.getElementsByClassName("hidden_ham")
        const dispHam = window.getComputedStyle(ham[0]).getPropertyValue("display")
        
        const navlist = document.getElementsByClassName("navlist")
        if (dispHam === "none") {
            navlist[0].style.display="block";
        }
        else {
            navlist[0].style.display="none";
        }
    }

    function onClickMenu() {
        const navlist = document.getElementsByClassName("navlist")
        const dispNavlist = window.getComputedStyle(navlist[0]).getPropertyValue("display")

        if (dispNavlist === "none") {
            navlist[0].style.display="block";
            const body = document.getElementsByTagName("body");
            body[0].style.overflowY = "hidden";
        }
        else {
            navlist[0].style.display="none";
            const body = document.getElementsByTagName("body");
            body[0].style.overflowY = "auto";
        } 
    }

    useEffect(() => {
        setNavSpaceHeight()
        window.addEventListener("resize", setNavSpaceHeight)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <nav className="navbar">
                <a className="logo" href="/">Face Recognition</a>
                <ul className="navlist">
                    <li><a href="/">Get Started</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">About</a></li>
                    <li><button className="login-button" style={{color: "#ffa805", textShadow: "none"}}>Login/SignUp</button></li>
                </ul>

                <button onClick={onClickMenu} className="hamburger hidden_ham">
                    <img className="ham_image" src={hamburger} alt=""/>
                </button>
            </nav>
        </>
    )
}

export default NavBar