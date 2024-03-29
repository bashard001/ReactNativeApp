import React, { Component } from 'react'
import Directory from "./Directory"
import Header from './Header'
import { CAMPSITES } from '../shared/campsites'
import { View, StyleSheet, ImageBackground } from "react-native"



class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campsites: CAMPSITES
        }
    }

    render() {
        return (
            <View >
                  
                <Header />
                <Directory campsites={this.state.campsites} />
               
            </View>)
    }

}


// const styles = StyleSheet.create({
//     MainPage: {
//         backgroundImage: ""
//     }
// })

export default Main;