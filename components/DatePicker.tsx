import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View, Image, Pressable, Modal, Button } from 'react-native';
import { Platform } from 'react-native';
import { KeyNames } from '../Model';

export  default  function DatePicker(props: {updateNewProduct: (key: KeyNames, val ?:object |  Date | undefined) => void}) {

    const [date, setDate] = useState(new Date());
    const [displayDate, setDisplayDate] = useState<string>("");
    const [mode, setMode] = useState<string>('date');
    const [show, setShow] = useState<boolean>(false);

    const onChange = (event :Event ,selectedDate ?: Date | undefined) => {
        const currentDate = selectedDate || date;
        // @ts-ignore
        const res = currentDate.toISOString().slice(0,10).replace(/-/g,"-");
        const arrRes = res.split("-");
        const disDate = arrRes[2]+ " / " +arrRes[1]+ " / " +arrRes[0]
        setShow(Platform.OS === 'ios');
        setDate(date);
        props.updateNewProduct(KeyNames.Opened, selectedDate)
        setDisplayDate(disDate)
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode("date");
    };

    // @ts-ignore
    return (
        <View
            style={{
            alignSelf: 'stretch',
                backgroundColor: '#EDC7C2',
                justifyContent: 'center',
                shadowColor: "#EDC7C2",
                height: 80,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.22,
                shadowRadius: 5.22,
                elevation: 3,
            borderRadius: 5,
            marginTop: 3,
            marginBottom: 3,
                marginLeft: 50,
                marginRight: 50,
        }}>
                <Pressable
                    onPress={showDatepicker}  >
                    <Text
                        style={{
                            color: '#3D7383',
                            paddingTop: 20,
                            paddingBottom: 20,
                            paddingLeft: 12,
                            fontSize: 15,
                            fontWeight: 'bold'
                        }}
                    > {displayDate === "" ? "PICK OPENING DATE" : `Open Date: ${displayDate}`} </Text>
                </Pressable>
            {show && (
                <DateTimePicker
                    style={{height: 100}}
                    testID="dateTimePicker"
                    value={date}
                    // @ts-ignore
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    // @ts-ignore
                    onChange={onChange}
                />
            )}
        </View>
    )
}
