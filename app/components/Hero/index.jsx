"use client";
import Link from 'next/link'
import styles from './styles.module.scss'
import { useState } from 'react'

export default function Hero(){
    const [diferenciais, setDiferenciais] = useState(["sabor", "grãos", "aroma", "qualidade"])
    const [index, setIndex] = useState(0)
    
    function changeText() {
        if(index < 3){
            setIndex(index + 1)
        }else{
            setIndex(0)
        }
    }

    for(var i = 0; i <= diferenciais.length; i++){
        setTimeout(changeText, 3000)
    }

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Chegou o café com melhor</h1>
                <h2>{diferenciais[index]}</h2>
                <Link href={"#form"}><button>Quero experimentar</button></Link>
            </div>
        </div>
    )
}