import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions,
    Alert,
} from "react-native";

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const login = async () => {

        if (email === "" || senha === "") {
            Alert.alert(
                "Atenção",
                "Preencha o email e a senha."
            );
            return;
        }

        try {

            const response = await axios.post(
                "http://10.122.42.26:8000/api/login",
                {
                    email: email,
                    senha: senha,
                }
            );

            console.log("RESPOSTA DA API:", response.data);

            if (response.data.token) {

                await AsyncStorage.setItem(
                    "token",
                    response.data.token
                );

            }

            Alert.alert(
                "Sucesso!",
                "Login realizado com sucesso!",
                [
                    {
                        text: "OK",
                        onPress: () => navigation.navigate("Home"),
                    },
                ]
            );

        } catch (error) {

            console.log("STATUS:", error.response?.status);
            console.log(
                "ERRO DA API:",
                error.response?.data
            );

            if (error.response) {

                Alert.alert(
                    "Erro",
                    error.response.data.mensagem ||
                    "Email ou senha incorretos."
                );

            } else {

                Alert.alert(
                    "Erro",
                    "Não foi possível conectar com a API."
                );
            }
        }
    };

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
                        value={email}
                        onChangeText={setEmail}
                    />

                    <Text style={styles.label}>
                        Senha
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={senha}
                        onChangeText={setSenha}
                    />

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={login}
                    >
                        <Text style={styles.textoBotao}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botaoCadastro}
                        onPress={() => navigation.navigate("Cadastro")}
                    >
                        <Text style={styles.textoCadastro}>
                            Não tenho cadastro
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

    botaoCadastro: {
        alignSelf: "center",
        marginTop: 15,
        paddingVertical: 5,
    },

    textoCadastro: {
        color: "#C6537D",
        fontSize: 14,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },

});