import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import useColors from "../../hooks/useColors";
// import { useTheme } from "react-native-paper";

const Header = () => {
  const colors = useColors();
  const router = useRouter();

  return (
    <View style={{ paddingLeft: 20, paddingTop: 10 }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={30} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
