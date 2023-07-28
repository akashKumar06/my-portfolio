import c from '../assets/c.png';
import express from'../assets/express.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import mongodb from '../assets/mongodb.png';
import nodejs from '../assets/nodejs.png';
import reactjs from '../assets/reactjs.png';

import classes from './Main.module.css';

const Main = () => {
    return(
        <div className={classes.main}>
            <div className={classes.title}>Akash Kumar</div>
            <div className={classes.description}>Software engineer, Full stack developer</div>
            <div className={classes.images}>
                <img src={c} alt="c" />
                <img src={java} alt="java" />
                <img src={reactjs} alt="react" />
                <img src={nodejs} alt="nodejs" />
                <img src={javascript} alt="javascript" />
                <img src={express} alt="express-js" />
                <img src={mongodb} alt="mongodb" />
            </div>
        </div>
    )
};

export default Main;