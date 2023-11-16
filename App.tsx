/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SearchBar from './components/searchBar';
import Header from './components/header'
import { componentStyles} from './styles/styles';

import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View
} from 'react-native';





function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <View style={componentStyles.mainContainer}>
      <Header title="MyApp"/>
      <SearchBar onChange={()=>console.log("send query")}/> 
      </View>
  );
}
export default App;
