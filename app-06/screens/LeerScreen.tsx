import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { onValue, ref } from "firebase/database";
import { db } from '../firebase/Config'
import { styleGlobal } from '../styles/GlobalStyles';

export default function LeerScreen() {

    const [autos, setautos] = useState([])
    const [placa, setplaca] = useState("")
    const [auto, setauto] = useState({})

    useEffect(() => {
        leerAutos()
    }, [])

    function leerAutos() {
        const starCountRef = ref(db, 'autos/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();

            let tempArray: any = Object.keys(data).map((placa) => ({
                placa, ...data[placa]
            }))

            setautos(tempArray)
            //console.log(autos)
        });
    }

    function leerAuto() {
        const starCountRef = ref(db, 'autos/' + placa);
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            setauto(data)
            //console.log(auto)
        });
    }

    useEffect(() => {
        leerAuto()
    }, [placa])


    return (
        <View>
            <Text>LeerScreen</Text>

            <TextInput
                placeholder='Ingresa placa...'
                style={styleGlobal.input}
                onChangeText={setplaca}
            />


            {
                auto == null
                    ? <ActivityIndicator />
                    : <Text>Marca: {auto.marca}</Text>
            }

            <View
                style={styleGlobal.linea} />
            <FlatList
                data={autos}
                renderItem={({ item }) =>
                    <Text>{item.marca}</Text>} />
        </View>
    )
}

const styles = StyleSheet.create({})