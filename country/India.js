import React, {useState, useEffect, useLayoutEffect} from 'react'
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Categories from '../components/Categories';
import Slide from '../components/Slide';
import Ionicons from 'react-native-vector-icons/Ionicons';

const India = ({navigation, item, route}) => {
  
const { value, title, } = route.params;

  
const BU_KEY = `https://saurav.tech/NewsAPI/top-headlines/category/business/`+value+`.json`
const EN_KEY = `https://saurav.tech/NewsAPI/top-headlines/category/entertainment/`+value+`.json`
const GN_KEY = `https://saurav.tech/NewsAPI/top-headlines/category/general/`+value+`.json`
const HE_KEY = `https://saurav.tech/NewsAPI/top-headlines/category/health/`+value+`.json`
const SC_KEY = `https://saurav.tech/NewsAPI/top-headlines/category/science/`+value+`.json`
const SP_KEY = `https://saurav.tech/NewsAPI/top-headlines/category/sports/`+value+`.json`
const TE_KEY = `https://saurav.tech/NewsAPI/top-headlines/category/technology/`+value+`.json`

    const [business, setBusiness ] = useState([]);
    const [entertainment, setEntertainment ] = useState([]);
    const [general, setGeneral ] = useState([]);
    const [health, setHealth ] = useState([]);
    const [science, setScience ] = useState([]);
    const [sports, setSports ] = useState([]);
    const [technology, setTechnology ] = useState([]);
    
    useEffect(() => {
      const controller = new AbortController();
      const  signal  = controller.signal;      
      (async () => {
        const [businessResponse,entertainmentResponse,generalResponse,
          healthResponse,scienceResponse,sportsResponse,technologyResponse] = await Promise.all([
          fetch(BU_KEY, {signal}),
          fetch(EN_KEY, {signal}),
          fetch(GN_KEY, {signal}),
          fetch(HE_KEY, {signal}),
          fetch(SC_KEY, {signal}),
          fetch(SP_KEY, {signal}),
          fetch(TE_KEY, {signal}),
        ]);
        const business = await businessResponse.json();
        const entertainment = await entertainmentResponse.json();
        const general = await generalResponse.json();
        const health = await healthResponse.json();
        const science = await scienceResponse.json();
        const sports = await sportsResponse.json();
        const technology = await technologyResponse.json();

            setBusiness(business.articles); // fetched JSON
            setEntertainment(entertainment.articles); // fetched JSON
            setGeneral(general.articles); // fetched JSON
            setHealth(health.articles); // fetched JSON
            setScience(science.articles); // fetched JSON
            setSports(sports.articles); // fetched JSON
            setTechnology(technology.articles); // fetched JSON
        }
      )();
      
      return () => controller.abort();
    },[BU_KEY,GN_KEY,EN_KEY,HE_KEY,SC_KEY,SP_KEY,TE_KEY])


    useLayoutEffect(() => {
        navigation.setOptions({
              title: title,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack('')}>
                  <Ionicons name="arrow-back" size={24} color='white'/>
                </TouchableOpacity>
              ),
            }); 
    }, [title, navigation])


    
    const [ent, setEnt] = useState(6);
    const Ent = () => {
      setEnt(ent + 12);
    }
    const [gene, setGene] = useState(6);
    const Gene = () => {
      setGene(gene + 12);
    }
    const[ heal, setHeal] = useState(6);
    const Heal = () => {
      setHeal(heal + 12);
    }
    const [sci, setSci] = useState(6);
    const Sci = () => {
      setSci(sci + 12);
    }     
    const [ sport, setSport] = useState(6);
    const Sport = () =>  {
      setSport(sport + 12);
    }
    const [tech, setTech] = useState(6);
    const Tech = () => {
      setTech(tech + 12);
    }

    return (
        <ScrollView style={styles.container}  >
            <Text style={styles.header}>Business</Text>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                maxToRenderPerBatch={10}
                initialNumToRender={7}
                refreshing={true}
                data={business.slice(0, 10)}
                renderItem={({ item }) => (
                  <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Main', item)} > 
                        <Slide  item={item}/>    
                    </TouchableOpacity>
                )}  
                /> 
              <Text style={styles.header}>Entertainment</Text>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                maxToRenderPerBatch={10}
                initialNumToRender={7}
                scrollEnabled={false}
                refreshing={true}
                data={entertainment.slice(0, ent)}
                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.cards} activeOpacity={1} onPress={() => navigation.navigate('Main', item)} > 
                        <Categories  item={item}/>    
                    </TouchableOpacity>
                )}
                /> 
                <TouchableOpacity onPress={Ent} style={styles.load}>
                  <Text style={styles.LoadText}>Load more</Text>
                </TouchableOpacity>
             <Text style={styles.header}>General</Text>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                refreshing={true}
                maxToRenderPerBatch={10}
                initialNumToRender={7}
                scrollEnabled={false}
                data={general.slice(0, gene)}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cards} activeOpacity={1} onPress={() => navigation.navigate('Main', item)} > 
                        <Categories  item={item}/>    
                    </TouchableOpacity>
                )}
              /> 
              <TouchableOpacity onPress={Gene} style={styles.load}>
                <Text style={styles.LoadText}>Load more</Text>
                </TouchableOpacity>
              <Text style={styles.header}>Health</Text>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                maxToRenderPerBatch={10}
                initialNumToRender={7}
                refreshing={true}
                scrollEnabled={false}
                data={health.slice(0, heal)}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cards} activeOpacity={1} onPress={() => navigation.navigate('Main', item)} > 
                        <Categories  item={item}/>    
                    </TouchableOpacity>
                )}
              /> 
              <TouchableOpacity onPress={Heal} style={styles.load}>
              <Text style={styles.LoadText}>Load more</Text>
                </TouchableOpacity>
              <Text style={styles.header}>Science</Text>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                maxToRenderPerBatch={10}
                initialNumToRender={7}
                refreshing={true}
                scrollEnabled={false}
                data={science.slice(0, sci)}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cards} activeOpacity={1} onPress={() => navigation.navigate('Main', item)} > 
                        <Categories  item={item}/>    
                    </TouchableOpacity>
                )}
              /> 
              <TouchableOpacity onPress={Sci} style={styles.load}>
              <Text style={styles.LoadText}>Load more</Text>
                </TouchableOpacity>
              <Text style={styles.header}>Sports</Text>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                maxToRenderPerBatch={10}
                initialNumToRender={7}
                refreshing={true}
                scrollEnabled={false}
                data={sports.slice(0, sport)}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cards} activeOpacity={1} onPress={() => navigation.navigate('Main', item)} > 
                        <Categories  item={item}/>    
                    </TouchableOpacity>
                )}
              /> 
                 <TouchableOpacity onPress={Sport} style={styles.load}>
                 <Text style={styles.LoadText}>Load more</Text>
                </TouchableOpacity>
              <Text style={styles.header}>Technology</Text>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
                refreshing={true}
                maxToRenderPerBatch={10}
                initialNumToRender={7}
                scrollEnabled={false}
                data={technology.slice(0,tech)}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.cards} activeOpacity={1} onPress={() => navigation.navigate('Main', item)} > 
                        <Categories  item={item}/>    
                    </TouchableOpacity>
                )}
              />  
                <TouchableOpacity onPress={Tech} style={styles.load}>
                <Text style={styles.LoadText}>Load more</Text>
                </TouchableOpacity>
                <View style={{width: "100%", height: 30}}></View>
        </ScrollView>
    )
}

export default India;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
      },
      header: {
        fontSize: 45,
        fontWeight: "100",
        padding: 10,
      },
       countryCode: {
        fontSize: 30,
        fontWeight: "300",
        color: 'white',
        textAlign: 'center'
      },
      load: {
        marginTop: 7,
        width: "30%",
        marginLeft: "35%",
        height: 30,
        padding: 5,
        borderRadius: 5,
        borderColor: '#55595640',
        borderWidth: 0.5,
      },
      LoadText: {
        alignItems: 'center',
        alignSelf: 'center', 
        color: '#d6230f',
        fontSize: 15,
        fontStyle: 'italic'
      },
      cards: {
        width: "31.5%",
        margin: 4,
      }
})