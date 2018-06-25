//import libraries for making a compnents
import React from 'react';
import { Text ,View } from 'react-native';


//Make a component
const Header = (props) => {
    const { textStyle ,viewStyle } = styles;
 return (
     <View style={viewStyle}>
 <Text style={textStyle}>{ props.headerText }</Text>
 </View>
 );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'

    },
textStyle: {
    fontSize: 20
}
};

//make component available for other parts of APP

export default Header;