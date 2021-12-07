import React, {useState} from 'react'
import { useScrollToTop } from '@react-navigation/native';
import { StyleSheet, Text, FlatList, TouchableOpacity, ScrollView, View } from 'react-native'
import { Searchbar } from 'react-native-paper';


const CountryList = [
  {title: 'Australia', value: 'au'},
  {title: 'France', value: 'fr'},
  {title: 'India', value: 'in'},
  {title: 'Russia', value: 'ru'},
  {title: 'United Kingdom', value: 'gb'},
  {title: 'USA', value: 'us'},
  ]

const SearchScreen = ({navigation}) => {

    const [search, setSearch] = useState('Search feature coming soon!..');

    const ref = React.useRef(null);

    useScrollToTop(ref);
    return (
        <View style={styles.container} ref={ref}>
            <Searchbar value={search} />
              <Text style={styles.header} >Country</Text>
              <Text style={{fontSize: 14, fontStyle: 'italic', marginLeft: 15}}>Top-Headlines from various sources</Text>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                refreshing={true}
                data={CountryList}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cards} activeOpacity={1} onPress={() => navigation.navigate('India', item)} >
                    <Text style={styles.cardName}>{item.title}</Text> 
                    </TouchableOpacity>
                )}
              /> 
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        marginTop: 5
      },
    header: {
       padding: 10,
       fontSize: 25,
       fontWeight: '200',
       color: 'red',
       margin: 5,
    },
    cards: {
        backgroundColor: 'white',
        width: "45%",
        height: 150,
        justifyContent: 'center',
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
      },
      cardName: {
        fontWeight: 'bold', 
        fontSize: 20, 
        textAlign: 'center'
    }
})
