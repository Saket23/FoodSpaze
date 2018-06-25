import { Text,AppRegistry,View } from 'react-native';
import React from 'react';
import App from './App';
import Header from './src/Component/header';
import AlbumList from './src/Component/AlbumList';

const  App1 = () => (
<App/>
);
AppRegistry.registerComponent('FoodSpaze', () => App1);
