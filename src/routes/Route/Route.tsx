import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../views/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParams } from '../../types';
import Food from '../../views/Food/Food';


const Stack = createStackNavigator<RootStackParams>();

const Route = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Home" >
                <Stack.Screen 
                name="Home" 
                component={Home}
                />
                <Stack.Screen 
                name="Food" 
                component={Food}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )


}

export default Route;