import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper';
import { useMappedState, useDispatch } from 'redux-react-hook'
import { changeName } from '../redux/action'

export default function ProfileScreen(props) {

    const [name, setName] = useState('')
    const myNewName = useMappedState(state => state.newName)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     loadStorage()
    // }, [])


    // const loadStorage = async () => {
    //     let nameGet = await StorageHelper.getMySetting('name')
    //     if (nameGet) { //if (name!==null)
    //         setName(nameGet)

    //     }
    // }

    // const changeName = async () => {
    //     try {
    //         await StorageHelper.setMySetting('name', name)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }
    //for redux


    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <TextInput
                maxLength={10}
                style={{ height: 50, width: 300, borderWidth: 5, borderColor: 'gray', fontSize: 28, textAlign: 'center', color: 'gray' }}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            {/* <Text>Hello {name}!</Text> */}
            <Text>{myNewName}</Text>
            <Button
                title='redux set name'
                onPress={() => dispatch(changeName(name))}

            />
            {/* <Button
            title='go to profile details screen'
            onPress={() => props.navigation.push('ProfileDetail')}
        /> */}
            < StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
