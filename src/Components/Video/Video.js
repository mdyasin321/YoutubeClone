import React from "react";
import classes from './Video.module.css';
import {AiFillEye} from 'react-icons/ai';

const Video=()=>{
 
    return(
        <div className={classes.video}>
            <div className={classes.videoTop}>
                <img src="https://i.ytimg.com/vi/2O65c3B_9_c/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBD0FhrBDGoHylvgi0IEzTtzlPAnQ" alt="video" />
                <span>5:43</span>

            </div>
            <div className={classes.videoTitle}>
                Create a Website in 30 min

            </div>
            <div className={classes.videoDetails}>
                <span>
                    <AiFillEye></AiFillEye>
                </span>
                <span>
                • 5 days ago
                </span>



            </div>
            <div className={classes.videoChannel}>
                <img src="https://st3.depositphotos.com/19428878/37071/v/450/depositphotos_370714622-stock-illustration-businessman-icon-vector-male-avatar.jpg" alt="image" />
                <span>
                    Rainbow Hat jr
                </span>

            </div>

        </div>
    )
}

export default Video;