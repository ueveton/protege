import React from 'react'
import './NavBar.css'
import Logo from '../../../public/ProtegeIcon.png'
import { Link } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <div>
                    <img className='logo' src={Logo} alt="logo" />
                    <a className='navbar-brand text-primary p-1'>Protege Cloud</a>
                </div>
                <div className="dropdown d-flex">
                    <button className="btn btn-outline-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Ueveton Soares
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="perfil">Perfil</Link></li>
                        <li><Link className="dropdown-item" to='/registration'>Sair</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
