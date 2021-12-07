import React, {useState, useEffect} from 'react'
import { useScrollToTop } from '@react-navigation/native';
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View,} from 'react-native'
import TextComponent from '../components/TextComponent';

const API_KEY = "https://saurav.tech/NewsAPI/sources.json"

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

const ProfileScreen = ({navigation}) => {
    
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

    const [news, setNews ] = useState([]);
    useEffect(() => {
      const controller = new AbortController();
      const  signal  = controller.signal;      
      (async () => {
        const response = await fetch(API_KEY, {signal});
          const news = await response.json();
            setNews(news.sources); // fetched JSON
        }
      )();
      
      return () => controller.abort();
    },[API_KEY])

    const ref = React.useRef(null);

    useScrollToTop(ref);
    return (
        <View style={styles.container} ref={ref}refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          } >
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                refreshing={true}
                maxToRenderPerBatch={10}
                initialNumToRender={7}
                data={news}
                renderItem={({ item }) => (
                        <TextComponent  item={item}/>
                )}
              /> 
        </View>

    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
      },
})