import React from 'react';
import { View, Text } from 'react-native';

//props text för StartScreen
export const ScreenText = ({ ClickText, FavCatFact, FavDogFact }) => {
    return (
        <View style={{width: "100wh"}}> 
           <Text style={{ marginBottom: "10px", textDecorationLine: "underline",
            fontSize: "20px", alignSelf: "center" }}>{ClickText}</Text>

            <Text style={{ textAlign: "center", marginTop: "5px", marginBottom: "5px",
             fontSize: "15px" }}>{FavCatFact}</Text>

             <Text style={{ textAlign: "center", marginTop: "5px", marginBottom: "5px",
             fontSize: "15px" }}>{FavDogFact}</Text>
        </View>
    )
}