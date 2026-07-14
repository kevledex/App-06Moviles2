import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { styleGlobal } from '../styles/GlobalStyles'
import { ref, remove } from 'firebase/database'
import { db } from '../firebase/Config'

export default function EliminarScreen() {

    const [placa, setplaca] = useState("")

    function eliminarAuto() {
        Alert.alert("Peligro", "Deseas borrar?", [
            {
                text: "Borrar",
                onPress: () => remove(ref(d b, 'autos/' + placa),)
            },
            {
                text: "Cancelar"
            }
        ])
        remove(ref(db, 'autos/' + placa),);
    }

    return (
        <View>
            <Text>EliminarScreen</Text>
            <TextInput
                placeholder='Ingresa placa...'
                style={styleGlobal.input}
                onChangeText={setplaca} />

            <Button
                title='Eliminar'
                color={'#ff0000'}
                onPress={eliminarAuto} />
        </View>
    )
}

const styles = StyleSheet.create({})