import React,{useState} from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import localRestaurants from '../components/RestaurantItem'
export default function home() {
    const [restaurantData, setrestaurantData] = useState(localRestaurants);

    const getRestaurantsFromYelp=()=>{
        
    }

    return (
        <SafeAreaView style={{backgroundColor:'#eee'}}>
            <HeaderTabs/>
            
        </SafeAreaView>
    )
}
