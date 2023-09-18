function Cadastro(){
    function cadastrarPessoa(e){
        e.preventDefault()
        console.log('Cadastro feito com sucesso!')
    }

    return(
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarPessoa}>
                <div>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Cadastro