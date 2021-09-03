import React from 'react';
import { TouchableOpacity, View, Image, Text, ScrollView } from 'react-native';
import { useContext } from 'react';
import { FavoriteCatFact } from './FavoriteFact';
import { FavoriteDogFact } from './FavoriteFact';
import { ScreenText } from './StartScreenText';

export const StartScreen = ({ navigation }) => {

    const { catValue } = useContext(FavoriteCatFact);
    const { dogValue } = useContext(FavoriteDogFact);


    return (
        <ScrollView style={{ display: "flex", flexDirection: "column", alignSelf: "center", marginTop: "20px"}}
            showsVerticalScrollIndicator={false}>
            <ScreenText ClickText="Click an image for facts!"/>
            <TouchableOpacity style={{}}
                activeOpacity="0.7"
                onPress={() => {
                    navigation.navigate("CatFacts")
                }}>
                <Image
                    source={{
                        uri: "https://images-na.ssl-images-amazon.com/images/I/81BES%2BtsVvL.png"
                    }} style={{ height: "200px", width: "200px", borderRadius: "5px", border: "2px solid gray", alignSelf: "center" }} />

            </TouchableOpacity>
            <ScreenText FavCatFact="Favorite cat fact: "/>
            <Text style={{
                textAlign: "center", backgroundColor: "lightgray", borderRadius: "5px", border: "1px solid black",
                padding: "5px", marginRight: "10px", marginLeft: "10px", marginBottom: "20px"
            }}>{catValue}</Text>
            <TouchableOpacity
                activeOpacity="0.7"
                onPress={() => {
                    navigation.navigate("DogFacts")
                }}
            >
                <Image source={{ uri: "https://images.saatchiart.com/saatchi/387161/art/1664932/855094-7.jpg" }}
                    style={{
                        height: "200px", width: "200px", borderRadius: "5px",
                        border: "2px solid gray", marginTop: "20px", alignSelf: "center"
                    }}
                />
            </TouchableOpacity>
            <ScreenText FavDogFact="Favorite dog fact: "/>
            <Text style={{
                textAlign: "center", backgroundColor: "lightgray", borderRadius: "5px", border: "1px solid black",
                padding: "5px", marginRight: "10px", marginLeft: "10px", marginTop: "10px",  marginBottom: "50px"
            }}>{dogValue}</Text>
        </ScrollView>
    )
}