export type RootStackParams = {
    Home: undefined;
    Food: undefined;
}

export type AddFoodModalPops ={
    onClose: (shouldUpdate?:boolean) => void;
    isVisible: boolean;
}

export type Meal ={
    calories: string;
    name: string;
    portion: string;
    date ?: string;
}

export type TodayCaloriesProps = {
    total?: number | string;
    consumed: number | string;
    remaining : number | string;
    percentage: number ;
}