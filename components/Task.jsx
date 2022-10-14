import { View, Text, Button } from "react-native";
import React, { Component } from 'react';

class Task extends Component {
    constructor() 
    {
        super();
        this.state={
            data:  'This is Task.'
        }
    }

    test()
    {
        this.setState({data:"Task Done."})
    }
    
    render() { 
        return (
            <View> 
                <Text>
                    {this.state.data}
                    {this.props.msg}
                </Text>
                <Button title="Update State"
                onPress={()=>{this.test() }} />
            </View>
        );
    }
}
 
export default Task;