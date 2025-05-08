import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import ReportScreen from './screens/ReportScreen';
import ProfileScreen from './screens/ProfileScreen'; // Assuming you added ProfileScreen
import HistoryScreen from './screens/HistoryScreen';
import BadgesScreen from './screens/BadgesScreen';
import RankProgressScreen from './screens/RankProgressScreen';
import StatsScreen from './screens/StatsScreen';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        
        {/* After login, navigate to Tabs */}
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Historique" component={HistoryScreen} />
         <Tab.Screen name="Badges" component={BadgesScreen} />
         <Tab.Screen name="Rang" component={RankProgressScreen} />
         <Tab.Screen name="Stats" component={StatsScreen} />


    </Tab.Navigator>
  );
};

export default App;
