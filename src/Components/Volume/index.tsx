import { FaReadme } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import SeparadorStrings from "../../Utils/SeparadorStrings"
import { useState } from "react";
import styles from './Volume.module.scss'
import ICapas from '../../interfaces/ICapas';

interface VolumeProps {
    volumeEncontrado: ICapas;
}

function Volume({ volumeEncontrado }: VolumeProps) {

    const [stringLink, setStringLink] = useState('')

    const capituloClicado = (stringClicada: string) => {
        const position = stringClicada.substring(10);
        setStringLink(position);
    }


    return (
        <div className={styles.divGeralStyled}>
            <section className={styles.sectionStyled}>
                <div>
                    <img className={styles.imgStyled} src={volumeEncontrado.url} alt={volumeEncontrado.titulo} />
                </div>
                <div className={styles.divTxtStyled}>
                    <h1 className={styles.h1Styled}><FaReadme size={50} /> Ler {volumeEncontrado.titulo}</h1>
                    <p className={styles.pStyled}>
                        Yuji é um gênio do atletismo, mas não tem interesse algum em ficar correndo em círculos. Ele é feliz como membro no Clube de Estudo de Fenômenos Psíquicos. Apesar de estar no clube apenas por diversão, tudo fica sério quando um espírito de verdade aparece na escola! A vida está prestes a se tornar muito interessante na Escola Sugisawa...
                    </p>
                </div>
            </section>
            <div className={styles.divCapitulosStyled}>
                {SeparadorStrings(volumeEncontrado).map((string: string) => {
                    return (
                        <NavLink
                            className={styles.navLinkStyled}
                            to={`${stringLink}${string.substring(10)}`}
                            onClick={() => capituloClicado(string)}
                            key={string}>
                            {string}
                        </NavLink>)
                })}
            </div>
        </div>

    )
}

export default Volume