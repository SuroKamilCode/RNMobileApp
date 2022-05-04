import * as React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Title } from 'react-native-paper';

interface Props {
    route: string | any,
    navigation: any
}

const SingleScreen = ({ route, navigation }: Props) => {

    const { name, photo } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Title style={styles.titleStyles}>{name}</Title>
            <View style={styles.viewstyle}>
                <Image
                    style={styles.memeStyle}
                    source={{
                        uri: `${photo}`
                    }} />
            </View>
            <Button style={styles.buttonStyle}
                color={'purple'}
                labelStyle={{ color: '#ecf0f1' }}
                mode={'contained'}
                loading={false}
                onPress={() => navigation.navigate('Panel')}>
                Cofnij
            </Button>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#ecf0f1',
    },
    memeStyle: {
        width: '100%',
        height: '80%',
        resizeMode: 'contain',
    },
    titleStyles: {
        color: 'purple',
        fontSize: 20,
        textAlign: 'center',
    },
    viewstyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStyle: {
        width: 200,
        alignSelf: 'center',
        marginVertical: 10
    }
})

export default SingleScreen;