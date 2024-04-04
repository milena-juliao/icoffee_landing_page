import React from 'react';
import styles from './styles.module.scss'

export default function Etapas() {
    return (
        <div className={styles.container}>

            <img src="/images/faixa_graos.png" />

            <div className={styles.content}>
                <h1>As etapas da torra que <span>ressaltam o melhor</span> do nosso grão</h1>

                <div className={styles.etapa}>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    <h2>Etapa 1</h2>
                </div>
            </div>

        </div>
    )
}