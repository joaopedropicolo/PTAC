import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    return(
        <div id="centralizacao-main">
        <main>
            <div id="bloco-insersoes">
        <form>
            <label htmlFor="nome">Nome: </label> {nome}
            <div className="padding-input"><input type="text" name="" id="" placeholder="Seu Nome" onChange={(event)=> setNome(event.target.value)}/></div>
            <label htmlFor="telefone">Telefone: </label> {telefone}
            <div className="padding-input"><input type="tel" id="telefone" value={telefone} placeholder="Seu Telefone" onChange={(event) => setTelefone(event.target.value)}/></div>
           <button>Enviar</button>
        </form>
            </div>
        </main>
        </div>
    );
}