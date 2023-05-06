import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import Header from "../../components/SignInComponents/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import useColors from "../../hooks/useColors";
import Form from "../../components/SignInComponents/Form";

const Signin = () => {
  const colors = useColors();
  console.log("🚀 ~ file: sign-in.tsx:10 ~ Signin ~ test:", colors);
  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1 }}>
      <Header />
      <View>
        <Form />
      </View>
    </SafeAreaView>
  );
};

export default Signin;
