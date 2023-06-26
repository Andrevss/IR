import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tax() {
 return (
   <View style={styles.container}>
    <Text style={styles.title}>Valores e cálculos</Text>
    <View style={styles.content}>
        <Text style={styles.titleContent}>Alíquota</Text>
        <Text style={styles.valueContent}>7.5%</Text>
    </View>
    <View style={styles.content}>
        <Text style={styles.titleContent}>Dedução Simplificada</Text>
        <Text style={styles.valueContent}>20%</Text>
    </View>
    <View style={styles.content}>
        <Text style={styles.titleContent}>Parcela dedutível</Text>
        <Text style={styles.valueContent}>R$ 142</Text>
    </View>
   </View>
  );
}

const styles= StyleSheet.create({
    container:{
        flexDirection: 'column',
        paddingStart: 18,
        paddingEnd: 18,
        marginStart: 14,
        marginEnd: 14,
    },
    title:{
        fontSize: 22,
        paddingTop: 14,
        paddingBottom: 20,
        fontWeight: 'bold',
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 14, 
    },
    titleContent:{
        fontSize: 15,
    },
    valueContent:{
        fontSize: 15,
        fontWeight: 'bold',
    }
})