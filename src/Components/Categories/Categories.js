import React,{useState} from "react";
import { Keywords } from "./CategoriesKeywords";
import classes from './Categories.module.css';

const Categories=()=>{
   const[active,setActive]=useState('All');

   const activeElementHandler=(value)=>{
    setActive(value);
   }

    const keywords= Keywords.map((element,index)=>{
        return (
            // i have used backtick so that I can give multiple classnames
            <span className={` ${classes.span}  ${active===element ?  classes.active : ''}`} key={index} onClick={()=>{activeElementHandler(element)}}>{element}</span>
        )
    })
    return(
        <div className={classes.categoriesBar}>{keywords}</div>
    )
}

export default Categories;