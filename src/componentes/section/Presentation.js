import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useEffect, useState} from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Yuri Tropeia!', 'Desenvolvedor Front End!', 'Product Manager!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 200;
    const [delta, setDelta] = useState(100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return() => {clearInterval(ticker)}
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period); 
            setLoop(loop+1);
        }
    }

    return(
        <div id="Presentation" className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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