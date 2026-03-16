import { ViewProps, ViewStyle } from "react-native";
import {
  useSharedValue
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = ViewProps;

export function RootView({ style, ...rest }: Props) {
  const progress = useSharedValue(0);


    return (
      <SafeAreaView
        style={[rootStyle, style]}
        {...rest}
      />
    );

}

const rootStyle = {
  flex: 1,
  // padding: 4,
} satisfies ViewStyle;
