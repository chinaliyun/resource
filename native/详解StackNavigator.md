#StackNavigator(RouterConfig, StackNavigatorConfg)#
这是社区所推荐的一个react-native的导航器，用法可以参考社区的文档，
这个方法用来创建顶级的页面导航；用法如下：

```
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
        title="Go to Lucy's profile"
      />
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
});

```
#参数详解#

##RouterConfig##
```js
StackNavigator({

  // 按照一下例子来创建导航页面
  Profile: {

    // 指定导航页面对应的组件名，当指定组件加载尘能够拱的时候，会自动传递一个navigation属性给组件
    screen: ProfileScreen,

    // 开发WEB-APP的时候需要用这个玩意儿，会遵循严格匹配规则，详情可以看react-router的路径匹配模式
    path: 'people/:name',
    // The action and route params are extracted from the path.

    // 覆盖页面的navigationOptions属性
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}'s Profile'`,
    }),
  },

  ...MyOtherRoutes,
});

```
####navigationOptions: object | function####
目前可以在两个位置中设置navigationOptions属性，方法分别如下：
```js
// 1. StackNavigation中设置， -->
const App = StackNavigator({
  Main: {
    screen: 'MainScreen',
    navigationOption: {
     title: 'main'
    }
  }
})
// 2. 页面组件中设置； -->
class MainScreen extends React.Component{
  static navigationOptions = ({navigation})=>{
    return {
      title: 'zhangsan'
    }
  }
}
```
但是第一种的优先级高于第二种，
```js
navigationOptions = (navigation)=>{
  return {
    // 设置页面的标题  -->
    title: "",
    // 自定义页面头部，可以传入一个react组件 -->
    header :""
    // 自定义页面头部的title组件，下面有复杂的小案例
    headerTitle :""
    // 自定义页面头部返回按钮的组件
    headerBackTitle :""
    // 
    headerTruncatedBackTitle :""
    // 
    headerRight :""
    // 
    headerLeft :""
    // 
    headerStyle :""
    // 
    headerTitleStyle :""
    // 
    headerBackTitleStyle :""
    // 
    headerTintColor :""
    // 
    headerPressColorAndroid :""
    // 
    gesturesEnabled :""
    // 

  }
}
```
**headerTitle**
定义页面中的title部分，做了一个常见的小案例
```js
headerTitle: (
  <View style={{flex: 1, flexDirection: "row", alignItems: 'center'}}>
    <Text style={styles.titleLeft} title="china" onPress={()=>{alert(1)}} >china</Text>
    <Text> | </Text>
    <Text style={styles.titleRight} title="usa" onPress={()=>{alert(2)}} >usa</Text>
  </View>
),
```

**header**
组件有两种方法设置页面头部是否显示
```
<!-- 在StackNavigatorConfig中配置，作用于全局 -->
StackNavigator({},{
  headerMode: 'none'
})

<!-- 在navigationOption中配置，作用于当前页面 -->
navigationOption: {
  header: null
}
```
**headerBackTitle**