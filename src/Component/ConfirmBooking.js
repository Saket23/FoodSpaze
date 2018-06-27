import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export class ConfirmBooking extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      booked: false
    };
  }

  handleConfirm = () => {
    this.setState({
      booked: true
    });
  };
  buttonstyle=()=>{

    if(!this.state.booked)
    return{
        width:'40%',
        backgroundColor: '#006DB7',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        alignItems: "center"
    }
    else{
      return{
        width:'80%',
        backgroundColor: '#006DB7',
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        alignItems: "center"
    }
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(1,1,1,0.7)",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {!this.state.booked ? (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              height: "30%",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 6,
              borderTopLeftRadius: 6
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.state.count > 1
                  ? this.setState({
                      count: this.state.count - 1
                    })
                  : ""
              }
            >
              <Text
                style={{
                  fontSize: 24,
                  marginRight: 20
                }}
              >
                -
              </Text>
            </TouchableOpacity>

            <View
              style={{
                borderWidth: 1,
                borderColor: "#006DB7",
                paddingVertical: 10,
                paddingHorizontal: 15
              }}
            >
              <Text>{this.state.count}</Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                this.setState({
                  count: this.state.count + 1
                })
              }
            >
              <Text
                style={{
                  fontSize: 24,
                  marginLeft: 20
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              backgroundColor: "white",
              height: "30%",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 6,
              borderTopLeftRadius: 6
            }}
          >
            <Text>Booking Confirmed</Text>
          </View>
        )}
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity
          style={this.buttonstyle()}
          onPress={this.state.booked ? this.props.onClose : this.handleConfirm}
        >
          <Text
            style={{
              fontSize: 18,
              paddingVertical: 15,
              color: "white"
            }}
          >
            {!this.state.booked ? "CONFIRM" : "OKAY"}
          </Text>
        </TouchableOpacity>
        {!this.state.booked ? (
        <TouchableOpacity
          style={{
            width:'40%',
            backgroundColor: '#006DB7',
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
            alignItems: "center"
          }}
          onPress={this.props.onClose}
        >
          <Text
            style={{
              fontSize: 18,
              paddingVertical: 15,
              color: "white"
            }}
          >
            CANCEL  
          </Text>
        </TouchableOpacity>
          ):(<TouchableOpacity></TouchableOpacity>)}
        </View>
      </View>
    );
  }
}

export default ConfirmBooking;