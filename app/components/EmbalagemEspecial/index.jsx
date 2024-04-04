import React from 'react';
import styles from './styles.module.scss'

export default function EmbalagemEspecial() {
    return (
        <div className={styles.container}>

            <div className={styles.content}>

                <img src="/images/embalagem.png" />

                <div>
                    <h1>Embalagem especial</h1>
                    <p>A embalagem da linha premium "Grão Dourado" é tão distinta quanto o próprio café que contém. Projetada para refletir a elegância e a qualidade excepcional dos grãos dentro dela, a embalagem apresenta um design moderno e sofisticado, com detalhes que remetem à tradição cafeeira brasileira. As cores douradas e terrosas evocam a riqueza das terras onde os grãos são cultivados, enquanto os elementos gráficos destacam a origem e a qualidade premium do produto.</p>
                </div>

            </div>

            <div className={styles.boxBack}></div>

        </div>
    )
}