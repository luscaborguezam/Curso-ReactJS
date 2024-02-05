
/* CSS */
import styles from './ChallengeCSS.module.css'

export const ChallengeCSS = ({nome, modelo, ano, cor, km}) => {
    /*
        2. CSS global zerar, marginm padding e definir fonte
        3.crie componentes que erxiba detalhes de carros (estilizado com scooped)
        4. exibir min 3 carros
        5. Colocar um título em app.js e estilize com o app.js
    */
  return (
    <div className={styles.TableCar}>
        Carro: {nome} <br/>
        Modelo: {modelo}<br/>
        Ano de Fabricação: {ano}<br/>
        cor: {cor}<br/>
        Km rodado: {km}<br/>
        {km == 0 && (<div className={styles.sucesso}>Novo</div>)}
    </div>
  )
}
