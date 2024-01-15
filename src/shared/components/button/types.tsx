import type { StyleProp, TextStyle, ViewStyle } from "react-native";

// Propiedades del botón
export type CFButtonProps = {
    /// Texto del botón
    title?: string;
    /// Tipo de estilo para el botón
    type?: 'solid' | 'outline' | 'transparent' |'transparentModal' | 'underlined'
    /// Acción al pulsar el botón
    onPress?: () => void;
    /// Estilo del contenedor
    contentStyle?: StyleProp<ViewStyle>;
    /// Estado deshabilidado del botón
    disabled?: boolean;
    /// Test id
    testID?: string | undefined;
    /// Estilo extra para el texto del botón.
    textStyle?: StyleProp<TextStyle>;
}

// Propiedades de la vista
export type CFTouchableFeedbackProps = {
    /// Estilo del contenedor
    contentStyle?: StyleProp<ViewStyle>;
    /// Acción al pulsar la vista
    onPress?: () => void;
    /// Test id
    testID?: string | undefined;
    /// Componentes hijos que irán dentro del contenedor
    children?: React.ReactNode
}

export type CFButtonRefProps = {
    /// Acción para deshabilitar el botón.
    disable: () => void;
    /// Acción para habilitar el botón.
    enable: () => void;
    /// Comprueba el estado del botón.
    isEnable: () => boolean;
};
