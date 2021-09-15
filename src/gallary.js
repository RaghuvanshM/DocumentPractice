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

} from 'react-native';
const { width, height } = Dimensions.get('screen');
import { apikey } from './apikey';
const API_URL = "https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20"
const IMAGE_SIZE = 80;
const SPACING = 10
const fetchImagesFromPexels = async () => {
    const data = await fetch(API_URL, {
        headers: {
            'Authorization': apikey
        }
    })
    const { photos } = await data.json();
    return photos
}

export default () => {
    const [images, setImages] = React.useState(null);
    const [activeIndex, setIndex] = React.useState()

    const topRef = React.useRef();
    const thumbRef = React.useRef();

    React.useEffect(() => {
        const fetchImages = async () => {
            const images = await fetchImagesFromPexels();
            setImages(images)

        }
        fetchImages()
    }, [])
    if (!images) {
        return (
            <Text>Loading please Wait</Text>
        )
    }
    const setActiveIndex = (index) => {
        setIndex(index)
        topRef?.current?.scrollToOffset({
            offset:index*width,
            animated:true
        })
        if(index*(IMAGE_SIZE+SPACING)-IMAGE_SIZE/2>width/2){
            thumbRef?.current?.scrollToOffset({
                offset:index*(IMAGE_SIZE+SPACING)-width/2+IMAGE_SIZE/2,
                animated:true
            })
        }

    }
    return (
        <View style={{ flex: 1, }}>
            <StatusBar hidden={true} />
            <FlatList
                data={images}
                ref={topRef}
                onMomentumScrollEnd={ev => {
                    setActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))
                }}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width, height }}>
                            <Image
                                source={{ uri: item.src.portrait }}
                                style={StyleSheet.absoluteFillObject}
                            />
                        </View>
                    )
                }}
            />
            <FlatList
                data={images}
                ref={thumbRef}
                horizontal
                contentContainerStyle={{ paddingHorizontal: SPACING }}
                style={{ position: 'absolute', bottom: IMAGE_SIZE - 40 }}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => String(index)}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { setActiveIndex(index) }}
                        >

                            <Image
                                source={{ uri: item.src.portrait }}
                                style={{
                                    width: IMAGE_SIZE,
                                    height: IMAGE_SIZE,
                                    borderRadius: 12,
                                    marginRight: SPACING,
                                    borderWidth: 2,
                                    borderColor: activeIndex === index ? '#fff' : 'transparent'
                                }}
                            />
                        </TouchableOpacity>

                    )
                }}
            />
        </View>
    )
}