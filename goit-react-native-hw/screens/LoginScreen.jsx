import React, { useState } from "react";
import {
   View,
   ImageBackground,
   StyleSheet,
   Text,
   TextInput,
   Button,
   TouchableOpacity,
   Image,
   Dimensions,
   KeyboardAvoidingView,
   Platform,
   TouchableWithoutFeedback,
   Keyboard,
} from "react-native";

const LoginScreen = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [isFirstInputFocused, setIsFirstInputFocused] = useState(false);
   const [isInputFocused, setSecondInputFocused] = useState(false);

   const logIn = (e) => {
      e.preventDefault();

      const userData = {
         email,
         password,
      };

      console.log(userData);

      setEmail("");
      setPassword("");
   };

   return (
      <ImageBackground
         source={require("../assets/bck-photo.jpg")}
         style={styles.imageBackground}
      >
         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
               <Text style={styles.registerText}>Увійти</Text>

               <KeyboardAvoidingView
                  behavior={Platform.OS == "ios" ? "padding" : "height"}
               >
                  <TextInput
                     placeholder="Адреса електронної пошти"
                     style={[
                        isFirstInputFocused ? styles.activeInput : styles.input,
                     ]}
                     onFocus={() => setIsFirstInputFocused(true)}
                     onBlur={() => setIsFirstInputFocused(false)}
                     value={email}
                     onChangeText={setEmail}
                  />
                  <TextInput
                     placeholder="Пароль"
                     style={[
                        isInputFocused
                           ? styles.activeLastInput
                           : styles.lastInput,
                     ]}
                     onFocus={() => setSecondInputFocused(true)}
                     onBlur={() => setSecondInputFocused(false)}
                     value={password}
                     onChangeText={setPassword}
                  ></TextInput>
               </KeyboardAvoidingView>

               <Text style={styles.showBtn}>Показати</Text>

               <TouchableOpacity style={styles.enterBtn} onPress={logIn}>
                  <Text style={styles.enterBtnText}>Увійти</Text>
               </TouchableOpacity>

               <TouchableOpacity>
                  <Text style={styles.registerBtn}>
                     Немає акаунту?{" "}
                     <Text style={(styles.registerBtn, styles.registerBtnLink)}>
                        Зареєструватися
                     </Text>
                  </Text>
               </TouchableOpacity>
            </View>
         </TouchableWithoutFeedback>
      </ImageBackground>
   );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
   imageBackground: {
      flex: 1,
      backgroundPosition: "top",
      backgroundSize: "contain",
      justifyContent: "flex-end",
   },
   container: {
      display: "flex",
      alignItems: "center",
      paddingTop: 32,
      paddingBottom: 78,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      backgroundColor: "white",
      width: width,
      height: height * 0.6,
   },
   registerText: {
      color: "#212121",
      paddingBottom: 32,
      fontFamily: "Roboto-Medium",
      fontSize: 30,
      letterSpacing: 0.3,
   },
   input: {
      backgroundColor: "#F6F6F6",
      borderColor: "#E8E8E8",
      width: 345,
      height: 50,
      borderWidth: 1,
      padding: 15,
      marginBottom: 16,
      borderRadius: 8,
      fontFamily: "Roboto-Regular",
      fontSize: 16,
   },
   lastInput: {
      backgroundColor: "#F6F6F6",
      borderColor: "#E8E8E8",
      width: 345,
      height: 50,
      borderWidth: 1,
      padding: 15,
      marginBottom: 44,
      position: "relative",
      borderRadius: 8,
      fontFamily: "Roboto-Regular",
      fontSize: 16,
   },
   activeInput: {
      backgroundColor: "#FFFFFF",
      borderColor: "#FF6C00",
      width: 345,
      height: 50,
      borderWidth: 1,
      padding: 15,
      marginBottom: 16,
      borderRadius: 8,
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      shadowColor: "#FF6C00",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 5,
   },
   activeLastInput: {
      backgroundColor: "#FFFFFF",
      borderColor: "#FF6C00",
      width: 345,
      height: 50,
      borderWidth: 1,
      padding: 15,
      marginBottom: 44,
      position: "relative",
      borderRadius: 8,
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      shadowColor: "#FF6C00",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 3,
   },
   enterBtn: {
      backgroundColor: "#FF6C00",
      borderRadius: 100,
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 112,
      paddingRight: 112,
      marginBottom: 16,
   },

   enterBtnText: {
      color: "#FFFFFF",
      fontFamily: "Roboto-Regular",
      fontSize: 16,
   },
   registerBtn: {
      color: "#1B4371",
      fontFamily: "Roboto-Regular",
      fontSize: 16,
   },
   registerBtnLink: {
      textDecorationLine: "underline",
   },
   showBtn: {
      color: "#1B4371",
      bottom: 265,
      right: 40,
      position: "absolute",
      fontFamily: "Roboto-Regular",
      fontSize: 16,
      zIndex: 2,
   },
});

export default LoginScreen;
