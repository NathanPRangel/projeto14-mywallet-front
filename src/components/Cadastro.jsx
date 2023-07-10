import {useState, useEffect} from 'react'
import styled from 'styled-components'
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import 'animate.css'

import {GlobalStyles} from './GlobalStyles'
import Loading from './Loading'

export default function Cadastro(props){

	const nav = useNavigate()

	const[username, setUsername] = useState("")
	const[email, setEmail] = useState("")
	const[password, setPassword] = useState("")
	const[confirmPassword, setConfirmPassword] = useState("")
	const[loading, setLoading] = useState(false)

	function signupSuccess(){
		alert("Registro efetuado com sucesso!")
		nav("/")
	}

	function signupFail(error){
		setLoading(false)
		alert(error)
	}

	function signup(event){
		event.preventDefault()
		if (password !== confirmPassword){
			return alert('As senhas precisam ser iguais')
		}
		setLoading(true)
		const prom = axios.post(`${process.env.VITE_API_URL}/signup`, {
			username, email, password
		})

		prom.then(signupSuccess).catch((error)=>signupFail(error))
	}

	return(<GlobalStyles>
		{loading?<Loading/>:<></>}
		<Layout className='animate__animated animate__fadeInDown'>
			<h1>MyWallet</h1>

			<form onSubmit={signup}>

				<input data-test="name" required type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='Nome'></input>

				<input data-test="email" required type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='E-mail'></input>

				<input data-test="password" required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Senha'></input>

				<input data-test="conf-password" required type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder='Confirme a senha'></input>

				<button data-test="sign-up-submit" type="submit">Cadastrar</button>
			</form>

			<a>
			<Link to="/">Já tem uma conta? Entre agora!</Link>
			</a>

		</Layout>
	</GlobalStyles>)
}

const Layout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	padding-left: 25px;
	padding-right: 25px;

	a{
		text-decoration: none;
		color: white;
		margin-top: 36px;
		font-family: Raleway;
		font-size: 15px;
		font-weight: 700;
		line-height: 18px;
		letter-spacing: 0em;
		text-align: left;
	}
`