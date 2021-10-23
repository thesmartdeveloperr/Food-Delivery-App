import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {Ionicons,AntDesign} from 'react-native-vector-icons'
export default function searchBar() {
    return (
        <View style={{flexDirection:'row',marginTop:15}}>
            <GooglePlacesAutocomplete placeholder="Search" styles={{
                textInput:{
                    backgroundColor:'#eee',
                    borderRadius:20,
                    fontWeight:'700',
                    marginTop:7
                },
                textInputContainer:{
                    borderRadius:50,
                    backgroundColor:'#eee',
                    flexDirection:'row',
                    alignItems:'center',
                    marginRight:10
                }
            }}
            renderLeftButton={()=>(
                <View style={{marginLeft:10}}>
                    <Ionicons name="location-sharp" size={24}/>
                </View>
            )}
            renderRightButton={()=>(
                <View style={{flexDirection:'row',marginRight:8,backgroundColor:'#fff',padding:9,borderRadius:30,alignItems:'center'}}>
                    <AntDesign name='clockcircle' size={11} style={{marginRight:6}}/>
                    <Text>Search</Text>
                </View>
            )}
            />
        </View>
    )
}
