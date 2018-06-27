import React,{Component} from 'react';
import {Scene,Router} from 'react-native-router-flux';
import AlbumList from './Component/AlbumList';
import Navbar from './Component/NavBar';
import ResturantDetails from './Component/ResturantDetail';

const RouterComponent = () =>{
return(
    <Router>
    <Scene key="AlbumList">
    <Scene 
    key="AlbumList" 
    component={AlbumList}
    navBar={Navbar}
    title="FoodSpaze"
    />
    <Scene 
    key="ResturantDetails" 
    component={ResturantDetails}
    navBar={Navbar}
    title="FoodSpaze"
    />
    </Scene> 
    </Router>
);
}

export default RouterComponent;