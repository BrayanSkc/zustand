import React from "react";
import { StyleSheet, Text } from "react-native";
import type { CFTextProps } from "./types";
import { colors } from "../../../modules/theme/Theme";

/// Componente text que representa una leyenda de texto en pantalla.
const CFText = (props: CFTextProps) => {
  const {
    text,
    type = "body_m",
    style = {},
    children,
    testID,
  } = props;

  const getStyleText = () => {
    switch (type) {
      case "title_1":
        return { ...styles.textTitle1 };
      case "title_2":
        return { ...styles.textTitle2 };
      case "title_3":
        return { ...styles.textTitle3 };
      case "title_modal":
        return { ...styles.textTitleModal };
      case "body_m":
        return { ...styles.textBodyM };
      case "body_b":
        return { ...styles.textBodyB };
      case "caption_r":
        return { ...styles.textCaptionR };
      case "caption_b":
        return { ...styles.textCaptionB };
      case "label":
        return { ...styles.textLabel };
    }
  };

  return (
    <Text
      {...props}
      testID={testID}
      style={[getStyleText(), style]}>
      {text || children}
    </Text>
  );
};

export default CFText;


const styles= StyleSheet.create({
textTitle1: {
  color: colors.textPrimary,
  fontWeight:  'bold',
  fontSize: 24,
  fontFamily: 'Inter-Bold',
},
textTitle2: {
  color: colors.textPrimary,
  fontSize: 20,
  fontWeight:'700',
  fontFamily: 'Inter-Bold',
},
textTitle3: {
  color: colors.textPrimary,
  fontWeight:  'bold',
  fontSize: 20,
  fontFamily: 'Inter-Bold',
},
textTitleModal: {
  color: colors.primary,
  fontWeight:'700',
  fontSize: 20,
  fontFamily: 'Inter-Bold',
},
textBodyM: {
  color: colors.textPrimary,
  fontSize: 16,
  fontWeight: '500',
  fontFamily: 'Inter-Regular',
},
textBodyB: {
  color: colors.textPrimary,
  fontSize: 16,
  fontWeight:  'bold',
  fontFamily: 'Inter-Bold',
},
textCaptionR: {
  color: colors.textPrimary,
  fontSize: 14,
  fontFamily: 'Inter-Regular',
  fontWeight: '400',
},
textCaptionB: {
  color: colors.textPrimary,
  fontSize: 14,
  fontWeight: '700',
  fontFamily: 'Inter-ExtraBold',
},
textLabel: {
  color: colors.textPrimary,
  fontSize: 12,
  fontWeight: "400",
  fontFamily: 'Inter-Light',
}
})