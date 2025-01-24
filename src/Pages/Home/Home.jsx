import React from 'react'
import { NavBar } from '../../components/navBar/NavBar'
import './Home.css'
import { Grafic } from '../../components/grafic/Grafic'

export const Home = () => {

    const data_clients = [
        ['Nome', 'qtde'],
        ['ZipPlus', 100],
        ['Mega', 50]
    ]

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
                                        <i className="bi bi-currency-exchange"></i>
                                        <span className='fs-4 d-none ms-2 d-sm-inline'>Receita</span>
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
                    <div className='col-10 bg-secondary-subtle'>
                        <div className='ms-4 d-flex justify-content-between pt-3'>
                            <h2>Dashboard</h2>
                            <button className='btn btn-primary ms-4'>Atualizar</button>
                        </div>
                        <div className="row mt-2">
                            <div className="col-md-6">
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className="card m-1">
                                            <h3 className='card-title'>Clientes</h3>
                                            <div className="card-body">
                                                <p className="card-text">126</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="card m-1">
                                            <h3 className='card-title'>Usuario</h3>
                                            <div className="card-body card-user">
                                                <p className="card-text">6</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='card m-1'>
                                    <Grafic 
                                        title="Cliente por Cloud"
                                        chartType='Bar'
                                        data={data_clients}
                                    />

                                </div>
                            </div>
                            <div className='col-md-6'>
                                <h2>Grafic 1</h2>
                            </div>
                            <div className='col-md-6'>
                                <h2>Grafic 3</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

