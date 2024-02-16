import React, { FC, useEffect, useState } from 'react';
import {Modal, Text, View, StyleSheet } from 'react-native';
import { AddFoodModalPops } from '../../types';
import {Icon, Button, Input} from '@rneui/themed';
import useFoodStorage from '../../hooks/useFoodStorage';



const AddFoodModal: FC<AddFoodModalPops> = ({onClose, isVisible}) => {
    const [calories, setCalories] = useState <string>('');
    const [name, setName] = useState<string>('');
    const [portion, setPortion] = useState<string>('');
    const {onSaveFood} = useFoodStorage();


    useEffect(()=>{
        setCalories('');
        setName('');
        setPortion('');
    },[isVisible]);

    const handleSubmit = async() =>{
        try{
            await onSaveFood({
                calories,
                name,
                portion,
            });
            onClose(true);
        }catch(error){
            console.error(error);
        }
        
    }

    

    return(
        <Modal
            visible = {isVisible}
            onRequestClose={() => onClose()}
            transparent
            animationType="slide"
        >
            <View style = {styles.container}>
                <View style = {styles.content}>
                    <View style = {styles.closeContainer}>
                        <Button
                            icon ={
                                <Icon
                                    name="close"
                                    size={28}
                                />
                            }
                            onPress = {() => onClose()}
                            type = "clear"
                        />
                    </View>
                    <View style = {styles.formItem}>
                        <View style = {styles.inputContainer}>
                            <Input value = {calories}
                                onChangeText={(text:string) => setCalories(text)}
                            />
                        </View>
                        <View style = {styles.legendContainer}>
                            <Text style = {styles.legend}> CAL </Text>
                        </View>
                    </View>
                    <View style = {styles.formItem}>
                        <View style = {styles.inputContainer}>
                            <Input value = {name}
                                onChangeText={(text:string) => setName(text)}
                            />
                        </View>
                        <View style = {styles.legendContainer}>
                            <Text style = {styles.legend}> NOMBRE </Text>
                        </View>
                    </View>
                    <View style = {styles.formItem}>
                        <View style = {styles.inputContainer}>
                            <Input value = {portion}
                                onChangeText={(text:string) => setPortion(text)}
                            />
                        </View>
                        <View style = {styles.legendContainer}>
                            <Text style = {styles.legend}> PORCIÓN </Text>
                        </View>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <Button 
                            radius='lg'
                            title = "Add"
                            onPress ={handleSubmit}
                            icon = {
                                <Icon 
                                    name="add"
                                    color= "#fff"
                                />
                            }
                            color="#4ecb71"
                            disabled={calories.trim() ==='' || 
                                name.trim() === '' || 
                                portion.trim() === ''
                            }
                        />
                    </View>
                </View>
            </View>
            
        </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    content:{
        width: '75%',
        backgroundColor: "#fff",
        padding: 18,
        borderRadius: 20,
        elevation: 5,
    },
    closeContainer:{
        alignItems: 'flex-end',
    },
    formItem:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputContainer:{
        flex: 2,
    },
    legendContainer:{
        flex:1,
    },
    legend:{
        fontWeight: '500',
    },
    buttonContainer:{
        alignItems: 'flex-end',
    },



});

export default AddFoodModal;