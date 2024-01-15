import type { StyleProp, ViewStyle } from "react-native";

// Propiedades de cardview
export type CFCardViewProps = {
    /// Componentes hijos que irán dentro de la tarjeta.
    children?: JSX.Element | JSX.Element[],
    /// Estilos de la tarjeta.
    style?: StyleProp<ViewStyle>,
}