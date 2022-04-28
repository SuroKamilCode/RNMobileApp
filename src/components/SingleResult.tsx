import * as React from 'react';
import { Title } from 'react-native-paper';

interface Props {
    singleResult: string | any
}
const SingleResult = ({ singleResult }: Props) => {
    return (
        <Title theme={{
            colors: {
                text: 'purple'
            }
        }}>{singleResult.name}</Title>
    )
};

export default SingleResult;
