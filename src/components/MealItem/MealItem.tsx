import React, { FC }  from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import { Meal } from '../../types';
import { Button, Icon } from '@rneui/themed';
import useFoodStorage from '../../hooks/useFoodStorage';
import Food from '../../views/Food';




const MealItem: FC<Meal> = ({calories, portion, name}: Meal) => {
    const {onSaveTodayFood}= useFoodStorage();
    const handleAddItem = async() => {
        try{
            await onSaveTodayFood({calories, name, portion})
            Alert.alert('Comida agregada al dia');
        }catch(error){
            console.error(error);
        }
    };




    return(
<View style={styles.container}>
    <View style={styles.leftContainer}>
        <Text style={styles.name}> {name} </Text>
        <Text style={styles.portion}> {portion} </Text>

    </View>
    <View style={styles.rightContainer}>
        <Button
            icon = {
                <Icon 
                    name="add-circle-outline"
                />
            }
            type="clear"
            style= {styles.iconButton}
            onPress = {handleAddItem}
        />
        <Text style={styles.calories}> {calories} cal </Text>
    </View>
</View>




    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ade8af',
        borderRadius: 12,
        padding: 12,
        marginBottom:12,
        flexDirection:'row'
    },
    leftContainer:{
        flex:1,
        justifyContent: 'center',
    },
    rightContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    name:{
        fontSize: 18,
        fontWeight: '500',
    },
    portion:{
        fontSize: 13,
        fontWeight: '500',
        color:'#808080'
    },
    calories:{
        fontSize: 18,
    },
    iconButton:{
        marginBottom: -8,
    },





})

export default MealItem;



