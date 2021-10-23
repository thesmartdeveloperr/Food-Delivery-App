import React,{useState} from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'

export default function headerTabs() {
    const [activeTab, setactiveTab] = useState('delivery')
    return (
            <SafeAreaView style={{flexDirection:'row',alignSelf:'center',marginTop:50}}>
            <HeaderButton 
            text="Delivery" 
            btnColor="black" 
            textColor="white"
            activeTab={activeTab}
            setActiveTab={setactiveTab}
            />
            <HeaderButton 
            text="Pickup" 
            btnColor="white" 
            textColor="black"
            activeTab={activeTab}
            setActiveTab={setactiveTab}
            />
            </SafeAreaView>
    );
}

const HeaderButton=(props)=>(
<View>
    <TouchableOpacity style={{
        backgroundColor:props.activeTab===props.text?'black':'white',
        paddingHorizontal:16,
        paddingVertical:6,
        borderRadius:30
    }}
    onPress={()=>props.setActiveTab(props.text)}
    >
    <Text style={{color:props.activeTab===props.text?'white':'black',fontWeight:'900',fontSize:15}}>{props.text}</Text>
    </TouchableOpacity>
</View>
)