import React, { useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Image, Animated, StatusBar, ScrollView, Dimensions } from 'react-native';
import RoomCard from '../component/RoomCard';
import WelcomCard from '../component/WelcomCard';
import Images from '../Images'
const HEADER_MAX_HEIGHT = Dimensions.get('window').height / 2.5;
const HEADER_MIN_HEIGHT = Dimensions.get('window').height / 4.5;
const { height, width } = Dimensions.get('window')
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Home = () => {

    const scrollAnim = useRef(new Animated.Value(0));

    const headerTranslateY = () =>
        scrollAnim.current.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });

    return (
        <View style={{ flex: 1, backgroundColor: '#787878' }}>
            <StatusBar
                barStyle={'light-content'}
                translucent
                backgroundColor="transparent"
            />
            <Animated.ScrollView
                contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollAnim.current } } }],
                    { useNativeDriver: true },
                )}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: 'rgb(102,157,204)',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        justifyContent: 'space-between',
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ width: 20, height: 20, marginRight: 10 }}
                            source={Images.sunset}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 14,
                                }}>
                                Sunset at{' '}
                            </Text>
                            <Text
                                style={{
                                    color: '#fff',
                                    fontSize: 14,
                                }}>
                                7:21pm
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text
                            style={{
                                color: '#fff',

                                fontSize: 14,
                            }}>
                            Outside Air Quality{' '}
                        </Text>
                        <View
                            style={{
                                width: 15,
                                height: 15,
                                marginLeft: 5,
                                backgroundColor: 'rgb(126,211,33)',
                                borderWidth: 1,
                                borderColor: '#fff',
                                borderRadius: 100,
                            }}
                        />
                    </View>
                </View>
                <WelcomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
                <RoomCard />
            </Animated.ScrollView>
            <Animated.View
                style={[
                    styles.header,
                    { transform: [{ translateY: headerTranslateY() }] },

                ]}>
                <Animated.Image
                    style={[styles.headerBackground]}
                    source={Images.vgnature}
                />
            </Animated.View>

        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,

        // backgroundColor: '#62d1bc',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    headerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: HEADER_MAX_HEIGHT,
        width: '100%',
        resizeMode: 'cover',
    },
})