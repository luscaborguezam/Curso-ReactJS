
const DestructuringCarDetails = ({id, km, brand, color, newCar}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>hilometragem: {km}</li>
            <li>Cor: {color}</li>
            {newCar && <p>Carro novo!</p>}
        </ul>
    </div>
  )
}

export default DestructuringCarDetails
