import React from 'react';
import {
	View, 
	Text, 
	Button,
	Image,
	ImageBackground
} from  'react-native';
import {
	StackNavigator, 
	TabNavigator
} from 'react-navigation';
import CustomHeader from './customheader.screen.js'


class RecentChatsScreen extends React.Component {
	static navigationOptions = {
		header: null
	}
	headerRightHandler = ()=>{
		alert(2)
	}

  render() {
    // alert(JSON.stringify(this.props.navigation))
    console.log(2)
	const {navigate}  = this.props.navigation;
  	const headerRight  = (<Text onPress={this.headerRightHandler}>menu</Text>);
    return (
    	<View>
    		<CustomHeader headerRight={headerRight}  />
    		<Image source={{uri: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superlanding/img/logo_top.png'}} style={{width:100,height:100}} />
    		<Image source={require('./image/login-bg1.jpg')} style={{width: 190, height: 100}} />
    		
    		<Text>dd</Text>
    	</View>
    	)
  }
}

class AllContactsScreen extends React.Component {
  static navigationOptions = ()=>{
    return {
      title: 'ds'
    }
  }
  render() {
    // alert(JSON.stringify(this.props.navigation))
    return <Text>List of all contacts</Text>
  }
}

const MainScreen = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});
/*MainScreen.navigationOptions = {
  title: 'My Chats',
};*/

export default MainScreen;