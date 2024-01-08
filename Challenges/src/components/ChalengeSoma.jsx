const ChalengeSoma = () => {
    
    const n1 = 10
    const n2 = 20

    const handlerSoma = () => {
        console.log(n1 + n2)
    }


    return(
        <div>
            <h1>Soma de Dois Valores</h1>
            <h2>{`${n1} e ${n2}`}</h2>
            <button onClick={handlerSoma}>Somar</button>
        </div>
    )
}

export default ChalengeSoma