import React from "react";
import classes from './Header.module.css'
import bgImage from '../../../assets/diet-bg.jpg'
import HeaderButton from "./HeaderButton";


export default function Header() {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Dieatary App from Diet<span><strong>epic</strong></span></h1>
                <HeaderButton></HeaderButton>
            </header>
            <div className={classes['main-image']}>
                <img src={bgImage} alt='bg'></img>
            </div>
        </React.Fragment>
    )
}

