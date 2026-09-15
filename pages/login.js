import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

export default function Login({ navigation }) {
    return (
        <ImageBackground
            source={require("../assets/ChatGPT Image 6_08_2026, 11_11_07.png")}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>

                <View style={styles.card}>

                    <Text style={styles.titulo}>
                        Login
                    </Text>

                    <View style={styles.linha} />

                    <Text style={styles.label}>
                        Email
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu email"
                        placeholderTextColor="#999"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <Text style={styles.label}>
                        Senha
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#999"
                        secureTextEntry
                    />

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text style={styles.textoBotao}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

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

    card: {
        width: width * 0.78,

        backgroundColor: "#F6C9D7",

        borderRadius: 25,

        paddingHorizontal: 25,
        paddingTop: 25,
        paddingBottom: 25,
    },

    titulo: {
        color: "#C6537D",

        fontSize: 34,

        fontWeight: "bold",

        textAlign: "center",

        fontFamily: "serif",

        marginBottom: 7,
    },

    linha: {
        width: "70%",

        height: 2,

        backgroundColor: "#D987A3",

        alignSelf: "center",

        marginBottom: 20,
    },

    label: {
        color: "#C6537D",

        fontSize: 15,

        fontWeight: "bold",

        marginLeft: 3,

        marginBottom: 6,

        marginTop: 8,
    },

    input: {
        width: "100%",

        height: 45,

        backgroundColor: "#FFFFFF",

        borderRadius: 23,

        paddingHorizontal: 17,

        fontSize: 13,

        color: "#555",

        marginBottom: 6,
    },

    botao: {
        width: 140,

        height: 42,

        backgroundColor: "#C6537D",

        borderRadius: 22,

        alignSelf: "center",

        justifyContent: "center",

        alignItems: "center",

        marginTop: 18,
    },

    textoBotao: {
        color: "#FFFFFF",

        fontSize: 15,

        fontWeight: "bold",
    },

});