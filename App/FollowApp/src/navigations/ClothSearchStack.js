import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FindImageScreen from '../screens/ClothSearch/FindImageScreen';
import ResultScreen from '../screens/ClothSearch/ResultScreen';

const Stack = createStackNavigator();
 
const ClothSearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="FindImage" component={FindImageScreen} />
            <Stack.Screen name="SearchResult" component={ResultScreen} />
        </Stack.Navigator>
    );
};

export default ClothSearchStack;
