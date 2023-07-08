import {Container, StyledForm, StyledInput, StyledButton} from './estilo'
import React, { useContext } from 'react'
import { ThreeDots } from "react-loader-spinner"
import MyContext from '../../contexts/context'
import { useState } from "react"
import axios from 'axios'
import {useNavigate } from "react-router-dom";

export default function NovaEntrada() {
    const {valor, setValor, description, setDescription, token} = useContext(MyContext)
    const [botaoAnimado, setBotaoAnimado] = useState("Salvar entrada")
    const navigate = useNavigate();

    function salvarEntrada(e){
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

          const URL = `${process.env.REACT_APP_API_URL}/nova-entrada`
          const dadosCadastro = { valor, description}
          const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
      
          const promise = axios.post(URL,dadosCadastro,config)
      
          promise.then((res) => {
            alert('Entrada registrada com sucesso!') 
            navigate('/home')                
          
          })
          promise.catch((err) => {
            console.log(err.response.data)
          })
    
    }
    
    return (
        <Container>
            <div>
                <h1>Nova entrada</h1>
            </div>

            <StyledForm onSubmit={salvarEntrada}>

                <StyledInput
                    name="valor"
                    placeholder="Valor"
                    type="number"
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                    required
                />

                <StyledInput
                    name="description"
                    placeholder="Descrição"
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                />

                <StyledButton type="submit">
                    {botaoAnimado}
                </StyledButton>

            </StyledForm>

        </Container>
    )
}