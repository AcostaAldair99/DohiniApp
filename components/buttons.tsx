import React from 'react'
import {View,Text,Button} from 'react-native'
import { componentStyles } from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../constants';

interface headerButtonProps{
  title:string,
  icon: string,
  onPress:()=>void
};


const HeaderButton : React.FC<headerButtonProps> = ({title,icon,onPress}) => {
  return(
    <View style={{justifyContent:"center",alignItems:"center"}}> 
      <Icon.Button
        name= {icon}
        onPress={onPress}
        size={26}
        iconStyle={{marginLeft:10}}
        backgroundColor={COLORS.lightWhite}
        style={componentStyles.headerButton}
        color="#000000"
        />
        <Text>{title}</Text>
  </View>
  )
}

export default HeaderButton;
