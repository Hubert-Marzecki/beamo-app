import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { StyleSheet, Text, View, Image, Pressable, Modal, Button } from 'react-native';

export  default  function DatePicker({updateNewProduct}) {

    const [date, setDate] = useState(new Date());
    const [displayDate, setDisplayDate] = useState("");
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        const res = currentDate.toISOString().slice(0,10).replace(/-/g,"-");
        const arrRes = res.split("-");
        const disDate = arrRes[2]+ " / " +arrRes[1]+ " / " +arrRes[0]
        setShow(Platform.OS === 'ios');

        setDate(date);
        updateNewProduct("opened", selectedDate)
        setDisplayDate(disDate)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View
            style={{
            alignSelf: 'stretch',
                backgroundColor: '#e7eef5',
                justifyContent: 'center',
                shadowColor: "#182835",
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
                    onPress={showDatepicker} title="Show date picker!" >
                    <Text
                        style={{
                            color: '#4785c3',
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
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}