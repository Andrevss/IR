import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, StatusBar } from 'react-native';
import {Feather} from '@expo/vector-icons'

const statusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header() {
 return (
   <View style={styles.container}>
    <View style={styles.content}>
        <Text style={styles.Title}>Meu IR</Text>
        <TouchableOpacity style={styles.button}>
            <Feather name="user" size={27} color="#fff"/>
        </TouchableOpacity>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeigth,
        flexDirection: 'row',
        paddingStart: 16,
        padddingEnd: 16,
        paddingBottom: 40,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    Title:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    button:{
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        marginRight: 16,
    }
})