import React from 'react'
import arrowup from '../../assets/up-arrow(W).png'
import './Footer.css'

const Footer = () => {
    const handleGoUp = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
  return (
    <div className='footer'>
        <p>© 2026 Kam Zehani All rights reserved</p>
        <a href='#' className='go-up'onClick={handleGoUp}>
            <img src= {arrowup} alt='go-up' />
        </a>
    </div>
  )
}

export default Footer

