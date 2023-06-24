import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance() {
 return (
    <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Rendimentos</Text>
            <View style={styles.content}>
                <Text style={styles.Symbol}>R$</Text>
                <Text style={styles.saldo}>1.000</Text>
            </View>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>A pagar</Text>
            <View style={styles.content}>
                <Text style={styles.Symbol}>R$</Text>
                <Text style={styles.pagar}>1.000</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle:{
        fontSize: 20,
        color: '#DADADA',
    },
    content:{
        flexDirection:'row',
        alignItems: 'center',
    },
    Symbol:{
        color: '#DADADA',
        marginRight: 6,
    },
    saldo:{
        fontSize: 22,
        color: '#2ecc71',
    },
    pagar:{
        fontSize: 22,
        color: '#e74c3c',
    }
    
    
    
})