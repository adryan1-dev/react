import { useState } from "react"

function Form(){
    function cadastrarPessoa(e){
        e.preventDefault()
        console.log(`Usuário cadastrado com o nome ${name} e senha ${password}`)
        console.log('Cadastro feito com sucesso!')
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarPessoa}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form