import React, { useLayoutEffect  } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking, } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Main = ({ navigation, route, item }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
              title: source.name,
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack('')}>
                  <Ionicons name="arrow-back" size={24} color='white'/>
                </TouchableOpacity>
              ),
            }); 
          }, [title, navigation])

    const Link = " -- DOWNLOAD 'THE TIMES WORLD' AT PLAY STORE"

    const space = "  "

    const { title, publishedAt, author,urlToImage, url, description, content, source} = route.params;
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>{source.name}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.published}>{publishedAt}</Text>
            <Text style={styles.published}>Author: {author}</Text> 
               <View style={styles.imgContainer}>
                    <Image style={styles.img} source={{uri: urlToImage }} /> 
                </View>
             <Text style={styles.headline}></Text> 
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.description}>{content}</Text>
            <TouchableOpacity onPress={() =>{Linking.openURL(url)}}>
            <Text style={styles.source}>{url}</Text> 
            </TouchableOpacity>
            <View style={styles.bottomLine}/>  
            <TouchableOpacity 
                onPress={() =>{
                    Linking.openURL(`whatsapp://send?text=`+source.name+space+title+space+description+url+space+Link)}}
                    style={styles.share}>
                    <Text style={styles.source}>W-app</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Main;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 7,
        marginLeft: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'left',
        padding: 1,
        marginLeft: 5
    },
    published: {
        color: 'gray',
        padding: 3,
        fontStyle: 'italic'
    },
    imgContainer: {
        width: "100%",
        height: 250,
    },
    img: {
        width: "100%",
        height: 250,
        resizeMode: 'contain',
    },
    headline: {
        fontSize: 20,
        fontWeight: '300',
    },
    description: {
        fontSize: 16,
        padding: 3
    },
    bottomLine: {
        backgroundColor: '#b8b8b880',
        height: 10,
        width: "100%",
        marginBottom: 5,
        marginTop: 5
    },
    share: {
        width: "30%",
        marginLeft: "35%",
        height: 30,
        padding: 5,
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 0.5,
      },
      source: {
        alignItems: 'center',
        alignSelf: 'center', 
        color: '#d6230f',
        fontSize: 15,
        fontStyle: 'italic'
      }
})