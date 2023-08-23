import { View, Text, Image, TextInput, TouchableOpacity, ToastAndroid, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'

//images
import { facebook, google, indianFlag, loginImg, loginMethods, password, verified } from '../Assets/images'

//colors
import { Colors } from '../Assets/colors'

//dimensions
import { screenHeight } from '../Assets/dimensions'

const LoginScreen = ({ navigation }) => {


    //hooks
    const [numVerified, isNumVerified] = useState(false)
    const [passVerified, isPassVerified] = useState(false)
    const [mobileNum, setMobileNum] = useState('')
    const [Password, setPassword] = useState('')
    const [login, setLogin] = useState(false)
    const [confirm, setConfirm] = useState(null)
    const [hideIcon, setHideIcon] = useState(false)

    useEffect(() => {
        if (mobileNum.length >= 3) {
            if (Password.length >= 3) {
                isPassVerified(true)
                setLogin(true)
            } else {
                setLogin(false)
                isPassVerified(false)
            }
            isNumVerified(true)
        } else {
            isNumVerified(false)
            setLogin(false)
        }
    })

    const handleNumberChange = (text) => {
        const numericInput = text.replace(/[^0-9]/g, '');
        setMobileNum(numericInput);
    };

    const handlePassword = (text) => {
        setPassword(text)
    }

    const handleLogin = async () => {
        if (login) {
            navigation.navigate('HomeScreen')
        } else {
            ToastAndroid.show('You can enter more than 3 characters to Login...', ToastAndroid.SHORT);
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ backgroundColor: Colors.primaryColor, height: screenHeight, alignItems: 'center', flex: 1, justifyContent: 'center', opacity: hideIcon ? 0.5 : 1 }}>
                    <Image style={{}} source={loginImg} />
                    <Text style={{ fontSize: 36, fontWeight: '700', letterSpacing: 0.3, marginTop: 24, color: 'white', margin: 24 }} >Login</Text>

                    {/* Phone Number */}
                    <View style={{ backgroundColor: Colors.bottomTabColor, height: 60, width: '80%', borderRadius: 15, marginTop: 15, borderColor: '#C4C4C4', borderWidth: 1, }}>
                        <View style={{ backgroundColor: Colors.bottomTabColor, height: '100%', borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ height: 20, width: 20, marginStart: 10 }} source={indianFlag} />
                            <Text style={{ marginStart: 5, color: 'white', opacity: 0.5, lineHeight: 16, letterSpacing: 0.5, }}>+91</Text>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='Enter your mobile number'
                                placeholderTextColor={'white'}
                                maxLength={10}
                                onChangeText={handleNumberChange}
                                value={mobileNum}
                                style={{ marginStart: 10, width: '65%', color: 'white', lineHeight: 16, letterSpacing: 0.5, fontSize: 15 }} />
                            <Image style={{ height: 16, width: 16, marginStart: "2.5%" }} source={numVerified ? verified : null} />
                        </View>
                    </View>

                    {/* Password */}
                    <View style={{ backgroundColor: Colors.bottomTabColor, height: 60, width: '80%', borderRadius: 15, marginTop: 15, borderColor: '#C4C4C4', borderWidth: 1, }}>
                        <View style={{ backgroundColor: Colors.bottomTabColor, height: '100%', borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={{ height: 25, width: 25, marginStart: 25 }} source={password} />
                            <TextInput
                                keyboardType='default'
                                secureTextEntry={true}
                                placeholder='Enter your password'
                                placeholderTextColor={'white'}
                                maxLength={10}
                                onChangeText={handlePassword}
                                value={Password}
                                style={{ marginStart: 20, width: '65%', color: 'white', lineHeight: 16, letterSpacing: 0.5, fontSize: 15 }} />
                            <Image style={{ height: 16, width: 16, marginStart: "2.5%" }} source={passVerified ? verified : null} />
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={handleLogin}
                        activeOpacity={0.8}
                        style={{ height: 45, width: '70%', backgroundColor: login ? '#1573FE' : Colors.bottomTabColor, alignItems: 'center', justifyContent: 'center', margin: 10, borderRadius: 10, marginTop: 15 }}>
                        <Text style={{ lineHeight: 16, letterSpacing: 0.5, color: 'white' }}>Login</Text>
                    </TouchableOpacity>


                    {/* other login methods */}
                    <View style={{ flexDirection: "row", alignItems: 'center', marginTop: '10%' }} >
                        <View style={{ height: 1, backgroundColor: '#C4C4C4', width: 80 }} />
                        <Text style={{ lineHeight: 16, letterSpacing: 0.5, color: '#C4C4C4', margin: 8 }}>or continue with</Text>
                        <View style={{ height: 1, backgroundColor: '#C4C4C4', width: 80 }} />
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', margin: '5%' }} >
                        <TouchableOpacity
                            style={{ right: 50 }}
                            activeOpacity={0.5}>
                            <Image source={google} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ left: 50 }}
                            activeOpacity={0.5}>
                            <Image style={{ height: 35, width: 35 }} source={facebook} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '15%', marginBottom: '5%', opacity: hideIcon ? 0 : 1 }} >
                        <Text style={{ lineHeight: 16, letterSpacing: 0.5, color: '#C4C4C4', }}>Don't have an account?  </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('RegisterScreen')}
                            activeOpacity={0.5} >
                            <Text style={{ lineHeight: 16, letterSpacing: 0.5, color: '#1573FE' }}>Sign up</Text>
                        </TouchableOpacity>
                    </View>

                </View >
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen
