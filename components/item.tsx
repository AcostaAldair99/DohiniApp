import {View,Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { COLORS ,SIZES} from '../constants';
import { componentStyles } from '../styles/styles';


interface reusableItemProps{
  title:string,
  description:string,
  icon:string
}

;


const ReausableItem : React.FC<reusableItemProps> = ({title,description,icon}) =>{
  return(
    <TouchableOpacity style={{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:5,padding:10,height:80,borderRadius:10,backgroundColor:COLORS.blue}}>
          <Icon
            name={icon}
            size={50}
            color={COLORS.white}
          /> 
          <View style={{flex:1,flexDirection:'column',padding:20}}>
            <Text style={componentStyles.menuBoxTitle}>{title}</Text>
            <Text style={componentStyles.menuBoxTitle}>{description}</Text>
          </View>
          </TouchableOpacity>
  )
}


export default ReausableItem;