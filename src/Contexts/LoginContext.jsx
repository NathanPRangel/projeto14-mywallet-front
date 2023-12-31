import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const LoginContext = createContext();

export function LoginProvider({ children }) {

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [listadeTransacoes, setListadeTransacoes] = useState([]);
    const [user, setUser] = useState("");
    const [transacao, setTransacao] = useState(null);

    const isLoged = () => {
        let token = localStorage.getItem("token");

        if(token){
            axios.defaults.headers.common['Authorization'] = token;
        } else {
            navigate("/");
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common['Authorization'] = "";
        navigate("/");
    }
   


    return (
        <LoginContext.Provider value={{ login, setLogin, listadeTransacoes, setListadeTransacoes,
         user, setUser,transacao, setTransacao, isLoged, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

