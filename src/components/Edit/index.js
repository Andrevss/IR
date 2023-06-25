import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function Edit() {

 return (
   <View style={styles.container}>
    <View style={styles.nomeContent}>
        <Text style={styles.Label}>Nome</Text>
        <Text style={styles.value}>André</Text>
    </View>
    <View style={styles.pagarContent}>
        <Text style={styles.Label}>À pagar</Text>
        <Text style={styles.value}>638,00</Text>
    </View>
    <View style={styles.btns}>
        <TouchableOpacity style={styles.buttonE} activeOpacity={0.9}>
            <Text style={styles.textButton}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.9}>
            <Text style={styles.textButton}>Deletar</Text>
        </TouchableOpacity>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginStart: 14,
        marginEnd: 14,
    },
    Label:{
        fontSize: 16,
        paddingBottom: 7,
        fontWeight: 'bold'
    },
    btns:{
        flexDirection: 'row',
        marginTop: 16,
    },
    buttonE:{
        marginRight: 10,
        backgroundColor: '#2ecc71',
        paddingLeft: 4,
        paddingRight: 4,
        justifyContent: 'center',
        borderRadius: 8,
    },
    button:{
        backgroundColor: '#e74c3c',
        paddingLeft: 4,
        paddingRight: 4,
        justifyContent: 'center',
        borderRadius: 8,
    },
    textButton:{
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    }

    
    
})