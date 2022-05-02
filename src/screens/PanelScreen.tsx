import { signOut } from 'firebase/auth';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Divider } from 'react-native-paper';
import memesApi from '../api/memesApi';
import ResultsList from '../components/ResultsList';
import { auth } from '../firebase/firebase-config';

interface Props {
    navigation: void | any
}

const PanelScreen: React.FC<Props> = ({ navigation }: Props) => {
    const [results, setResults] = React.useState([]);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            console.log(auth)
            navigation.navigate('Login');
        }).catch((error) => {
            console.log(error);
        });

    }

    React.useEffect(() => {
        const api = async () => {
            const response = await memesApi.get('/');
            setResults(response.data.data.memes);
        }
        api();
    }, [])


    return (
        <SafeAreaView>
            <Button style={styles.buttonStyle}
                color={'purple'}
                labelStyle={{ color: '#ecf0f1' }}
                mode={'contained'}
                loading={false}
                onPress={() => handleSignOut()}>
                Wyloguj
            </Button>
            <Divider />
            <ResultsList navigation={navigation} results={results} />
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 200,
        alignSelf: 'center',
        marginVertical: 10
    }
})

export default PanelScreen