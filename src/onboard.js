import * as React from 'react';
import {
    StatusBar, Animated,
    Text, Image, View, StyleSheet,
    Dimensions,
    FlatList
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('screen');

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
    {
        "key": "3571572",
        "title": "Multi-lateral intermediate moratorium",
        "description": "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571572.png"
    },
    {
        "key": "3571747",
        "title": "Automated radical data-warehouse",
        "description": "Use the optical SAS system, then you can navigate the auxiliary alarm!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571747.png"
    },
    {
        "key": "3571680",
        "title": "Inverse attitude-oriented system engine",
        "description": "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571680.png"
    },
    {
        "key": "3571603",
        "title": "Monitored global data-warehouse",
        "description": "We need to program the open-source IB interface!",
        "image": "https://image.flaticon.com/icons/png/256/3571/3571603.png"
    }
]

const Indicator = ({ scrollX }) => {
    return (
        <View style={{ position: 'absolute', bottom: 100, flexDirection: 'row' }}>
            {DATA.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp'
                })
                const opecity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 1, 0.6],
                    extrapolate: 'clamp'
                })
                return (
                    <Animated.View
                        key={`indicator-${i}`}
                        style={{
                            height: 10,
                            width: 10,
                            borderRadius: 5,
                            backgroundColor: 'red',
                            margin: 10,
                            opecity,
                            transform: [
                                { scale }
                            ]
                        }}
                    />

                )

            })}
        </View>
    )

}
export default function OnBoard() {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <BackDrop scrollX={scrollX} />
            <Squar scrollX={scrollX} />
            <Animated.FlatList
                data={DATA}
                keyExtractor={item => item.key}
                horizontal
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={32}
                pagingEnabled
                contentContainerStyle={{ paddingBottom: 100 }}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width, alignItems: 'center' }}>
                            <View style={{ flex: 0.7, justifyContent: 'center' }}>
                                <Image source={{ uri: item.image }}
                                    style={{
                                        width: width / 2,
                                        height: height / 2,
                                        resizeMode: 'contain'
                                    }}
                                />

                            </View>
                            <View style={{ flex: 0.3 }}>
                                <Text style={{
                                    fontWeight: '900',
                                    color: 'white',
                                    fontSize: 32,
                                    marginBottom: 10
                                }}>{item.title}</Text>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontWeight: '300'
                                    }}
                                >{item.description}</Text>
                            </View>
                        </View>
                    )
                }}
            />
            <Indicator scrollX={scrollX} />
        </View>
    );
}

const BackDrop = ({ scrollX }) => {
    console.log(bgs.map((bg) => bg))

    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i * width),
        outputRange: bgs.map((bg) => bg)
    })
    return (
        <Animated.View
            style={[
                StyleSheet.absoluteFillObject,
                {
                    backgroundColor
                }]}
        />
    )
}
const Squar = ({ scrollX }) => {
    const YOLO = Animated.modulo(
        Animated.divide(
            Animated.modulo(scrollX, width),
            new Animated.Value(width)
        ), 1)
        console.log(YOLO)
    const rotate = YOLO.interpolate({
        inputRange:[0,.5,1],
        outputRange:['35deg','-35deg','35deg']
    })
    const translateX = YOLO.interpolate({
        inputRange:[0,.5,1],
        outputRange:[0,-height,0]
    })
    return (
        <Animated.View
            style={{
                height: height,
                width: height,
                backgroundColor: 'white',
                position: 'absolute',
                top: -height * 0.6,
                left: -height * 0.31,
                borderRadius: 86,
                transform: [
                    {
                        rotate
                    },
                    {
                        translateX
                    }
                ]
            }}
        />


    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});