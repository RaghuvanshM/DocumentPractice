import * as React from 'react';
import { Image, FlatList, Text, View, StatusBar, Dimensions, StyleSheet, Animated } from 'react-native';
const { width, height } = Dimensions.get('screen');

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height * .75;
const DOT_SIZE = 10
const DOT_SPACING = 10
const DOT_INDICATOR = DOT_SIZE + DOT_SPACING

const images = [
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369',
    'https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445',
];

const product = {
    title: 'SOFT MINI CROSSBODY BAG WITH KISS LOCK',
    description: [
        'Mini crossbody bag available in various colours. Featuring two compartments. Handles and detachable crossbody shoulder strap. Lined interior. Clasp with two metal pieces.',
        'Height x Length x Width: 14 x 21.5 x 4.5 cm. / 5.5 x 8.4 x 1.7"'
    ],
    price: '29.99£'
}

export default () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    return <View>
        <StatusBar hidden />
        <View style={{ height: ITEM_HEIGHT, overflow: 'hidden' }}>
            <Animated.FlatList
                data={images}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                snapToInterval={ITEM_HEIGHT}
                showsVerticalScrollIndicator={false}
                decelerationRate={'fast'}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Image
                                style={styles.image}
                                source={{ uri: item }}
                            />
                        </View>
                    )
                }}
            />
            <View style={styles.pagination}>
                {
                    images.map((_, index) => {
                        return <View
                            key={String(index)}
                            style={[styles.dot]}
                        />
                    })
                }
                <Animated.View style={[styles.dotIndicator,
                {
                    transform: [{
                        translateY: Animated.divide(scrollY, ITEM_HEIGHT).interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, DOT_INDICATOR]
                        })
                    }]
                }
                ]} />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    image: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        resizeMode: 'cover'
    },
    pagination: {

        position: 'absolute',
        top: ITEM_HEIGHT / 2,
        left: 20
    },
    dot: {
        height: DOT_SIZE,
        width: DOT_SIZE,
        backgroundColor: 'red',
        borderRadius: DOT_SIZE,
        marginBottom: DOT_SPACING

    },
    dotIndicator: {
        height: DOT_INDICATOR,
        width: DOT_INDICATOR,
        borderWidth: 1,
        borderRadius: DOT_INDICATOR,
        borderColor: 'green',
        position: 'absolute',
        top: -DOT_SIZE / 2,
        left: -DOT_SIZE / 2


    }
})