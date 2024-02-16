import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Header from "../../components/Header";
import { Button, Icon, Input } from "@rneui/themed";
import AddFoodModal from "../../components/AddFoodModal";
import useFoodStorage from "../../hooks/useFoodStorage";



const Food = () => {

    const [isVisible, setIsVisible] = useState(false);
    const {onGetFoods} = useFoodStorage();
    const handleModalClose = (shouldUpdate?: boolean) =>{
        if(shouldUpdate){
        Alert.alert('Comida guardada con exito');
        }
        setIsVisible(false);
    }
    
    return (
        <View style = {styles.container}>
            <Header/>
            <View style = {styles.addFoodContainer}>
                <View style = {styles.legendContainer}>
                    <Text style= {styles.text}>Add Food</Text>
                </View>
                <View style = {styles.buttonContainer}>
                    <Button
                        radius="lg"
                        color="#4ecb71" 
                        icon = {
                            <Icon 
                                name= "add-circle-outline"
                                color="#fff"
                            />
                        }
                    onPress ={()=> setIsVisible(true)}    
                    />
                </View>
            </View>
            <View style = {styles.searchContainer}>
                <View style = {styles.inputContainer}>
                        <Input placeholder='apples, fries, soda...'/>
                </View>
                <Button 
                    title = "Search"
                    radius = 'lg'
                    color = "#ade8af"
                    titleStyle = {styles.searchButton}
                    
                />
            </View>
            <AddFoodModal 
                onClose={handleModalClose} 
                isVisible={isVisible}
            />
        </View>
        
    )


}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:12,
    },
    text:{
        fontSize: 25,
        fontWeight:'bold',
    },
    addFoodContainer:{
        flexDirection:'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    legendContainer:{
        flex: 1,
    },
    buttonContainer:{
        flex: 1,
        alignItems: 'flex-end'    
    },
    searchContainer:{
        flexDirection:'row',
        borderRadius:15,

    },
    inputContainer:{
        flex:1,
        marginLeft: -10,
    },
    searchButton:{
        color:'#000',
        fontSize: 14,
    }




})


export default Food;