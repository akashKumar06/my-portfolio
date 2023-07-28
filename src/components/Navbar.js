import classes from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={classes.navbar}>
            <div className={classes.name}>Akash</div>
            <ul>
                <li>Home</li>
                <li>Education</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
};

export default Navbar;