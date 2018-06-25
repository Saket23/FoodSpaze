import React,{ Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import {saveApi} from '../Actions';
import {connect} from 'react-redux';

class AlbumList extends Component {
constructor(props){
    super(props);
this.state = { 
    resturants: [],
    latitude: null,
    longitude: null,
    error: null,
 };
}

    componentDidMount(){
       axios.get('http://www.mocky.io/v2/5ac4842c2f00005600f5f9fb').then(response => this.setState({ resturants: response.data.restaurantList }));

       navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState({ error: error.message })
      );
    }
   

    renderAlbums() {
        const x1=this.state.latitude;
        const y1=this.state.longitude;
        this.state.resturants.forEach((resturant) => {
           const x2=resturant.location.latitude;
           const y2= resturant.location.longitude;
           const k = Math.pow((x2-x1),2) + Math.pow((y2-y1),2);
           const z= Math.sqrt(k);          
           resturant.distance=z;
           //console.log(resturant);
        });
        function SortByDistance(x,y) {
            return x.distance - y.distance; 
          }
        let array1=this.state.resturants;
        array1.sort(SortByDistance);
        console.log(typeof array1);
        this.props.saveApi(array1);
        console.log(this.props.apidata);
       return array1.map(resturant => 
       <AlbumDetail key={resturant.id} data={resturant} />
       );
    }

    render() {
        console.log(this.state.resturants);
    return (
<ScrollView>
{this.renderAlbums()}
</ScrollView>
    );
    }
}


const mapStateToProps = state =>{
    console.log(state);
    return {
        apidata:state.apiData.apiData
  };
  }
  
  export default connect(mapStateToProps,{saveApi})(AlbumList);