import * as React from "react";
import { View, SafeAreaView, Text } from "react-native";
import Categories from "./components/Categories";
import RestaurantItem from "./components/RestaurantItem";
import SearchBar from "./components/SearchBar";
import Home from './screens/home';
export default function App() {
  return(
    <SafeAreaView>
      <Home/>
      <SearchBar/>
      <Categories/>
      <RestaurantItem/>
    </SafeAreaView>
  );  
}
