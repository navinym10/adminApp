import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, ToastAndroid } from 'react-native'
import React, { useState } from 'react'

//images
import { leftArrow } from '../Assets/images'

//colors
import { Colors } from '../Assets/colors'

//dimensions
import { screenHeight } from '../Assets/dimensions'
import { TextInput } from 'react-native-gesture-handler'

const EditScreen = ({ navigation, route }) => {

    const apiEndpoint = `your api/${route.params.id}/`

    const [username, setUsername] = useState(route.params.userName)
    const [firstname, setFirstname] = useState(route.params.firstName)
    const [lastname, setLastname] = useState(route.params.lastName)
    const [email, setEmail] = useState(route.params.email)
    const [active, setActive] = useState(route.params.active)

    const handleUserNameChange = (text) => {
        setUsername(text)
    }

    const handleFirstNameChange = (text) => {
        setFirstname(text)
    }

    const handleLastNameChange = (text) => {
        setLastname(text)
    }

    const handleEmailChane = (text) => {
        setEmail(text)
    }

    const updatedData = {
        username: username,
        first_name: firstname,
        last_name: lastname,
        email: email,
        is_active: active,
    }

    const handleUpdatePress = () => {
        fetch(apiEndpoint, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(JSON.stringify(responseData));
            })
        ToastAndroid.show(`User ${username} has been updated...`, ToastAndroid.SHORT)
        navigation.push('HomeScreen')
    };

    const handleDeletePress = () => {
        fetch(apiEndpoint, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(JSON.stringify(responseData));
            })
        ToastAndroid.show('A user has been deleted...', ToastAndroid.SHORT)
        navigation.push('HomeScreen')
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ backgroundColor: Colors.primaryColor, height: screenHeight, }}>

                    {/* Header */}
                    <TouchableOpacity
                        onPress={() => navigation.push('HomeScreen')}
                        activeOpacity={0.5}
                        style={{ width: 28, height: 28, margin: 24, marginBottom: 0 }} >
                        <Image source={leftArrow} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 36, fontWeight: '700', letterSpacing: 0.3, marginTop: 24, color: 'white', margin: 24 }} >Edit User</Text>

                    <View style={{ marginLeft: 20, justifyContent: 'center', marginBottom: 10 }} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={{ color: 'white', letterSpacing: 0.3, marginStart: 10, width: 80 }}>User name: </Text>
                            <TextInput
                                placeholderTextColor={'white'}
                                value={username}
                                onChangeText={handleUserNameChange}
                                style={{ backgroundColor: Colors.bottomTabColor, width: '70%', marginStart: 10, borderRadius: 5, borderWidth: 1, borderColor: '#C4C4C4', color: 'white', letterSpacing: 0.3, padding: 10 }} />
                        </View>
                    </View>

                    <View style={{ marginLeft: 20, justifyContent: 'center', marginBottom: 10 }} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={{ color: 'white', letterSpacing: 0.3, marginStart: 10, width: 80 }}>First name: </Text>
                            <TextInput
                                placeholderTextColor={'white'}
                                value={firstname}
                                onChangeText={handleFirstNameChange}
                                style={{ backgroundColor: Colors.bottomTabColor, width: '70%', marginStart: 10, borderRadius: 5, borderWidth: 1, borderColor: '#C4C4C4', color: 'white', letterSpacing: 0.3, padding: 10 }} />
                        </View>
                    </View>

                    <View style={{ marginLeft: 20, justifyContent: 'center', marginBottom: 10 }} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={{ color: 'white', letterSpacing: 0.3, marginStart: 10, width: 80 }}>Last name: </Text>
                            <TextInput
                                placeholderTextColor={'white'}
                                value={lastname}
                                onChangeText={handleLastNameChange}
                                style={{ backgroundColor: Colors.bottomTabColor, width: '70%', marginStart: 10, borderRadius: 5, borderWidth: 1, borderColor: '#C4C4C4', color: 'white', letterSpacing: 0.3, padding: 10 }} />
                        </View>
                    </View>

                    <View style={{ marginLeft: 20, justifyContent: 'center', marginBottom: 10 }} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={{ color: 'white', letterSpacing: 0.3, marginStart: 10, width: 80 }}>Email: </Text>
                            <TextInput
                                placeholderTextColor={'white'}
                                value={email}
                                onChangeText={handleEmailChane}
                                style={{ backgroundColor: Colors.bottomTabColor, width: '70%', marginStart: 10, borderRadius: 5, borderWidth: 1, borderColor: '#C4C4C4', color: 'white', letterSpacing: 0.3, padding: 10 }} />
                        </View>
                    </View>

                    <View style={{ marginLeft: 20, justifyContent: 'center', marginBottom: 10 }} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={{ color: 'white', letterSpacing: 0.3, marginStart: 10, width: 80 }}>Status: </Text>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => {
                                    setActive(!active)
                                }}
                                style={{ height: 45, width: 65, backgroundColor: active ? 'green' : 'red', marginStart: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <Text style={{ color: 'white', letterSpacing: 0.3, }} >{`${active ? `Active` : `Inactive`}`}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                        <TouchableOpacity
                            onPress={handleUpdatePress}
                            activeOpacity={0.8}
                            style={{ height: 45, width: '70%', backgroundColor: '#1573FE', alignItems: 'center', justifyContent: 'center', margin: 10, borderRadius: 10, marginTop: 15 }}>
                            <Text style={{ lineHeight: 16, letterSpacing: 0.5, color: 'white' }}>Update</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }} >
                        <TouchableOpacity
                            onPress={handleDeletePress}
                            activeOpacity={0.8}
                            style={{ height: 45, width: '70%', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', margin: 10, borderRadius: 10, marginTop: 10 }}>
                            <Text style={{ lineHeight: 16, letterSpacing: 0.5, color: 'white' }}>Delete</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
    )
}

export default EditScreen