import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"])
  
    const [users, setUsers] = useState([
        {id: 1, name: "Lusk", age: 23},
        {id: 2, name: "Labela", age: 58},
        {id: 3, name: "Pedro", age: 21}
    ])

    const deleteRandom = () => {
        let randomNumber = Math.floor(Math.random() * 4)
        setUsers((prevUsers)=>{
            return prevUsers.filter((user) => randomNumber != user.id)
        })
    }

    return (
    <div>
        <div>
            <ul style={{textAlign:'left'}}>
                {//semelhante ao for eatch
                    list.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))
                    }
            </ul>
            <ul>
                {users.map((item)=>(
                    <li key={item.id}>{item.name} - {item.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Radom</button>
        </div>

    </div>
  )
}

export default ListRender
