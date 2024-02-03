import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log(`Iniciando sesión con usuario: ${username} y contraseña: ${password}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>MUSICª</Text>
      <View style={styles.formulariologin}>
        <View style={styles.inputs}>
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=AZeEe3v7V-jz&format=png' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.inputs}>
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=hcHUa8I3M43V&format=png' }} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Image source={{ uri: 'https://img.icons8.com/?size=48&id=80646&format=png' }} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
      {/* vinculo */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.vinculo}>No tienes una cuenta?</Text>
        </TouchableOpacity>
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
  formulariologin: {
    backgroundColor: '#CDDCBE', 
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  titulo: {
    fontSize: 40,
    marginBottom:60,
    color: '#4A4A4A',
    fontWeight: 'bold',
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
  },
  icon: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonImage: {
    width: 70,
    height:70,
    resizeMode: 'contain',
  },
  vinculo: {
    marginTop: 20,
    color: 'purple',
  },
});

export default LoginScreen;
