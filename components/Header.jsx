import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';


export default function Header(){
    const [loaded] = useFonts({
        Lobster: require("../assets/fonts/Lobster-Regular.ttf")
    })


return(
    <View style={styles.header}>
    <Text style={styles.textCenter}>Weather Dashboard</Text>
    <Text style="color: black; font-style: italic;">App by Bashar Daseh</Text>
</View>
)

}


const styles =StyleSheet.create({
    header: {
        top: 0,
        padding: 25,
       
        color: "#fff",
        backgroundColor: "rgba(0,191,255,.5)",
        marginBottom: 20,
        alignItems: "center",
    },
    textCenter: {
        fontFamily: "Lobster"
    }
})