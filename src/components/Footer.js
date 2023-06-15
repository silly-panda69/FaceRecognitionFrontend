import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <div class="footer">
            <div className='footer-heading'>Face Recognition</div>
            <div className='footer-list'>
                <div className='footer-item'>© 2023 Copyright, All Rights Reserved</div>
                <div className='footer-item'>|</div>
                <Link to="/" className='footer-item'>Terms Of Use</Link>
                <div className='footer-item'>|</div>
                <Link to="/" className='footer-item'>Privacy Policy</Link>
                <div className='footer-item'>|</div>
                <Link to="/" className='footer-item'>Support</Link>
            </div>
        </div>
    </>
  )
}

export default Footer