import React from 'react';
import { Text, View, Animated } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle)


const DonatChart = ({
    percentage = 90,
    radius = 40,
    strokeWidth = 10,
    duration = 500,
    color = 'tomato',
    delay = 0,
    textcolor,
    max = 100,
}) => {
    const animateValue = React.useRef(new Animated.Value(0)).current
    const circleRef = React.useRef();
    const halfCircle = radius + strokeWidth
    const circleCircumference = 2 * Math.PI * radius

    const animation = (toValue) => {
        return Animated.timing(animateValue, {
            toValue,
            duration,
            delay,
            useNativeDriver: true
        }).start()

    }
    React.useEffect(() => {
        animation(percentage)

        animateValue.addListener(v => {
            if (circleRef?.current) {
                const maxpercentage = 100 * v.value / max;
                const strokeDashoffset = circleCircumference - (circleCircumference * maxpercentage) / 100
                circleRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        })
    })
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Svg width={radius * 2}
                height={radius * 2}
                viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            >
                <G
                    rotation='-90'
                    origin={`${halfCircle},${halfCircle}`}
                >
                    <Circle
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        strokeOpacity={0.3}
                    />
                    <AnimatedCircle
                        ref={circleRef}
                        cx='50%'
                        cy='50%'
                        stroke={color}
                        strokeWidth={strokeWidth}
                        r={radius}
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={circleCircumference}
                        strokeLinecap='round'
                    />
                </G>
            </Svg>
        </View>
    )
}
export default DonatChart