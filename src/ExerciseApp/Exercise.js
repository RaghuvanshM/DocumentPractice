import React from 'react';
import { Text, View, FlatList, TextInput, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../component/Color';
import Images from '../Images'

let exercises = [
    {
        title: 'Diet Recommendation',
        image: Images.Exercise1,
        subTitle:
            'Live happier and healthier by learning the fundamentals of diet recommendation',
        duration: '5-20 MIN Course',
    },
    {
        title: 'Kegel Exercises',
        image: Images.Exercise2,

        subTitle:
            'Live happier and healthier by learning the fundamentals of kegel exercises',
        duration: '10-20 MIN Course',
    },
    {
        title: 'Meditation',
        image: Images.Exercise3,

        subTitle:
            'Live happier and healthier by learning the fundamentals of meditation and mindfulness',
        duration: '3-10 MIN Course',
    },
    {
        title: 'Yoga',
        image: Images.Exercise4,
        subTitle: 'Live happier and healthier by learning the fundamentals of Yoga',
        duration: '5-10 MIN Course',
    },
    {
        title: 'Diet Recommendation',
        image: Images.Exercise1,
        subTitle:
            'Live happier and healthier by learning the fundamentals of diet recommendation',
        duration: '5-20 MIN Course',
    },
    {
        title: 'Kegel Exercises',
        image: Images.Exercise2,

        subTitle:
            'Live happier and healthier by learning the fundamentals of kegel exercises',
        duration: '10-20 MIN Course',
    },
    {
        title: 'Meditation',
        image: Images.Exercise3,

        subTitle:
            'Live happier and healthier by learning the fundamentals of meditation and mindfulness',
        duration: '3-10 MIN Course',
    },
    {
        title: 'Yoga',
        image: Images.Exercise4,
        subTitle: 'Live happier and healthier by learning the fundamentals of Yoga',
        duration: '5-10 MIN Course',
    },
];
const Exercise = () => {

    const ExerciseItem = ({ exercise }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    backgroundColor: COLORS.white,
                    width: 0.5 * SIZES.width - 35,
                    margin: 10,
                    height: 180,
                    borderRadius: 10,
                    padding: 15,
                    shadowColor: '#9e9898',
                    elevation: 5,
                }}
            >
                <Image
                    source={exercise.image}
                    style={{
                        width: '100%',
                        resizeMode: 'cover',
                        flex: 1,
                    }}
                />
                <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 20 }}>
                    {exercise.title}
                </Text>
            </TouchableOpacity>
        )

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                backgroundColor={COLORS.accent + '30'}
                barStyle="dark-content"
                animated={true}
            />
            <View
                style={{
                    width: '100%',
                    
                    padding: 30,
                    backgroundColor: COLORS.accent + '20',

                }}>
                <Image
                    source={Images.Bgorange}
                    style={{
                        position: 'absolute', top: 60,
                        left: -50,
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}>
                    <View
                        style={{
                            width: 60,
                            height: 60,
                            backgroundColor: COLORS.accent + '45',
                            marginRight: 0,
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <View
                            style={{
                                height: 3,
                                backgroundColor: COLORS.white,
                                width: '40%',
                                marginBottom: 8,
                                marginLeft: -5,
                            }}></View>
                        <View
                            style={{
                                height: 3,
                                backgroundColor: COLORS.white,
                                width: '40%',
                                marginLeft: 5,
                            }}></View>
                    </View>
                </View>
                <Text style={{ fontSize: 30, lineHeight: 45 }}>
                    Good Morning Raghuvansh Mani Mishra
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white,
                        marginVertical: 40,
                    }}>
                    <TextInput placeholder="Search" style={{ flex: 1, marginLeft: 20 }} />
                </View>
                <View
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.accent + '55',
                        position: 'absolute',
                        right: -30,
                        bottom: 50,
                    }}></View>
            </View>
            <FlatList
                data={exercises}
                style={{
                    paddingHorizontal: 20,
                    marginTop: -60,
                }}
                contentContainerStyle={{
                    flexGrow: 1,
                    alignItems: 'center',
                }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={(_, i) => String(i)}
                renderItem={({ item }) => <ExerciseItem exercise={item} />}
            />
        </SafeAreaView>
    )
}
export default Exercise;