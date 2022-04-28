import * as React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import SingleResult from './SingleResult';

interface Props {
    results: any,
    navigation: void | any
}


const ResultsList: React.FC<Props> = ({ results, navigation }: Props) => {
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Single', { photo: item.url, name: item.name, })}
                            style={styles.baseTitleStyle}>
                            <SingleResult singleResult={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        MarginTop: 20
    },
    baseTitleStyle: {
        padding: 10,
        flexDirection: 'row',
    }
});

export default ResultsList;