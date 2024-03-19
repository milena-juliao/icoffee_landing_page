import Image from "next/image";
import styles from './styles/styles.module.scss';
import Hero from "./components/Hero";
import PrincipaisProdutos from "./components/PrincipaisProdutos";
import Beneficios from "./components/Beneficios";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Home() {
    return (
        <div className={styles.container}>
            <Nav/>
            <Hero/>
            <PrincipaisProdutos/>
            <Beneficios/>
            <Depoimentos/>
            <Footer/>
        </div>
    );
}
