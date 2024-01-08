const Events = () => {

    const handlerClick = (e) => {
        console.log("Evento onClick")
    }

    const  handlerSomething = (x)=> {
        if(x){
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Tembém posso renderizar isso</h1>
        }
    }
    return(
        <div>
            <div>
                <button onClick={handlerClick}>OnCLick</button>
            </div>
            
            <div>
                <button onClick={()=>console.log("Clicou!")}>Clique aqui também!</button>
            </div>

            <div>
                <button onClick={()=>{
                    if(true){
                        console.log("isso não deveria existir")
                    }
                }}>
                    Click que não deveria existir
                </button>
            </div>
            <div>{handlerSomething(true)}</div>
            <div>{handlerSomething(false)}</div>

        </div>

    )
}

export default Events