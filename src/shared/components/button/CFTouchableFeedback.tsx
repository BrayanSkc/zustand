import React from "react";
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";
import type { CFTouchableFeedbackProps } from "./types";

/// Componente que representa una vista contenedora con el eefecto ripple al presionarla.
const CFTouchableFeedback = ({ contentStyle, onPress, testID, children }: CFTouchableFeedbackProps) => {
    const android = () => (
        <TouchableNativeFeedback
            testID={testID}
            background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.1)', false)}
            onPress={onPress}
        >
            <View>{children}</View>
        </TouchableNativeFeedback>
    )

    const ios = () => (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
    return (
        <View style={contentStyle} >
            {Platform.OS == 'android' ? android() : ios()}
        </View>);
};

export default CFTouchableFeedback;
