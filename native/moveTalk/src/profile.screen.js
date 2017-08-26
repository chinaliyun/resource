import React from 'react';
import {View, Text, Button, StyleSheet} from  'react-native';
import {StackNavigator, TabNavgator} from 'react-navigation';


const styles = StyleSheet.create({
	titleLeft: {
		color: "red"
	},
	titleRight: {
		color: 'orange'
	}
})
class ProfileScreen extends React.Component{
	static navigationOptions = ({navigation})=>{
		return {
			title: navigation.state.params.name,
			// header: null,
			headerTitle: (
				<View style={{flex: 1, flexDirection: "row", alignItems: 'center'}}>
					<Text style={styles.titleLeft} title="china" onPress={()=>{alert(11)}} >china</Text>
					<Text> | </Text>
					<Text style={styles.titleRight} title="usa" onPress={()=>{alert(12)}} >usa</Text>
				</View>
			),
			headerRight: <Button title="menu" onPress={()=>{
				navigation.setParams({name: 'lisi'})
			}}/ >,
			headerBackTitle: 'dd'
		}
	}
    render(){
    	const {state, navigae} = this.props.navigation;
        return (
                <Text>{JSON.stringify(state.params)}</Text>
            )
    }
}

export default ProfileScreen;