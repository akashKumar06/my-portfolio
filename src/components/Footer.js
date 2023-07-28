import classes from '../components/Footer.module.css';

import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import link from '../assets/linkedln.png';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <h3>Connect with me</h3>
            <div>
                <a href="https://github.com/akashKumar06" target='_blank' rel="noreferrer"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/akash-kumar-18b6b422b/" target='_blank' rel="noreferrer"><img src={link} alt="linkedIn" /></a>
                <a href="mailto:akashkumar59999@gmail.com" target='_blank' rel="noreferrer"><img src={gmail} alt="gmail" /></a>
            </div>
        </footer>
    )
}

export default Footer;