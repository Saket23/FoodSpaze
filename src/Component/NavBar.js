import {
    View, Image,Text,
   } from 'react-native';
   import React, { Component } from 'react';
   import {connect} from 'react-redux';
   import { Actions, Router, Scene } from 'react-native-router-flux';
   import {verticalScale} from './Scaling';
   
   class NavBar extends Component {
    
     render() {
       return (
   <View style={styles.backgroundStyle}>
         <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>
          <Text style={{marginLeft:verticalScale(40)}}></Text>
          <Text style={styles.TextStyle}>{this.props.title}</Text>
          <Text style={{marginLeft:verticalScale(40)}}></Text>
       </View>
   </View>
       );
     }
   
   }
   const styles = {
     backgroundStyle: {
       backgroundColor: '#006DB7',
       borderWidth: 1,
       borderRadius: 2,
       borderColor: '#ddd',
       borderBottomWidth: 0,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.8,
       shadowRadius: 2,
       elevation: 1,
      //  marginBottom:20,
       paddingTop:20,
       paddingBottom:20
     },
     TextStyle: {
       left: 0,
       fontSize:20,
       textAlign:"center",
       color:'#fff',
       fontWeight: 'bold',
       textShadowColor: 'rgba(0,0,0,75)',
       textShadowOffset: { width: 0, height: 1 },
       textShadowRadius: 4
     },
     logoutStyle: {
         width: 25,
         height: 25,
         right:0,
         marginRight:verticalScale(10)
     }
   };
  

   
   
   export default NavBar;