import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { useState, useEffect } from "react";

const useColors = () => {
  const mode = useColorScheme();
  console.log("🚀 ~ file: useColors.tsx:6 ~ useColors ~ mode:", mode);

  const lightModeColors = {
    background: "#fff",
    primary: "#18223a",
    text: "#212121",
    accent: "#18223a",
    errorText: "#f44336",
  } as const;

  type LightModeColors = typeof lightModeColors;

  const darkModeColors = {
    background: "#181a20",
    primary: "#E8E9EB",
    text: "#fff",
    accent: "white",
    errorText: "#f44336",
  } as const;

  type DarkModeColors = typeof darkModeColors;

  const [colors, setColors] = useState<LightModeColors | DarkModeColors>(
    darkModeColors
  );

  useEffect(() => {
    setColors(mode === "light" ? lightModeColors : darkModeColors);
  }, [mode]);

  return colors;
};

export default useColors;

const styles = StyleSheet.create({});
