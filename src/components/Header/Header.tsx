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
                    {'Hello ${staticInfo.name}'}
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
        flex:2,
        
    },
    leftContainer:{

    },
    rightContainer:{

    },
    profile:{


    },
    subtitle:{

    },
    profileImage:{

    }




})


export default Header;