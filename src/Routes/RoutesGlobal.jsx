import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { Registration } from '../Pages/registration/Registration'
import { Clients} from '../Pages/clients/Clients'

export const RoutesGlobal = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/clients' element={<Clients />} />
            </Routes>
        </BrowserRouter>
    )
}
