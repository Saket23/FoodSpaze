import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image
    ,ScrollView,Text,
    SectionList,
    TouchableOpacity,
    FlatList,
    Modal,
    TouchableHighlight,
    ImageBackground
 } from 'react-native';
import {verticalScale} from './Scaling';
import Tag from './Tag';
import { List, ListItem } from 'react-native-elements';

import {connect} from 'react-redux';
import { ConfirmBooking } from './ConfirmBooking';
import Icon from "react-native-vector-icons/Ionicons";

class ResturantDetail extends Component{
    constructor(props){
        super(props);
        this.state={
           tagLevel:'All',
           Food:[],
           modalVisible: false,
           address:''
        }
    }
    
    componentWillMount(){
        console.log([...this.props.data1.menu_list[0]["Veg"] || [], ...this.props.data1.menu_list[0]["nonVeg"] || []]);
        this.setState({Food:this.props.data1.menu_list[0].Veg.concat(this.props.data1.menu_list[0].nonVeg) });
    }

    componentDidMount(){
        let latlng = {lat: parseFloat(this.props.data1.location.latitude), lng: parseFloat(this.props.data1.location.longitude)};
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${latlng.lat},${latlng.lng}&key=AIzaSyDRK7KfkXl5ImgeUw7jIydgcF9HgGjj0xk`)
        .then((response) => response.json())
        .then((responseJson) => {
            console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson.results[0].formatted_address));
            this.setState({address:responseJson.results[0].formatted_address});
})
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    
    onTagPress(label){
        this.setState({tagLevel:label});
        if(label=="VEG"){
            this.setState({Food:this.props.data1.menu_list[0].Veg});
        }
        else if(label=="Non-VEG"){
            this.setState({Food:this.props.data1.menu_list[0].nonVeg});
        }
        else if(label=="All"){
            this.setState({Food:this.props.data1.menu_list[0].Veg.concat(this.props.data1.menu_list[0].nonVeg) });              
        }
    }
  
    render() {
        const tagActive= this.state.tagLevel;
        return(
            <View style={{flex:1}}>
     <ScrollView style={{flex:1,backgroundColor:"#fff"}}>
     
        <ImageBackground source={{uri:this.props.data1.image_url}} style={styles.image1}>
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'stretch',
            backgroundColor:'rgba(0,0,0,0.5)'
        }}>
        <Text style={[styles.name1,{backgroundColor:'transparent'}]}>{this.props.name1}</Text>
        </View>
        </ImageBackground>
        <View style={{flexDirection: "row",width:'80%',alignSelf:'center'}}>
            <Icon name='ios-pin' color="black" size={20} />
            <Text style={{color:'black'}}>{this.state.address}</Text>
        </View>

        <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
          marginHorizontal: 10,
          alignSelf:'center'
        }}
      >
        <Tag
          label="VEG"
          active={tagActive === "VEG" ? true : false}
          onChange={this.onTagPress.bind(this)}
        />
        <Tag
          label="Non-VEG"
          active={tagActive === "Non-VEG" ? true : false}
          onChange={this.onTagPress.bind(this)}
        />
    
        <Tag
          label="All"
          active={tagActive === "All" ? true : false}
          onChange={this.onTagPress.bind(this)}
        />
      </View> 
      <List containerStyle={{ borderTopWidth: 0, 
        borderBottomWidth: 0,
        alignSelf:'auto',
        marginLeft:20,
        marginRight:20 }}>
      <FlatList
        data={this.state.Food}
        renderItem={({ item }) => (
          <ListItem
            title={item.dish_name}
            subtitle={`Rs ${item.price}/-`}
            hideChevron
          />
        )}
        keyExtractor={item => item.dish_name}
      />
    </List>
     </ScrollView>
     <TouchableOpacity  style={styles.ButtonStyle} onPress={() => {
        this.setModalVisible(true);
      }}>
     <Text style={styles.TextStyle}>
     Book a Table
     </Text>
     </TouchableOpacity>

     <Modal
     animationType="slide"
     transparent={false}
     visible={this.state.modalVisible}
     onRequestClose={() => {
       alert('Modal has been closed.');
     }}>
     <ConfirmBooking
     onClose={() =>
       this.setState({
        modalVisible: false
       })
     }
   />
   </Modal>
     </View>
        );
    }
  }

  const styles = StyleSheet.create({
    image1:{
        flex: 1,
        height:200,
        marginVertical: 20,
        marginLeft: 25,
        marginRight:25,
        justifyContent:'center',
        alignItems:'center'
    },
    TextStyle:{
        fontSize: 28,
        textAlign: 'center',
        margin: 5, 
        color:'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0,75)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
        paddingLeft:40,
        paddingRight:40
      },
      name1:{
        fontSize:40,
        color:'white',
        alignSelf:'center',
        fontWeight:'900'
      },
      ButtonStyle: {
        backgroundColor: '#006DB7',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#007aff'
    }
  })

  const mapStateToProps = state =>{
    return {
        apidata:state.apiData.apiData
  };
  }

export default connect(mapStateToProps)(ResturantDetail);