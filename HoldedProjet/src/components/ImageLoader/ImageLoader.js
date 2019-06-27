/**
 * Created by abisi on 2019-06-27
 */

import React, {PureComponent} from 'react';
import {Animated, View} from "react-native";

export default class ImageLoader extends PureComponent {
    state = {
        opacity: new Animated.Value(0),
    };

    onLoad = () => {
        Animated.loop(
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 2500,
                useNativeDriver: true,
            })).start();
    };

    OnLoadCircle = (circle) => {
        if (circle === "circle1") {
            Animated.loop(
                Animated.timing(this.state.opacity, {
                    toValue: 1,
                    duration: 1200,
                    delay:1,
                    useNativeDriver: true,
                })).start();
        } else {
            if (circle === "circle2") {
                Animated.loop(
                    Animated.timing(this.state.opacity, {
                        toValue: 1,
                        duration: 1200,
                        delay:300,
                        useNativeDriver: true,
                    })).start();

            } else {
                if (circle === "circle3") {
                    Animated.loop(
                        Animated.timing(this.state.opacity, {
                            toValue: 1,
                            duration: 1200,
                            delay:600,
                            useNativeDriver: true,
                        })).start();
                }

            }
        }
    };

    render() {
        return (
            <View>
                {this.props.circle ?

                    <Animated.Image
                        onLoad={this.OnLoadCircle(this.props.circle)}
                        {...this.props}
                        style={[
                            {
                                opacity: this.state.opacity,
                                transform: [
                                    {
                                        scale: this.state.opacity.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.5, 1],
                                        })
                                    },
                                ],
                            },
                            this.props.style,
                        ]}
                    />

                    : <Animated.Image
                        onLoad={this.onLoad}
                        {...this.props}
                        style={[
                            {
                                opacity: this.state.opacity,
                                transform: [
                                    {
                                        scale: this.state.opacity.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0.5, 1],
                                        })
                                    },
                                ],
                            },
                            this.props.style,
                        ]}
                    />
                }
            </View>
        );
    }
}