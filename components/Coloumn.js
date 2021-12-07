import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Coloumn = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.rowItems}>
                <View style={{width: "60%"}}>
                <Text style={styles.headline} numberOfLines={2} ellipsizeMode="tail" >{item.title}</Text>
                <Text style={styles.published}>{item.publishedAt}</Text>
                </View>
                <Image style={styles.img} source={{uri: item.urlToImage }} />  
            </View>
            <View style={styles.bottomLine}/> 
        </View>
    )
}

export default Coloumn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 2,
        marginBottom: 2,
    },    
    rowItems: {
        flexDirection: 'row'
    },
    headline: {
        fontWeight: '300',
        fontSize: 14,
        padding: 15,
    },
    published: {
        color: 'gray',
        padding: 5,
        marginLeft: 11,
        fontWeight: '200'
    },
    img: {
        width: "39.5%",
        height: 100,
        borderRadius: 5,
    },
    bottomLine: {
        backgroundColor: '#b8b8b880',
        height: 10,
        width: "100%",
        marginBottom: 5,
        marginTop: 8
    }
})
