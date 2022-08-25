import { FormEvent, useState } from "react";
import api from "../../api/api";
import { Container } from "./styles";

export default function Home (){
    const [name, setName] = useState<string>('')

    async function getUser(user:string) {
        api.get(`${user}`).then((response:any)=>{
            console.log(response.data)
        })        
    }

    function handleUser(event: FormEvent){
        event.preventDefault();
        try {
            if (!name) throw new Error ("Por favor, digite um nome")
            getUser(name)
        } catch (error) {
            alert(error)
            
        }
    }
    
    return(
        <Container>
            <div className="card">
                <div className="image" style={{backgroundImage: `url(https://react-challenge-beep.vercel.app/img/logo.svg)`}}></div>
                <form onSubmit={handleUser}>
                    <input type="text" className="input" onChange={(e:any)=>setName(e.target.value)}/>
                    <button  type="submit">Pesquisar</button>
                </form>
            </div>
        </Container>
    )
}