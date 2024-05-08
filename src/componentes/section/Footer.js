import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/yurineudine/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/yuribalboa'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/yuri-neudine-tropeia/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>yurineudinetropeia@gmail.com</p>
            <p>Yuri Tropeia © 2024</p>
        </div>
    )
}

export default Footer