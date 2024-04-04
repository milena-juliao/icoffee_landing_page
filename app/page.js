import Image from "next/image";
import styles from './styles/styles.module.scss';
import Hero from "./components/Hero";
import PrincipaisProdutos from "./components/PrincipaisProdutos";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import OrigemGrao from "./components/OrigemGrao";
import EmbalagemEspecial from "./components/EmbalagemEspecial";
import Etapas from "./components/Etapas";

export default function Home() {
    return (
        <div className={styles.container}>
            <Nav/>
            <Hero/>
            <PrincipaisProdutos/>
            <OrigemGrao />
            <EmbalagemEspecial/>
            <Etapas/>
            <Footer/>
        </div>
    );
}
