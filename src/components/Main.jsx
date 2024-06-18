import { useState } from "react";
export default function Main() {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState();
    const [apelido, setApelido] = useState();
    const [listaContatos, setListaContatos] = useState([]);

    const registrar = () => {
        setListaContatos([...listaContatos, {
            nomeSalvo: nome,
            apelidoSalvo: apelido,
            telefoneSalvo: telefone
        }])

        console.table(listaContatos);
    };

    const salvar = function () {
        if (nome == "" || apelido == "") {
            console.log("Informações não foram inseridas.");
            Swal.fire({
                title: "ERRO",
                text: "Não foram inseridas algumas das informações obrigatórias!",
                icon: "error"
            });
        } else if (listaContatos.length == 6) {
            console.log("Limite.");
            Swal.fire({
                title: "ERRO",
                text: "Você não tem tanto contatos assim!",
                icon: "error"
            });
        } else {
            Swal.fire({
                title: "Contato Salvo!",
                text: "Seu contato foi salvo com sucesso!",
                icon: "success"
            });
            registrar();
            console.log("As informações salvas são: Nome", nome, "Apelido:", apelido, "Telefone:", telefone);
        }
    }
    const remover = (id) => {
        const novaLista = listaContatos.filter(
            (contato, index) => {
                if (index !== id) {
                    return contato
                } else {
                    return null;
                }
            }
        )
        Swal.fire({
            icon: "warning",
            title: "Tem certeza que quer remover o contato?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Cancelar",
            denyButtonText: `Remover`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Ação Cancelada!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Contato Removido!", "", "success");
                setListaContatos(novaLista);
            }
        });
    }
    function Avatar() {
        return (
            <img
                className="avatar"
                src="https://static.vecteezy.com/ti/vetor-gratis/p1/5544770-perfil-icone-design-gratis-vetor.jpg"
                width={70}
                height={70}
                alt="Avatar"
            />
        );
    }
    return (
        <main>
            <div id="centralizacao-main">
                <div class="bloco-insersoes">
                    <form onSubmit={registrar}>
                        <label htmlFor="nome">Nome: </label>
                        <div className="padding-input"><input type="text" name="" id="nome" value={nome} placeholder="Nome" onChange={(event) => setNome(event.target.value)} /></div>
                        <label htmlFor="nome">Apelido: </label>
                        <div className="padding-input"><input type="text" name="" id="apelido" value={apelido} placeholder="Apelido" onChange={(event) => setApelido(event.target.value)} /></div>
                        <label htmlFor="telefone">Telefone: </label>
                        <div className="padding-input"><input type="tel" id="telefone" value={telefone} placeholder="Telefone" onChange={(event) => setTelefone(event.target.value)} /></div>
                        <button type="button" onClick={salvar}>Enviar</button>
                    </form>
                </div>
            </div>
            <div id="centralizacao-salvos">
                <div class="bloco-insersoes-contatos">
                    <h3>Contatos Salvos:</h3>
                    <div className="container-contatos">
                        {listaContatos.map((contato, index) =>
                            <div className="itens-contatos">
                                <Avatar />
                                <p key={index}>
                                    <h4 className="h4-salvos">Nome:</h4>
                                    <p className="p-salvos">{contato.nomeSalvo}</p>
                                    <h4 className="h4-salvos">Apelido:</h4>
                                    <p className="p-salvos">{contato.apelidoSalvo}</p>
                                    <h4 className="h4-salvos">Telefone:</h4>
                                    <p className="p-salvos">{contato.telefoneSalvo}</p>
                                    <button id="remover-contato" onClick={() => remover(index)}>Remover</button>
                                    <p className="linha"></p>
                                </p>
                        </div>)}
                    </div>
                </div>
            </div>
        </main>
    );
}