import React from "react";
import classes from './Header.module.css';

const Header=()=>{
    return (
        <div className={classes.header}>
            <img className={classes.imageYoutube} src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="youtube logo"/>

            <form id={classes.form}>
                <input type="text" placeholder="Search" width="90px"  height="90px"/>
                <button type="submit">Press</button>
            </form>

            <img className={classes.imageAvatar} src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="avatar" />
        </div>
    )
}

export default Header;