import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo!</Text>
            <Text style={styles.subtitulo}>Você entrou no sistema.</Text>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate("CadastroProduto")}
            >
                <Text style={styles.textoBotao}>Cadastrar produto</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6C9D7",
        padding: 24,
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#C6537D",
        marginBottom: 12,
    },
    subtitulo: {
        fontSize: 16,
        color: "#7B2345",
        marginBottom: 24,
    },
    botao: {
        backgroundColor: "#C6537D",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 20,
    },
    textoBotao: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});
