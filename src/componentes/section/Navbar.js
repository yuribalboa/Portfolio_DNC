import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/esm/NavLink';

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>

            <ul>
                <li><a href='https://www.instagram.com/yurineudine/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/yuribalboa'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/yuri-neudine-tropeia/'><FaLinkedin size={30}/></a></li>
            </ul>

        </div>
    )
}

export default Navbar