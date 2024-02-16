import AsyncStorage  from "@react-native-async-storage/async-storage";
import { Meal } from "../types";

const MY_FOOD_KEY = '@MyFood:Key';

const useFoodStorage = () => {
    
    const handleSaveFood = async({calories, name, portion}: Meal) =>{
        try{
        const currentSavedFood = await AsyncStorage.getItem(MY_FOOD_KEY);
        if (currentSavedFood !== null){
            const currentSavedFoodParsed = JSON.parse(currentSavedFood);
            currentSavedFoodParsed.push({
                calories,
                name,
                portion,
            });
        await AsyncStorage.setItem(MY_FOOD_KEY,
            JSON.stringify(currentSavedFoodParsed)
        );
        // ERROR  [TypeError: currentSavedFoodParsed.push is not a function (it is undefined)]
        return Promise.resolve();
        };
        await AsyncStorage.setItem(MY_FOOD_KEY, 
            JSON.stringify([
                {
                calories,
                name,
                portion,
                }
            ]),
        );
        return Promise.resolve();

        }catch(error){
            return Promise.reject(error)        
        }
    }

    const handleGetFood = async() =>{
        try{
            const food = await AsyncStorage.getItem(MY_FOOD_KEY);
            if (food !== null){
                const parsedFood = JSON.stringify(food);
                return Promise.resolve(parsedFood);
            }
        }catch(error){
                return Promise.reject(error);
        }
    }

    return{
        onSaveFood: handleSaveFood,
        onGetFoods: handleGetFood,
    };
};






export default useFoodStorage;