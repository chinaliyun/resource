import React from 'react';
import {
	Animated,
} from 'react-native'

export default class FadeInView extends React.Component{
	constructor(props){
		super(props);
	}
	state = {
		fadeAnim: new Animated.Value(0)
	}
	componentDidMount(){
		let options = {
			toValue: 0.5,
		};
		if(this.props.duration){
			options.duration = this.props.duration
		}
		Animated.timing(this.state.fadeAnim, options).start()
	}
	render(){
		return (
				<Animated.View style={{...this.props.style, opacity: this.state.fadeAnim}}>
					{this.props.children}
				</Animated.View>
			)
	}
}