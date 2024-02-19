import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Header from "../../components/Header";
import { Button, Icon, Input } from "@rneui/themed";
import AddFoodModal from "../../components/AddFoodModal";
import useFoodStorage from "../../hooks/useFoodStorage";
import { Meal } from "../../types";
import { ScrollView } from "react-native-gesture-handler";
import MealItem from "../../components/MealItem";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Food = () => {

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [existFood, setExistFood] = useState<Meal[]>([]);
    const {onGetFoods} = useFoodStorage();
    const loadFood = async() =>{
        try{
            const foodResponse = await onGetFoods();
            setExistFood(foodResponse);
         }catch (error){
             console.error(error);
         }

    }
    const handleModalClose = async (shouldUpdate?: boolean) =>{
        if(shouldUpdate){
            Alert.alert('Comida guardada con exito');
            loadFood();
        }
        setIsVisible(false);
    }

    const clearAsyncStorage = async() => {
        try{
            await AsyncStorage.clear();
            loadFood().catch(null);
        }catch(error){
            console.error(error);
        };
    };

    useEffect(()=>{
        loadFood().catch(null);

    }, [])
    
    return (
        <View style = {styles.container}>
            <Header/>
            <View style = {styles.addFoodContainer}>
                <View style = {styles.legendContainer}>
                    <Text style= {styles.text}>Add Food</Text>
                </View>
                <View style = {styles.buttonDContainer}>
                    <Button
                        radius="lg"
                        color="#dc143c" 
                        icon = {
                            <Icon 
                                name= "remove-circle-outline"
                                color="#fff"
                            />
                        }
                    onPress ={clearAsyncStorage}    
                    />
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
            
            <ScrollView 
            style={styles.content}>
            {existFood?.map(meal => (<MealItem key={`my-meal-item-${meal.name}`}{...meal}/>))}
            </ScrollView>
            
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
    buttonDContainer:{
        flex: 1,
        alignItems: 'flex-end'    
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
    },
    content:{
        flex:1,
    },




})


export default Food;