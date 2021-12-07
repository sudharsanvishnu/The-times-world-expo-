import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Categories = ({item}) => {
    return (
        <View style={styles.container}>
           <Image style={styles.img} source={{uri: item.urlToImage }}/ >  
            <Text style={styles.published}>{item.publishedAt}</Text>
            <Text style={styles.content} numberOfLines={2} ellipsizeMode="tail" >{item.title}</Text>        
        </View>
    )
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#b8b8b880'
},
  img: {
    width: "100%",
    height: 100,
    resizeMode: 'contain',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  published: {
    color: 'gray',
    fontWeight: '200'
  },
  content: {
    fontSize: 12,
    color: 'black',
    fontWeight: '300',
    padding: 3
  },     
})
