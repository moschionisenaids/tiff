
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Alert,
    ScrollView,
    Modal,
    FlatList,
    ImageBackground,
} from "react-native";
import axios from "axios";

const { width } = Dimensions.get("window");

export default function CadastroProduto({ navigation }) {

    const [nome, setNome] = useState("");
    const [codigo, setCodigo] = useState("");
    const [estoque, setEstoque] = useState("");
    const [limiteEstoqueBaixo, setLimiteEstoqueBaixo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [fornecedor, setFornecedor] = useState("");
    const [validade, setValidade] = useState("");
    const [descricao, setDescricao] = useState("");

    const [modalCategoria, setModalCategoria] = useState(false);

    const categorias = [
        "Alimentos",
        "Bebidas",
        "Limpeza",
        "Higiene",
        "Outros"
    ];

    // Converte DD/MM/AAAA para AAAA-MM-DD
    function formatApi(data) {

        if (!data || !data.includes("/")) {
            return data;
        }

        const [dia, mes, ano] = data.split("/");

        return `${ano}-${mes}-${dia}`;
    }

    const cadastrarProduto = async () => {

        // Verificação dos campos
        if (
            nome.trim() === "" ||
            estoque.trim() === "" ||
            limiteEstoqueBaixo.trim() === "" ||
            fornecedor.trim() === "" ||
            codigo.trim() === "" ||
            categoria.trim() === "" ||
            validade.trim() === "" ||
            descricao.trim() === ""
        ) {
            Alert.alert(
                "Atenção",
                "Preencha todos os campos."
            );

            return;
        }

        try {

            const response = await axios.post(
                "http://10.122.42.21:8000/api/cadastro_produto",
                {
                    nome_produto: nome,
                    codigo: codigo,
                    estoque: Number(estoque),
                    limite_estoque_baixo: Number(limiteEstoqueBaixo),
                    categoria: categoria,
                    fornecedor: fornecedor,
                    data_validade: formatApi(validade),
                    descricao: descricao
                }
            );

            console.log("Resposta da API:", response.data);

            if (response.data.erro === "s") {

                Alert.alert(
                    "Atenção",
                    response.data.mensagem ||
                    "Não foi possível cadastrar o produto."
                );

                return;
            }

            Alert.alert(
                "Sucesso!",
                response.data.mensagem ||
                "Produto cadastrado com sucesso!",
                [
                    {
                        text: "OK",
                        onPress: () => {
                            limparCampos();
                        }
                    }
                ]
            );

        } catch (error) {

            console.log("Erro completo:", error);

            if (error.response) {

                console.log(
                    "Resposta do Laravel:",
                    error.response.data
                );

                if (error.response.status === 422) {

                    const erros = error.response.data.errors;

                    if (erros) {

                        const mensagens = Object.values(erros)
                            .flat()
                            .join("\n");

                        Alert.alert(
                            "Erro de validação",
                            mensagens
                        );

                    } else {

                        Alert.alert(
                            "Erro",
                            "Verifique os dados informados."
                        );
                    }

                    return;
                }

                Alert.alert(
                    "Erro",
                    error.response.data.mensagem ||
                    "Não foi possível cadastrar o produto."
                );

            } else {

                Alert.alert(
                    "Erro",
                    "Não foi possível conectar com a API."
                );
            }
        }
    };

    const limparCampos = () => {

        setNome("");
        setEstoque("");
        setLimiteEstoqueBaixo("");
        setFornecedor("");
        setCodigo("");
        setCategoria("");
        setValidade("");
        setDescricao("");
    };

    return (

        <ImageBackground
            source={require("../assets/ChatGPT Image 6_08_2026, 11_11_07.png")}
            style={styles.background}
            resizeMode="cover"
        >

            <ScrollView
                contentContainerStyle={styles.scroll}
                showsVerticalScrollIndicator={false}
            >

                <View style={styles.card}>

                    <Text style={styles.titulo}>
                        Cadastro de
                    </Text>

                    <Text style={styles.subtitulo}>
                        Produto
                    </Text>

                    {/* NOME DO PRODUTO */}

                    <Text style={styles.label}>
                        Nome do Produto
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite o nome do produto"
                        placeholderTextColor="#999"
                        value={nome}
                        onChangeText={setNome}
                    />

                    {/* ESTOQUE */}

                    <Text style={styles.label}>
                        Quantidade
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite a quantidade"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={estoque}
                        onChangeText={setEstoque}
                    />

                    {/* LIMITE DE ESTOQUE BAIXO */}

                    <Text style={styles.label}>
                        Limite de Estoque Baixo
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Defina quando o estoque estará baixo"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={limiteEstoqueBaixo}
                        onChangeText={setLimiteEstoqueBaixo}
                    />

                    {/* FORNECEDOR */}

                    <Text style={styles.label}>
                        Fornecedor
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite o Fornecedor"
                        placeholderTextColor="#999"
                        value={fornecedor}
                        onChangeText={setFornecedor}
                    />

                    {/* CÓDIGO */}

                    <Text style={styles.label}>
                        Código
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="EX.LIM001"
                        placeholderTextColor="#999"
                        value={codigo}
                        onChangeText={setCodigo}
                        autoCapitalize="characters"
                    />

                    {/* CATEGORIA */}

                    <Text style={styles.label}>
                        Categoria
                    </Text>

                    <TouchableOpacity
                        style={styles.inputCategoria}
                        onPress={() => setModalCategoria(true)}
                    >

                        <Text
                            style={
                                categoria
                                    ? styles.textoCategoria
                                    : styles.placeholderCategoria
                            }
                        >
                            {categoria || "Selecione..."}
                        </Text>

                        <Text style={styles.seta}>
                            ˅
                        </Text>

                    </TouchableOpacity>

                    {/* DATA DA VALIDADE */}

                    <Text style={styles.label}>
                        Data da Validade
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="dd/mm/aaaa"
                        placeholderTextColor="#999"
                        value={validade}
                        onChangeText={setValidade}
                        keyboardType="numeric"
                        maxLength={10}
                    />

                    {/* DESCRIÇÃO */}

                    <Text style={styles.label}>
                        Descrição
                    </Text>

                    <TextInput
                        style={styles.descricao}
                        placeholder="Digite uma Descrição para o Produto"
                        placeholderTextColor="#999"
                        value={descricao}
                        onChangeText={setDescricao}
                        multiline
                        textAlignVertical="top"
                    />

                    {/* BOTÕES */}

                    <View style={styles.botoes}>

                        <TouchableOpacity
                            style={styles.botaoCadastrar}
                            onPress={cadastrarProduto}
                        >
                            <Text style={styles.textoBotao}>
                                Cadastrar
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botaoLimpar}
                            onPress={limparCampos}
                        >
                            <Text style={styles.textoBotao}>
                                Limpar
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.botaoCancelar}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.textoBotao}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </ScrollView>

            {/* MODAL DE CATEGORIA */}

            <Modal
                visible={modalCategoria}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setModalCategoria(false)}
            >

                <View style={styles.modalFundo}>

                    <View style={styles.modal}>

                        <Text style={styles.tituloModal}>
                            Selecione a categoria
                        </Text>

                        <FlatList
                            data={categorias}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (

                                <TouchableOpacity
                                    style={styles.itemCategoria}
                                    onPress={() => {
                                        setCategoria(item);
                                        setModalCategoria(false);
                                    }}
                                >
                                    <Text style={styles.textoItem}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>

                            )}
                        />

                        <TouchableOpacity
                            style={styles.fecharModal}
                            onPress={() => setModalCategoria(false)}
                        >
                            <Text style={styles.textoFechar}>
                                Fechar
                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>

            </Modal>

        </ImageBackground>
    );
}


