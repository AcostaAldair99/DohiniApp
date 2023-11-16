import React from 'react'
import {View,Text} from 'react-native'
import {componentStyles,styles} from '../styles/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS } from '../constants';
interface headerProps{
  title:string,
};




const Header : React.FC<headerProps> = ({title}) => {
  return (
      <View style={componentStyles.headerContainer}>
          <Icon.Button
        name= "navicon" 
        onPress={()=>{console.log("left button")}}
        size={26}
        iconStyle={{marginLeft:10}}
        backgroundColor={COLORS.lightWhite}
        color={COLORS.black}
        />
        <Text style={styles.sectionTitle}>Dohini</Text>      
        <Icon.Button
        name= "user-circle" 
        onPress={()=>{console.log("left button")}}
        size={26}
        backgroundColor={COLORS.lightWhite}
        iconStyle={{marginLeft:10}}
        color={COLORS.black}
        />
        {/* </View> */}
    </View>
  );
};



export default Header;