import React from 'react'
import {View,Text} from 'react-native'
import { componentStyles } from '../styles/styles'


const Footer : React.FC = () =>{
  return(
    <View style={componentStyles.footerContainer}>
      <Text style={componentStyles.footerTitle}>Copyright ©2023 Dohini</Text>
    </View>
  )
}


export default Footer;