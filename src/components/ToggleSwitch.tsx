import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import DuoToggleSwitch from 'react-native-duo-toggle-switch';
import { useDispatch } from 'react-redux';
import { strings } from '../localization/localization';
import allActions from '../redux/actions/index';
import { useAppSelector } from '../redux/hooks';

interface Props {
    setLang: string,
    setLogErr: null | string,
    setIsLogErr: boolean
}

const ToggleSwitch = ({ setLang, setLogErr, setIsLogErr }: Props) => {

    const dispatch = useDispatch();
    const language = useAppSelector(state => state.langReducer);

    return (
        <View style={styles.container}>
            <DuoToggleSwitch
                primaryText="PL"
                secondaryText="EN"
                onPrimaryPress={() => {
                    strings.setLanguage('pl');
                    dispatch(allActions.setLang('pl'))
                    setLang('pl')
                    setLogErr(null)
                    setIsLogErr(false)
                }}
                onSecondaryPress={() => {
                    strings.setLanguage('en');
                    dispatch(allActions.setLang('en'))
                    setLang('en')
                    setLogErr(null)
                    setIsLogErr(false)
                }}
                activeColor={'purple'}
                inactiveTextColor={'purple'}
                style={{ width: 'auto' }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
    }
})

export default ToggleSwitch;
