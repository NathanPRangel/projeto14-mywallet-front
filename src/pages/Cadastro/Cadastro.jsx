import { Container, StyledForm, StyledInput, StyledButton, StyledLink } from "./estilo"
import { ThreeDots } from "react-loader-spinner"
import React, { useContext } from 'react'
import MyContext from '../../contexts/context'
import { useState } from "react"
import axios from 'axios'
import {useNavigate } from "react-router-dom";

export default function Cadastro() {
  const { email, setEmail, name, setName, password, setPassword, confirmPassword, setConfirmPassword} = useContext(MyContext)
  const [botaoAnimado, setBotaoAnimado] = useState("Cadastrar")
  const navigate = useNavigate();

  function cadastrar(e) {
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

      const URL = `${process.env.REACT_APP_API_URL}/cadastrar`

      const dadosCadastro = { name, email, password, confirmPassword }
  
      const promessa = axios.post(URL, dadosCadastro)

      promessa.then(res => { 
        alert("Cadastro realizado!")
        navigate('/')
       })

      promessa.catch(res => {
        alert('Confira novamente todos os campos preenchidos!')
        setBotaoAnimado("Cadastrar")
        setEmail("")
        setName("")
        setPassword("")
        setConfirmPassword("")
  
      })
  }

  return (
    <Container>
      <h1>MyWallet</h1>

      <StyledForm onSubmit={cadastrar}>

        <StyledInput
          name="name"
          placeholder="Nome"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
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

        <StyledInput
          name="password"
          placeholder="Confirme a senha"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
        />
        <StyledButton>
          {botaoAnimado}
        </StyledButton>

      </StyledForm>

      <StyledLink to="/">
        Já tem uma conta? Entre agora!
      </StyledLink>

    </Container>
  )
}

