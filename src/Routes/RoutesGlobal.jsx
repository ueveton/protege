import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { Registration } from '../Pages/registration/Registration'

export const RoutesGlobal = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/registration' element={<Registration />} />
            </Routes>
        </BrowserRouter>
    )
}
