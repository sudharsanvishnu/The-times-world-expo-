import React from 'react'
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'

const TextComponent = ({item}) => {

    return(
        <View style={styles.box}>
            <View style={{padding:5}} >
            <Text style={{fontSize: 25}}>{" "}{item.name}</Text>
            <Text style={styles.content}>Language :{" "}{item.language}</Text>
            <Text>Country :{" "}{item.country}</Text>
            <Text>Category :{" "}{item.category}</Text>
            <Text>Description :{" "}{item.description}</Text>
            <TouchableOpacity 
                    onPress={() =>{
                    Linking.openURL(item.url)
                    }}>
            <Text style={{color: 'red', fontStyle: 'italic'}}>URL: {" "} {item.url}</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.bottomLine}/>
        </View>
    )
}

export default TextComponent;

const styles = StyleSheet.create({
    content: {
        fontSize: 14,
      },
      bottomLine: {
        backgroundColor: '#b8b8b880',
        height: 10,
        width: "100%",
        marginBottom: 5,
        marginTop: 8
      }, 
})
