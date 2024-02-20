import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { TodayCaloriesProps } from '../../types';



const TodayCalories: FC<TodayCaloriesProps> = ({total, consumed, remaining}) =>{
total = 0,
consumed = 0;
remaining = 0;

return(

<View style = {styles.container}>
    <View style = {styles.leftContainer}>
        <CircularProgress value={10} valueSuffix='%'/>
    </View>
    <View style = {styles.rightContainer}>
        <Text style={styles.today}>
        Today
        </Text>
        <View style={styles.rightItem}>
            <Text style={styles.rightItemLegend}> Total </Text>
            <Text style={styles.rightItemValue}>
            {total}
            </Text>
        </View>
        <View style={styles.rightItem}>
            <Text style={styles.rightItemLegend}> Consumed </Text>
            <Text style={styles.rightItemValue}>
            {consumed}
            </Text>
        </View>
        <View style={styles.rightItem}>
            <Text style={styles.rightItemLegend}> Remaining </Text>
            <Text style={styles.rightItemValue}>
            {remaining}
            </Text>
        </View> 
    </View>
</View>
)



}

const styles = StyleSheet.create({
container:{
    flexDirection: 'row',

},
rightContainer:{
    flex:1,
    justifyContent: 'center',
},
leftContainer:{
    flex:1,
},
rightItem:{
    flexDirection: 'row',
    marginBottom: 8,
},
rightItemLegend:{
    flex:1,
    textAlign: 'left',
},
rightItemValue:{
    flex:1,
    textAlign: 'right',
},
today:{
   fontSize: 20,
   fontWeight: '500',
   marginBottom: 14,


},



})

export default TodayCalories;