import React, { useEffect } from "react";
import {
    View,
    ImageBackground,
    StyleSheet,
    Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Splash({ navigation }) {

    useEffect(() => {
        const tempo = setTimeout(() => {
            navigation.replace("Login");
        }, 2500);

        return () => clearTimeout(tempo);
    }, [navigation]);

    return (
        <ImageBackground
            source={require("../assets/ChatGPT Image 6_08_2026, 11_11_07.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>

                <View style={styles.logoBox}>

                    <View style={styles.logoInterno}>

                        <MaterialCommunityIcons
                            name="cart-outline"
                            size={72}
                            color="#C6537D"
                        />

                    </View>

                </View>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
    },

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    logoBox: {
        width: width * 0.48,
        height: width * 0.48,

        backgroundColor: "#B83F68",

        borderRadius: 20,

        padding: 12,

        justifyContent: "center",
        alignItems: "center",
    },

    logoInterno: {
        width: "100%",
        height: "100%",

        backgroundColor: "#F6C9D7",

        borderRadius: 15,

        justifyContent: "center",
        alignItems: "center",
    },

});