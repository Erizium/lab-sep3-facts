import React, { useState, useEffect, useContext, createContext } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { FavoriteCatFact } from "./FavoriteFact";
import FetchDog from "./FetchDog";

// https://catfact.ninja/   breeds , fact , facts
// 3 lines image https://toppng.com/uploads/preview/menu-icon-png-3-lines-11552729004xrpivp1smd.png
//happy star image https://www.pinclipart.com/picdir/middle/44-448748_star-wand-cliparts-smiling-stars-clipart-png-download.png
//cat drawing https://images-na.ssl-images-amazon.com/images/I/81BES%2BtsVvL.png


const FetchCat = () => {

    const url = "https://catfact.ninja/fact";
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const { catValue, setCatValue } = useContext(FavoriteCatFact);

    function getCatFact() {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json.fact))
            .catch((error) => alert(error))
            .finally(setLoading(false));
    };

    return (
        <SafeAreaView style={{ alignItems: "center" }}>
            <View style={{ marginTop: "50px" }}>
                <Button
                    title="Fact button!"
                    onPress={() => {
                        getCatFact();
                    }}>
                </Button>
            </View>

            {isLoading ? <Text>Click for knowledge!</Text> :
                <View >
                    <Text style={{ textAlign: "center", marginTop: "10px" }}>Approved by a Cat: </Text>
                    <Text style={{
                        margin: "20px", marginTop: "10px", padding: "5px",
                        borderRadius: "5px", border: "1px solid black", background: "lightgray", padding: "5px"
                    }}
                    >{data}</Text>
                    <View style={{ display: "flex", flexDirection: "column", alignSelf: "flex-end" }}>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => {
                                setCatValue(data)
                            }}>
                            <Image source={{
                                uri: "https://www.pinclipart.com/picdir/middle/44-448748_star-wand-cliparts-smiling-stars-clipart-png-download.png"
                            }}
                                style={{ width: "50px", height: "50px", alignSelf: "flex-end", marginRight: "20px", marginTop: "-10px" }}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginRight: "20px" }}>Favorite</Text>
                    </View>
                </View>}
        </SafeAreaView>
    )
}

export default FetchCat;