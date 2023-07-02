import React from "react";
import classes from "./Login.module.css";

const Login=()=>{
    return (
        <div className={classes.login}>
            <div className={classes.loginContainer}>
                <img  className={classes.img} src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="youtube logo" />
                <button  className={classes.btn}>Login with Google</button>
                <p  className={classes.detail}>This Youtube is created with youtube API</p>

            </div>
        </div>
    )
}
export default Login;