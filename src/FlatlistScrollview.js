import * as React from 'react';
import {
    StatusBar,
    FlatList,
    Image,
    Animated,
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Easing,
    SafeAreaViewBase,
    SafeAreaView,
} from 'react-native';
const { width, height } = Dimensions.get('screen');
import faker from 'faker';

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.random.uuid(),
        image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
            'women',
            'men',
        ])}/${faker.random.number(60)}.jpg`,
        name: faker.name.findName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    };
});
console.log(DATA);
const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3
export default () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1, backgroundColor: '#808080' }}>
            <StatusBar hidden />

            <Image
                blurRadius={10}
                style={StyleSheet.absoluteFillObject}
                source={require('../src/rose.jpg')}
            />

            <Animated.FlatList
                data={DATA}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                contentContainerStyle={{
                    padding: SPACING,
                    marginTop: StatusBar.currentHeight || 42
                }}
                keyExtractor={item => item.key}
                renderItem={({ item, index }) => {
                    const inputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 2)
                    ]
                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    })
                    return (
                        <Animated.View style={{
                            flexDirection: 'row', padding: SPACING,
                            marginBottom: SPACING,
                            backgroundColor: 'rgba(255,255,255,0.8)',
                            borderRadius: 10,
                            transform: [{ scale }]


                        }}

                        >
                            <Image
                                source={{ uri: item.image }}
                                style={{
                                    height: AVATAR_SIZE,
                                    width: AVATAR_SIZE,
                                    borderRadius: AVATAR_SIZE,
                                    marginRight: SPACING / 2,
                                }}
                            />
                            <View>
                                <Text
                                    style={{
                                        fontSize: 22,
                                        fontWeight: '800',
                                    }}>
                                    {item.name}
                                </Text>
                                <Text style={{ fontSize: 18, opacity: 0.5 }}>
                                    {item.jobTitle}
                                </Text>
                                <Text style={{ fontSize: 14, opacity: 0.8, color: '#0099cc' }}>
                                    {item.email}
                                </Text>
                            </View>
                        </Animated.View>
                    );
                }}
            />
        </View>
    );
};
