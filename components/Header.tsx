import { cn } from "@/lib/utils";
import { Eclipse } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";
import { Text } from "./ui/text";

type Props = {
  title: string;
  scrollY: SharedValue<number>;
};

export default function Header({ title, scrollY }: Props) {
  // Style animé pour la bordure
  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      borderBottomWidth: scrollY.value > 0 ? 1 : 0,
      borderBottomColor: "var(--border)", // ou ta couleur de bordure
    };
  });

  // Style animé pour le texte (opacité)
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: scrollY.value > 0 ? 1 : 0,
    };
  });

  return (
    <Animated.View
      style={animatedHeaderStyle}
      className={cn(
        "flex items-center flex-row align-middle justify-between",
        "px-2 py-1",
      )}
    >
      {/* Placeholder */}
      <View className="size-9" />
      {/* Text */}
      <Animated.View style={animatedTextStyle}>
        <Text className={cn("text-foreground font-semibold")}>{title}</Text>
      </Animated.View>
      {/* Button */}
      <ThemeToggle className="self-end" />
    </Animated.View>
  );
}

type ThemeToggleProps = {
  className?: string;
};

function ThemeToggle({ className }: ThemeToggleProps) {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
      className={cn("size-9 rounded-full", className)}
    >
      <Icon as={Eclipse} className="size-5" />
    </Button>
  );
}
