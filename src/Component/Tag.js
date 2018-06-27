import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";

const Tag = ({ label, active, onChange }) => (
  <TouchableOpacity
    onPress={() => onChange(label)}
    style={{
      backgroundColor: active ? "#006DB7" : "white",
      paddingHorizontal: 10,
      height: 30,
      marginRight: 5,
      minWidth: 80,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 16,
      borderColor: "#006DB7",
      borderWidth: 1
    }}
  >
    <Text
      style={{
        color: active ? "white" : "#006DB7"
      }}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default Tag;