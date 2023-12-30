const TemplateExpressions = () =>{
    const name = "Lusca"
    const data = {
        age: 31,
        job: "Garoto de Programa"
      }

    return(
        <div>
            <h1>{name}</h1>
            <p>
                Idade: {data.age} <br/>
                Profissão: {data.job}
            </p>
        </div>
    )
}

export default TemplateExpressions