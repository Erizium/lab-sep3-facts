
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import FetchCat from './components/FetchCat';
import FetchDog from './components/FetchDog';
import { StartScreen } from './components/StartScreen';
import { FavoriteCatFact, FavoriteDogFact } from './components/FavoriteFact';

const Stack = createNativeStackNavigator();

export default function App() {
  const [catValue, setCatValue] = useState("No favorite cat fact yet");
  const [dogValue, setDogValue] = useState("No favorite dog fact yet")

  return (
    <FavoriteCatFact.Provider value={{ catValue, setCatValue }}>
      <FavoriteDogFact.Provider value={{ dogValue, setDogValue }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={StartScreen} />
            <Stack.Screen name="CatFacts" component={FetchCat} />
            <Stack.Screen name="DogFacts" component={FetchDog} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoriteDogFact.Provider>
    </FavoriteCatFact.Provider>
  );
}