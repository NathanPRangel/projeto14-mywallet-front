import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:#8904B1;
  width: 100%;
  height: 100vh;

  h1 {
    font-family: 'Saira Stencil One', cursive;
    color:#FFFFFF;
    font-weight: 400;
    font-size: 32px;
  } 

`
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 25px;
`
export const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  margin-bottom: 13px;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  line-height: 25px;
 
  &::placeholder{
    color: #000000;
    font-family: 'Raleway', sans-serif;
    font-size: 17px;
  }
`
export const StyledButton = styled.button`
  
  width: 300px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4.5px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  line-height: 26px;
  text-align: center;
  background: #A328D6;
  color: #FFFFFF;
`
export const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-decoration: none;
  color:#FFFFFF;
`