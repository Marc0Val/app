import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const handleRegister = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Icono en la parte superior del formulario */}
      <Image source={{ uri: 'https://img.icons8.com/?size=48&id=g8FeKvtaoAon&format=png' }} style={styles.topIcon} />

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=MXJBhIDosJsE&format=png' }} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Nombre" />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=80728&format=png' }} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Correo" />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=hcHUa8I3M43V&format=png' }} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
        </View>

        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=81146&format=png' }} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Confirmar Contraseña" secureTextEntry={true} />
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Image source={{ uri: 'https://img.icons8.com/?size=48&id=80664&format=png' }} style={styles.icon1} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CFF5DE',
  },
  topIcon: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    backgroundColor: '#CDDCBE',
    padding: 20,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  registerButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  icon1: {
    width: 50,
    height: 50,
  },
});

export default RegisterScreen;
