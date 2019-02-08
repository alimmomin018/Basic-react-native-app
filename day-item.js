//import library
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//create component

export default class DayItem extends Component{
	render() {
		return (
			<View>
				<Text style={this.style()}>{this.props.day}</Text>
			</View>
		);
	}
	style(){
		return {
			color: this.color(),
			//	fontWeight: this.fontWeight(),
			fontSize: this.fontSize(),
			lineHeigth: this.lineHeigth()
		}
	}
	color(){
		var opacity = parseFloat(1/this.props.daysUntil);

		return "rgba(0,0,0,opacity)";
	}
	fontWeight(){
		//var weight = 7 - this.props.daysUntil;
		return 100;
	}
	fontSize(){
		return 60 - 6 * this.props.daysUntil; 
	}
	lineHeigth(){
		return 70 - 4 * this.props.daysUntil;
	}
}
