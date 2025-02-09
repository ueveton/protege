import React from 'react'
import Logo from '../../../public/ProtegeIcon.png'
import './SidBar.css'

export const SidBar = () => {
    return (
        <div className='container-fluid bg-dark'>
            <div className='d-flex justify-content-between p-1 text-light navigathor'>
                <div className='d-flex company'>
                    <img className='logo' src={Logo} alt="logo" />
                    <h3 className=''>Protege Cloud</h3>
                </div>
                <div className=''>
                    <ul className='d-flex'>
                        <li className=''>
                            <a href="" className='d-flex flex-column'>
                                <i className="bi bi-house-add-fill"></i>
                                <span className=''>Home</span>
                            </a>
                        </li>
                        <li className=''>
                            <a href="" className='d-flex flex-column'>
                                <i className="bi bi-clipboard-data-fill"></i>
                                <span className=''>Clintes</span>
                            </a>
                        </li>
                        <li className=''>
                            <a href="" className='d-flex flex-column'>
                                <i className="bi bi-person-badge-fill"></i>
                                <span className=''>Usuarios</span>
                            </a>
                        </li>
                        <li className=''>
                            <a href="" className='d-flex flex-column'>
                                <i className="bi bi-currency-exchange"></i>
                                <span className=''>Receitas</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div>
                    <h2>direita</h2>
                </div>

            </div>
        </div>
    )
}
