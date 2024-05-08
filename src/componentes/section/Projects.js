import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import styles from './Projects.module.css'
import p1 from '../../Image/projects/project1.svg'
import p2 from '../../Image/projects/project2.svg'

function Projects(){
    return(
        <div id='Projects' className={styles.projects}>
            <h1> Projetos </h1>
            <Card 
                img={p1} 
                title='LP - DNC' 
                tech='HTML, CSS e JS' 
                description='Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia' 
                repo='https://github.com/yuribalboa/Desafio_1-Desenvolvendo_Landing_Page_DNC' 
                site='https://desafio-base-yurit.netlify.app/'
            />
            <Card 
                img={p2} 
                title='Portfolio React' 
                tech='React' 
                description='' 
                repo='' 
                site=''
            />
            
            <ButtonB text='Acesse meu repositório' link='https://github.com/yuribalboa?tab=repositories'/>
        </div>
    )
}

export default Projects