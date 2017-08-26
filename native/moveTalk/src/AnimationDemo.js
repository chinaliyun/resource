import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	Button,
	TouchableOpacity,
	Animated
} from 'react-native'
import FadeInView from './FadeInView.js'

const styles = StyleSheet.create({
	box: {
		backgroundColor: 'green'
	}
})
export default class AnimationDemo extends React.Component{
	state = {
		w: 100,
		h: 50,
		animateWidth: new Animated.Value(100)
	}
	_onPress = ()=>{
 		let option = {
			toValue: 300
		}
		Animated.timing(this.state.animateWidth, option).start()
	}

	render(){
		return (
			<View>
				<FadeInView duration={2000} style={{backgroundColor: 'red'}}>
				    <Text>aa</Text>
				</FadeInView>

				<Animated.View style={{width: this.state.animateWidth}} >	
					<Text style={{backgroundColor: "red", width: this.state.w, height: this.state.h}}>ded</Text>
				</Animated.View>

				<Button title="test" style={{backgroundColor: 'red'}} onPress={this._onPress} />

				<TouchableOpacity onPress={this._onPress}>
					<View onPress={this._onPress} style={{width: 100, height: 100, backgroundColor: 'green'}}></View>
				</TouchableOpacity>
				<Text onPress={this._onPress}>wefe</Text>
				
			</View>
			)
	}
}