import React, { Component } from 'react';
import { View } from 'react-native';
import Task from './Task';
 class Parentss extends Component {
    msg = "some data"
    render() {
        return (<View>
            <Task msg={this.msg}></Task>
        </View>
        );
    }
 }
 
 export default Parentss;