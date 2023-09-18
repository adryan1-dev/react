import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca='Ferrari' ano_lancamento={2020}/>
            <Item marca='Porsche' ano_lancamento={2018}/>
            <Item marca='Mercedes' ano_lancamento={2016}/>
            <Item/>
        </ul>
        </>
    )   
}



export default List