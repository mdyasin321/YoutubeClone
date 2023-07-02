import React from "react";
import classes from './Sidebar.module.css';
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from 'react-icons/md';

const Sidebar=(props)=>{
    const sidebar=props.sidebar;
    console.log(sidebar);
    return(
             <div className={`${sidebar===true ? classes.open :classes.sidebar} `}>
     {/* <div className={sidebar===true ? classes.open : classes.sidebar }>  */}
            <li>
            <MdHome size={23} />
            <span className={classes.span}>Home</span>
            </li>
            <li>
            <MdSubscriptions size={23} />
            <span className={classes.span}>Subscriptions</span>
            </li>
            <li>
            <MdThumbUp size={23} />
            <span className={classes.span}>LikedVideos</span>
            </li>
            <li>
            <MdHistory size={23} />
            <span className={classes.span}>History</span>
            </li>
            <li>
            <MdLibraryBooks size={23} />
            <span className={classes.span}>Library</span>
            </li>
            <li>
            <MdSentimentDissatisfied size={23} />
            <span className={classes.span}>I don't know</span>
            </li>
            <li>
            <MdExitToApp size={23} />
            <span className={classes.span}>Logout</span>
            </li>
        </div>
    )
}

export default Sidebar;