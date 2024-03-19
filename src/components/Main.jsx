import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    return(
        <main>
        <form>
            <label htmlFor="nome">Nome: </label>
            <input type="text" name="" id="" placeholder="Seu Nome" onChange={(event)=> setNome(event.target.value)}/>
            <br></br>
            {nome}
            <br></br>
            <label htmlFor="telefone">Telefone: </label>
            <input type="tel" id="telefone" value={telefone} placeholder="Seu Telefone" onChange={(event) => setTelefone(event.target.value)}/>
            <br></br>
            {telefone}
           <br></br>
        </form>
        </main>
    );
}