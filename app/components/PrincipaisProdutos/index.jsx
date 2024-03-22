import CarrosselProdutos from '../elements/CarrosselProdutos'
import styles from './styles.module.scss'

export default function PrincipaisProdutos(){
    return(
        <div className={styles.container}>
            <h1>Gostaria de entrar e tomar uma xícara de café?</h1>

            <CarrosselProdutos/>
        </div>
    )
}