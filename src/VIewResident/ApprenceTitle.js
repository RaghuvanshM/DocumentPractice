import React from 'react';
import { Text, View, Image, StyleSheet,Dimensions, TouchableOpacity } from 'react-native';
import Images from '../Images'
const {height,width} = Dimensions.get('window')
const ratio = window.height / window.width;
const IMAGE_HEIGHT_WIDTH = ratio>2?width*0.45:width*0.35
const MARGIN_TOP = ratio >= 2 ? '0.5%' : '0.5%';
const MARGIN_BOTTOM = ratio >= 2 ? '0.5%' : '0.5%';
const AppearenceTitle = () => {
    return (
        <TouchableOpacity style={styles.tileWrapper} >
            <View style={{ marginBottom: MARGIN_BOTTOM }}>
                <Text style={styles.tileText}>{'Raghuvansh Mani'}</Text>
            </View>
         
        <Image
          source={Images.myphomarsupground}
          resizeMode='contain'
          style={{height:IMAGE_HEIGHT_WIDTH,width:IMAGE_HEIGHT_WIDTH}}
        
        />

        </TouchableOpacity>
    )
}
export default AppearenceTitle

const styles = StyleSheet.create({
    tileWrapper: {
        // flex: 1,
        justifyContent: 'center',
        marginVertical: '2%',
        alignItems: 'center',
        width: '50%',
      
    },
    tileText: {
        fontSize: 14,
        color: 'rgb(52,101,127)',

    },

})