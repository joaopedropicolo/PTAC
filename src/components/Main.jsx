import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState();
    let [apelido, setApelido] = useState();
    const [listaContatos, setListaContatos] = useState ([]);
const registrar = () => {
    setListaContatos([...listaContatos,
    {
        nomeSalvo: nome,
        apelidoSalvo: apelido,
        telefoneSalvo: telefone
    }
    ])
    console.table(listaContatos);
};
    const salvar = function (){
        if(nome == "" || telefone == "" || apelido == ""){
            console.log("Informações não foram inseridas.");
            Swal.fire({
                title: "ERRO",
                text: "Não foram inseridos algumas das informações obrigatórias!",
                icon: "error"
              });
        }
        else{
            Swal.fire({
                title: "Contato Salvo!",
                text: "Seu contato foi salvo com sucesso!",
                icon: "success"
              });
            registrar();
            console.log("As informações salvas são: Nome", nome, "Apelido:", apelido, "Telefone:", telefone);
        }
    }

    return(
        <div id="centralizacao-main">
        <main>
            <div class="bloco-insersoes">
        <form onSubmit={registrar}>
            <label htmlFor="nome">Nome: </label>
            <div className="padding-input"><input type="text" name="" id="nome" value={nome} placeholder="Nome" onChange={(event)=> setNome(event.target.value)}/></div>
            <label htmlFor="nome">Apelido: </label>
            <div className="padding-input"><input type="text" name="" id="apelido" value={apelido} placeholder="Apelido" onChange={(event)=> setApelido(event.target.value)}/></div>
            <label htmlFor="telefone">Telefone: </label>
            <div className="padding-input"><input type="tel" id="telefone" value={telefone} placeholder="Telefone" onChange={(event)=> setTelefone(event.target.value)}/></div>
           <button type="button" onClick={salvar}>Enviar</button>
        </form>
            </div>
            <br></br><br></br>
        <div class="bloco-salvos">
            <h3>Contatos Salvos:</h3>
        {listaContatos.map((contato, index) =>
        <div key={index}>
            <p class="p-salvos">Nome: {contato.nomeSalvo} ||| Apelido: {contato.apelidoSalvo} ||| Telefone: {contato.telefoneSalvo}</p>
        </div>
        )}
        </div>
        </main>
        </div>
    );
}