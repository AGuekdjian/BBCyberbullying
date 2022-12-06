import React from 'react'
import Logo from "/logov2.png"

const Header = () => {
    return (
        <header className='header'>
            <div>
                <img className='logo' src={Logo} alt='Logo de la propia plataforma' />
            </div>
            <nav className='nav-bar'>
                <ul className='menu'>
                    <li><a href='#/'>Inicio</a></li>
                    <li><a href='#/'>Chat</a></li>
                    <li><a href='#/'>Ayuda</a></li>
                    <li><a href='#/'>Sobre nosotros</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header