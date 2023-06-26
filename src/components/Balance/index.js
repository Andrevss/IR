import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';


export default function Balance() {

    const [rendimentos, setRendimentos] = useState('');

    const PD = rendimentos - (rendimentos * 0.20);
    const ir = PD - (PD *0.0175 + (142));

    const getPosts = async() => {
        try {
            axios
                .get('http://192.168.0.6:3000/user')
                .then(response => {
                    setRendimentos(response.data.users[0].rendimentos);
                })
                .catch(error => {
                    console.error(error);
                });
            
        }catch (error){
            console.log(error)
        }
    }
    
    useEffect(() =>{
        getPosts()
    }, [])

 return (
    <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>Rendimentos</Text>
            <View style={styles.content}>
                <Text style={styles.Symbol}>R$</Text>
                <Text style={styles.saldo}>{rendimentos}</Text>
            </View>
        </View>
        <View style={styles.item}>
            <Text style={styles.itemTitle}>A pagar</Text>
            <View style={styles.content}>
                <Text style={styles.Symbol}>R$</Text>
                <Text style={styles.pagar}>{ir}</Text>
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