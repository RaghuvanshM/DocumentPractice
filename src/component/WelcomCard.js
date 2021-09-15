import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Images from '../Images'
const WelcomCard = () => {
    return (

        <View style={styles.shadowWrap}>
            <View style={styles.card}>

                <View
                    style={{

                        marginBottom: 5,
                        paddingVertical: 5,
                    }}>

                    <Text
                        style={[
                            styles.title,
                            {
                                color: 'rgb(102,157,204)',
                                paddingTop: 10
                            },
                        ]}>
                        {'Welcom TO Home'}
                    </Text>
                </View>
                <Text style={styles.description}>{"cardDescription"}</Text>
                <TouchableOpacity

                    style={[
                        styles.btn,

                    ]}>
                    <Text style={styles.btnText}>{"buttonText"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default WelcomCard;

const styles = StyleSheet.create({

    shadowWrap: {
       
      },
    card: {

        borderRadius: 8,
        margin: 10,
        marginHorizontal: 15,
        backgroundColor: '#fff',
        // paddingHorizontal: 20,
        overflow: 'hidden',
        paddingBottom: 20,
        shadowColor: 'red',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    
        elevation: 4,
        
    },
    title: {
        fontSize: 24,
        color: 'rgb(52,101,127)',
        textAlign: 'center',
    },
    btn: {
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 50,
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 20,
    },
})