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

const { width } = Dimensions.get("window");

export default function Cadastro({ navigation }) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cpf, setCpf] = useState("");


    function formatApi(data){
        const [dia, mes, ano] = data.split("/");
        return `${ano}-${mes}-${dia}`;

    }
    

    const cadastrar = async () => {

        if (
            nome === "" ||
            email === "" ||
            senha === "" ||
            dataNascimento === "" ||
            cpf === ""
        ) {
            Alert.alert("Atenção", "Preencha todos os campos.");
            return;
        }

        try {

            const response = await axios.post(
                "http://10.122.42.21:8000/api/cadastro_usuario",
                {
                    nome: nome,
                    email: email,
                    senha: senha,
                    cpf: cpf,
                    data_nascimento: formatApi(dataNascimento),
                    
                }
            );

            Alert.alert(
                "Sucesso!",
                "Cadastro realizado com sucesso!",
                [
                    {
                        text: "OK",
                        onPress: () => navigation.navigate("Login"),
                    },
                ]
            );

        } catch (error) {

            console.log(error);

            if (error.response) {

                Alert.alert(
                    "Erro",
                    error.response.data.mensagem ||
                    "Não foi possível realizar o cadastro."
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
                        Cadastro
                    </Text>

                    <View style={styles.linha} />

                    <Text style={styles.label}>
                        Nome
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu nome"
                        placeholderTextColor="#999"
                        value={nome}
                        onChangeText={setNome}
                    />

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

                    <Text style={styles.label}>
                        Data de nascimento
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="DD/MM/AAAA"
                        placeholderTextColor="#999"
                        value={dataNascimento}
                        onChangeText={setDataNascimento}
                    />

                    <Text style={styles.label}>
                        CPF
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu CPF"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={cpf}
                        onChangeText={setCpf}
                    />

                    <TouchableOpacity
                        style={styles.botao}
                        onPress={cadastrar}
                    >
                        <Text style={styles.textoBotao}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.botaoLogin}
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.textoLogin}>
                            Já tenho cadastro
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
        width: width * 0.82,
        backgroundColor: "#F6C9D7",
        borderRadius: 25,
        paddingHorizontal: 25,
        paddingTop: 20,
        paddingBottom: 20,
    },

    titulo: {
        color: "#C6537D",
        fontSize: 32,
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
        marginBottom: 12,
    },

    label: {
        color: "#C6537D",
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 3,
        marginBottom: 5,
        marginTop: 6,
    },

    input: {
        width: "100%",
        height: 42,
        backgroundColor: "#FFFFFF",
        borderRadius: 23,
        paddingHorizontal: 17,
        fontSize: 13,
        color: "#555",
        marginBottom: 3,
    },

    botao: {
        width: 140,
        height: 42,
        backgroundColor: "#C6537D",
        borderRadius: 22,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
    },

    textoBotao: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "bold",
    },

    botaoLogin: {
        alignSelf: "center",
        marginTop: 12,
        paddingVertical: 5,
    },

    textoLogin: {
        color: "#C6537D",
        fontSize: 14,
        fontWeight: "bold",
        textDecorationLine: "underline",
    },

});