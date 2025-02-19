import React from 'react'
import { useEffect, useState } from 'react'
import './Clients.css'
import { SidBar } from '../../components/sidbar/SidBar'
import { Clientes } from '../../components/clientes/clientes'
import { ModalClientes } from '../../components/clientes/ModalClientes'

const url = "http://localhost:3000/clientes"


export const Clients = () => {

    const [clientes, setClientes ] = useState([])
    useEffect(() => {
            async function getClientes() {
                const res = await fetch(url)
                const cliente = await res.json();
                setClientes(cliente)
            }
            getClientes()
        },[])

    return (
        <div>
            <SidBar />
            <div className='col bg-secondary-subtle'>
                <div className='ms-4 d-flex justify-content-between pt-3'>
                    <h2>Clientes</h2>
                    <ModalClientes />
                </div>
                <div className='m-2 p-2 container-area'>
                    <div className='row'>
                        <form action="" className='col-6'>
                            <div className="input-group mb-3">
                                <input type="search" className="form-control" placeholder="Pesquisar" aria-label="Recipient's username" aria-describedby="search" />
                                <button type='button' className='btn btn-primary'>
                                    <i className="bi bi-search" id='search'></i>
                                </button>
                            </div>
                        </form>
                        <div className='col-3 mb-3'>
                            <select className="form-select">
                                <option value="to">Todos</option>
                                <option value="A">Ativos</option>
                                <option value="C">Cancelados</option>
                            </select>
                        </div>
                        <div className='col-3 mb-3'>
                            <select className="form-select">
                                <option value="0">Armazenamento</option>
                                <option value="H">Hostinger</option>
                                <option value="M">Mega</option>
                            </select>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th>Empresa</th>
                                <th>CNPJ</th>
                                <th>Telefone</th>
                                <th>T.Armazenamento</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {
                                clientes.map((clientes) => {
                                    return <Clientes
                                        key={clientes.id_clientes}
                                        id_clientes={clientes.id_clientes}
                                        empresa={clientes.empresa}
                                        registration={clientes.registration}
                                        phone={clientes.phone}
                                        cloud={clientes.cloud}
                                    />
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}
