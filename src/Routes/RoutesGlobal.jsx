import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { Registration } from '../Pages/registration/Registration'
import { Clients} from '../Pages/clients/Clients'
import { User } from '../Pages/user/User'
import { ModalClientes } from '../components/clientes/ModalClientes'

export const RoutesGlobal = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/clients' element={<Clients />} />
                <Route path='/user' element={ <User />} />
                <Route path='/modal' element={ <ModalClientes />} />
            </Routes>
        </BrowserRouter>
    )
}
