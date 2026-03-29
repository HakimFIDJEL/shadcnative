import { cn } from "@/lib/utils";
import { useFocusEffect, useRouter } from "expo-router";
import { ChevronLeft, Eclipse } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { useCallback } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";
import { Separator } from "./ui/separator";
import { Text } from "./ui/text";

type Props = {
  title: string;
  show?: boolean;
  backButton?: boolean;
};

export default function ComponentHeader({ title }: Props) {
  //   const headerAnimatedStyle = useAnimatedStyle(() => {
  //     return {
  //       opacity: withTiming(show ? 1 : 0, { duration: 300 }),
  //     };
  //   });

  const titleOpacity = useSharedValue(0);
  const titleTranslation = useSharedValue(20);

  useFocusEffect(
    useCallback(() => {
      // Action à l'arrivée
      titleOpacity.value = withDelay(100, withTiming(1, { duration: 300 }));
      titleTranslation.value = withDelay(100, withTiming(0, { duration: 300 }));

      // Action à la sortie
      return () => {
        titleOpacity.value = withTiming(0, { duration: 300 });
        titleTranslation.value = withTiming(20, { duration: 300 });
      };
    }, []),
  );

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: titleOpacity.value,
      transform: [{ translateX: titleTranslation.value }],
    };
  });

  return (
    <Animated.View>
      {/* Header */}
      <View
        className={cn(
          "flex items-center flex-row align-middle justify-between relative",
          "px-2 py-1",
        )}
      >
        {/* Back button */}
        <View className="size-9" />
        <BackButton />
        {/* Text */}
        <Animated.View style={titleAnimatedStyle}>
          <Text className={cn("text-foreground font-semibold capitalize")}>
            {title}
          </Text>
        </Animated.View>
        {/* Button */}
        <ThemeToggle className="self-end" />
      </View>

      {/* Separator */}

      <View>
        <Separator />
      </View>
    </Animated.View>
  );
}

function BackButton() {
  const router = useRouter();
  return (
    <Button
      variant={"ghost"}
      onPress={() => router.back()}
      className="pl-0 absolute"
    >
      <Icon as={ChevronLeft} className="size-5" />
      <Text className="text-base">Back</Text>
    </Button>
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
