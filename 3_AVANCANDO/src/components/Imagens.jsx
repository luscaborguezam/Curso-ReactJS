//image
import City from '../assets/city.jpg'

const Imagens = () => {
  return (
    <div>
        <h1>Avançando em React</h1>
        <div>
            <img src="/img1.jpg" alt="Paisagem" />
        </div>
        {/* Image assets */}
        <div>
            <img src={City} alt="Cidade" />
        </div>
    </div>
  )
}

export default Imagens
