import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import useColors from "../../hooks/useColors";
import { Button, TextInput } from "react-native-paper";
import { Formik } from "formik";
import * as yup from "yup";
import { SignIn } from "../../api/SignIn";

const Form = () => {
  const colors = useColors();
  const validationScheme = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Too short!")
      .required("Password is required"),
  });

  const styles = StyleSheet.create({
    root: {
      alignItems: "center",
      justifyContent: "center",
    },
    padding: {
      height: layout().height * 0.02,
    },
    headingText: {
      fontSize: 32,
    },
    headingContainer: {
      width: layout().widthp,
    },
    subtitle: {
      fontSize: 16,
    },
    input: {
      // backgroundColor: "transparent",
    },
  });

  return (
    <View style={styles.root}>
      <View style={styles.padding} />
      <View style={styles.headingContainer}>
        <Text style={[styles.headingText, { color: colors.text }]}>
          Hello There 👋
        </Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Please enter your email and password to sing in
        </Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
            SignIn(values.email, values.password);
          }}
          validationSchema={validationScheme}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <>
              <TextInput
                label="Email"
                style={[styles.input, { backgroundColor: "transparent" }]}
                selectionColor={"gray"}
                underlineColor={colors.accent}
                textColor={colors.text}
                underlineColorAndroid={colors.primary}
                mode="flat"
                activeUnderlineColor={colors.primary}
                cursorColor={colors.primary}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {touched.email && errors.email ? (
                <Text style={{ color: colors.errorText }}>
                  {touched.email && errors.email}
                </Text>
              ) : null}
              <TextInput
                label="Password"
                style={[styles.input, { backgroundColor: "transparent" }]}
                selectionColor={"gray"}
                underlineColor={colors.accent}
                textColor={colors.text}
                underlineColorAndroid={colors.primary}
                mode="flat"
                activeUnderlineColor={colors.primary}
                cursorColor={colors.primary}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {touched.password && errors.password ? (
                <Text style={{ color: colors.errorText }}>
                  {touched.password && errors.password}
                </Text>
              ) : null}
              <View style={styles.padding} />
              <Button onPress={() => handleSubmit()} mode="contained">
                Sign In
              </Button>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Form;
