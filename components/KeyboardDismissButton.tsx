import { KeyboardOff } from "lucide-react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

type Props = {
  inputFocus: boolean;
  onDismissKeyboard: () => void;
};

export function KeyboardDismissButton({
  inputFocus,
  onDismissKeyboard,
}: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="absolute bottom-0 left-0 right-0 pointer-events-none"
    >
      {inputFocus && (
        <Animated.View
          entering={FadeInDown.duration(300)}
          exiting={FadeOutDown.duration(100)}
          className="flex-row justify-end p-4 pointer-events-auto"
        >
          <Button
            variant="outline"
            onPress={onDismissKeyboard}
            className="rounded-full bg-background shadow-md border-border"
          >
            <Icon as={KeyboardOff} size={20} className="text-foreground" />
          </Button>
        </Animated.View>
      )}
    </KeyboardAvoidingView>
  );
}
