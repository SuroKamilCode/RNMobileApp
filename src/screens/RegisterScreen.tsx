import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Card, TextInput, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebase-config';
import { strings } from '../localization/localization';
import allActions from '../redux/actions/index';
import { useAppSelector } from '../redux/hooks';

interface Props {
    navigation: void | any
}

const RegisterScreen: React.FC<Props> = ({ navigation }: Props) => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = React.useState<string>('');
    const [regErr, setRegErr] = React.useState<string | null>(null);
    const [isRegErr, setIsRegErr] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);

    const dispatch = useDispatch();
    const errors = useAppSelector(state => state.errorReducer);

    React.useEffect(() => {
        if (email.length > 0 || password.length > 0) {
            setIsRegErr(false)
            setRegErr(null)
        }
    }, [email || password])


    const createAcc = () => {
        if (password === passwordRepeat) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user.uid
                    navigation.navigate('Login')
                    setEmail('')
                    setPassword('')
                    setPasswordRepeat('')
                    setLoading(true)
                })
                .catch((err) => {
                    dispatch(allActions.logInError(err.code));
                    setIsRegErr(true)
                    setRegErr(err.code)
                })
        } else if (password !== passwordRepeat) {
            setIsRegErr(true)
            setRegErr(strings.failedRegisterMessage)
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ScrollView>
                    <Title style={styles.titleStyles}>Memes App</Title>
                    <Card style={styles.cardStyle}>
                        <TextInput
                            label="Email"
                            value={email}
                            onChangeText={email => setEmail(email)}
                            style={styles.inputStyle}
                            theme={{
                                colors: {
                                    placeholder: 'purple', primary: 'purple', background: 'white'
                                }
                            }}
                        />
                        <TextInput
                            label={strings.pass}
                            value={password}
                            onChangeText={password => setPassword(password)}
                            autoCorrect={false}
                            secureTextEntry
                            style={styles.inputStyle}
                            theme={{
                                colors: {
                                    placeholder: 'purple', primary: 'purple', background: 'white'
                                }
                            }}
                        />
                        <TextInput
                            label={strings.passRepeat}
                            value={passwordRepeat}
                            onChangeText={passwordRepeat => setPasswordRepeat(passwordRepeat)}
                            autoCorrect={false}
                            secureTextEntry
                            style={styles.inputStyle}
                            theme={{
                                colors: {
                                    placeholder: 'purple', primary: 'purple', background: 'white'
                                }
                            }}
                        />
                        <Button style={styles.buttonStyle}
                            color={'#ecf0f1'}
                            labelStyle={{ color: 'purple' }}
                            mode={'contained'}
                            loading={loading}
                            onPress={() => createAcc()}>
                            {strings.register}
                        </Button>
                    </Card>
                    {isRegErr ? <Text style={styles.errorStyle}>{regErr}</Text> : null}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        alignContent: 'center'
    },
    inputStyle: {
        marginTop: 15,
        marginBottom: 0,
        marginLeft: 15,
        marginRight: 15,
        width: '65%',
        alignSelf: 'center'
    },
    cardStyle: {
        backgroundColor: 'purple',
        marginBottom: 20,
        width: '85%',
        alignSelf: 'center'
    },
    titleStyles: {
        color: 'purple',
        marginBottom: 25,
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 15
    },
    buttonStyle: {
        width: 200,
        margin: 15,
        alignSelf: 'center'
    },
    errorStyle: {
        color: 'red',
        alignSelf: 'center'
    }
});

export default RegisterScreen;