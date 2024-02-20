import React , { useCallback, useState } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Header from '../../components/Header';
import {Button, Icon} from '@rneui/themed';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Meal, RootStackParams } from '../../types';
import useFoodStorage from '../../hooks/useFoodStorage';
import TodayCalories from '../../components/TodayCalories';
import { TodayCaloriesProps } from '../../types';
import {TOTAL_CALORIES_PER_DAY} from '../../consts/caloriesConst';


const Home = () => {
    const [todayFood, setTodayFood] = useState<Meal[]>();
    const [todayStats, setTodayStats] = useState<TodayCaloriesProps>();
    const {onGetTodayFood} = useFoodStorage();
    const {navigate} = useNavigation<StackNavigationProp<RootStackParams, 'Home'>>();
    
    const calculateTodayFoodStats = (meals: Meal[]) =>{
        try{
            const caloriesConsumed = meals ? meals.reduce((acum, curr) => acum + Number(curr.calories), 0) : 0;
            const remainingCalories = TOTAL_CALORIES_PER_DAY - caloriesConsumed;
            const percentage = ((caloriesConsumed/ TOTAL_CALORIES_PER_DAY) * 100)
        
            setTodayStats({
                consumed: caloriesConsumed,
                percentage,
                remaining: remainingCalories,
            });
        
        }catch(error){
            console.error(error);
        }

    }
    
    
    const loadTodayFood = useCallback( async() =>{
        try{
            const todayFoodResponde = await onGetTodayFood() as Meal [];
            console.log(todayFoodResponde)
            calculateTodayFoodStats(todayFoodResponde);
            setTodayFood(todayFoodResponde);
        }catch(error){
            setTodayFood([]);
            console.error(error);
        }
    }, [])
    
    useFocusEffect(
        useCallback(() => {
            loadTodayFood().catch(null);
        },[loadTodayFood])
    );

    const handleAddCalories = () =>{
        navigate('Food')
    }

    return (
        <View style = {styles.container}>
            <Header/>
            <View style = {styles.calContainer}>
                <View style = {styles.leftContainer}>
                    <Text style = {styles.title}> Calories </Text>
                </View>
                <View style = {styles.rightContainer}>
                    <Button
                        radius="lg"
                        color="#4ecb71" 
                        icon = {
                            <Icon 
                                name= "add-circle-outline"
                                color="#fff"
                                />
                            }
                        onPress={handleAddCalories}
                    />
                </View>
            </View>
            <TodayCalories {...todayStats} />
        </View>
        
    )


}

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:12,
    },
    calContainer:{
        alignItems: 'center',
        flexDirection: 'row',        
    },
    leftContainer:{
        flex: 1,
        justifyContent: 'center',
     

    },
    rightContainer:{
        flex:1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
    },




})

export default Home;


