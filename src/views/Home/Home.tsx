import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Header from '../../components/Header';
import {Button, Icon} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../types';



const Home = () => {
    const {navigate} = useNavigation<StackNavigationProp<RootStackParams, 'Home'>>();
    const handleAddCalories = () =>{
        navigate('Food');

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