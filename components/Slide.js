import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'

const CardList = ({item}) => {
    return (
        <View style={styles.container}>
           <Image style={styles.img} source={{uri: item.urlToImage }} />  
          <Text style={styles.published}>{item.publishedAt}</Text>
          <Text style={styles.source}numberOfLines={2} ellipsizeMode="tail">{item.url}</Text>
          <Text style={styles.content} numberOfLines={2} ellipsizeMode="tail" >{item.content}</Text>
        </View>
    )
}

export default CardList;

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 300,
    padding:3,
    backgroundColor: '#ebf0eb80'
  },
  img: {
    width: "100%",
    height: 200,
    resizeMode: 'contain',
  },
  published: {
    color: 'black',
    padding: 3,
    fontWeight: '200'
  },
  source: {
    color: 'red',
    fontStyle: 'italic',
    fontSize: 12,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },     
})
