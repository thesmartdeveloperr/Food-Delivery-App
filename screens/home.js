import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/headerTabs'
export default function home() {
    return (
        <SafeAreaView style={{backgroundColor:'red'}}>
            <HeaderTabs/>
        </SafeAreaView>
    )
}
