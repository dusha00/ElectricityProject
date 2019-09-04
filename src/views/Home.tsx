import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { IProps } from '../interface/IProps'

export default class HomeScreen extends Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ItemDetailScreen') }}>
                    <Text>home</Text>
                </TouchableOpacity>
            </View>
        )
    }
}