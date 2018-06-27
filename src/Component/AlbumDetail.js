import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import {Actions} from 'react-native-router-flux';
import Icon from "react-native-vector-icons/Ionicons";

const AlbumDetail = (props) => {
return (
    <Card>
        <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image 
                style={styles.thumbnailStyle}
                source={{ uri: props.data.image_url }} 
                />
                </View>
            <View style={styles.headerContentStyles}>
           <Text style={{fontWeight:'900',color:'#000',fontSize:20}}> {props.data.name} </Text>
           <View style={{flexDirection: "row",}}>
           <Icon name='ios-pin' color="black" size={20} />
           <Text style={{color:'black'}}> {(props.data.distance*100).toFixed(2)} kms </Text>
           </View>
           </View> 
        </CardSection>

        <CardSection>
            <Image style={styles.imageStyle} source={{ uri: props.data.image_url  }} />
        </CardSection>
        <CardSection>
            <Button onPress={() => {
                Actions.ResturantDetails({data1:props.data,name1:props.data.name});
            }} >
                Looks Interesting
                </Button>
        </CardSection>
        </Card>
);
};

const styles = {
headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
},
headerTextStyle: {
    fontSize: 18
},
thumbnailStyle: {
    height: 50,
    width: 50
},
thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
},
imageStyle: {
    height: 200,
    flex: 1,
    width: null
}
};

export default AlbumDetail;