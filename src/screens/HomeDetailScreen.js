import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function HomeDetailScreen(props) {
    // const name = props.route.params.name || 'nothing get'
    const passProps = props.route.params.passProps || 'nothing get'
    return (
        <View style={styles.container}>
            <Text>美食詳細資料</Text>
            <Image source={{ uri: passProps.PicURL ? passProps.PicURL : 'https://png.pngtree.com/png-vector/20191107/ourmid/pngtree-food-icon-design-vector-png-image_1966513.jpg' }} style={{ width: 200, height: 200, padding: 10 }} />
            <Text>{passProps.Name + " " + passProps.Tel}</Text>
            <Text>{passProps.Address}</Text>
            <Text style={styles.feature}>{passProps.FoodFeature}</Text>
            {/* <Button
                title='go back'
                onPress={() => props.navigation.pop()}
            />
            <Text>{name}</Text>
            <Button
                title='change first page food'
                onPress={() => props.route.params.functionA('apple')}
            /> */}
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    feature: {
        marginRight: 10,
        paddingLeft: 10,
    }
});
