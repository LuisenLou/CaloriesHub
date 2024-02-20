import AsyncStorage  from "@react-native-async-storage/async-storage";
import { Meal } from "../types";
import { isToday } from "date-fns";
const MY_FOOD_KEY = '@MyFood:Key';
const MY_TODAY_FOOD_KEY = '@MyTodayFood:Key';

const useFoodStorage = () => {
    const saveInfoToStorage = async(stKey: string, meal:Meal) => {
        try{
            const currentSavedFood = await AsyncStorage.getItem(stKey);
            if (currentSavedFood !== null){
                const currentSavedFoodParsed = JSON.parse(currentSavedFood);
                currentSavedFoodParsed.push(meal)
                await AsyncStorage.setItem(stKey,
                JSON.stringify(currentSavedFoodParsed)
            );
            return Promise.resolve(currentSavedFood);
            };
            await AsyncStorage.setItem(stKey, 
                JSON.stringify([meal])
            );
            return Promise.resolve();
        }catch(error){
            return Promise.reject(error)        
        }
    };
    const handleSaveFood = async({calories, name, portion}: Meal) =>{
        try{
            const result = await saveInfoToStorage(MY_FOOD_KEY, {
                calories, 
                name, 
                portion});
            return Promise.resolve(result);
        }catch(error){
            return Promise.reject(error)        
        }
    }

    const handleGetFood = async() =>{
        try{
            const food = await AsyncStorage.getItem(MY_FOOD_KEY);
            if (food !== null){
                const parsedFood = JSON.parse(food);
                return Promise.resolve(parsedFood);
            }
        }catch(error){
                return Promise.reject(error);
        }
    }

    const handleSaveTodayFood = async({calories, name, portion}: Meal) => {
        try{
            const result = await saveInfoToStorage(MY_TODAY_FOOD_KEY, {
                calories, 
                name, 
                portion,
                date: new Date().toISOString(),
            });
        return Promise.resolve(result);
        }catch(error){
            return Promise.reject(error);
        }
    }

    const handleGetTodayFood = async() =>{
        try{
            const food = await AsyncStorage.getItem(MY_TODAY_FOOD_KEY);
            if (food !== null){
                const parsedFood = JSON.parse(food) as Meal[];
                return Promise.resolve(
                    parsedFood.filter(meal => meal.date && isToday(new Date(meal.date)))
                );
            }
        }catch(error){
                return Promise.reject(error);
        }
    }

    return{
        onSaveFood: handleSaveFood,
        onGetFoods: handleGetFood,
        onSaveTodayFood: handleSaveTodayFood,
        onGetTodayFood: handleGetTodayFood,
    };
};

export default useFoodStorage;