import React from 'react'
import { NavBar } from '../../components/navBar/NavBar'
import './Home.css'
import { Grafic } from '../../components/grafic/Grafic'
import { Link } from 'react-router-dom'

export const Home = () => {

    const data_clients = [
        ['Cloud', 'qtde'],
        ['ZipPlus', 100],
        ['Mega', 50]
    ]

    const data_faturamento = [
        ["Mês", "Valor", { role: "style" }],
        ["Setembro", 800, "#b87333"], // RGB value
        ["Outubro", 700, "silver"], // English color name
        ["Novembro", 1100, "gold"],
        ["Dezembro", 1250, "color: #e5e4e2"], // CSS-style declaration
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
                                    <a href="" className='nav-link active'>
                                        <i className="bi bi-house-add-fill"></i>
                                        <span className='fs-4 d-none ms-2 d-sm-inline'>Home</span>
                                    </a>
                                </li>
                                <li className='nav-iten py-3'>
                                    <Link to="/clients" className='nav-link'>
                                        <i className="bi bi-clipboard-data-fill"></i>
                                        <span className='fs-4 d-none ms-2 d-sm-inline'>Clientes</span>
                                    </Link>
                                </li>
                                <li className='nav-iten py-3'>
                                    <Link to="/user" className='nav-link'>
                                        <i className="bi bi-person-badge-fill"></i>
                                        <span className='fs-4 d-none ms-2 d-sm-inline'>Usuarios</span>
                                    </Link>
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
                                <div className='card m-1'>
                                    <Grafic
                                        title="Faturamento por mes"
                                        chartType='ColumnChart'
                                        data={data_faturamento}
                                    />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='card m-1 table'>
                                    <h2>Clientes para renovação</h2>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Empresa</th>
                                                <th scope="col">V.Atual</th>
                                                <th scope="col">V.Definido</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Panificadora e comercio Ramos LTDA</td>
                                                <td>80</td>
                                                <td>88</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Padaria e churrascaria barollo ltda</td>
                                                <td>45</td>
                                                <td>49,50</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>Le'Si modas LTDA</td>
                                                <td>55</td>
                                                <td>60,5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

