import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import LoginPage from './components/LoginPage';
import CallInfo from './components/CallInfo'; 

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <LoginPage />
        <CallInfo />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
