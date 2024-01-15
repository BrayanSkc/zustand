import type {StyleProp, TextProps, TextStyle} from "react-native";
import type {ReactNode} from "react";

export type CFTypeText = 'title_1' | 'title_2' | 'title_3' | 'title_modal'| 'body_m' | 'body_b' | 'caption_r' | 'caption_b' | 'label';

/// Propiedades del componente texto
export interface CFTextProps extends TextProps {
    /// Texto.
    text?: string;
    /// Tipo de estilo del componente.
    type?: CFTypeText;
    /// Estilo adicional
    style?: StyleProp<TextStyle>;
    /// Test id
    testID?: string | undefined;
    /// Hijos
    children?: ReactNode | string,
}
