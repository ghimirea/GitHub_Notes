import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Repo from './components/Repositories';
import Webview from './components/Webview';
import Notes from './components/Notes';

const StackNav = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen
          name='STACK_SEARCH'
          component={Search}
          options={{ title: 'Search' }}
        />
        <StackNav.Screen
          name='STACK_DASHBOARD'
          component={Dashboard}
          options={{ title: 'Dashboard' }}
        />
        <StackNav.Screen
          name='STACK_PROFILE'
          component={Profile}
          options={{ title: 'Profile' }}
        />
        <StackNav.Screen
          name='STACK_REPO'
          component={Repo}
          options={{ title: 'Repositories' }}
        />
        <StackNav.Screen
          name='STACK_WEBVIEW'
          component={Webview}
          options={{ title: 'Webview' }}
        />
        <StackNav.Screen
          name='STACK_NOTE'
          component={Notes}
          options={{ title: 'Note' }}
        />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}
