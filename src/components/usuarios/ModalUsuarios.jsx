import React from 'react'
import { useState, useEffect } from 'react'

const url = "http://localhost:3000/usuarios"

export const ModalUsuarios = () => {

    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [document, SetDocument] = useState("")
    const [phoneC, setPhoneC] = useState("")
    const [password, setPassword] = useState("")
    
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
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Cadastrar Usuarios</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="" className='add-usuarios'>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className="input-group mb-3 col-12">
                                            <span className="input-group-text" id="name">
                                                <i className="bi bi-person-bounding-box"></i>
                                            </span>
                                            <input type="text" className="form-control" placeholder="Nome" aria-label="name" aria-describedby="name" />
                                        </div>
                                        <div className="input-group mb-3 col-12">
                                            <span className="input-group-text" id="email">
                                                <i className="bi bi-envelope-at-fill"></i>
                                            </span>
                                            <input type="email" className="form-control" placeholder="email" aria-label="email" aria-describedby="email" />
                                        </div>
                                        <div className="input-group mb-3 col">
                                            <span className="input-group-text" id="document">
                                                <i className="bi bi-bank2"></i>
                                            </span>
                                            <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="document" />
                                        </div>
                                        <div className="input-group mb-3 col">
                                            <span className="input-group-text" id="phoneC">
                                                <i className="bi bi-telephone-outbound-fill"></i>
                                            </span>
                                            <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="phoneC" />
                                        </div>
                                        <div className="input-group mb-3 col-12">
                                            <span className="input-group-text" id="password">
                                                <i className="bi bi-fingerprint"></i>
                                            </span>
                                            <input type="password" className="form-control" placeholder="Senha" aria-label="password" aria-describedby="password" />
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
