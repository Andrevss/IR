import React, { useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';


export default function Create() {

    const [nome, setNome] = useState('');
    const [rendimentos, setRendimentos] = useState('');

    const handleCalcular = () => {
        const newUser = {
          nome: nome,
          rendimentos: rendimentos,
        };
    
        axios
          .post('http://192.168.0.6:3000/user/add', newUser)
          .then(response => {
            console.log(response.data); 
          })
          .catch(error => {
            console.error(error);
          });
    }

 return (
   <View style={styles.container}>
    <View style={styles.content}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder='Nos informe seu nome'
        />
        <Text style={styles.label}>Rendimentos</Text>
        <TextInput
        style={styles.input}
        value={rendimentos}
        onChangeText={setRendimentos}
        placeholder='Nos informe seus rendimentos'
        />
        <TouchableOpacity style={styles.button} onPress={handleCalcular}>
            <Text style={styles.textButton}>Calcular imposto de renda</Text>
        </TouchableOpacity>
    </View>
   </View>
  );
}

const styles= StyleSheet.create({
    title:{
        color: '#fff',
        paddingBottom: 25,
        fontSize: 30,
        fontWeight: 'bold',
    },
    content:{
        paddingBottom: 10,
        marginLeft: 34,
    },
    input:{
        width: 250,
        borderWidth: 1,
        borderColor: '#c493f5',
        paddingBottom: 4,
        paddingLeft: 10,
        marginBottom: 25,
        borderRadius: 10,
    },
    label:{
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 5
    },
    button:{
        backgroundColor: '#8000ff',
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        borderRadius: 15,
        width: 200,
        alignItems: 'center'
    },
    textButton:{
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    }
    
})