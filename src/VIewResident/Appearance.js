import React, { useEffect } from 'react';
import { Text, View,StyleSheet,Dimensions } from 'react-native';
const window = Dimensions.get('window');
const ratio = window.height / window.width;
const Appearancce = () => {
    useEffect(()=>{
        console.log(ratio)
    })
    return (
        <View style={styles.screenBodyWrapper}>
        <Text>hello wolrd</Text>
        </View>
    )
}

export default Appearancce
const styles = StyleSheet.create({
    screenBodyWrapper: {
        width: '93%',
        height:ratio>2? 88:'88%',
        // flex: 1,
        marginVertical: 10,
        paddingVertical:10,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 10,
      },
})