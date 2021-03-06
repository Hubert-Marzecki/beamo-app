import { Icon } from 'react-native-elements'
import React from 'react';

export default function MoveBack(props: {closeModal : () => void}) {
    return (
        <Icon
            reverse
            name='home'
            type='ionicon'
            color='#EDC7C2'
            onPress={() => props.closeModal()}
        />
        )
}