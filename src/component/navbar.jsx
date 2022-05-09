import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = (props) => {

    const toggleHamburger = () => {
        document.getElementById('toggler').classList.toggle('hamburger')
        document.getElementById('toggler').classList.toggle('close')
    }

    const closeMenu = () => {
        document.getElementById('menus').style.left = '-51vw'
    }

    const openMenu = () => {
        document.getElementById('menus').style.left = 0
    }

    const handelMenu = () => {
        toggleHamburger()
        if (document.getElementById('toggler').classList.contains('hamburger')) {
            closeMenu()
        } else if (document.getElementById('toggler').classList.contains('close')){
            openMenu()
        }
    }

    const clickMenuClose = () => {
        if (!document.getElementById('toggler').style.display !== 'flex') {
            closeMenu()
            toggleHamburger()
        }
    }
    
  return (
    <>
        <div className={props.mode === 'light' ? "navbar light" : "navbar dark"}>
            <div className="brandContainer">
                <h3>verix</h3>
            </div>
            <div className="menus" id='menus'>
                <ul>
                    <li><Link to="/" onClick={() => clickMenuClose()}>home</Link></li>
                    <li><a href="#about" onClick={() => clickMenuClose()}>about</a></li>
                    <li><a href="#service" onClick={() => clickMenuClose()}>service</a></li>
                    <li><a href="#assets" onClick={() => clickMenuClose()}>assets</a></li>
                    <li><a href="#thoughts" onClick={() => clickMenuClose()}>thoughts</a></li>
                    <li><a href="#contact" onClick={() => clickMenuClose()}>contact</a></li>
                </ul>
            </div>
            <div id="toggler" className='hamburger' onClick={() => handelMenu()}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    </>
  )
}

export default Navbar