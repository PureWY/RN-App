import React from "react";
import {
  View,
  Text,
  Button
} from "react-native";

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '草鹨旅行网',
        headerLeft: <View/>
    };

    render() {
        return ( <View style = {
        {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }
        } > 
            <Text>Home Screen</Text> 
            <Button 
                title="查看详情"
                onPress={()=>{
                    // this.props.navigation.navigate('Details')
                    this.props.navigation.navigate('Details',{
                        itemId: '88',
                        otherParams: '个人中心'
                    })
                }}
            ></Button>
        </View> );
    }
}

export default HomeScreen