import React from 'react';
import {View, Text, Button, StyleSheet} from  'react-native';
import {StackNavigator, TabNavgator} from 'react-navigation';


const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		// alignItems: 'stretch',
		paddingTop: 20,
		height: 65,
		backgroundColor: 'white',
	},
	headerLeft: {
		width: 40,
		marginLeft: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		flexGrow: 1,
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerRight: {
		width: 40,
		marginRight: 10,
		alignItems: 'center',
		justifyContent: 'center',
	}
})
class CustomHeader extends React.Component{
    render(){
        return (
                <View style={styles.header}>
                	<View style={styles.headerLeft}>
                		<Text>{this.props.headerLeft || 'back'}</Text>
                	</View>
                	{
                		this.props.headerTitle
                		? 	this.props.headerTitle
                		:   <View style={styles.headerTitle}>
		                		<Text>dd</Text>
		                	</View>
                	}
                	<View style={styles.headerRight}>
                		{this.props.headerRight}
                	</View>
                </View>
            )
    }
}

export default CustomHeader;