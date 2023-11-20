import React from 'react'
import {View} from 'react-native'
import ReausableItem from './item'

const data = [
  { key:1,title: 'Brand 1', description: 'This is the first view.' },
  { key:2 ,title: 'Brand 2', description: 'This is the second view.' },
  { key:3,title: 'Brand 3', description: 'This is the third view.' },
  { key:4,title: 'Brand 3', description: 'This is the third view.' },
]

interface ListComponentProps{
  icon:string
}

const ListComponent : React.FC<ListComponentProps> = ({icon}) =>{
  return(
    <View>
        {data.map((item)=>(
          <ReausableItem icon={icon} title={item.title} description={item.description}/>
        ))}
    </View>
  )
}


export default ListComponent;