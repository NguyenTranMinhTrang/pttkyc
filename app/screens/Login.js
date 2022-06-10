import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Keyboard
} from 'react-native';
import { images, COLORS, SIZES, FONTS } from "../constants";
import { FontAwesome, Feather } from '@expo/vector-icons';
import { showError, showSuccess } from '../utils/showMessage';
import instance from '../api/axios';
import validation from '../utils/validation';

const Login = ({ navigation }) => {

    const [state, setState] = React.useState({
        email: '',
        password: '',
        hide: true
    });

    const { email, password, hide } = state;

    const updateState = (newState) => {
        setState({
            ...state,
            ...newState
        })
    }

    const validate = () => {

        const error = validation({
            email: email,
            password: password
        })

        if (error) {
            showError(error);
            return false;
        }
        return true;
    }

    const handleLogin = () => {
        const isValid = validate();
        const data = {
            email: email,
            password: password
        };

        const json = JSON.stringify(data);

        if (isValid) {
            instance.post('/login.php', json)
                .then(function (response) {
                    if (response) {
                        if (response.code == 0) {
                            showSuccess("Login Success !");
                            navigation.navigate("Home");
                        }
                        else {
                            showError(response.data);
                        }
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const renderHeader = () => {
        return (
            <View
                style={{
                    padding: SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.h1, color: COLORS.white }}>Booking</Text>
                <Text style={{ ...FONTS.h1, color: COLORS.primary, marginLeft: SIZES.padding * 2 }}>Ticket</Text>
                <Text style={{ ...FONTS.h1, color: COLORS.white, marginLeft: SIZES.padding * 4 }}>With Our App !</Text>
            </View>
        )
    }

    const renderContent = () => {
        const keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={keyboardVerticalOffset}
                style={{
                    flex: 1,
                    backgroundColor: COLORS.transparentBlack1,
                    padding: SIZES.padding,
                    marginTop: SIZES.padding
                }}
            >
                <Text style={{ ...FONTS.h3_light, color: COLORS.primary }}>Email</Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: COLORS.primary,
                        borderRadius: SIZES.radius,
                        padding: SIZES.base * 2,
                        marginVertical: SIZES.base
                    }}
                >
                    <View
                        style={{
                            marginRight: SIZES.base
                        }}
                    >
                        <FontAwesome name="user" size={30} color={COLORS.primary} />
                    </View>

                    <TextInput
                        placeholder="Your Email ..."
                        placeholderTextColor={COLORS.white}
                        value={email}
                        style={{
                            ...FONTS.h3_light,
                            color: COLORS.white
                        }}
                        onChangeText={(email) => updateState({ email: email })}
                    />
                </View>

                <Text style={{ ...FONTS.h3_light, color: COLORS.primary }}>Password</Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: COLORS.primary,
                        borderRadius: SIZES.radius,
                        padding: SIZES.base * 2,
                        marginVertical: SIZES.base
                    }}
                >
                    <View
                        style={{
                            marginRight: SIZES.base
                        }}
                    >
                        <FontAwesome name="lock" size={30} color={COLORS.primary} />
                    </View>

                    <TextInput
                        placeholder="Your Password ..."
                        placeholderTextColor={COLORS.white}
                        value={password}
                        secureTextEntry={hide}
                        style={{
                            ...FONTS.h3_light,
                            color: COLORS.white,
                            flex: 1
                        }}

                        onChangeText={(password) => updateState({ password: password })}
                    />

                    <TouchableOpacity
                        onPress={() => updateState({ hide: !hide })}
                    >
                        {
                            hide ?
                                <Feather name="eye-off" size={30} color={COLORS.primary} />
                                :
                                <Feather name="eye" size={30} color={COLORS.primary} />
                        }

                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{
                        marginTop: SIZES.base * 2,
                        backgroundColor: COLORS.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: SIZES.base,
                        borderRadius: SIZES.radius

                    }}
                    onPress={() => handleLogin()}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.white }}>Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }

    return (
        <ImageBackground
            source={images.background}
            resizeMode="cover"
            style={{
                height: '100%',
                width: '100%'
            }}
        >
            <Pressable
                style={{
                    flex: 1,
                }}
                onPress={() => Keyboard.dismiss()}
            >
                {renderHeader()}
                {renderContent()}
            </Pressable>
        </ImageBackground>
    )
}

export default Login;