import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';

export default function Edit() {
    const [rendimentos, setRendimentos] = useState('');
    const [nome, setNome] = useState('');

    const PD = rendimentos - (rendimentos * 0.20);
    const ir = PD - (PD *0.0175 + (142));

    const getPosts = async() => {
        try {
            axios
                .get(`http://192.168.0.6:3000/user/`)
                .then(response => {
                    setRendimentos(response.data.users[0].rendimentos);
                    setNome(response.data.users[0].nome);
                })
                .catch(error => {
                    console.error(error);
                });
            
        }catch (error){
            console.log(error)
        }
    }

    /*const handleDelete = (id) => {
        axios
            .delete(`http://192.168.0.6:3000/user/delete/${id}`)
            .then(response => {
                console.log(response.data.users)
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleEdit = () => {
        const EditUser = {
            rendimentos : rendimentos,
        };

        axios
            .put(`http://192.168.0.6:3000/user/update/${id}`, EditUser)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }*/
    
    useEffect(() =>{
        getPosts()
    }, [])

 return (
   <View style={styles.container}>
    <View style={styles.primeiraC}>
    <View style={styles.nomeContent}>
        <Text style={styles.Label}>Nome</Text>
        <Text style={styles.value}>{nome}</Text>
    </View>
    <View style={styles.pagarContent}>
        <Text style={styles.Label}>À pagar</Text>
        <Text style={styles.value}>{ir}</Text>
    </View>
    <View style={styles.btns}>
        <TouchableOpacity style={styles.button} activeOpacity={0.9} /*onPress={handleDelete()}*/>
            <Text style={styles.textButton}>Deletar</Text>
        </TouchableOpacity>
    </View>
    </View>
    <View style={styles.editar}>
        <Text style={styles.label}>Rendimentos</Text>
            <TextInput
            style={styles.input}
            onChangeText={setRendimentos}
            placeholder='Nos informe o valor'
            />
            <TouchableOpacity style={styles.buttonE} activeOpacity={0.9} /*onPress={handleEdit()}*/>
                <Text style={styles.textButton}>Editar</Text>
            </TouchableOpacity>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        marginTop: 30,
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginStart: 14,
        marginEnd: 14,
    },
    primeiraC:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    editar:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
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