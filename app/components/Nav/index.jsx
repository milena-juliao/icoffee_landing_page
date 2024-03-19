"use client";
import Link from 'next/link'
import styles from './styles.module.scss'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState();

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className={styles.container}>
            <img className={styles.logo} src="/images/logo_icoffee.png" alt="logo i-Coffee" />

            <div className={styles.content}>
                <div className={styles.menuMobile}>
                    <button onClick={toggleMenu}><FaBars /></button>
                </div>

                <div className={menuOpen ? `${styles.options} ${styles.optionsShow}` : `${styles.options} ${styles.hiddenMenu}`}>
                    <Link href={"#"}>Contato</Link>
                    <Link href={"#"}>Sobre nós</Link>
                    <Link href={"#"}>Produtos</Link>
                    <Link href={"#"}><img src="/images/icons/cart_icon.png" /></Link>
                </div>

            </div>

        </div>
    )
}