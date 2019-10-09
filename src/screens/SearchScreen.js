import React,{useState} from "react"
import {Text,View,StyleSheet} from "react-native"
import SearchBar from "./../components/SearchBar"
import zomato from "./../api/zomato"

const SearchScreen = () => {
    const[term,changeTerm]= useState("")
    const [restaurants,setRestaurants] =useState ([])
    const[errorMsg,setErrrorMsg] = useState('')
    
    const searchApi = async  () => {
        
       try { const response = await zomato.get('/search',
        {
           
            params : {
                q : term,
                count : 20 
            }
         } ) ; //it is an asynchronous operation
        
        setRestaurants(response.data.restaurants); }
        catch (err) {
            setErrrorMsg("something went wrong")
        }
           
                            //asynchronous doesnt block code while syncronous does
        
    }
  
  
    return  (
    <View>
    <SearchBar term= {term} 
    changeTerm={(newTerm) => changeTerm(newTerm)}
    onTermSubmit = { searchApi}/>
    {errorMsg ? <Text>Something went wrong</Text> : null}
    <Text>We have found {restaurants.length} results  </Text>
    </View>
    );


}

const styles = StyleSheet.create({}) ;

export default SearchScreen ;