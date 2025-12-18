import React from "react";
import { View } from "react-native";

type GapProps = {
  size: number; // taille du gap en pixels
  horizontal?: boolean; // optionnel : true = gap horizontal, false = vertical (par défaut)
};

export default function Gap({ size, horizontal = false }: GapProps): React.JSX.Element {
  return (
    <View
      style={{
        width: horizontal ? size : 0,
        height: horizontal ? 0 : size,
      }}
    />
  );
}
