import { cn } from "@/lib/utils";
import { Eclipse } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";
import { Separator } from "./ui/separator";
import { Text } from "./ui/text";

type Props = {
  title: string;
  scrollY: SharedValue<number>;
};

export default function Header({ title, scrollY }: Props) {
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(scrollY.value > 0 ? 1 : 0, { duration: 300 }),
    };
  });

  return (
    <View>
      {/* Header */}
      <View
        className={cn(
          "flex items-center flex-row align-middle justify-between",
          "px-2 py-1",
        )}
      >
        {/* Placeholder */}
        <View className="size-9" />
        {/* Text */}
        <Animated.View style={headerAnimatedStyle}>
          <Text className={cn("text-foreground font-semibold")}>{title}</Text>
        </Animated.View>
        {/* Button */}
        <ThemeToggle className="self-end" />
      </View>

      {/* Separator */}

      <Animated.View style={headerAnimatedStyle}>
        <Separator />
      </Animated.View>
    </View>
  );
}

type ThemeToggleProps = {
  className?: string;
};

function ThemeToggle({ className }: ThemeToggleProps) {
  const { toggleColorScheme } = useColorScheme();

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
