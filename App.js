/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import MainHeader from "./src/component/MainHeader";
import MidSection from "./src/component/MidSection";
import Body from "./src/component/Body";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainHeader />
        <MidSection />
        <Body />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
