import React from 'react'

export const ModalClientes = () => {
    return (
        <div className='p-1'>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <div className='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                    </svg>
                    <h5>Cadastrar</h5>
                </div>
            </button>
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
                                            <select className="form-select" name='situacao' id='situacao'>
                                                <option value="">Situação</option>
                                                <option value="A">Ativo</option>
                                                <option value="C">Cancelado</option>
                                            </select>
                                        </div>
                                        <div className='mb-3 col'>
                                            <select className="form-select" name='cloud' id='cloud'>
                                                <option value="">Tipo de Armazenamento</option>
                                                <option value="H">Hostinger</option>
                                                <option value="M">Mega</option>
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
    )
}
