import React,{useState} from "react"
import {Text,TextInput,View,StyleSheet} from "react-native"
import {Feather} from "@expo/vector-icons"

const SearchBar = ({term,changeTerm,onTermSubmit}) => {
  
  
  
    return (
    <View style={styles.background}>  
    
      <Feather name = "search" style = {styles.iconStyle }/>
      <TextInput
      autoCapitalize = "none"
      autoCorrect = {false}
      placeholder = "Search"
      style = {styles.inputStyle}
      value= {term}
      onChangeText = {changeTerm}///(text) => changeTerm(text) can also be used
      onEndEditing = {onTermSubmit}
      
      />
      </View>)
}

//  () arent used because function is being reffered to
const styles = StyleSheet.create({
    background : {
        marginTop : 15,
        backgroundColor: "#F0EEEE",
        height : 50 ,
        borderRadius : 5,
        marginHorizontal : 20 ,
        flexDirection: "row",
        borderRadius : 10 
    } ,
    inputStyle : {
        fontSize : 18,
        alignSelf : "center",
        flex : 1 } ,
    
    iconStyle : {
        fontSize : 35,
        alignSelf : "center",
        marginHorizontal : 10


    }
        
}) ;

export default SearchBar ;