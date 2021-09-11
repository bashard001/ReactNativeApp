import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';


export default function Header() {
    const [loaded] = useFonts({
        Lobster: require("../assets/fonts/Lobster-Regular.ttf")
    })
    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.header}>
            <Text style={styles.textCenter}>Weather Dashboard</Text>
            <Text style={styles.h6} >App by Bashar Daseh</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        paddingBottom: 5,
        color: "#fff",
        backgroundColor: "rgba(0,191,255,.5)",
        marginBottom: 20,
        
    },
    textCenter: {
        marginTop: 15,
        alignSelf: "center",
        fontFamily: "Lobster"
    },
    h6: {
        color: "black",
        fontStyle: "italic",
        alignSelf: "flex-start",
        fontSize: 10,
        marginBottom: 0,
        marginLeft: 5
    }
})