/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Moment from 'moment';
import DayItem from "./src/day-item";

//array list for days in a week
//var DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
//platform specific code that you want to implement
const instructionforspecificplatform = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Text> Days of the Week</Text>
        {this.days()}

      </View>
    );
  }
  days(){
   //First way: which is static and will always display according to the list in the array
   // return DAYS.map(function(day){
   //   return <DayItem day={day}/>
   // });

   //second way: dynamic using moment js
   //create array
   var daysItem = [];

   //for loop
   for (var i = 0; i <= 6; i++){
    var currentDay = Moment().add(i,'days').format('dddd');
    daysItem.push( <DayItem day={currentDay} daysUntil={i}/>);
    
   }
   return daysItem
  }
}
//<Text style={styles.instructions}>{instructionforspecificplatform}</Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



