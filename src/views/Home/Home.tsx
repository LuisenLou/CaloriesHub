import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Header from '../../components/Header';




const Home = () => {
    return (
        <View style = {styles.container}>
            <Header/>
        </View>
    )


}

const styles = StyleSheet.create ({
    container:{
        flex:1,
    },




})


export default Home;