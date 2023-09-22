import Button from "./evento/Button"

function Evento(){
    function meuEvento(){
        console.log(`Meu primeiro evento`)
    }

    function segundoEvento(){
        console.log('Meu segundo evento')
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button text='Primeiro evento' event={meuEvento}/>
            <Button text='Segundo evento' event={segundoEvento}/>

        </div>
    )
}

export default Evento