const styles = StyleSheet.create({

    background: {
        flex: 1,
    },

    scroll: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 30,
    },

    card: {
        width: width * 0.82,
        backgroundColor: "#F4B8C9",
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 5,
    },

    titulo: {
        color: "#C6537D",
        fontSize: 27,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "serif",
        lineHeight: 29,
    },

    subtitulo: {
        color: "#C6537D",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "serif",
        marginBottom: 13,
    },

    label: {
        color: "#C6537D",
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 7,
        marginBottom: 3,
        marginTop: 5,
    },

    input: {
        width: "100%",
        height: 34,
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        paddingHorizontal: 12,
        fontSize: 11,
        color: "#555",
    },

    inputCategoria: {
        width: "100%",
        height: 34,
        backgroundColor: "#FFFFFF",
        borderRadius: 18,
        paddingHorizontal: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    placeholderCategoria: {
        color: "#999",
        fontSize: 11,
    },

    textoCategoria: {
        color: "#555",
        fontSize: 11,
    },

    seta: {
        color: "#777",
        fontSize: 17,
        marginRight: 2,
    },

    descricao: {
        width: "100%",
        height: 69,
        backgroundColor: "#FFFFFF",
        borderRadius: 17,
        paddingHorizontal: 12,
        paddingTop: 10,
        fontSize: 10,
        color: "#555",
    },

    botoes: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
        marginTop: 13,
    },

    botaoCadastrar: {
        backgroundColor: "#00C875",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    botaoLimpar: {
        backgroundColor: "#FFD600",
        borderRadius: 15,
        paddingHorizontal: 11,
        paddingVertical: 5,
    },

    botaoCancelar: {
        backgroundColor: "#FF3838",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    textoBotao: {
        color: "#FFFFFF",
        fontSize: 9,
        fontWeight: "bold",
    },

    modalFundo: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.45)",
        justifyContent: "center",
        alignItems: "center",
    },

    modal: {
        width: "75%",
        maxHeight: "65%",
        backgroundColor: "#F6C9D7",
        borderRadius: 20,
        padding: 20,
    },

    tituloModal: {
        color: "#C6537D",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 12,
    },

    itemCategoria: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginBottom: 7,
    },

    textoItem: {
        color: "#C6537D",
        fontSize: 14,
        fontWeight: "bold",
    },

    fecharModal: {
        backgroundColor: "#FF3838",
        borderRadius: 15,
        paddingVertical: 9,
        alignItems: "center",
        marginTop: 8,
    },

    textoFechar: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },

});
