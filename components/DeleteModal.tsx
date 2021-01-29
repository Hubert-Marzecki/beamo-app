import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, KeyboardAvoidingView } from 'react-native';
import InputCosmeticInfo from './InputCosmeticInfo';
import DatePicker from './DatePicker';
import NumericInput from 'react-native-numeric-input';
import ExpiresInCounter from './ExpiresInCounter';
import { Header } from 'react-native-elements';
import MoveBack from './MoveBack'
import {Prod} from '../Model';
import { KeyNames } from '../Model';
var uuid = require('react-native-uuid');

export default function DeleteModal(props: {visible: boolean}) {
    return (
<Modal
visible={props.visible}
>
<Text>
    AAAAALLLLLOOOO
</Text>

</Modal>
    )
}