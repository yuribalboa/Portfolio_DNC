import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'

function Presentation(){
    return(
        <div id="Presentation" className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou o Yuri Tropeia!</h1>
            <p>
                Apaixonado por tecnologia com formação em Engenharia de Gestão. <br/>
                Com uma sólida base acadêmica e uma paixão inabalável por resolver problemas complexos, <br/>
                encontrei minha vocação na interseção entre a engenharia e a tecnologia. <br/>
                Minha jornada profissional tem sido marcada por desafios estimulantes e experiências enriquecedoras. <br/>
                Ao longo dos anos, desenvolvi habilidades em diversas áreas, desde a gestão de projetos até o <br/>
                desenvolvimento de soluções inovadoras por meio da programação.
            </p>
            <ButtonA text='Conecte-se comigo!' link='https://www.linkedin.com/in/yuri-neudine-tropeia/'/>

        </div>
    )
}

export default Presentation