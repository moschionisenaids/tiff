import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./pages/splash";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Home from "./pages/home";
import CadastroProduto from "./pages/cadastroproduto";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    headerShown: false,
                }}
            >

                <Stack.Screen
                    name="Splash"
                    component={Splash}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                />

                <Stack.Screen
                    name="CadastroProduto"
                    component={CadastroProduto}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}