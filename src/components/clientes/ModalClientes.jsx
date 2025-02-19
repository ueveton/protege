import React from 'react'
import { useState, useEffect } from 'react'

const url = "http://localhost:3000/clientes"

export const ModalClientes = () => {

    const [empresa, setEmpresa] = useState("")
    const [district, setDistrict] = useState("")
    const [registration, SetRegistration] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [situacao, setSituacao] = useState("")
    const [cloud, setCloud] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const clientes ={
            empresa,
            district,
            registration,
            phone,
            email,
            situacao,
            cloud,
        };
        
        const res= await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(clientes),
        });
    }

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
                        <div className="modal-body add-produto">
                            <form action="" onSubmit={handleSubmit}>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className="input-group mb-3 col-12">
                                            <span className="input-group-text" id="empresa">
                                                <i className="bi bi-person-bounding-box"></i>
                                            </span>
                                            <input 
                                                type="text"
                                                value={empresa}
                                                onChange={(e)=> setEmpresa(e.target.value)}
                                                className="form-control" placeholder="Empresa" />
                                        </div>
                                        <div className="input-group mb-3 col-12">
                                            <span className="input-group-text" id="district">
                                                <i className="bi bi-badge-ad-fill"></i>
                                            </span>
                                            <input 
                                                type="text" 
                                                value={district}
                                                onChange={(e)=> setDistrict(e.target.value)}
                                                className="form-control" placeholder="Endereço" />
                                        </div>
                                        <div className="input-group mb-3 col">
                                            <span className="input-group-text" id="registration">
                                                <i className="bi bi-bank2"></i>
                                            </span>
                                            <input 
                                                type="text" 
                                                value={registration}
                                                onChange={(e) => SetRegistration(e.target.value)}
                                                className="form-control" placeholder="CNPJ" />
                                        </div>
                                        <div className="input-group mb-3 col">
                                            <span className="input-group-text" id="phone">
                                                <i className="bi bi-telephone-outbound-fill"></i>
                                            </span>
                                            <input 
                                                type="number" 
                                                value={phone}
                                                onChange={(e)=> setPhone(e.target.value)}
                                                className="form-control" placeholder="Telefone" />
                                        </div>
                                        <div className="input-group mb-3 col-12">
                                            <span className="input-group-text" id="email">
                                                <i className="bi bi-envelope-at-fill"></i>
                                            </span>
                                            <input 
                                                type="email" 
                                                value={email}
                                                onChange={(e)=> setEmail(e.target.value)}
                                                className="form-control" placeholder="Email" />
                                        </div>
                                        <div className='mb-3 col'>
                                            <select 
                                                value={situacao}
                                                onChange={(e)=> setSituacao(e.target.value)}
                                                className="form-select" name='situacao' id='situacao'>
                                                <option>Situação</option>
                                                <option value="Ativo">Ativo</option>
                                                <option value="Cancelado">Cancelado</option>
                                            </select>
                                        </div>
                                        <div className='mb-3 col'>
                                            <select 
                                                value={cloud}
                                                onChange={(e)=> setCloud(e.target.value)}
                                                className="form-select" name='cloud' id='cloud'>
                                                <option>Tipo de Armazenamento</option>
                                                <option value="Hostinger">Hostinger</option>
                                                <option value="Mega">Mega</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-warning">Limpar</button>
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-primary" value="enviar">Salvar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
