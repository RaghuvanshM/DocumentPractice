import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, View, ImageBackground } from 'react-native';
import Images from '../Images';
const StartWindow = () => {
    return (
        <View>
            <ImageBackground
                resizeMode='cover'
                source={Images.vgnature}
                style={styles.backgrondimage}
            >
                <View style={styles.imageview}>
                    <View>
                        <Image source={Images.viewlogo} />
                        <Text style={styles.smartwindowtext}>SMART WINDOWS</Text>

                    </View>
                </View>

            </ImageBackground>
            <TouchableOpacity
                style={{
                    height: '100%',
                    width: '100%',
                    alignItems: 'center',
                    position: 'absolute',
                }}
            >
                <Text style={styles.taptostarttext}>Tap to start</Text>

            </TouchableOpacity>

        </View>
    )
}
export default StartWindow;

const styles = StyleSheet.create({

    backgrondimage: {
        height: '100%',

    },
    imageview: {
        alignSelf: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    smartwindowtext: {
        fontSize: 18,
        letterSpacing: 2,
        alignSelf: 'center',
        color: 'white',
    },
    taptostarttext: {
        fontSize: 20,

        color: 'white',
        position: 'relative',
        top: '85%',
    },

})