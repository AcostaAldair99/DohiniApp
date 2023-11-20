import React from 'react';
import {View,Text} from 'react-native'
import { componentStyles } from '../styles/styles';
import MenuBox from './menuBox';
import Line from './line';
import ListComponent  from './listComponents';



interface menuSectionProps{
  sectionTitle:string,
  // sectionView: React.ReactNode
}

const MenuSection : React.FC<menuSectionProps> = ({sectionTitle})=>{
  return(
    <View style={componentStyles.sectionContainer}>
        <Text style={componentStyles.sectionTitle}>{sectionTitle}</Text>
        <Line/> 
        <View style={{flex:1,flexDirection:'column', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', justifyContent:'space-evenly',padding:0,borderColor:'#ff00ff',borderWidth:2}}>
            <MenuBox title="Brands" logo='industry' /> 
            <MenuBox title="Cars" logo="car" /> 
          </View>
            <View style={{flexDirection:'row',padding:0,borderColor:'#ff00ff',borderWidth:2,marginTop:5}}>
            <MenuBox title="Trucks" logo='car' /> 
            <MenuBox title="Keys" logo='key' /> 
          </View>
        </View>
    </View>

  )
}


const FavoriteBrandsSection : React.FC =()=>{
  return(
    <View style={componentStyles.sectionContainer}>
        <Text style={componentStyles.sectionTitle}>Favorite Brands</Text>
        <Line/> 
        <ListComponent icon="user-circle"/>        
    </View>

  )
}

const FavoriteKeys : React.FC = () =>{
  return(
    <View style={componentStyles.sectionContainer}>
        <Text style={componentStyles.sectionTitle}>Favorite Keys</Text>
        <Line/> 
        <ListComponent icon="key" />        
    </View>

  )
}



export default {MenuSection,FavoriteBrandsSection,FavoriteKeys};