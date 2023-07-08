import { Container, StyledForm, StyledInput, StyledButton, StyledLink } from './estilo'
import React, { useContext } from 'react'
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import MyContext from '../../contexts/context'
import {useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Login() {
  const { email, setEmail, token, setToken, password, setPassword } = useContext(MyContext)
  const [botaoAnimado, setBotaoAnimado] = useState("Entrar")
  const navigate = useNavigate();

  function entrar(e) {
    e.preventDefault()
    setBotaoAnimado(
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />)


      const URL = `${process.env.REACT_APP_API_URL}/entrar`

      const dadosCadastro = { email, password }
  
      const promessa = axios.post(URL, dadosCadastro)

      promessa.then(res => { 
        alert("Login Realizado!")
        navigate('/home')
        setToken(res.data)
        console.log(token)
       })

      promessa.catch(res => {
        alert('Usuário ou senha inválidos!')
        setBotaoAnimado("Entrar")
        setEmail("")
        setPassword("")        
  
      })

  }

  return (
    <Container>
      <h1>MyWallet</h1>

      <StyledForm onSubmit={entrar}>

        <StyledInput
          name="email"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <StyledInput
          name="password"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <StyledButton type="submit">
         {botaoAnimado}
        </StyledButton>

      </StyledForm>

      <StyledLink to="/cadastro">
        Primeira vez? Cadastre-se!
      </StyledLink>

    </Container>
  )
}