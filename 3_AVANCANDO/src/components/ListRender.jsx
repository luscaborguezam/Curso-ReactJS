import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"])
  
    const [users] = useState([
        {id: 1, name: "Lusk", age: 23},
        {id: 7946, name: "Labela", age: 58},
        {id: 8928, name: "Pedro", age: 21}
    ])

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
        </div>

    </div>
  )
}

export default ListRender
