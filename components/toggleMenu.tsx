import React, { useState } from 'react'
import {View,Text,Button,Animated,StyleSheet} from 'react-native'

const ToggleMenu:  React.FC = () =>{
  const [isOpen,setIsOpen] = useState(false); 
  const animation = React.useRef(new Animated.Value(0)).current; 
  
 
  const handleToggleMenu = () => {
    setIsOpen((prevState) => !prevState);
    Animated.timing(animation, {
      toValue: isOpen ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }; 
  
  const translateX = animation.interpolate({
    inputRange:[0,1],
    outputRange:[-300,0]
  })

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    menu: {
      width: 300,
      height: '100%',
      backgroundColor: '#fff',
      position: 'absolute',
      top: 0,
      right: -300,
      padding: 20,
    },
    menuItem: {
      fontSize: 18,
      marginBottom: 10,
    },
  });

  return(
    <View style={styles.container}>
    <Button title="Toggle Menu" onPress={handleToggleMenu} />
    <Animated.View style={[styles.menu, { transform: [{ translateX }] }]}>
      <Text style={styles.menuItem}>Menu Item 1</Text>
      <Text style={styles.menuItem}>Menu Item 2</Text>
      <Text style={styles.menuItem}>Menu Item 3</Text>
    </Animated.View>
  </View> 
  ) 
}



export default ToggleMenu;
