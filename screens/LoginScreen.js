import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import ErrorMessage from "../components/ErrorMessage";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object.shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).max(14).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/unnamed.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapatilize="none"
              autoCorrect={false}
              icon="email"
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
              KeyboardType="email-address"
              placeholder="Email"
            />
            <ErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              autoCapatilize="none"
              autoCorrect={false}
              icon="lock"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry={true}
            />
            <ErrorMessage error={errors.password} visible={touched.password} />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
