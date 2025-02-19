import React from 'react'
import { useState, useEffect } from 'react'
import { SidBar } from '../../components/sidbar/SidBar'
import { Usuarios } from '../../components/usuarios/usuarios'
import { ModalUsuarios } from '../../components/usuarios/ModalUsuarios'

const url = "http://localhost:3000/usuarios"

export const User = () => {

    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        async function getUser() {
            const res = await fetch(url)
            const users = await res.json();
            setUsuarios(users)
        }
        getUser()
    },[])

    return (
        <div>
            <SidBar />
            <div className='col bg-secondary-subtle'>
                <div className='ms-4 d-flex justify-content-between pt-3'>
                    <h2>Usuarios</h2>
                    <ModalUsuarios />
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
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th>Nome</th>
                                <th>EMAIL</th>
                                <th>Telefone</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody className='tbody'>
                            {
                                usuarios.map((usuarios) => {
                                    return <Usuarios
                                        key={usuarios.id_usuarios}
                                        id_usuarios={usuarios.id_usuarios}
                                        nome={usuarios.name}
                                        document={usuarios.email}
                                        phone={usuarios.phone}
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
