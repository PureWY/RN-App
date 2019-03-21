import React from "react";
import {
  View,
  Text,
  Alert,
  Button
} from "react-native";

class DetailScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('otherParams','详情页面'),
            // headerRight: <Button
            //     title="+1"
            //     onPress={navigation.getParam('increaseCount')}
            // ></Button>
        }
    }

    // componentDidMount(){
    //     this.props.navigation.setParams({increaseCount: this._increaseCount})
    // }

    // _increaseCount = ()=>{
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    render() {
        return ( <View style = {
        {
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }
        } > 
            <Text>Detail Screen</Text> 
            <Text>{this.state.count}</Text>
            <Button 
            title="修改标题"
            onPress={()=>{
                this.props.navigation.setParams({
                    otherParams: '详情页面'
                })
            }}
            ></Button>
        </View> );
    }
}

export default DetailScreen