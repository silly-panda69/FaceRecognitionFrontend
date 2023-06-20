import React from 'react'
import { useEffect } from 'react'
import hamburger from '../assets/hamburger.png';
import {Link} from 'react-router-dom';

const NavBar = () => {

    //Dynamically sets the height of navspace element in the home page to be equal to the height of the navbar, so that the later elements are not hidden
    //under the navbar.
    function setNavSpaceHeight () { 
        const navBar = document.getElementsByClassName("navBar")
        const navBarHeight = window.getComputedStyle(navBar[0]).getPropertyValue("height")
    
        const root = document.documentElement
        root.style.setProperty("--nav-height", `${navBarHeight}`)
    }

    //hides the menu sidebar in the mobile mode, if the hamburger menu is disabled on resizing
    function hideMenu () {
        const ham = document.getElementsByClassName("hidden_ham")
        const dispHam = window.getComputedStyle(ham[0]).getPropertyValue("display")
        
        const navlist = document.getElementsByClassName("navlist")
        if (dispHam !== "none") {
            navlist[0].style.left = "100%";
        }
        else {
            const body = document.getElementsByTagName("body");
            body[0].style.overflowY = "auto";
        }
    }

    //When the sidebar in mobile view is hidden and hamburger is clicked, then sidebar appears
    //When the sidebar in mobile view is visible and any option in the navbar or the hamburger is clicked, then the sidebar disappears
    function onClickOperation() {
        const navlist = document.getElementsByClassName("navlist")

        if (navlist[0].style.left === "0%") {
            navlist[0].style.left = "100%";
            const body = document.getElementsByTagName("body");
            body[0].style.overflowY = "auto";
        }
        else if (navlist[0].style.left === "100%") {
            navlist[0].style.left = "0%";
            const body = document.getElementsByTagName("body");
            body[0].style.overflowY = "hidden";          
        }
    }

    //Different method for logo as we do not want the sidebar to open on clicking logo in mobile view
    function onClickLogo() {
        const navlist = document.getElementsByClassName("navlist")
        
        if (navlist[0].style.left === "0%") {
            navlist[0].style.left = "100%";
            const body = document.getElementsByTagName("body");
            body[0].style.overflowY = "auto";
        }        
    }

    useEffect(() => {

        //trigger the navspace height on the page load and whenever the viewport gets resized
        setNavSpaceHeight()
        hideMenu()
        window.addEventListener("resize", ()=> {
            setNavSpaceHeight()
            hideMenu()
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <nav className="navBar">
                <Link className="logo" to="/" onClick={onClickLogo}>Face Recognition</Link>
                <ul className="navlist">
                    <li><Link to="/welcome" onClick={onClickOperation}>Get Started</Link></li>
                    <li><Link to="/" onClick={onClickOperation}>Contact Us</Link></li>
                    <li><Link to="/" onClick={onClickOperation}>About</Link></li>
                    <li><Link to="/user" onClick={onClickOperation}><button className="login-button" style={{color: "#ffa805", textShadow: "none"}}>Login/SignUp</button></Link></li>
                </ul>

                <button onClick={onClickOperation} className="hamburger hidden_ham">
                    <img className="ham_image" src={hamburger} alt=""/>
                </button>
            </nav>
        </>
    )
}

export default NavBar