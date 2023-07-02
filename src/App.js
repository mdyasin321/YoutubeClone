import React ,{useState} from 'react';
import classes from "./App.module.css";
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Login from './Components/LoginPage/Login';

const App=()=>{
  const[sidebar,setSidebar]=useState(false);

  const toggleSidebar=()=>{
    // setSidebar((prevState)=>{
    //   return !prevState;
    // })
    setSidebar(value => !value)
  }
  return (
    <React.Fragment>
    
      {/* <Header></Header>
      <button onClick={toggleSidebar}>Click</button>
      <div className={classes.sidebarHomeScreen}>
      <Sidebar  sidebar={sidebar}></Sidebar>
      <HomeScreen></HomeScreen>

      </div> */}
      <Login />
      
    
    </React.Fragment>
  )
}

export default App;
