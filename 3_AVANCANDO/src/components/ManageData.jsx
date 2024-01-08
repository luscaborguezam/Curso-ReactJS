import { useState } from "react"

const ManageData = () => {
    let A = 3

    const [numero, setNumero] = useState(3)
  return (
    <div>
        <div>Váriavel A: {A}<br/>
        <button onClick={()=>console.log(A = A+A)}>A+A</button>
        </div>

        <div>useState numero: {numero}</div><br/>
        <button onClick={()=>setNumero(numero*numero)}>{numero}²</button>
    </div>
  )
}

export default ManageData