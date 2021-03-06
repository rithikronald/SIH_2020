import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

export default function Login({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../assets/login.png")}
        style={{ height: "30%", width: "60%" }}
      />
      <TextInput
        style={{
          backgroundColor: "#ebecf1",
          borderWidth: 2,
          borderRadius: 10,
          fontSize: 18,
          padding: "3%",
          borderColor: "#c1c1c1",
          width: "80%",
          marginVertical: "5%",
          paddingLeft: 40,
        }}
        placeholder="Email"
        // defaultValue={answersState[index].answer}
        onChangeText={(email) => this.setState({ email })}
      />
      <TextInput
        style={{
          backgroundColor: "#ebecf1",
          borderWidth: 2,
          borderRadius: 10,
          fontSize: 18,
          padding: "3%",
          borderColor: "#c1c1c1",
          width: "80%",
          marginVertical: "5%",
          paddingLeft: 40,
        }}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        // defaultValue={answersState[index].answer}
        onChangeText={(password) => this.setState({ password })}
      />
      <TouchableOpacity
        style={{
          width: 250,
          height: 60,
          backgroundColor: "#8964e0",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginTop: "4%",
        }}
        onPress={() => {
          navigation.push("Pending Visits");
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
