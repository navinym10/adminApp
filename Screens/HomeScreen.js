import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, ScrollView, Image, BackHandler, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

//colors
import { Colors } from '../Assets/colors'

//assets
import { addUser, cancel, dropDown, edit, profile, upArrow } from '../Assets/images'

//dimensions
import { screenHeight } from '../Assets/dimensions'


const RegisterScreen = ({ navigation }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        console.log('home')
        fetch('api containing data like id, username, first_name, last_name, email, is_active(active/inactive)')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))

        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to exit the App?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                { text: 'YES', onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, [])


    const Render = ({ item }) => {

        const [isExpanded, setIsExpanded] = useState(false);

        const toggleExpansion = () => {
            setIsExpanded(!isExpanded);
        };

        return (
            <View style={{ margin: 10, backgroundColor: Colors.bottomTabColor, borderRadius: 5, }}>
                <View style={{ justifyContent: 'space-between', height: 50, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', letterSpacing: 0.3, marginStart: 10 }} >{item.username}</Text>
                    <TouchableOpacity
                        onPress={toggleExpansion}
                        activeOpacity={0.5}>
                        {isExpanded ?
                            <Image style={{ width: 23, height: 23, marginEnd: 10 }} source={cancel} /> :
                            <Image style={{ width: 25, height: 25, marginEnd: 10 }} source={dropDown} />
                        }
                    </TouchableOpacity>
                </View>
                {isExpanded &&
                    <View>
                        <View style={{ height: 1, width: '100%', backgroundColor: '#C4C4C4' }} />

                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginStart: 10, marginEnd: 10, marginTop: 10 }} >
                            <Text style={{ fontSize: 20, fontWeight: '700', letterSpacing: 0.3, color: 'white' }} >Details:</Text>
                            <TouchableOpacity
                                onPress={() => navigation.push("EditScreen", {
                                    userName: item.username,
                                    firstName: item.first_name,
                                    lastName: item.last_name,
                                    email: item.email,
                                    active: item.is_active,
                                    id: item.id,
                                })}
                                activeOpacity={0.5}>
                                <Image style={{ width: 23, height: 23 }} source={edit} />
                            </TouchableOpacity>
                        </View>

                        <Text style={{ color: 'white', letterSpacing: 0.3, margin: 10 }} >{`First name: ${item.first_name.length == 0 ? 'NIL' : item.first_name}`}</Text>
                        <Text style={{ color: 'white', letterSpacing: 0.3, margin: 10 }} >{`Last name: ${item.last_name.length == 0 ? 'NIL' : item.last_name}`}</Text>
                        <Text style={{ color: 'white', letterSpacing: 0.3, margin: 10 }} >{`Email: ${item.email.length == 0 ? 'NIL' : item.email}`}</Text>
                        <View style={{ flexDirection: 'row', margin: 10 }} >
                            <Text style={{ color: 'white', letterSpacing: 0.3, marginRight: 0 }} >Active: </Text>
                            <Text style={{ color: item.is_active ? 'green' : 'red', letterSpacing: 0.3, marginLeft: 0 }} >{`${item.is_active}`}</Text>
                        </View>

                    </View>
                }
            </View>
        );
    }

    return (
        <View style={{ backgroundColor: Colors.primaryColor, height: screenHeight, }}>

            <TouchableOpacity
                activeOpacity={0.5}
                style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', margin: 24 }} >
                <Text style={{ fontSize: 25, fontWeight: '700', letterSpacing: 0.3, color: 'white' }} >Welcome,</Text>
                <Image style={{ marginStart: 10 }} source={profile} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginStart: 20, marginEnd: 20, marginBottom: 10, marginTop: 10 }} >
                <Text style={{ fontSize: 20, fontWeight: '700', letterSpacing: 0.3, color: 'white', }} >All Users</Text>
                <TouchableOpacity
                    onPress={() => navigation.push('AddScreen')}
                    activeOpacity={0.5}>
                    <Image style={{ width: 30, height: 30 }} source={addUser} />
                </TouchableOpacity>
            </View>

            <ScrollView style={{ marginBottom: 50 }} showsVerticalScrollIndicator={false} >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{ margin: 10 }}
                    data={data}
                    renderItem={({ item }) => <Render item={item} />}
                    keyExtractor={item => item.id}
                />
            </ScrollView>


        </View>
    );
}

export default RegisterScreen

