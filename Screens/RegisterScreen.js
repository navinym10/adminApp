import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, ActivityIndicator, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'

//images
import { apple, facebook, google, indianFlag, leftArrow, loginImg, loginMethods, password, searchIcon, verified } from '../Assets/images'

//colors
import { Colors } from '../Assets/colors'

//dimensions
import { screenHeight } from '../Assets/dimensions'

const RegisterScreen = ({ navigation }) => {

    const [user, getUser] = useState('')
    const [num, getNum] = useState('')
    const [pass, getPass] = useState('')
    const [repass, getRePass] = useState('')

    const handleNumberChange = (text) => {
        const numericInput = text.replace(/[^0-9]/g, '');
        getNum(numericInput);
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ backgroundColor: Colors.primaryColor, height: screenHeight, }}>

                    {/* Header */}
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.5}
                        style={{ width: 28, height: 28, margin: 24, marginBottom: 0 }} >
                        <Image source={leftArrow} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 36, fontWeight: '700', letterSpacing: 0.3, marginTop: 24, color: 'white', margin: 24 }} >Register</Text>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }} >

                        <View style={{ backgroundColor: Colors.bottomTabColor, height: 60, width: '90%', borderRadius: 15, marginTop: 15, borderColor: '#C4C4C4', borderWidth: 1, }}>
                            <View style={{ backgroundColor: Colors.bottomTabColor, height: '100%', borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ height: 25, width: 25, marginStart: 25 }} source={loginMethods} />
                                <TextInput
                                    keyboardType='default'
                                    placeholder='Enter your username'
                                    placeholderTextColor={'white'}
                                    maxLength={15}
                                    onChangeText={text => getUser(text)}
                                    value={user}
                                    style={{ marginStart: 20, width: '65%', color: 'white', lineHeight: 16, letterSpacing: 0.5, fontSize: 15 }} />
                                {/* <Image style={{ height: 16, width: 16, marginStart: "2.5%" }} source={numVerified ? verified : null} /> */}
                            </View>
                        </View>

                        <View style={{ backgroundColor: Colors.bottomTabColor, height: 60, width: '90%', borderRadius: 15, marginTop: 15, borderColor: '#C4C4C4', borderWidth: 1, }}>
                            <View style={{ backgroundColor: Colors.bottomTabColor, height: '100%', borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ height: 20, width: 20, marginStart: 10 }} source={indianFlag} />
                                <Text style={{ marginStart: 5, color: 'white', opacity: 0.5, lineHeight: 16, letterSpacing: 0.5, }}>+91</Text>
                                <TextInput
                                    keyboardType='numeric'
                                    placeholder='Enter your mobile number'
                                    placeholderTextColor={'white'}
                                    maxLength={10}
                                    onChangeText={handleNumberChange}
                                    value={num}
                                    style={{ marginStart: 10, width: '65%', color: 'white', lineHeight: 16, letterSpacing: 0.5, fontSize: 15 }} />
                                {/* <Image style={{ height: 16, width: 16, marginStart: "2.5%" }} source={numVerified ? verified : null} /> */}
                            </View>
                        </View>

                        <View style={{ backgroundColor: Colors.bottomTabColor, height: 60, width: '90%', borderRadius: 15, marginTop: 15, borderColor: '#C4C4C4', borderWidth: 1, }}>
                            <View style={{ backgroundColor: Colors.bottomTabColor, height: '100%', borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ height: 25, width: 25, marginStart: 25 }} source={password} />
                                <TextInput
                                    keyboardType='default'
                                    secureTextEntry={true}
                                    placeholder='Enter your password'
                                    placeholderTextColor={'white'}
                                    maxLength={10}
                                    onChangeText={text => getPass(text)}
                                    value={pass}
                                    style={{ marginStart: 20, width: '65%', color: 'white', lineHeight: 16, letterSpacing: 0.5, fontSize: 15 }} />
                                {/* <Image style={{ height: 16, width: 16, marginStart: "2.5%" }} source={numVerified ? verified : null} /> */}
                            </View>
                        </View>

                        <View style={{ backgroundColor: Colors.bottomTabColor, height: 60, width: '90%', borderRadius: 15, marginTop: 15, borderColor: '#C4C4C4', borderWidth: 1, }}>
                            <View style={{ backgroundColor: Colors.bottomTabColor, height: '100%', borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                                <Image style={{ height: 25, width: 25, marginStart: 25 }} source={password} />
                                <TextInput
                                    keyboardType='default'
                                    secureTextEntry={true}
                                    placeholder='Re-enter your password'
                                    placeholderTextColor={'white'}
                                    maxLength={10}
                                    onChangeText={text => getRePass(text)}
                                    value={repass}
                                    style={{ marginStart: 20, width: '65%', color: 'white', lineHeight: 16, letterSpacing: 0.5, fontSize: 15 }} />
                                {/* <Image style={{ height: 16, width: 16, marginStart: "2.5%" }} source={numVerified ? verified : null} /> */}
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('LoginScreen')}
                            activeOpacity={0.8}
                            style={{ height: 45, width: '70%', backgroundColor: '#1573FE', alignItems: 'center', justifyContent: 'center', margin: 10, borderRadius: 10, marginTop: 15 }}>
                            <Text style={{ lineHeight: 16, letterSpacing: 0.5, color: 'white' }}>Register</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen
