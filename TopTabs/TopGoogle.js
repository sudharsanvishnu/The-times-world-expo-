import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import Sources from '../components/Sources';

const Google = ({navigation}) => {
       
const API_KEY = `https://saurav.tech/NewsAPI/everything/google-news.json`

  const [news, setNews ] = useState([]);
  
  useEffect(() => {
    const controller = new AbortController();
    const  signal  = controller.signal;      
    (async () => {
      const response = await fetch(API_KEY, {signal});
        const news = await response.json();
          setNews(news.articles); // fetched JSON
      }
    )();
    
    return () => controller.abort();
  },[API_KEY])

const render = (({ item }) => (
  <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Main', item)} > 
    <Sources item={item}/>
   </TouchableOpacity>      
))

 return (
   <View style={styles.container} >
    <FlatList
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        refreshing={true}
        data={news}
        maxToRenderPerBatch={10}
        initialNumToRender={7}
        renderItem={render}
      />  
  </View>
 )
}

export default Google;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
    },
    countryCode: {
        fontSize: 30,
        fontWeight: "300",
        color: 'white',
        textAlign: 'center'
    },
})
