import styles from './styles.module.scss'

export default function CarrosselProdutos() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img className={styles.img_produto} src="/images/produtos/produto_1.png" alt="Imagem do produto x"/>
                <h3>Café Tipo 1</h3>
                <p className={styles.desc}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <p className={styles.preco}>R$ 999,99</p>
                <div className={styles.btnsCart}>
                    <button><img src="images/icons/cart_product_icon.png" /></button>
                    <button className={styles.btnComprar}>Comprar</button>
                </div>
            </div>
        </div>
    )
}