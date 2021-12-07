import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'


const Sources = ({item}) => {
  return (
    <View style={styles.container}>
       <Image style={styles.img} source={{uri: item.urlToImage }} />  
      <Text style={styles.published}>{item.publishedAt}</Text>
      <Text style={styles.source}numberOfLines={2} ellipsizeMode="tail">{item.url}</Text>
      <Text style={styles.content} numberOfLines={3} ellipsizeMode="tail" >{item.content}</Text>
       <View style={styles.bottomLine}/> 
    </View>
)
}


export default Sources;

const styles = StyleSheet.create({
container: {
width: "100%",
height: 350,
// backgroundColor:"green"
},
img: {
width: "100%",
height: 250,
marginTop:0,
resizeMode: 'contain',
},
published: {
color: 'black',
fontWeight: '200',
},
source: {
color: 'red',
fontStyle: 'italic',
fontSize: 12,
},
content: {
fontSize: 16,
color: 'black',
fontWeight: '600'
},     
bottomLine: {
  backgroundColor: '#b8b8b880',
  height: 10,
  width: "100%",
  marginTop: 8,
}
})