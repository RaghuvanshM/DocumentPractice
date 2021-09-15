import React from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

import Images from '../Images'
const RoomCard = () => {
    return (
        <View style={styles.shadowWrap}>
            <View style={styles.card}>
                <TouchableOpacity>
                    <ImageBackground
                        source={Images.cardimage1}
                        style={{
                            width: '100%',
                            height: 170
                        }}
                    ></ImageBackground>
                </TouchableOpacity>
                <View style={{ backgroundColor: '#fff' }}>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            backgroundColor: '#fff',
                            paddingVertical: 15,
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                color: 'gray',
                                fontSize: 16,

                            }}>
                            Schedules
                        </Text>
                        <TouchableOpacity
              style={{
                backgroundColor: 'rgba(176,219,255, 0.5)',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderRadius: 100,
              }}>
              <Text
                style={{
                  color: 'rgb(52,101,127)',
                  fontSize: 14,
                 
                }}>
                + Add Schedule
              </Text>
            </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )

}
export default RoomCard;
const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        overflow: 'hidden',
        margin: 10,
        shadowColor: 'red',



        elevation: 5,
    },
    shadowWrap: {

    },
})
