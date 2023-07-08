import React from 'react';
import MyContext from './contexts/context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from "react"
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Home from './pages/Home/Home'
import NovaEntrada from './pages/NovaEntrada/NovaEntrada'
import NovaSaida from './pages/NovaSaida/NovaSaida'



export default function App() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [name, setName] = useState("")        
    const [token, setToken] = useState("")
    const [valor, setValor] = useState("")
    const [description, setDescription] = useState("")


    return (
        <BrowserRouter>
            <MyContext.Provider value={{email, setEmail, password, setPassword, name, setName, token, setToken, confirmPassword, setConfirmPassword, valor, setValor, description, setDescription}}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/nova-entrada" element={<NovaEntrada />} />
                    <Route path="/nova-saida" element={<NovaSaida />} />
                </Routes>
            </MyContext.Provider>
        </BrowserRouter>
    )
}