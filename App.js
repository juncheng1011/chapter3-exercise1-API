import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import HomeDetailScreen from './src/screens/HomeDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProfileDetailScreen from './src/screens/ProfileDetailScreen';

//for redux
import { StoreContext } from 'redux-react-hook';
import configureStore from './src/redux/store';
const store = configureStore();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Wtite here for everywhere can use

function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: '#33FFCE' },
        headerBackTitle: '返回',
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{ title: 'My Detail' }} />
    </Stack.Navigator>
  )
}
function MyProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerStyle: { backgroundColor: '#33FFCE' },
        headerBackTitle: '返回2',
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} options={{ title: 'My Detail 2' }} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" /> */}
    // </View>
    // <NavigationContainer>
    //   
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == 'Home') {
              iconName = focused ? 'ios-trophy' : 'ios-trophy-outline'
              // return <Image
              //   source={{ uri: 'data:image/jpeg;base64,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' }}
              //   style={{ width: 30, height: 30 }}
              // />
            } else if (route.name == 'Settings') {
              iconName = focused ? 'ios-options' : 'ios-options-outline'
            } else if (route.name == 'Profile') {
              iconName = focused ? 'ios-user' : 'ios-user-outline'
            }
            return <Ionicons name={iconName} size={25} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: '#33FFCE',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Home" component={MyHomeStack} />
        <Tab.Screen name="Settings" component={MyProfileStack} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyApp = () => (
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
