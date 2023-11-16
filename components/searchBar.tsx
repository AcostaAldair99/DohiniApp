import React from 'react'
import {View,TextInput, Text} from 'react-native'
import { componentStyles} from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../constants';

interface searchBarProps{
  onChange: ()=>void;
}


const SearchBar : React.FC<searchBarProps>=({onChange})=>{
  return(
    <View style={componentStyles.searchContainer}>
      <View style={componentStyles.searchInputContainer}>
        <TextInput placeholder='Search' style={componentStyles.searchInput} placeholderTextColor={COLORS.gray}/>
         <Icon.Button
        name= "search" 
        onPress={()=>{console.log("left button")}}
        size={20}
        iconStyle={{marginLeft:10}}
        backgroundColor={COLORS.lightWhite}
        color={COLORS.black}
        />
        </View>
      </View>
  )
}

export default SearchBar;

