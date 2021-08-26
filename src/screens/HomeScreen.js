import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import *as StorageHelper from '../helpers/StorageHelper';

var MOCKED_DATA = [
    {
        id: '1',
        image_uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sample_User_Icon.png/120px-Sample_User_Icon.png',
        note: '恭喜您！MCM VENTURES SDN BHD已成功將太陽能計畫帶進砂拉越。',
        date: '2021/01/28 14:00'
    },
    {
        id: '2',
        image_uri: 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png',
        note: '您的會員身份確認，已經審核通過！',
        date: '2021/02/02 12:00'
    },
    {
        id: '3',
        note: '撥款通知：MCM VENTURES SDN BHD 已將100萬分紅撥入您LOK KEI MAN的戶口。',
        date: '2021/07/27'
    },
    {
        id: '4',
        note: '恭喜您！你購買新家的匯款已經收到！',
        date: '2021/08/02 15:00'
    },
    {
        id: '5',
        note: '恭喜您，您的新家鎖匙已經發給你',
        date: '2021/08/03 10:00'
    },
    {
        id: '6',
        note: '您已經可以入住The Royale Semi D 門牌16號',
        date: '2021/08/04 08:00'
    }
]

export default function HomeScreen(props) {
    const [food, setFood] = useState('candy')
    const [dataSource, setDataSource] = useState([])
    const changeFood = (foodGet) => {
        setFood(foodGet)
    }

    useEffect(() => {
        // var book = MOCKED_DATA
        // setDataSource(book)
        fetchData()
    }, [])

    useEffect(() => {
        let getAll = []
        dataSource.map(a => {
            if (a.addToMyList === true) {
                getAll.push(a)
            }
        })
        SaveToStorage(getAll)
    })
    const SaveToStorage = (getMyBooks) => {

    }

    const fetchData = () => {
        const REQUEST_URL = 'https://data.coa.gov.tw/Service/OpenData/ODwsv/ODwsvTravelFood.aspx'

        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                setDataSource(responseData)
            })
            .catch((err) => {
                console.log('error 是', err)
            })
    }


    const showNoticeDetail = (cases) => {
        props.navigation.push('HomeDetailScreen', { passProps: cases })
    }
    const pressRow = (cases) => {
        const newDatas = dataSource.map(a => {
            let copyA = { ...a }
            if (copyA.ID === cases.ID) {
                copyA.addToMyList = !copyA.addToMyList
            }
            return copyA
        })
        setDataSource = { newDatas }
    }
    const renderBook = (cases) => {
        return (
            <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
                <View>
                    <View style={styles.MainView}>
                        {/* <Image source={{ uri: cases.image_uri }} style={styles.MainImage} /> */}
                        <TouchableOpacity onPress={() => pressRow(cases)}>
                            {cases.addToMyList === true ? <Image style={styles.imagecheck} source={require('../../assets/img/square_check.png')} />
                                : <Image style={styles.imagecheck} source={require('../../assets/img/square_non_check.png')} />}


                        </TouchableOpacity>
                        <Image
                            source={{ uri: cases.PicURL ? cases.PicURL : 'https://png.pngtree.com/png-vector/20191107/ourmid/pngtree-food-icon-design-vector-png-image_1966513.jpg' }}
                            style={styles.thumbnail}
                        />

                        <View style={{ flex: 1 }}>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'black', fontSize: 15, marginTop: 8 }}>
                                {cases.Name + " " + cases.Tel}
                            </Text>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'black', fontSize: 13, marginTop: 8 }}>
                                {cases.Address}
                            </Text>
                        </View>
                        {/* <Image source={require('../../assets/img/ic_arrow_right.png')} style={styles.image} /> */}

                    </View>
                    <View style={styles.separator} />
                </View>

            </TouchableOpacity >
        )
    }
    return (
        <View>
            {/* <Text>HomeScreen</Text>
            <Text>{food}</Text>
            <Button
                title='go to next page'
                onPress={() => props.navigation.push('HomeDetailScreen', { name: 'Edmund', functionA: (arg) => changeFood(arg) })}
            /> */}
            <FlatList
                data={dataSource}
                renderItem={cases => renderBook(cases.item)}
                keyExtractor={cases => cases.ID}
                style={{ backgroundColor: 'white' }}
            />
            <StatusBar style="auto" />
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
    MainView: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    image: {
        width: 10,
        height: 20
    },
    MainImage: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    thumbnail: {
        width: 50,
        height: 60,
        marginRight: 10,
    },
    imagecheck: {
        width: 25,
        height: 25,
        marginRight: 10,
    },

});

