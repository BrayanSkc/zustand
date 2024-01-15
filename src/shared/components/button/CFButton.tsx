import React, {forwardRef,  useEffect, useImperativeHandle, useState} from "react";
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import CFTouchableFeedback from "./CFTouchableFeedback";
import type {CFButtonProps, CFButtonRefProps} from "./types";
import { colors } from "../../../modules/theme/Theme";

/// Componente que representa un botón.
const CFButton = forwardRef<CFButtonRefProps, CFButtonProps>(
  ({
     title = 'Button',
     type = 'solid',
     onPress = () => {
     },
     contentStyle = {
       width: Dimensions.get('window').width - 32
     },
     disabled = false,
     testID,
     textStyle = { },
   }, ref) => {

    const [enable, setEnable] = useState(!disabled);

    useEffect(() => {
      return () => {
        setEnable(!disabled)
      };
    }, [disabled]);

    useImperativeHandle(ref, () => ({
      isEnable: () => enable,
      enable: () => {
        setEnable(true)
      },
      disable: () => {
        setEnable(false)
      }
    }));

    return (
      <CFTouchableFeedback
        contentStyle={contentStyle}
        onPress={() => {
          if (enable) {
            onPress()
          }
        }}
        testID={testID}
      >
        <View
          style={styles.solidButton}
        >
          <Text
            style={styles.solidTextButton}>
            {title}
          </Text>
        </View>
      </CFTouchableFeedback>
    )
  });

export default CFButton;

const styles=StyleSheet.create({
  solidButton: {
    height: 56,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: colors.accent,
  },
  solidTextButton: {
    color: colors.primary,
    fontWeight:'700',
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'Inter-SemiBold',
  },
})

