
const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <ul>
            <p>nome: {nome}</p>
            <p>idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            { idade >= 18 ?
                <p style={{color:'green'}}>
                    Maior idade, permitido tirar habilitação
                </p>
                : <p style={{color:'red'}}>Menor idade, poderá tirar habilitação após {18 - idade } anos</p>
            }

            <br/>
        </ul>
    </div>
  )
}

export default UserDetails
