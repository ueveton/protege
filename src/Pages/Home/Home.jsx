import React from 'react'
import { NavBar } from '../../components/navBar/NavBar'
import './Home.css'

export const Home = () => {
    return (
        <div>
            <NavBar />
            <div className='container-fluid'>
                <div className='row flex-nowrap'>
                    <div className='bg-dark col-2 container'>
                        <div className='bg-dark p-2'>
                            <a className='d-flex text-decoration-none mt-1 align-items-center text-white'>
                                <span className='fs-4 d-none d-sm-inline'>Menu</span>
                            </a>
                            <ul className='nav nav-pills fex-colunn mt-4'>
                                <li className='nav-iten py-3'>
                                    <a href="" className='nav-link'>
                                    <i className="bi bi-house-add-fill"></i>
                                    <span className='fs-4 d-none ms-2 d-sm-inline'>Home</span>
                                    </a>
                                </li>
                                <li className='nav-iten py-3'>
                                    <a href="" className='nav-link'>
                                    <i className="bi bi-clipboard-data-fill"></i>
                                    <span className='fs-4 d-none ms-2 d-sm-inline'>Clientes</span>
                                    </a>
                                </li>
                                <li className='nav-iten py-3'>
                                    <a href="" className='nav-link'>
                                    <i className="bi bi-person-badge-fill"></i>
                                    <span className='fs-4 d-none ms-2 d-sm-inline'>Usuarios</span>
                                    </a>
                                </li>
                                <li className='nav-iten py-3'>
                                    <a href="" className='nav-link'>
                                    <i className="bi bi-door-closed-fill"></i>
                                    <span className='fs-4 d-none ms-2 d-sm-inline'>Sair</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-10'>
                        <h3 className='text-primary'>oi2</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

