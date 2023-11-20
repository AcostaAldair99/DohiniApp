import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
import { componentStyles } from '../styles/styles'
import{COLORS} from '../constants/theme'
import Icon from 'react-native-vector-icons/FontAwesome'

interface menuBoxProps{
  title:string,
  logo:string,
}


const MenuBox: React.FC<menuBoxProps> = ({title,logo}) =>{
  return(
    <TouchableOpacity style={componentStyles.menuBox}>
       {/* <Image
        source={{uri:filename}}
        style={componentStyles.menuBoxImage}
      /> */}
        <Icon 
          name={logo}
          color={COLORS.white}
          size={40}
        />
        <Text style={componentStyles.menuBoxTitle}>{title}</Text>
        <Text>Information about all the procedures about this brand.</Text>
    </TouchableOpacity>
     )
}


export default MenuBox;