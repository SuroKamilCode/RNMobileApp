import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Card, TextInput, Title } from 'react-native-paper';

interface Props {
    navigation: void | any
}

const LoginScreen: React.FC<Props> = ({ navigation }: Props) => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Title style={styles.titleStyles}>Memes App</Title>
                <Card style={styles.baseBackgroundColor}>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={email => setEmail(email)}
                        style={styles.baseMargin}
                        theme={{
                            colors: {
                                placeholder: 'purple', primary: 'purple', background: 'white'
                            }
                        }}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                        autoCorrect={false}
                        secureTextEntry
                        style={styles.baseMargin}
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
                        loading={false}
                        onPress={() => {
                            navigation.navigate('Panel')
                            setEmail('');
                            setPassword('');
                        }}>
                        Zaloguj
                    </Button>
                </Card>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#ecf0f1',
        alignContent: 'center'
    },
    baseMargin: {
        marginTop: 15,
        marginBottom: 0,
        marginLeft: 15,
        marginRight: 15
    },
    baseBackgroundColor: {
        backgroundColor: 'purple',
        marginHorizontal: 30,
        marginBottom: 40
    },
    titleStyles: {
        color: 'purple',
        marginBottom: 15,
        alignSelf: 'center',
        fontSize: 30,
        marginTop: 35
    },
    buttonStyle: {
        width: 200,
        margin: 15,
        alignSelf: 'center'
    }
});

export default LoginScreen