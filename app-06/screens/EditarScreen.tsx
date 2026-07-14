import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { styleGlobal } from '../styles/GlobalStyles'

//FIREBASE
import { ref, update } from "firebase/database";
import { db } from '../firebase/Config'

export default function EditarScreen() {

    const [placa, setplaca] = useState("")
    const [marca, setmarca] = useState("")
    const [precio, setprecio] = useState(0)
    const [color, setcolor] = useState("")

    function editarAuto() {

        update(ref(db, 'autos/' + placa), {
            marca: marca,
            precio: precio,
            color: color
        });
    }

    return (
        <View>
            <Text>GuardarScreen</Text>

            <TextInput
                placeholder='Ingresar Placa'
                style={styleGlobal.input}
                onChangeText={(texto) => setplaca(texto)}
                value={placa}
            />

            <TextInput
                placeholder='Ingresar Marca'
                style={styleGlobal.input}
                onChangeText={(texto) => setmarca(texto)}
                value={marca}
            />

            <TextInput
                placeholder='Ingresar Precio'
                style={styleGlobal.input}
                onChangeText={(texto) => setprecio(+texto)}
                value={precio.toString()}
            />

            <TextInput
                placeholder='Ingresar Color'
                style={styleGlobal.input}
                onChangeText={(texto) => setcolor(texto)}
                value={color}
            />

            <Button
                title='Editar'
                onPress={() => editarAuto()}
                color={'#5c5c5c'}
            />

        </View>
    )
}

const styles = StyleSheet.create({})