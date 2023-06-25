import React from 'react';
import classes from "./App.module.css";
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import HomeScreen from './Components/HomeScreen/HomeScreen';

const App=()=>{
  return (
    <React.Fragment>
    
      <Header></Header>
      <div className={classes.sidebarHomeScreen}>
      <Sidebar></Sidebar>
      <HomeScreen></HomeScreen>

      </div>
      
    
    </React.Fragment>
  )
}

export default App;
