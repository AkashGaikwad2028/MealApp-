import React from 'react'
import { FlatList, View,Text,StyleSheet } from 'react-native'
import CategoryGridTile from '../Componenets/CategoryGridTile'
import { CATEGORIES } from '../Data/dummy-data'


 function CategoriesScreen({navigation}) {

  function renderCategoryItem(itemData){
    function pressHandler(){
      navigation.navigate("MealsOverview",{
        catagoryId:itemData.item.id
      })
    }
    console.log("title==",itemData.item.title)
    return (
  <CategoryGridTile title={itemData.item.title} color={itemData.item.color}  onPress={pressHandler}/>
    ) 
  }

  
  return (
   <View style={styles.Catogory}>
        <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
      tyle={styles.Catogory1}
    />
    {console.log(renderCategoryItem,"data")}
   </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({

  Catogory:{
    margin:5,
    borderRadius:20,
    marginTop:50
  },
  Catogory1:{
    borderRadius:20
  }
});
