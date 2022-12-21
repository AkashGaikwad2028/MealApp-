import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import CategoryGridTile from "./Componenets/CategoryGridTile";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./Componenets/MealsOverview";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack= createNativeStackNavigator()

export default function App() {
  return (
    <>
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="MealsCategories" component= {CategoriesScreen}/>
        <stack.Screen name="MealsOverview" component= {MealsOverview}/>
      </stack.Navigator>
      {/* <CategoriesScreen /> */}
      </NavigationContainer>
      </>
  );
}
