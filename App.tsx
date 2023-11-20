/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SearchBar from './components/searchBar';
import Header from './components/header'
import Section from './components/section'
import { componentStyles} from './styles/styles';
import Footer from './components/footer'

import {
  ScrollView,
  View
} from 'react-native';





function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <ScrollView style={componentStyles.mainContainer}>

      <Header title="MyApp"/>
      <View>
        <SearchBar onChange={()=>console.log("send query")}/> 
        <Section.MenuSection sectionTitle='Categories' />
        <Section.FavoriteBrandsSection /> 
        <Section.FavoriteKeys/> 
      </View>
        <Footer/>
      </ScrollView>
  );
}
export default App;
