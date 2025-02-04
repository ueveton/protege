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
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Cadastrar Clientes</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form action="">
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
                                                        <div className='mb-3 col'>
                                                            <select className="form-select" aria-label="Default select example">
                                                                <option selected>Situação</option>
                                                                <option value="1">Ativo</option>
                                                                <option value="2">Cancelado</option>
                                                            </select>
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
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-warning">Limpar</button>
                                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                                    <button type="button" className="btn btn-primary">Salvar</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='m-2 p-2 container-area'>
                            <div className='row'>
                                <form action="" className='col-6'>
                                    <div class="input-group mb-3">
                                        <input type="search" className="form-control" placeholder="Pesquisar" aria-label="Recipient's username" aria-describedby="search" />
                                        <button type='button' className='btn btn-primary'>
                                            <i className="bi bi-search" id='search'></i>
                                        </button>
                                    </div>
                                </form>
                                <div className='col-3 mb-3'>
                                    <select className="form-select">
                                        <option value="to">Todos</option>
                                        <option value="act">Ativos</option>
                                        <option value="cancel">Cancelados</option>
                                    </select>
                                </div>
                                <div className='col-3 mb-3'>
                                    <select className="form-select">
                                        <option value="0">Armazenamento</option>
                                        <option value="1">Hostinger</option>
                                        <option value="2">Mega</option>
                                    </select>
                                </div>
                            </div>
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Empresa</th>
                                        <th scope="col">CNPJ</th>
                                        <th scope="col">T.Armazenamento</th>
                                    </tr>
                                </thead>
                                <tbody className='tbody'>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Panificadora e comercio Ramos LTDA</td>
                                        <td>24385267000101</td>
                                        <td>Hostinger</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Padaria e churrascaria barollo ltda</td>
                                        <td>24385267000102</td>
                                        <td>Mega</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Le'Si modas LTDA</td>
                                        <td>24385267000103</td>
                                        <td>Hostinger</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className='container-fluid'>
                        <nav aria-label="Page navigation " className='text-center'>
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
