import React from 'react'
import { NavBar } from '../../components/navBar/NavBar'
import { Link } from 'react-router-dom'
import './Clientes.css'


export const Clients = () => {
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
                                    <Link to="/" className='nav-link'>
                                        <i className="bi bi-house-add-fill"></i>
                                        <span className='fs-4 d-none ms-2 d-sm-inline'>Home</span>
                                    </Link>
                                </li>
                                <li className='nav-iten py-3'>
                                    <a href='' className='nav-link active'>
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
                            <h2>Clientes</h2>
                            {/* <button className='btn btn-primary ms-4'>Atualizar</button> */}
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <div className='button'>
                                    {/* <i className="bi bi-plus-square-fill"></i> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                                    </svg>
                                    <h5>Cadastrar</h5>
                                </div>
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                            <div className='container-fluid'>

                                                <div className='row'>
                                                    <div className="input-group mb-3 col-12">
                                                        <span className="input-group-text" id="empresa">
                                                            <i className="bi bi-person-bounding-box"></i>
                                                        </span>
                                                        <input type="text" className="form-control" placeholder="Empresa" aria-label="Empresa" aria-describedby="empresa" />
                                                    </div>
                                                    <div className="input-group mb-3 col-12">
                                                        <span className="input-group-text" id="district">
                                                            <i className="bi bi-badge-ad-fill"></i>
                                                        </span>
                                                        <input type="text" className="form-control" placeholder="Endereço" aria-label="Endereço" aria-describedby="district" />
                                                    </div>
                                                    <div className="input-group mb-3 col">
                                                        <span className="input-group-text" id="registration">
                                                            <i className="bi bi-bank2"></i>
                                                        </span>
                                                        <input type="text" className="form-control" placeholder="CNPJ" aria-label="CNPJ" aria-describedby="registration" />
                                                    </div>
                                                    <div className="input-group mb-3 col">
                                                        <span className="input-group-text" id="phone">
                                                            <i className="bi bi-telephone-outbound-fill"></i>
                                                        </span>
                                                        <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="phone" />
                                                    </div>
                                                    <div className="input-group mb-3 col-12">
                                                        <span className="input-group-text" id="email">
                                                            <i className="bi bi-envelope-at-fill"></i>
                                                        </span>
                                                        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email" />
                                                    </div>
                                                    <div className="input-group mb-3 col">
                                                        <span className="input-group-text" id="money">
                                                        <i className="bi bi-currency-exchange"></i>
                                                        </span>
                                                        <input type="number" className="form-control" placeholder="Valor" aria-label="Valor" aria-describedby="money" />
                                                    </div>
                                                    <div className='mb-3 col'>
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option selected>Tipo de Armazenamento</option>
                                                            <option value="hostinger">Hostinger</option>
                                                            <option value="mega">Mega</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-warning">Limpar</button>
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                            <button type="button" className="btn btn-primary">Salvar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
