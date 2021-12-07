import { useScrollToTop } from '@react-navigation/native';
import React, {useEffect, useState} from 'react'
import { FlatList, StyleSheet, ScrollView, Text, View, TouchableOpacity, RefreshControl } from 'react-native'
import Coloumn from '../components/Coloumn';

const API_KEY = "https://saurav.tech/NewsAPI/everything/cnn.json"

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const TrendingScreen = ({navigation}) => {

    const [refreshing, setRefreshing] = React.useState(false);
     const [news, setNews ] = useState([]);

     const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);

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

    const ref = React.useRef(null);

    useScrollToTop(ref);

    return (
        <View style={styles.container} ref={ref}  refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                refreshing={true}
                maxToRenderPerBatch={10}
                initialNumToRender={7}
                data={news}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Main', item)} > 
                        <Coloumn  item={item}/>    
                    </TouchableOpacity>
                )}
              /> 
        </View>
    )
}

export default TrendingScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
      },
})
