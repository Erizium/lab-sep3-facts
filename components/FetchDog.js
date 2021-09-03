import { StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useContext } from "react";
import { FavoriteDogFact } from './FavoriteFact';


// dog drawing https://images.saatchiart.com/saatchi/387161/art/1664932/855094-7.jpg

//api jsonbin https://api.jsonbin.io/b/6130c06e2f1cab416bd26653

const FetchDog = () => {

    const url = "https://api.jsonbin.io/b/6130c06e2f1cab416bd26653";
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [dogFact, setDogFact] = useState(null)
    const [counter, setCounter] = useState(0);

    const { dogValue, setDogValue } = useContext(FavoriteDogFact);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json.facts))
            .catch((error) => alert(error))

    }, [])

    function getDogFact() {
        console.log(data[counter])
        setLoading(false)
        if(counter >= data.length - 1) {
            setCounter(0)
        }
    };


    return (
        <SafeAreaView style={{ alignItems: "center" }}>
            <View style={{ marginTop: "50px" }}>
                <Button
                    title="Fact Button!"
                    onPress={() => {
                        setCounter(counter + 1)
                        //hämtar hund fakta
                        getDogFact();
                    }}>
                </Button>
            </View>

            {isLoading ? <Text>Click it!</Text> :
                <View style={{ marginTop: "10px" }}>
                    <Text style={{ textAlign: "center", marginTop: "10px" }}>Approved by a dog:</Text>
                    <Text style={{
                        margin: "20px", marginTop: "10px", padding: "5px",
                        borderRadius: "5px", border: "1px solid black", background: "lightgray"
                    }}
                    >{data[counter]}</Text>

                    <View style={{ display: "flex", flexDirection: "column", alignSelf: "flex-end" }}>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => {
                                //lägg till favoritfakta längre ner 
                                setDogValue(data[counter])
                            }}>
                            <Image source={{
                                uri: "https://www.pinclipart.com/picdir/middle/44-448748_star-wand-cliparts-smiling-stars-clipart-png-download.png"
                            }}
                                style={{
                                    width: "50px", height: "50px", alignSelf: "flex-end",
                                    marginRight: "20px", marginTop: "-10px", alignSelf: "center"
                                }}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginRight: "20px" }}>Favorite</Text>
                    </View>
                </View>}
        </SafeAreaView>
    )
}

export default FetchDog;