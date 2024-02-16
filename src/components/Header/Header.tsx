import React from 'react';
import { Image, Text, View, StyleSheet} from 'react-native';

const staticInfo = {
    name: 'Luis Zegarra',
    image: {
        source : require('../../../assets/profile.png')
    },

}


const Header = () => {

    return(
        <View style = {styles.container}>
            <View style = {styles.leftContainer}>
                <Text style = {styles.profile}>
                    {`Hello ${staticInfo.name}`}
                </Text>
                <Text style = {styles.subtitle}>
                    Welcome back to your goal!!!
                </Text>
            </View>
            <View style = {styles.rightContainer}>
                <Image source = {staticInfo.image.source} style = {styles.profileImage}/>
            </View>
        </View>


    )



}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:10,
    },
    leftContainer:{
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    rightContainer:{
        flex:1,
        alignItems:'flex-end',
        justifyContent: 'center',
    },
    profile:{
        fontSize:14,
        fontWeight: 'bold'

    },
    subtitle:{
        fontSize:12,
        color: '#808080'
    },
    profileImage:{
        width:60,
        height:60,
        borderRadius: 30,
    }




})


export default Header;