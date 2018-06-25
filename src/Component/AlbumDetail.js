import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import {Actions} from 'react-native-router-flux';

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
           <Text> {props.data.name} </Text>
           </View> 
        </CardSection>

        <CardSection>
            <Image style={styles.imageStyle} source={{ uri: props.data.image_url  }} />
        </CardSection>
        <CardSection>
            <Button onPress={() => {
                Actions.ResturantDetails({id:props.data.id,image:props.data.image_url,latitude:props.data.location.latitude,longitude:props.data.location.longitude,name1:props.data.name});
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
    height: 300,
    flex: 1,
    width: null
}
};

export default AlbumDetail;