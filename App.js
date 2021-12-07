import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import TrendingScreen from './screens/TrendingScreen';
import ProfileScreen from './screens/ProfileScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Main from './components/Main';
import India from './country/India';
import BBC from './TopTabs/TopDrawer';
import CNN from './TopTabs/TopCnn';
import FOX from './TopTabs/TopFox';
import Google from './TopTabs/TopGoogle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


console.reportErrorsAsExceptions = false; // copy paste this line in your App.js 

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TopTab = createMaterialTopTabNavigator();

function Top(){
  return (
    <TopTab.Navigator 
    screenOptions={{
      tabBarActiveTintColor:'white',
      tabBarIndicatorStyle: {
        backgroundColor: 'white',
        height: 2
      },
      tabBarScrollEnabled: true,
      tabBarLabelStyle: {fontSize: 20},
      tabBarItemStyle: { width: 150, },
      tabBarStyle: {
        height: 40,
        backgroundColor: '#c21a0c',
      },
    }}
    >
      <TopTab.Screen name ='BBC' component={BBC} />
      <TopTab.Screen name ='CNN' component = {CNN} />
      <TopTab.Screen name ='FOX' component = {FOX} />
      <TopTab.Screen name ='Google' component = {Google} />
    </TopTab.Navigator>
  )
}

function All() {
  return (   
    <Tab.Navigator 
    initialRouteName='Search'
    screenOptions={{
      headerStyle: {
        height: 40,
        backgroundColor: '#c21a0c',
        borderColor: 'red'
      }, 
      headerTitleAlign: 'center',
      headerTintColor: 'white',
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor: 'black',
      tabBarStyle: {
        height: 50,
        padding: 5,
      },
    }}
    >
     <Tab.Screen name="Top Sources" component={Top} options={{
      tabBarIcon: () => (
        <AntDesign name="home" size={24} />
      ),
      tabBarLabel: 'Home',
      tabBarOptions: {
      tabBarLabelStyle : {
        fontSize: 26,
        marginBottom: 3,
      }}, headerShown: false
    }}/>
    <Tab.Screen name="Search" component={SearchScreen} options={{
      tabBarIcon: () => (
        <MaterialCommunityIcons name="search-web" size={24} />
      ),
      title: 'Search News',
      tabBarLabel: 'Search'
    }} />
    <Tab.Screen name="Trending" component={TrendingScreen} options={{
      tabBarIcon:() => (
        <MaterialCommunityIcons name="trending-up" size={24}/>
      ),
      title: 'Trending News',
      tabBarLabel: 'Trending'
    }}/>
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
      tabBarIcon: () => (
        <AntDesign name="profile" size={24}/>
      ),
      title: 'List of News Publishers',
      tabBarLabel: 'Sources'
    }}/>
  </Tab.Navigator>    
    );
  }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='All'
      screenOptions={{
        headerStyle: {
          height: 40,
          backgroundColor: '#c21a0c',
          borderColor: 'red',
        }, 
        headerTitleAlign: 'center',
        headerTitleStyle: { fontSize: 30, fontWeight: '600',
        },
        headerTintColor: 'white',
       }}>
          <Stack.Screen name='All' component={All} options={{title: 'The Times World'}}/>
          <Stack.Screen name='Main' component={Main} options={{title: 'The Times World'}}/> 
          <Stack.Screen name='India' component={India} options={{title: '#Top-Headlines'}}/> 
      </Stack.Navigator> 
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({
});
