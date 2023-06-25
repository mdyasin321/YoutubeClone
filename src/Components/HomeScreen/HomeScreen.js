import React from "react";
import Categories from "../Categories/Categories";
import Video from "../Video/Video";
import classes from './HomeScreen.module.css';

const HomeScreen=()=>{

    const videos= [... new Array(20)].map((element)=>{
        return (
            <Video></Video>
        )
    })
    return(
        <div className={classes.homescreen}>
            <Categories></Categories>
            <div className={classes.videos}>{videos}</div>
        </div>
    )
}

export default HomeScreen;