import * as React from 'react';
import { SafeAreaView } from 'react-native';
import memesApi from '../api/memesApi';
import ResultsList from '../components/ResultsList';

interface Props {
    navigation: void | any
}

const PanelScreen: React.FC<Props> = ({ navigation }: Props) => {
    const [results, setResults] = React.useState([]);

    React.useEffect(() => {
        const api = async () => {
            const response = await memesApi.get('/');
            setResults(response.data.data.memes);
        }
        api();
    }, [])


    return (
        <SafeAreaView>
            <ResultsList navigation={navigation} results={results} />
        </SafeAreaView>
    )
}

export default PanelScreen