import React from 'react'
import { Pressable, View,Text,StyleSheet } from 'react-native'
import CategoriesScreen from '../screens/CategoriesScreen'


export default function CategoryGridTile({title,color,onPress}) {
  return (
    <View style={[Styles.gridItem, {backgroundColor:color}]}>
       <Pressable android_ripple={{color:"red"}} style={({pressed})=>[Styles.button,pressed ? Styles.buttonPressed:null]}  onPress={onPress} >
        <View style={Styles.innerContainer}>
          <Text style={Styles.title}>{title}</Text>
        </View>
       </Pressable>
    </View>
  )
}

const Styles= StyleSheet.create({
  gridItem:{
    flex:1,
    margin:16,
    marginTop:20,
    height:150,
    borderRadius:18,
    elevation:4,
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:5},
    shadowRadius:18,
    shadowColor:"black",
    backgroundColor:"white",
    overflow:"hidden"
  },
  button:{
    flex:1
  },
  buttonPressed:{
    opacity:0.5
  },
  innerContainer:{
       flex:1,  
       padding:16,
       justifyContent:'center',
       alignItems:"center",
  },
  title:{
    fontWeight:"bold"
  },
  press:{
    opacity:0.25
  }
})