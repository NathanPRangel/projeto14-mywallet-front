import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:#8904B1;
    width: 100%;
    height: 100vh;
    padding: 25px;
 
`
export const Topo = styled.div`
    margin-top: 25px;
    margin-bottom: 22px;
    width: 100%;        
    display: flex;
    justify-content: space-between;       
    font-size: 30px;
    color: #FFFFFF;       

h1 {     
    color:#FFFFFF;
    font-weight: 700;
    font-size: 26px;
} 
`
export const StyledRegister = styled.div`    
    width: 326px;
    height: 446px;
    border: none;
    border-radius: 5px;
    font-family: 'Raleway', sans-serif;
    background: #FFFFFF;
    margin-bottom: 13px;
    display: flex;
    align-items: center;
    position: relative;
    
    p{
    text-align: center;
    font-size: 20px;
    font-weight: 400;    
    color: #868686;
    }
    
`
export const Textos = styled.div`
    width: 320px;
    height: 420px;
    
`
export const SaldoFinal = styled.div`
display: flex;
font-size: 17px;
position: absolute;
bottom: 10px;

h1{
    font-weight: bold;
    margin-right:160px;
    margin-left: 20px;
}
h2{
    color: ${props => props.saldo >= 0 ? "#03AC00" : "#C70000"};
}
    
`
export const Lançamentos = styled.div`
display: flex;
flex-direction: column;
padding: 12px ;
box-sizing: border-box;
`
export const Lançamento = styled.div`
display: flex;
font-size: 16px;
position: relative;
margin-top: 10px;

`
export const Data = styled.div`
color: #C6C6C6;
`
export const Descrição = styled.div`
color:#000000;
margin-left: 8px;
`
export const Valor = styled.div`
color: ${props => props.tipo === "entrada" ? "#03AC00" : "#C70000"};
position: absolute;
right: 0;
`


export const StyledButton = styled.button`    
    width: 155px;
    height: 114px;
    display: flex;
    border: none;
    border-radius: 4.5px;
    cursor: pointer;
    font-size: 17px;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    line-height: 26px;
    text-align: center;
    background: #A328D6;
    color: #FFFFFF;
    padding: 12px;
    display: flex;
    flex-direction: column;
    font-size:25px;
    
    
`
export const New = styled.div`
    width: 50%;
    height:40px;
    line-height: 20px;          

h2{
  text-align: start;
  margin-top: 32px;
  font-size: 17px;
}
`    
export const StyledButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
`
