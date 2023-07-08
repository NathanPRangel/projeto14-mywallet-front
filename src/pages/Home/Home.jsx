import { Container, StyledRegister, StyledButtons, StyledButton, Topo, New, Textos, SaldoFinal, Lançamentos, Lançamento, Data, Valor, Descrição } from './estilo'
import { useNavigate } from "react-router-dom";
import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import MyContext from '../../contexts/context'


export default function Home() {
    const [lançamentos, setLançamentos] = useState("")
    const [saldo, setSaldo] = useState("")

    const {token} = useContext(MyContext)
    const navigate = useNavigate();

    function registarNovaEntrada() {
        navigate('/nova-entrada')
    }

    function registarNovaSaida() {
        navigate('/nova-saida')
    }
    function sair(){
        navigate('/')

    }

 useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/home`
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const promise = axios.get(URL, config)

    promise.then((res) => {

        let total = 0;
        res.data.map((item) => {
          if (item.tipo === "saída") {
            return (total -= item.valor);
          } else {
            return (total += item.valor);
          }
        });
        setSaldo(total);
        setLançamentos(res.data);      
    

    })
    promise.catch((err) => {
      console.log(err.response.data)
    })
      }, []);

       if (lançamentos === null) {
    return <div>Carregando...</div>;
  

} else if (lançamentos.length === 0) {

       return (
           <Container>
               <Topo>
                   <h1>Olá, fulano</h1>
                   <ion-icon name="log-out-outline" onClick={sair}></ion-icon>
               </Topo>
   
               <StyledRegister>  
                   <p>Não há registros de entrada ou saída</p>
               </StyledRegister>
   
               <StyledButtons>
   
                   <StyledButton type="submit">
                       <ion-icon name="add-circle-outline"></ion-icon>
                       <New onClick={registarNovaEntrada}><h2>Nova entrada</h2></New>
                   </StyledButton>
   
                   <StyledButton type="submit">
                       <ion-icon name="remove-circle-outline"></ion-icon>
                       <New onClick={registarNovaSaida}><h2>Nova saída</h2></New>
                   </StyledButton>
   
               </StyledButtons>
   
           </Container>
       )
   } else if (lançamentos.length > 0) {  

    return (
        <Container>
            <Topo>
                <h1>Olá, fulano</h1>
                <ion-icon name="log-out-outline" onClick={sair}></ion-icon>
            </Topo>

            <StyledRegister>
                <Textos>
                    <Lançamentos>
{lançamentos.map((item) =>
                          <Lançamento>
                            <Data>{item.data}</Data>
                            <Descrição>{item.description}</Descrição>
                            <Valor tipo={item.tipo} >{item.valor}</Valor>
                        </Lançamento>)}

                   </Lançamentos>

                    <SaldoFinal saldo={saldo}>
                        <h1>SALDO</h1>
                        <h2>{saldo}</h2>
                    </SaldoFinal>
                </Textos>
            </StyledRegister>

            <StyledButtons>

                <StyledButton type="submit">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <New onClick={registarNovaEntrada}><h2>Nova entrada</h2></New>
                </StyledButton>

                <StyledButton type="submit">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <New onClick={registarNovaSaida}><h2>Nova saída</h2></New>
                </StyledButton>

            </StyledButtons>

        </Container>
    )
}}

