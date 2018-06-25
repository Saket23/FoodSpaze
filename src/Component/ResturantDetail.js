import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView,Text,SectionList } from 'react-native';

import {connect} from 'react-redux';

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10



class ResturantDetail extends Component{
    constructor(props){
        super(props);
        this.state={
            images:[]
        }
    }
    numItems = 3
    itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)

    componentWillMount(){
        console.log(this.props);
           //console.log(this.props.apiData);
          // var obj = this.props.apiData;
           //console.log(obj);
           /*obj.forEach(function(element) {
               console.log(element);
            if(element.id==this.props.id){
                this.state.images.push(element.image_url);
                this.state.images.push(element.image_url);
                this.state.images.push(element.image_url);
            }
            console.log(this.state.images);
          });*/
                this.state.images.push(this.props.image);
                this.state.images.push(this.props.image);
                this.state.images.push(this.props.image);
                console.log(this.state.images);

    }
  
    render() {
      let imageArray = []
      let barArray = []
      this.state.images.forEach((image, i) => {
        console.log(image, i)
        const thisImage = (
          <Image
            key={`image${i}`}
            source={{uri: image}}
            style={{ width: deviceWidth }}
          />
        )
        imageArray.push(thisImage)
  
        const scrollBarVal = this.animVal.interpolate({
          inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
          outputRange: [-this.itemWidth, this.itemWidth],
          extrapolate: 'clamp',
        })
  
        const thisBar = (
          <View
            key={`bar${i}`}
            style={[
              styles.track,
              {
                width: this.itemWidth,
                marginLeft: i === 0 ? 0 : BAR_SPACE,
              },
            ]}
          >
            <Animated.View
  
              style={[
                styles.bar,
                {
                  width: this.itemWidth,
                  transform: [
                    { translateX: scrollBarVal },
                  ],
                },
              ]}
            />
          </View>
        )
        barArray.push(thisBar)
      })
  
      return (
        <View
          style={styles.container}
          flex={1}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
              )
            }
          >
  
            {imageArray}
  
          </ScrollView>
          <View
            style={styles.barContainer}
          >
            {barArray}
          </View>
          <Text style={styles.textStyle}>{this.props.name1}</Text>
          <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#ffffff'
    },
    barContainer: {
      position: 'absolute',
      zIndex: 2,
      top: 40,
      flexDirection: 'row',
    },
    track: {
      backgroundColor: '#ccc',
      overflow: 'hidden',
      height: 2,
    },
    bar: {
      backgroundColor: '#5294d6',
      height: 2,
      position: 'absolute',
      left: 0,
      top: 0,
    },
    textStyle:{
        color:'black',
        marginTop:10,
        marginBottom:10,
        backgroundColor:'white',
        fontWeight:"900",
        fontSize:30
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      }
  })

  const mapStateToProps = state =>{
    return {
        apidata:state.apiData.apiData
  };
  }

export default connect(mapStateToProps)(ResturantDetail);