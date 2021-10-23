import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'

const items=[
    {
        image: require('../assets/images/shopping-bag.png'),
        text: 'Pick-up',
    },
    {
        image: require('../assets/images/soft-drink.png'),
        text: 'Soft Drinks',
    },
    {
        image: require('../assets/images/bread.png'),
        text: 'Bakery Items',
    },
    {
        image: require('../assets/images/fast-food.png'),
        text: 'Fast Foods',
    },
    {
        image: require('../assets/images/deals.png'),
        text: 'Deals',
    },
    {
        image: require('../assets/images/coffee.png'),
        text: 'Coffee & Tea',
    },
];

export default function Categories() {
    return (
        <View style={{marginTop:5,backgroundColor:'#fff',paddingVertical:10,paddingLeft:20}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {items.map((item,index)=>(
                <View key={index} style={{alignItems:'center',marginRight:30}}>
                {/* <Text>Categories</Text> */}
                <Image source={item.image} style={{height:40,width:50,resizeMode:'contain'}}/>
                <Text style={{fontSize:13,fontWeight:'900'}}>{item.text}</Text>
                </View>
            ))}
        </ScrollView>
        </View>
    )
}
