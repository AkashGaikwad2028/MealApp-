import {MEALS} from "../Data/dummy-data"
import { View,Text,StyleSheet,FlatList } from "react-native";
import MealItem from "./MealItem";


function  MealsOverview({route}){
  const catId=  route.params.catagoryId
  const displayMeals=MEALS.filter((mealitem)=>{
    return ( 
       mealitem.categoryIds.indexOf(catId)>=0
    )
    // console.log( mealitem.categoryIds.indexOf(catId)>=0,"mealitem")
  })

  function renderMealItem(itemData){
       return <MealItem title={itemData.item.title}/>
  }
    return(
        <View style={Styles.container}>
          <FlatList
          data={displayMeals}
          keyExtractor={(item)=>item.id}
          renderItem={renderMealItem}
          />
        </View>
    )
}

export default MealsOverview;

const Styles= StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
})