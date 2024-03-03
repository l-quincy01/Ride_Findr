import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env" ;
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-elements'



const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    
  return (
   <SafeAreaView style = {tw`bg-white flex-1`}>
      <Text style = {tw`text-center py-1 text-lg`}>Good Morning King Lesego Pitsi</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete 
            placeholder='Where to'
            styles={toInputBoxStyles}
            fetchDetails = {true}
            minLength = {2}
            returnKeyType = {"search"}
            enablePoweredByContainer = {false}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            query = {{
                key: GOOGLE_MAPS_APIKEY,
                language: "en",
            }}
            onPress = {(data, details = null) => {
               
                dispatch(
                    setDestination({
                      location: details.geometry.location,
                      description: data.description,
                    })
                );

                navigation.navigate("RideOptionsCard") ;
              
              }}
            />

        </View>
        <NavFavourites/>
      </View>
      <View style = {tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
              <TouchableOpacity 
              style = {tw`flex flex-row bg-white w-24 px-4 py-3 rounded-full`}
              onPress = {() => navigation.navigate("RideOptionsCard")}
              >
                  
                <Icon
                  name = "car" 
                  type = "font-awesome" 
                  color = "black" 
                  size = {16}
                />
                <Text style = {tw`text-black text-center`}> Rides </Text>
              </TouchableOpacity>

              <TouchableOpacity style = {tw`flex flex-row bg-white w-24 px-4 py-3 rounded-full`}>
                <Icon
                  name = "cutlery" 
                  type = "font-awesome" 
                  color = "black" 
                  size = {16}
                />
                <Text style = {tw`text-black text-center`}> Eats </Text>
              </TouchableOpacity>
      </View>
   </SafeAreaView>
  )
}
export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18 ,
    },

    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});