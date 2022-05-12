import { signInWithEmailAndPassword } from 'firebase/auth';
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

const LoginScreen: React.FC<Props> = ({ navigation }: Props) => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [logErr, setLogErr] = React.useState<string | null>(null);
    const [isLogErr, setIsLogErr] = React.useState<boolean>(false);

    const dispatch = useDispatch();
    const users = useAppSelector(state => state.currentUser);
    const errors = useAppSelector(state => state.errorReducer);
    console.log(users.isLoggedIn);

    React.useEffect(() => {
        if (email.length > 0 || password.length > 0) {
            setIsLogErr(false)
            setLogErr(null)
        }
    }, [email || password])

    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user.uid
                dispatch(allActions.setUser(user, true))
                navigation.navigate('Panel')
                setEmail('')
                setPassword('')
            })
            .catch((err) => {
                dispatch(allActions.logInError(err.code));
                setIsLogErr(true)
                setLogErr(err.code)
            })
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
                        <Button style={styles.buttonStyle}
                            color={'#ecf0f1'}
                            labelStyle={{ color: 'purple' }}
                            mode={'contained'}
                            loading={users.isLoggedIn}
                            onPress={() => signIn()}>
                            {strings.login}
                        </Button>
                        <Button style={styles.registerButtonStyle}
                            color={'#ecf0f1'}
                            labelStyle={{ color: 'purple' }}
                            mode={'contained'}
                            loading={users.isLoggedIn}
                            onPress={() => navigation.navigate('Register')}>
                            {strings.register}
                        </Button>
                    </Card>
                    {isLogErr ? <Text style={styles.errorStyle}>{logErr}</Text> : null}
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
    registerButtonStyle: {
        width: 200,
        marginBottom: 15,
        alignSelf: 'center'
    },
    errorStyle: {
        color: 'red',
        alignSelf: 'center'
    }
});

export default LoginScreen;